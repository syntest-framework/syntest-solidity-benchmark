/**
 *Submitted for verification at Etherscan.io on 2022-01-20
*/

pragma solidity ^0.5.12;

import "./Reseller_utils.sol";

contract Reseller is Ownable {

    IUSDT public USDT;
    IERC20 public FOSTER;

    uint8[] public referralPercents = [0, 0, 0, 0, 0];
    uint8 public feePercent = 0;
    uint8 public PERCENTS_DIVIDER = 100;

    uint128 public rate;
    uint32 public period;
    uint64 public minimum;

    address public boss1 = 0xf49907E9e5e2818925De6a0FE48042724fCf3Fe9;
    address public boss2 = 0xf49907E9e5e2818925De6a0FE48042724fCf3Fe9;
    address public boss3 = 0xF313637cecc5f4A172CaA8d8246239C0C9740a10;
    address public boss4 = 0xF313637cecc5f4A172CaA8d8246239C0C9740a10;

    bool public active;

    mapping (address => uint64) public interestBalance;

    event OnBuy(address indexed account, uint256 usdt, uint256 FOSTER, uint256 rate);
    event OnPurchase(address indexed account, uint256 usdt, string comment);
    event OnFreezeAndTransfer(address indexed recipient, uint256 amount, uint256 period);
    event OnRefBonus(address indexed account, address indexed referrer, uint256 level, uint256 bonus);
    event OnWithdraw(address indexed account, uint256 value);
    event OnSetRate(address indexed account, uint256 oldValue, uint256 newValue);
    event OnSetFee(address indexed account, uint256 oldValue, uint256 newValue);
    event OnSetPeriod(address indexed account, uint256 oldValue, uint256 newValue);
    event OnSetMinimum(address indexed account, uint256 oldValue, uint256 newValue);
    event OnRefBonusSet(uint8 level1, uint8 level2, uint8 level3, uint8 level4, uint8 level5);
    event OnWithdrawERC20(address indexed account, address indexed erc20, uint256 value);
    event OnSwitchState(address indexed account, bool indexed active);
    event OnBoss1Deposed(address indexed account, address oldBoss1, address newBoss1);
    event OnBoss2Deposed(address indexed account, address oldBoss2, address newBoss2);
    event OnBoss3Deposed(address indexed account, address oldBoss3, address newBoss3);
    event OnBoss4Deposed(address indexed account, address oldBoss4, address newBoss4);

    modifier onlyActive {
        require(active, "Not active");
        _;
    }

    constructor(address USDTAddr, address FOSTERAddr, uint128 initialRate, uint32 initialPeriod, address initialOwner) public Ownable(initialOwner) {
        require(USDTAddr != address(0) && FOSTERAddr != address(0));
        require(initialRate > 0);

        USDT = IUSDT(USDTAddr);
        FOSTER = IERC20(FOSTERAddr);

        rate = initialRate;
        period = initialPeriod;

        active = true;
    }

    function buy(uint256 value, address _ref1, address _ref2, address _ref3, address _ref4, address _ref5) public onlyActive {
        require(value >= minimum, "Less than minimum");
        USDT.transferFrom(msg.sender, address(this), value);

        uint256 total;
        if (_ref1 != address(0) && _ref1 != msg.sender) {
            uint256 bonus = value * referralPercents[0] / PERCENTS_DIVIDER;
            interestBalance[_ref1] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref1, 0, bonus);
        }

        if (_ref2 != address(0) && _ref2 != msg.sender) {
            uint256 bonus = value * referralPercents[1] / PERCENTS_DIVIDER;
            interestBalance[_ref2] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref2, 1, bonus);
        }

        if (_ref3 != address(0) && _ref3 != msg.sender) {
            uint256 bonus = value * referralPercents[2] / PERCENTS_DIVIDER;
            interestBalance[_ref3] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref3, 2, bonus);
        }

        if (_ref4 != address(0) && _ref4 != msg.sender) {
            uint256 bonus = value * referralPercents[3] / PERCENTS_DIVIDER;
            interestBalance[_ref4] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref4, 3, bonus);
        }

        if (_ref5 != address(0) && _ref5 != msg.sender) {
            uint256 bonus = value * referralPercents[4] / PERCENTS_DIVIDER;
            interestBalance[_ref5] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref5, 4, bonus);
        }

        uint256 fee = value * feePercent / PERCENTS_DIVIDER;
        interestBalance[boss2] += uint64(fee);
        interestBalance[boss1] += uint64(value - fee - total);

        uint256 amount = getEstimation(value);

        FOSTER.freezeAndTransfer(msg.sender, amount, period);

        emit OnBuy(msg.sender, value, amount, rate);
    }

    function purchase(uint256 value, address _ref1, address _ref2, address _ref3, address _ref4, address _ref5, string memory comment) public onlyActive {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2 || msg.sender == boss3 || msg.sender == boss4, "No access");
        USDT.transferFrom(msg.sender, address(this), value);

        uint256 total;
        if (_ref1 != address(0) && _ref1 != msg.sender) {
            uint256 bonus = value * referralPercents[0] / PERCENTS_DIVIDER;
            interestBalance[_ref1] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref1, 0, bonus);
        }

        if (_ref2 != address(0) && _ref2 != msg.sender) {
            uint256 bonus = value * referralPercents[1] / PERCENTS_DIVIDER;
            interestBalance[_ref2] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref2, 1, bonus);
        }

        if (_ref3 != address(0) && _ref3 != msg.sender) {
            uint256 bonus = value * referralPercents[2] / PERCENTS_DIVIDER;
            interestBalance[_ref3] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref3, 2, bonus);
        }

        if (_ref4 != address(0) && _ref4 != msg.sender) {
            uint256 bonus = value * referralPercents[3] / PERCENTS_DIVIDER;
            interestBalance[_ref4] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref4, 3, bonus);
        }

        if (_ref5 != address(0) && _ref5 != msg.sender) {
            uint256 bonus = value * referralPercents[4] / PERCENTS_DIVIDER;
            interestBalance[_ref5] += uint64(bonus);
            total += bonus;
            emit OnRefBonus(msg.sender, _ref5, 4, bonus);
        }

        uint256 fee = value * feePercent / PERCENTS_DIVIDER;
        interestBalance[boss2] += uint64(fee);
        interestBalance[boss1] += uint64(value - fee - total);

        emit OnPurchase(msg.sender, value, comment);
    }

    function freezeAndTransfer(address recipient, uint256 amount, uint256 _period) public onlyActive {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2 || msg.sender == boss3 || msg.sender == boss4, "No access");

        FOSTER.freezeAndTransfer(recipient, amount, _period);

        emit OnFreezeAndTransfer(recipient, amount, _period);
    }

    function withdraw(uint256 value) public {
        require(value <= interestBalance[msg.sender], "Not enough balance");

        interestBalance[msg.sender] -= uint64(value);
        USDT.transfer(msg.sender, value);

        emit OnWithdraw(msg.sender, value);
    }

    function setRate(uint128 newRate) public {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2 || msg.sender == boss3, "No access");
        require(newRate > 0, "Invalid rate");

        emit OnSetRate(msg.sender, rate, newRate);

        rate = newRate;
    }

    function setMinimum(uint64 newMinimum) public {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2 || msg.sender == boss3, "No access");
        require(newMinimum > 0, "Invalid rate");

        emit OnSetMinimum(msg.sender, minimum, newMinimum);

        minimum = newMinimum;
    }

    function setPeriod(uint32 newPeriod) public {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2 || msg.sender == boss3, "No access");
        require(newPeriod > 0, "Invalid rate");

        emit OnSetPeriod(msg.sender, period, newPeriod);

        period = newPeriod;
    }

    function setRefBonus(uint8 level1, uint8 level2, uint8 level3, uint8 level4, uint8 level5) public {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2 || msg.sender == boss3, "No access");

        referralPercents[0] = level1;
        referralPercents[1] = level2;
        referralPercents[2] = level3;
        referralPercents[3] = level4;
        referralPercents[4] = level5;

        emit OnRefBonusSet(level1, level2, level3, level4, level5);
    }

    function setFee(uint8 newFee) public {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2 || msg.sender == boss3, "No access");

        emit OnSetFee(msg.sender, feePercent, newFee);

        feePercent = newFee;
    }

    function withdrawERC20(address ERC20Token, address recipient, uint256 value) external {
        require(msg.sender == boss1 || msg.sender == boss2, "No access");

        if (ERC20Token == address(USDT)) {
            USDT.transfer(recipient, value);
        } else {
            IERC20(ERC20Token).transfer(recipient, value);
        }

        emit OnWithdrawERC20(msg.sender, ERC20Token, value);
    }

    function switchState() public {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2 || msg.sender == boss3, "No access");
        active = !active;

        emit OnSwitchState(msg.sender, active);
    }

    function deposeBoss1(address newBoss1) public {
        require(msg.sender == boss1 || msg.sender == boss2, "No access");
        require(newBoss1 != address(0), "Zero address");

        emit OnBoss1Deposed(msg.sender, boss1, newBoss1);

        boss1 = newBoss1;
    }

    function deposeBoss2(address newBoss2) public {
        require(msg.sender == boss1 || msg.sender == boss2, "No access");
        require(newBoss2 != address(0), "Zero address");

        emit OnBoss2Deposed(msg.sender, boss2, newBoss2);

        boss2 = newBoss2;
    }

    function deposeBoss3(address newBoss3) public {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2, "No access");
        require(newBoss3 != address(0), "Zero address");

        emit OnBoss3Deposed(msg.sender, boss3, newBoss3);

        boss3 = newBoss3;
    }

    function deposeBoss4(address newBoss4) public {
        require(msg.sender == owner() || msg.sender == boss1 || msg.sender == boss2, "No access");
        require(newBoss4 != address(0), "Zero address");

        emit OnBoss4Deposed(msg.sender, boss4, newBoss4);

        boss4 = newBoss4;
    }

    function getEstimation(uint256 amount) public view returns(uint256) {
        uint256 result = amount * rate;
        require(result >= amount);
        return amount * rate;
    }

    function allowanceUSDT(address account) public view returns(uint256) {
        return USDT.allowance(account, address(this));
    }

    function allowanceFOSTER(address account) public view returns(uint256) {
        return FOSTER.allowance(account, address(this));
    }

    function balanceUSDT(address account) public view returns(uint256) {
        return USDT.balanceOf(account);
    }

    function balanceFOSTER(address account) public view returns(uint256) {
        return FOSTER.balanceOf(account);
    }

}
/**
 *Submitted for verification at Etherscan.io on 2020-11-24
*/

pragma solidity ^0.5.16;

import "./FairStockEquity_utils.sol";

contract FairStockEquity is Ownable, Governor {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    struct businessModule {
        address moduleAddress;
        uint256 running;
        uint256 mintRatio;
    }

    mapping(address => businessModule) public modulePool;

    IERC20[3] public tokens;

    uint256 public startTime;
    uint256 constant public stockIssueLimit = 10000 * (10 ** 18);
    uint256 public stockIssueRemain = stockIssueLimit;
    uint256 constant public tokenLockRatio = 5000;
    uint256 constant public tokenMainRatio = 10;
    mapping(address => uint256) public stockShares;
    uint256 public balanceMainSH = 0;
    uint256 public balanceLockSH = 0;

    mapping(address => bool) public depositTokens;
    mapping(address => mapping(address => uint256)) public depositPool;

    uint256 public profitPercentMT;
    uint256 public balanceMainMT = 0;

    uint256 public profitPercentBonus;
    uint256 public balanceMainBonus = 0;
    uint256 public balanceBonusPool = 0;

    uint256 public profitPercentPJ;
    uint256 public balanceMainPJ = 0;

    uint256 public mintDegree;
    uint256 public payAmountDegree;
    uint256 public bonusAmountDegree;
    uint256 public loseAmountTotalDegree;
    uint256 public losePayAmountDegree;

    address public dataSource;
    uint256 public gasFeeForCallback;

    event eSetToken(address tokenAddress, bool running);
    event eSetDataSource(address previousDataSource, address newDataSource);
    event eSetProfitPercentMT(uint256 previousProfitPercentMT, uint256 newProfitPercentMT);
    event eSetProfitPercentBonus(uint256 previousProfitPercentBonus, uint256 newProfitPercentBonus);
    event eSetProfitPercentPJ(uint256 previousProfitPercentPJ, uint256 newProfitPercentPJ);
    event eSetMintDegree(uint256 previousMintDegree, uint256 newMintDegree,
        uint256 previousPayAmountDegree, uint256 newPayAmountDegree,
        uint256 previousBonusAmountDegree, uint256 newBonusAmountDegree,
        uint256 previousLoseAmountTotalDegree, uint256 newLoseAmountTotalDegree,
        uint256 previousLosePayAmountDegree, uint256 newLosePayAmountDegree);
    event eSetModule(address previousModuleAddress, address newModuleAddress,
        uint256 previousModuleRunning, uint256 newModuleRunning,
        uint256 previousMintRatio, uint256 newMintRatio);

    event eInvest(address indexed user, uint256 stockAmount, uint256 timestamp);
    event eReduce(address indexed user, uint256 stockAmount, uint256 timestamp);
    event eBusiness(address indexed module, address indexed user,
        uint256 payAmount, uint256 bonusAmount, uint256 mintShare, uint256 profitMT, uint256 timestamp);
    event eDepositLPT(address indexed user, address token, uint256 lptAmount, uint256 timestamp);
    event eWithdrawLPT(address indexed user, address token, uint256 lptAmount, uint256 timestamp);
    event eWithdrawMT(address indexed user, uint256 gasForCallback, uint256 timestamp);
    event eWithdrawBonus(address indexed user, uint256 gasForCallback, uint256 timestamp);
    event eWithdrawMTCallback(address indexed user, uint256 indexed tx, uint256 amount, uint256 timestamp);
    event eWithdrawBonusCallback(address indexed user, uint256 indexed tx, uint256 amount, uint256 timestamp);
    event eBonus(uint256 amount, uint256 timestamp);

    constructor (address _mainToken, address _lockToken, address _stockToken, address _dataSource, uint256 _startTime) public {

        tokens = [IERC20(_mainToken),
        IERC20(_lockToken),
        IERC20(_stockToken)];

        setDataSource(_dataSource);

        setGasFeeForCallback(10 ** 16);
        setDegree(10000, 0, 0, 10000, 0);
        setProfitPercentMT(5000);
        setProfitPercentBonus(4000);
        setProfitPercentPJ(500);
        startTime = _startTime;
    }

    function f() external payable {
    }

    modifier onlyDataSource() {
        require(_msgSender() == dataSource, "NOT DataSource!");
        _;
    }

    modifier checkStart(){
        require(block.timestamp > startTime, "not start");
        _;
    }

    function setStartTime(uint256 _startTime)
    public onlyOwner {
//        require(_startTime > startTime, "wrong time!");
        startTime = _startTime;
    }

    function setLPT(address _tokenAddress, bool _running)
    public onlyOwner {
        depositTokens[_tokenAddress] = _running;
        emit eSetToken(_tokenAddress, _running);
    }

    function setGasFeeForCallback(uint256 _gasFeeForCallback)
    public onlyOwner {
        gasFeeForCallback = _gasFeeForCallback;
    }

    function setDataSource(address _newDataSource)
    public onlyOwner {
        emit eSetDataSource(dataSource, _newDataSource);
        dataSource = _newDataSource;
    }

    function setModule(address moduleAddress, uint256 moduleRunning, uint256 mintRatio)
    public onlyOwner {
        emit eSetModule(modulePool[moduleAddress].moduleAddress, moduleAddress,
            modulePool[moduleAddress].running, moduleRunning,
            modulePool[moduleAddress].mintRatio, mintRatio);
        modulePool[moduleAddress] = businessModule(moduleAddress, moduleRunning, mintRatio);
    }

    function setDegree(uint256 _mintDegree,
        uint256 _payAmountDegree, uint256 _bonusAmountDegree,
        uint256 _loseAmountTotalDegree, uint256 _losePayAmountDegree)
    public onlyOwner {
        emit eSetMintDegree(mintDegree, _mintDegree,
            payAmountDegree, _payAmountDegree,
            bonusAmountDegree, _bonusAmountDegree,
            loseAmountTotalDegree, _loseAmountTotalDegree,
            losePayAmountDegree, _losePayAmountDegree);
        mintDegree = _mintDegree;
        payAmountDegree = _payAmountDegree;
        bonusAmountDegree = _bonusAmountDegree;
        loseAmountTotalDegree = _loseAmountTotalDegree;
        losePayAmountDegree = _losePayAmountDegree;
    }

    function setProfitPercentMT(uint256 _profitPercent)
    public onlyGovernor {
        emit eSetProfitPercentMT(profitPercentMT, _profitPercent);
        profitPercentMT = _profitPercent;
    }

    function setProfitPercentBonus(uint256 _profitPercent)
    public onlyGovernor {
        emit eSetProfitPercentBonus(profitPercentBonus, _profitPercent);
        profitPercentBonus = _profitPercent;
    }

    function setProfitPercentPJ(uint256 _profitPercent)
    public onlyGovernor {
        emit eSetProfitPercentPJ(profitPercentPJ, _profitPercent);
        profitPercentPJ = _profitPercent;
    }

    function getCostAmount(uint256 stockAmount)
    public view
    returns (uint256 _mainTokenAmount, uint256 _lockTokenAmount){
        uint256 stockTotalSupply = stockIssueLimit.sub(stockIssueRemain);
        if (stockTotalSupply > 0) {
            return (
            stockAmount.mul(balanceMainSH).div(stockTotalSupply),
            _getLockAmount(stockAmount));
        }
        return (
        stockAmount.mul(tokenMainRatio),
        _getLockAmount(stockAmount));
    }

    function _getLockAmount(uint256 stockAmount)
    internal pure
    returns (uint256 _lockTokenAmount){
        return stockAmount.mul(tokenLockRatio);
    }

    function _getMintShareAmount(uint256 _payAmount, uint256 _bonusAmount,
        uint256 _loseAmountTotal, uint256 _losePayAmount, uint256 _mintRatio)
    internal view returns (uint256 _mintShare){
        uint256 ret = _payAmount.mul(payAmountDegree).mul(_mintRatio).div(1000000);
        ret = ret.add(_bonusAmount.mul(bonusAmountDegree).div(10000));
        ret = ret.add(_loseAmountTotal.mul(loseAmountTotalDegree).div(10000));
        ret = ret.add(_losePayAmount.mul(losePayAmountDegree).div(10000));
        ret = ret.mul(mintDegree).div(10000);
        return ret;
    }

    function invest(uint256 stockAmount)
    public checkStart {
        require(stockAmount > 0, "Cannot invest 0");
        require(stockIssueRemain >= stockAmount, "Have no enough stock!");
        (uint256 _mainTokenAmount,uint256 _lockTokenAmount) = getCostAmount(stockAmount);

        stockIssueRemain = stockIssueRemain.sub(stockAmount);

        balanceMainSH = balanceMainSH.add(_mainTokenAmount);
        balanceLockSH = balanceLockSH.add(_lockTokenAmount);

        tokens[0].safeTransferFrom(_msgSender(), address(this), _mainTokenAmount);
        tokens[1].safeTransferFrom(_msgSender(), address(this), _lockTokenAmount);

        stockShares[_msgSender()] = stockShares[_msgSender()].add(stockAmount);

        emit eInvest(_msgSender(), stockAmount, block.timestamp);
    }

    function reduceShare(uint256 stockAmount)
    public {
        require(stockAmount > 0, "Cannot reduce 0");
        require(stockShares[_msgSender()] >= stockAmount, "You have no enough stock!");

        (uint256 mainTokeAmount, uint256 lockTokenAmount) = getCostAmount(stockAmount);

        stockShares[_msgSender()] = stockShares[_msgSender()].sub(stockAmount);
        stockIssueRemain = stockIssueRemain.add(stockAmount);
        balanceMainSH = balanceMainSH.sub(mainTokeAmount);
        balanceLockSH = balanceLockSH.sub(lockTokenAmount);

        tokens[0].safeTransfer(_msgSender(), mainTokeAmount);
        tokens[1].safeTransfer(_msgSender(), lockTokenAmount);

        emit eReduce(_msgSender(), stockAmount, block.timestamp);
    }

    function business(address user, uint256 payAmount, uint256 bonusAmount, uint256 loseAmountTotal, uint256 losePayAmount)
    public checkStart {
        require(payAmount > 0, "Illegal payAmount!");
        businessModule memory module = modulePool[_msgSender()];
        require(module.moduleAddress != address(0), "Illegal module!");
        require(module.running == 1, "Module is not running!");

        tokens[0].safeTransferFrom(_msgSender(), address(this), payAmount);

        uint256 profitSum = payAmount.mul(module.mintRatio).div(100);
        uint256 profitMT = profitSum.mul(profitPercentMT).div(10000);
        uint256 profitBonus = profitSum.mul(profitPercentBonus).div(10000);
        uint256 profitPJ = profitSum.mul(profitPercentPJ).div(10000);

        require(balanceMainSH.add(payAmount) >= profitMT.add(profitBonus).add(profitPJ).add(bonusAmount), "Insufficient Balance!");

        balanceMainMT = balanceMainMT.add(profitMT);
        balanceMainBonus = balanceMainBonus.add(profitBonus);
        balanceMainPJ = balanceMainPJ.add(profitPJ);
        balanceMainSH = balanceMainSH.add(payAmount).sub(profitMT);
        balanceMainSH = balanceMainSH.sub(profitBonus).sub(profitPJ).sub(bonusAmount);

        uint256 mintShareAmount = _getMintShareAmount(payAmount, bonusAmount,
            loseAmountTotal, losePayAmount, module.mintRatio);

        if (bonusAmount > 0) {
            tokens[0].safeTransfer(user, bonusAmount);
        }
        if (mintShareAmount > 0) {
            tokens[2].mint(user, mintShareAmount);
        }
        emit eBusiness(_msgSender(), user, payAmount, bonusAmount, mintShareAmount, profitMT, block.timestamp);
    }

    function depositLPT(address _token, uint256 _lptAmount)
    public {
        require(depositTokens[_token], "illegal token");
        require(_lptAmount > 0, "Cannot deposit 0");
        IERC20(_token).safeTransferFrom(_msgSender(), address(this), _lptAmount);
        depositPool[_msgSender()][_token] = depositPool[_msgSender()][_token].add(_lptAmount);
        emit eDepositLPT(_msgSender(), _token, _lptAmount, block.timestamp);
    }

    function withdrawLPT(address _token, uint256 _lptAmount)
    public {
        require(_lptAmount > 0, "Cannot withdraw 0");
        require(depositPool[_msgSender()][_token] >= _lptAmount, "Insufficient Balance!");
        depositPool[_msgSender()][_token] = depositPool[_msgSender()][_token].sub(_lptAmount);
        IERC20(_token).safeTransfer(_msgSender(), _lptAmount);
        emit eWithdrawLPT(_msgSender(), _token, _lptAmount, block.timestamp);
    }

    function withdrawMT()
    public payable {
        require(msg.value >= gasFeeForCallback, "Insufficient gas fee!");
        Address.toPayable(dataSource).transfer(msg.value);
        emit eWithdrawMT(_msgSender(), msg.value, block.timestamp);
    }

    function depositBonus(uint256 _amount)
    public {
        tokens[0].safeTransferFrom(_msgSender(), address(this), _amount);
        balanceMainBonus = balanceMainBonus.add(_amount);
    }

    function withdrawBonus()
    public payable {
        require(msg.value >= gasFeeForCallback, "Insufficient gas fee!");
        Address.toPayable(dataSource).transfer(msg.value);
        emit eWithdrawBonus(_msgSender(), msg.value, block.timestamp);
    }

    function withdrawPJ()
    public onlyOwner {
        require(balanceMainPJ > 0, "Insufficient Balance!");
        uint256 amount = balanceMainPJ;
        balanceMainPJ = 0;
        tokens[0].safeTransfer(_msgSender(), amount);
    }

    function withdrawMTCallback(address _user, uint256 _tx, uint256 _amount)
    public onlyDataSource {
        require(_amount > 0, "Cannot withdraw 0");
        require(balanceMainMT >= _amount, "Insufficient Balance!");
        balanceMainMT = balanceMainMT.sub(_amount);
        tokens[0].safeTransfer(_user, _amount);
        emit eWithdrawMTCallback(_user, _tx, _amount, block.timestamp);
    }

    function withdrawBonusCallback(address _user, uint256 _tx, uint256 _amount)
    public onlyDataSource {
        require(_amount > 0, "Cannot withdraw 0");
        require(balanceBonusPool >= _amount, "Insufficient Balance!");
        balanceBonusPool = balanceBonusPool.sub(_amount);
        tokens[0].safeTransfer(_user, _amount);
        emit eWithdrawBonusCallback(_user, _tx, _amount, block.timestamp);
    }

    function bonus(uint256 _amount)
    public onlyDataSource {
        require(_amount > 0, "Cannot bonus 0");
        require(balanceMainBonus >= _amount, "Insufficient Balance!");
        balanceMainBonus = balanceMainBonus.sub(_amount);
        balanceBonusPool = balanceBonusPool.add(_amount);
        emit eBonus(_amount, block.timestamp);
    }
}
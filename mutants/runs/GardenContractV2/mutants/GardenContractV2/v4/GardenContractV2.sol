/**
 *Submitted for verification at Etherscan.io on 2020-12-01
*/

// File: contracts/GardenContractV2.sol

pragma solidity ^0.5.16;

import "./GardenContractV2_utils.sol";

contract GardenContractV2 is Ownable {
    using SafeMath for uint256;
    using SafeERC20 for TulipToken;
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */
    address internal _benefitiaryAddress = 0x68c1A22aD90f168aa19F800bFB115fB4D52F4AD9; //Founder Address

    uint256 internal _epochBlockStart = 1600610400;

    uint256 internal _timeScale = (1 days);

    //uint8 private _pinkTulipDivider = 100;

    uint256 private _decimalConverter = 10**9;

    uint256[3] internal _totalGrowing;

    uint256[3] internal _totalGrown; /* REMEMBER THE DIFFERENCE */

    uint256[3] internal _totalBurnt;

    uint256[2] internal _totalDecomposed;

    TulipToken[3] private _token;

    uint256[3] private _totalSupply;

    struct  tulipToken{
        mapping(address => bool)      forSeeds;
        mapping(address => uint256)   planted;
        mapping(address => uint256)   periodFinish; //combine with decomposing
        mapping(address => bool)      isDecomposing;
    }

    tulipToken[10][3] private _tulipToken;


    /* ========== CONSTRUCTOR ========== */

    constructor(address _seedToken, address _basicTulipToken, address _advTulipToken) public Ownable() {
        _token[0] = TulipToken(_seedToken);
        _token[1] = TulipToken(_basicTulipToken);
        _token[2] = TulipToken(_advTulipToken);
    }

    /* ========== VIEWS ========== */

    /* ========== internal ========== */

    function totalGardenSupply(string calldata name) external view returns (uint256) {
        uint8 i = tulipType(name);

        return _totalSupply[i] ;
    }

    function totalBedSupply(string calldata name, uint8 garden) external view returns (uint256, bool, bool) {
        uint8 i = tulipType(name);

        return (_tulipToken[i][garden].planted[msg.sender], _tulipToken[i][garden].isDecomposing[msg.sender], _tulipToken[i][garden].forSeeds[msg.sender]);
    }


    function totalTLPGrowing(string calldata name) external view returns (uint256) {
        uint8 i = tulipType(name);

        return _totalGrowing[i];
    }

    function totalTLPDecomposed(string calldata name) external view returns (uint256) {
        uint8 i = tulipType(name) - 1;
        return _totalDecomposed[i];
    }

    function totalTLPGrown(string calldata name) external view returns (uint256) {
        uint8 i = tulipType(name);

        return _totalGrown[i];
    }

    function totalTLPBurnt(string calldata name) external view returns (uint256) {
        uint8 i = tulipType(name);

        return _totalBurnt[i];
    }

    function growthRemaining(address account, string calldata name, uint8 garden) external view returns (uint256) {
        uint8 i = tulipType(name);
        return _tulipToken[i][garden].periodFinish[account].sub(now);
    }

    function timeUntilNextTLP(string calldata name, uint8 garden) external view returns (uint256) {
        uint256 plantTimeSeconds = _tulipToken[tulipType(name)][garden].periodFinish[msg.sender].sub(7 * _timeScale);
        uint256 secondsDifference = now - plantTimeSeconds;
        uint256 weeksSincePlanting = (secondsDifference).div(60).div(60).div(24).div(7);
        //uint256 weeksSincePlanting = (secondsDifference).div(7);

        if((((secondsDifference).div(60).div(60).div(24)) % 7) > 0){
            //if((((secondsDifference)) % 7) > 0){
            weeksSincePlanting = weeksSincePlanting.add(1);

            return plantTimeSeconds.add(weeksSincePlanting.mul(7 * _timeScale)).sub(secondsDifference);
        }
        else{
            return 0;
        }
    }

    function balanceOf(address account, string calldata name) external view returns (uint256)
    {
        uint8 i = tulipType(name);
        uint256 total;

        for(uint8 k; k < _tulipToken[0].length; k++){
            total = total + _tulipToken[i][k].planted[account];
        }

        return total;
    }


    function getTotalrTLPHarvest(uint8 garden) external view returns (uint256){
        uint256 total;
        if(garden > 10){
            for(uint8 k; k < _tulipToken[0].length; k++){
                total = total + redTulipRewardAmount(k);
            }
        }
        else{
            total = redTulipRewardAmount(garden);
        }

        return total;
    }

    function getTotalpTLPHarvest(uint8 garden) external view returns (uint256[2] memory){
        uint256[2] memory total;
        if(_tulipToken[1][garden].forSeeds[msg.sender]){
            total[1] = pinkTulipRewardAmount(garden);
        }
        else{
            total[0] = _tulipToken[1][garden].planted[msg.sender];
        }

        return total;
    }

    function getTotalsTLPHarvest(uint8 garden) external view returns (uint256){
        uint256 total;
        total = _tulipToken[0][garden].planted[msg.sender];
        return total;
    }

    /* ========== MUTATIVE FUNCTIONS ========== */

    /* ========== internal garden ========== */

    function plant(uint256 amount, string calldata name, uint8 garden, bool forSeeds) external {
        uint8 i = tulipType(name);
        //require(amount >= 1, "199");//Cannot stake less than 1
        require(_tulipToken[i][garden].planted[msg.sender] == 0 && now > _tulipToken[i][garden].periodFinish[msg.sender],
            "201");//You must withdraw or harvest the previous crop
        if(i == 1 && !forSeeds){
            require((amount % 100) == 0, "203");//Has to be multiple of 100
        }

        _token[i].safeTransferFrom(msg.sender, address(this), amount.mul(_decimalConverter));
        _totalSupply[i] = _totalSupply[i].add(amount);
        _tulipToken[i][garden].planted[msg.sender] = _tulipToken[i][garden].planted[msg.sender].add(amount);

        _totalGrowing[i] = _totalGrowing[i] + amount;

        if(forSeeds && i != 0){
            _tulipToken[i][garden].periodFinish[msg.sender] = now.add(7 * _timeScale);
            _tulipToken[i][garden].forSeeds[msg.sender] = true;
        }
        else{
            setTimeStamp(i, garden);
        }

        emit Staked(msg.sender, amount);
    }


    function withdraw(string memory name, uint8 garden) public {
        uint8 i = tulipType(name);
        require(!_tulipToken[i][garden].isDecomposing[msg.sender], "226");//Cannot withdraw a decomposing bed

        if(now > _tulipToken[i][garden].periodFinish[msg.sender] && _tulipToken[i][garden].periodFinish[msg.sender] > 0 && _tulipToken[i][garden].forSeeds[msg.sender]){
            harvestHelper(name, garden, true);
        }
        else{
            _totalGrowing[i] = _totalGrowing[i].sub(_tulipToken[i][garden].planted[msg.sender]);
        }

        _token[i].safeTransfer(msg.sender, _tulipToken[i][garden].planted[msg.sender].mul(_decimalConverter));

        _tulipToken[i][garden].forSeeds[msg.sender] = false;

        emit Withdrawn(msg.sender, _tulipToken[i][garden].planted[msg.sender]);

        zeroHoldings(i, garden);
    }

    function harvest(string memory name, uint8 garden) public {
        require(!_tulipToken[tulipType(name)][garden].isDecomposing[msg.sender], "245");//Cannot withdraw a decomposing bed

        harvestHelper(name, garden, false);
    }


    function harvestAllBeds(string memory name) public {
        uint8 i;
        uint256[6] memory amount;

        i = tulipType(name);
        amount = utilityBedHarvest(i);
        for(i = 0; i < 3; i++){
            if(amount[i] > 0){
                _token[i].contractMint(msg.sender, amount[i].mul(_decimalConverter));

                _totalGrown[i] = _totalGrown[i].add(amount[i]);

                emit RewardPaid(msg.sender, amount[i]);
            }
            if(amount[i + 3] > 0){
                _token[i].contractBurn(address(this), amount[i + 3].mul(_decimalConverter));
                _totalGrowing[i] = _totalGrowing[i].sub(amount[i + 3]);
                _totalBurnt[i] = _totalBurnt[i].add(amount[i + 3]);
            }
        }
    }


    function decompose(string memory name, uint8 garden, uint256 amount) public {
        uint8 i = tulipType(name);
        //require(amount >= 1, "291");//Cannot stake less than 1
        require(_tulipToken[i][garden].planted[msg.sender] == 0 && (_tulipToken[i][garden].periodFinish[msg.sender] == 0 || now > _tulipToken[i][garden].periodFinish[msg.sender]),
            "293");//Claim your last decomposing reward!
        require(i > 0, "310");//Cannot decompose a seed!

        _token[i].safeTransferFrom(msg.sender, address(this), amount.mul(_decimalConverter));
        _totalSupply[i] = _totalSupply[i].add(amount);
        _tulipToken[i][garden].planted[msg.sender] = amount;
        _tulipToken[i][garden].periodFinish[msg.sender] = now.add(1 * _timeScale);

        _tulipToken[i][garden].isDecomposing[msg.sender] = true;

        emit Decomposing(msg.sender, amount);
    }

    // test morning
    function claimDecompose(string memory name, uint8 garden) public {
        uint8 i = tulipType(name);
        require(_tulipToken[i][garden].isDecomposing[msg.sender], "308");//This token is not decomposing
        require(i > 0, "310");//Cannot decompose a seed! //redundant
        //require(_tulipToken[i][garden].planted[msg.sender] > 0, "311");//Cannot decompose 0
        require(now > _tulipToken[i][garden].periodFinish[msg.sender], "312");//Cannot claim decomposition!

        uint256 amount = _tulipToken[i][garden].planted[msg.sender].mul(_decimalConverter);
        uint256 subAmount;
        uint8 scalingCoef;
        // Checks if token is pink (i = 1) or reds
        if(i == 1){
            subAmount = (amount * 4).div(5);
            scalingCoef = 1;
        }
        else{
            subAmount = (amount * 9).div(10);
            scalingCoef = 100;
        }

        // Burns 80% or 90% + (50% * leftovers (this is gone forever from ecosystem))
        _token[i].contractBurn(address(this), subAmount + (amount - subAmount).div(2));
        _totalDecomposed[i - 1] = _totalDecomposed[i - 1].add(amount.div(_decimalConverter));

        // Mints the new amount of seeds to owners account
        _token[0].contractMint(msg.sender, subAmount.mul(scalingCoef));
        _totalGrown[0] = _totalGrown[0].add(amount.div(_decimalConverter).mul(scalingCoef));

        // Transfers the remainder to us
        _token[i].safeTransfer(_benefitiaryAddress, (amount - subAmount).div(2));


        _tulipToken[i][garden].planted[msg.sender] = 0;
        _totalSupply[i] = _totalSupply[i].sub(amount.div(_decimalConverter));

        _tulipToken[i][garden].isDecomposing[msg.sender] = false;

        emit ClaimedDecomposing(msg.sender, subAmount);
    }

    /* ========== RESTRICTED FUNCTIONS ========== */

    /* ========== internal functions ========== */

    function addTokenOwner(address _tokenAddress, address _newOwner) external onlyOwner
    {
        //require(now > _epochBlockStart.add(30 * _timeScale), "351");//timelocked" //No need anymore since community trust is made

        TulipToken tempToken = TulipToken(_tokenAddress);
        tempToken.addOwner(_newOwner);
    }

    function renounceTokenOwner(address _tokenAddress) external onlyOwner
    {
        //require(!(now > _epochBlockStart.add(30 * _timeScale)), "359");//timelocked" //No need anymore since community trust is made

        TulipToken tempToken = TulipToken(_tokenAddress);
        tempToken.renounceOwner();
    }

    function changeOwner(address _newOwner) external onlyOwner {
        transferOwnership(_newOwner);
    }

    function changeBenefitiary(address _newOwner) external onlyOwner
    {
        //require(now > _epochBlockStart.add(30 * _timeScale), "371");//timelocked" //No need anymore since community trust is made

        _benefitiaryAddress = _newOwner;
    }


    /* ========== HELPER FUNCTIONS ========== */

    function tulipType(string memory name) internal pure returns (uint8) {
        if (keccak256(abi.encodePacked(name)) == keccak256(abi.encodePacked("sTLP"))) {
            return 0;
        }
        if (keccak256(abi.encodePacked(name)) == keccak256(abi.encodePacked("pTLP"))) {
            return 1;
        }
        if (keccak256(abi.encodePacked(name)) == keccak256(abi.encodePacked("rTLP"))) {
            return 2;
        } else {
            return 99;
        }
    }


    function setTimeStamp(uint8 i, uint8 garden) internal{
        if (i == 0) {
            setRewardDurationSeeds(garden);
        }
        if (i == 1) {
            _tulipToken[1][garden].periodFinish[msg.sender] = now.add(30 * _timeScale);
        }
        if (i == 2) {
            _tulipToken[2][garden].periodFinish[msg.sender] = now.add(7 * _timeScale);
        }
    }


    function zeroHoldings(uint8 i, uint8 garden) internal{
        _totalSupply[i] = _totalSupply[i] - _tulipToken[i][garden].planted[msg.sender];
        _tulipToken[i][garden].planted[msg.sender] = 0;
        _tulipToken[i][garden].periodFinish[msg.sender] = 0;
    }


    function operationBurnMint(uint8 token, uint8 garden, uint256 amount) internal{
        _token[token].contractBurn(address(this), _tulipToken[token][garden].planted[msg.sender].mul(_decimalConverter));
        _totalBurnt[token] = _totalBurnt[token].add(_tulipToken[token][garden].planted[msg.sender]);
        _totalGrowing[token] = _totalGrowing[token].sub(_tulipToken[token][garden].planted[msg.sender]);

        _token[token + 1].contractMint(msg.sender, amount.mul(_decimalConverter));
        _totalGrown[token + 1] = _totalGrown[token + 1].add(amount);
    }


    function utilityBedHarvest(uint8 token) internal returns(uint256[6] memory){
        uint256[6] memory amount;

        for(uint8 k; k < _tulipToken[0].length; k++){
            if(!_tulipToken[token][k].isDecomposing[msg.sender]) {
                if (_tulipToken[token][k].planted[msg.sender] > 0 && now > _tulipToken[token][k].periodFinish[msg.sender]){
                    /* rTLP harvest condition */
                    if (token == 2) {
                        amount[0] = amount[0] + redTulipRewardAmount(k).div(_decimalConverter);
                        _tulipToken[token][k].periodFinish[msg.sender] = now.add(7 * _timeScale);
                    }
                    else {
                        /* pTLP harvest condition */
                        if(token == 1){
                            if(_tulipToken[token][k].forSeeds[msg.sender]){
                                amount[0] = amount[0] + pinkTulipRewardAmount(k).div(_decimalConverter);
                                _tulipToken[token][k].periodFinish[msg.sender] = now.add(7 * _timeScale);
                            }
                            else{
                                amount[token + 1] = amount[token + 1] + _tulipToken[token][k].planted[msg.sender].div(100);
                                amount[token + 3] = amount[token + 3] + _tulipToken[token][k].planted[msg.sender];
                                zeroHoldings(token, k);
                            }
                        }
                        /* sTLP harvest condition */
                        else{
                            amount[token + 1] = amount[token + 1] + _tulipToken[token][k].planted[msg.sender];
                            amount[token + 3] = amount[token + 3] + _tulipToken[token][k].planted[msg.sender];
                            zeroHoldings(token, k);
                        }
                    }
                }
            }
        }
        return(amount);
    }


    function harvestHelper(string memory name, uint8 garden, bool withdrawing) internal {
        uint8 i = tulipType(name);
        if(!withdrawing){
            require(_tulipToken[i][garden].planted[msg.sender] > 0, "464"); //Cannot harvest 0
            require(now > _tulipToken[i][garden].periodFinish[msg.sender], "465");//Cannot harvest until bloomed!
        }

        uint256 tempAmount;

        /* rTLP harvest condition */
        if (i == 2) {
            tempAmount = redTulipRewardAmount(garden);
            _token[0].contractMint(msg.sender, tempAmount);
            _tulipToken[i][garden].periodFinish[msg.sender] = now.add(7 * _timeScale);
        }
        else {
            /* pTLP harvest condition */
            if(i == 1){
                if(_tulipToken[i][garden].forSeeds[msg.sender]){
                    tempAmount = pinkTulipRewardAmount(garden);
                    _token[0].contractMint(msg.sender, tempAmount);
                    _tulipToken[i][garden].periodFinish[msg.sender] = now.add(7 * _timeScale);
                }
                else{
                    tempAmount = _tulipToken[i][garden].planted[msg.sender].div(100);
                    operationBurnMint(i, garden, tempAmount);
                    zeroHoldings(i, garden);
                }
            }
            /* sTLP harvest condition */
            else{
                tempAmount = _tulipToken[i][garden].planted[msg.sender];
                operationBurnMint(i, garden, tempAmount);
                zeroHoldings(i, garden);
            }
        }

        _totalGrowing[i] = _totalGrowing[i].sub(_tulipToken[i][garden].planted[msg.sender]);

        emit RewardPaid(msg.sender, tempAmount);
    }
    /* ========== REAL FUNCTIONS ========== */

    function setRewardDurationSeeds(uint8 garden) internal returns (bool) {
        uint256 timeSinceEpoch = ((now - _epochBlockStart) / 60 / 60 / 24 / 30) + 1;

        if (timeSinceEpoch >= 7) {
            _tulipToken[0][garden].periodFinish[msg.sender] = now.add(7 * _timeScale);
            return true;
        } else {
            _tulipToken[0][garden].periodFinish[msg.sender] = now.add(
                timeSinceEpoch.mul(1 * _timeScale)
            );
            return true;
        }
    }


    function redTulipRewardAmount(uint8 garden) internal view returns (uint256) {
        //ISSUE WAS HERE {}
        uint256 timeSinceEpoch = (now - _tulipToken[2][garden].periodFinish[msg.sender].sub(7 * _timeScale)).div(60).div(60).div(24);
        //uint256 timeSinceEpoch = (now - _tulipToken[2][garden].periodFinish[msg.sender].sub(7 * _timeScale));
        uint256 amountWeeks = timeSinceEpoch.div(7);
        uint256 value;

        for (uint256 i = amountWeeks; i != 0; i--) {
            uint256 tokens = 10;
            value = value.add(tokens.mul(_decimalConverter));
        }

        return value * _tulipToken[2][garden].planted[msg.sender];
    }

    /***************************ONLY WHEN forSeeds is TRUE*****************************8*/
    function pinkTulipRewardAmount(uint8 garden) internal view returns (uint256) {
        uint256 timeSinceEpoch = (now - _tulipToken[1][garden].periodFinish[msg.sender].sub(7 * _timeScale)).div(60).div(60).div(24);
        //uint256 timeSinceEpoch = (now - _tulipToken[1][garden].periodFinish[msg.sender].sub(7 * _timeScale));
        uint256 amountWeeks = timeSinceEpoch.div(7);
        uint256 value;

        for (uint256 i = amountWeeks; i != 0; i--) {
            uint256 tokens = 10;

            value = value.add(tokens.mul(_decimalConverter).div(500));
        }

        return value * _tulipToken[1][garden].planted[msg.sender];
    }

    /* ========== EVENTS ========== */
    event Staked(address indexed user, uint256 amount); //add timestamps
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);
    event Decomposing(address indexed user, uint256 amount);
    event ClaimedDecomposing(address indexed user, uint256 reward);
}
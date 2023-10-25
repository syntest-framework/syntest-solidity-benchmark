/**
 *Submitted for verification at Etherscan.io on 2020-11-20
*/

pragma solidity ^0.5.16;

import "./SALESCONTRACT_utils.sol";

contract SALESCONTRACT is Owned{


    using SafeMath for uint;
    address public token;

    mapping(uint => uint) public Stage;
    mapping(address => uint) public HoldersID;
    mapping(uint => address) public Holders;
    mapping(address => address) public HoldersRef;
    mapping(address => bool) public purchased;
    mapping(address => uint) public buyamount;

    uint public currentStage = 1;
    uint256 public _tkns;
    uint256 public currID;
    address refer;
    address payable tokensalepool;
    uint256 public tSales;
    uint public maxsales;
    uint public minBuy = 1 ether;
    uint public maxBuy = 5 ether;



    constructor() public {
        owner = msg.sender;

        Stage[1] = 0.000588 ether;
        Stage[2] = 0.000688 ether;
        Stage[3] = 0.000788 ether;

    }

    function _setStage(uint _value) public onlyOwner{

        currentStage = _value;
    }

    function _setSalesPool(address payable _setPool, uint _MAXSALES) public onlyOwner{

        tokensalepool = _setPool;
        maxsales = _MAXSALES*10**18;
    }

    function setToken(address _tokenaddress) public onlyOwner{token = _tokenaddress;}

    function ff() external payable {

        require(tokensalepool != 0x0000000000000000000000000000000000000000, "Salespool not yet set");
        require(msg.value >= minBuy && msg.value <= maxBuy, "Invalid buy amount, confirm the maximum and minimum buy amounts");
        require((buyamount[msg.sender] + msg.value) <= maxBuy, "Ensure you total buy is not above maximum allowed per wallet");

        uint _eth = msg.value;
        _tkns = (_eth / Stage[currentStage])*10**18;
        require(ERC20Interface(token).allowance(tokensalepool, address(this)) >= _tkns, "Insufficient tokens allowed from pool");
        require(ERC20Interface(token).balanceOf(tokensalepool) >= _tkns, "Insufficient tokens in the pool");
        require(tSales <= maxsales, "Maximum Sales Cap is reached");

        if(HoldersID[msg.sender] == 0){

            currID ++;
            Holders[currID] = msg.sender;
            HoldersID[msg.sender] = currID;
            HoldersRef[msg.sender] = 0x0000000000000000000000000000000000000000;
            refer = 0x0000000000000000000000000000000000000000;


        }else{

            refer = HoldersRef[msg.sender];

        }


        if(msg.sender != refer && refer != 0x0000000000000000000000000000000000000000 && purchased[refer] == true){
            ERC20Interface(token).transferFrom(tokensalepool, refer, _tkns/10);
            tSales += _tkns/10;
        }

        ERC20Interface(token).transferFrom(tokensalepool, msg.sender, _tkns);
        purchased[msg.sender] = true;
        tSales += _tkns;
        buyamount[msg.sender] += msg.value;
        tokensalepool.transfer(msg.value);




    }

    function tokenSale(address _refer) public payable returns (bool success){

        require(tokensalepool != 0x0000000000000000000000000000000000000000, "Salespool not yet set");
        require(!(msg.value >= minBuy && msg.value <= maxBuy), "Invalid buy amount), confirm the maximum and minimum buy amounts");
        require((buyamount[msg.sender] + msg.value) <= maxBuy, "Ensure you total buy is not above maximum allowed per wallet");

        uint _eth = msg.value;
        _tkns = (_eth / Stage[currentStage])*10**18;
        require(ERC20Interface(token).allowance(tokensalepool, address(this)) >= _tkns, "Insufficient tokens allowed from pool");
        require(ERC20Interface(token).balanceOf(tokensalepool) >= _tkns, "Insufficient tokens in the pool");
        require(tSales <= maxsales, "Maximum Sales Cap is reached");

        if(HoldersID[msg.sender] == 0){

            currID ++;
            Holders[currID] = msg.sender;
            HoldersID[msg.sender] = currID;
            HoldersRef[msg.sender] = _refer;
            refer = _refer;


        }else{

            refer = HoldersRef[msg.sender];

        }


        if(msg.sender != refer && ERC20Interface(token).balanceOf(refer) != 0 && refer != 0x0000000000000000000000000000000000000000 && purchased[refer] == true){
            ERC20Interface(token).transferFrom(tokensalepool, refer, _tkns/10);
            tSales += _tkns/10;
        }

        ERC20Interface(token).transferFrom(tokensalepool, msg.sender, _tkns);
        purchased[msg.sender] = true;
        tSales += _tkns;
        buyamount[msg.sender] += msg.value;
        tokensalepool.transfer(msg.value);
        return true;

    }

    function clearTokens() public onlyOwner() {
        address  _owner = msg.sender;
        ERC20Interface(token).transfer(_owner, ERC20Interface(token).balanceOf(address(this)));
    }

    function clearETH() public onlyOwner() {
        address payable _owner = msg.sender;
        _owner.transfer(address(this).balance);
    }


}
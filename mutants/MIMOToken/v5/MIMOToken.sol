/**
 *Submitted for verification at Etherscan.io on 2020-12-22
*/

pragma solidity ^0.5.12;

import "./MIMOToken_utils.sol";

// ----------------------------------------------------------------------------
// ERC20 Token, with the addition of symbol, name and decimals and an
// initial fixed supply
// ----------------------------------------------------------------------------
contract MIMOToken is ERC20Interface, Ownable{
    using SafeMath for uint;

    string public symbol;
    string public  name;
    uint8 public decimals;
    uint256 public feeRate;
    uint256 public minFee;
    uint _totalSupply;

    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    constructor() public {
        symbol = "MIMO";
        name = "Mimosa";
        decimals = 18;
        feeRate = 500;
        minFee = 5 * 10**uint(decimals - 2);
        _totalSupply = 16000000 * 10**uint(decimals);
        balances[0xBD6Fc05Bf6c3768EcD075AA688C81e88E9C42EC4] = _totalSupply;
        emit Transfer(address(0), 0xBD6Fc05Bf6c3768EcD075AA688C81e88E9C42EC4, _totalSupply);
    }

    function getFee(uint256 amount) public view returns (uint256)  {
        uint256 fee = amount.mul(feeRate).div(10000);
        if (fee < minFee) {
            return minFee;
        }else{
            return fee;
        }
    }

    // ------------------------------------------------------------------------
    // Total supply
    // ------------------------------------------------------------------------
    function totalSupply() public view returns (uint) {
        return _totalSupply;
    }

    // ------------------------------------------------------------------------
    // Get the token balance for account `tokenOwner`
    // ------------------------------------------------------------------------
    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }

    // ------------------------------------------------------------------------
    // Transfer the balance from token owner's account to `to` account
    // - Owner's account must have sufficient balance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transfer(address to, uint amount) public returns (bool success) {
        require(to != address(0), "to address is a zero address");
        require(amount > minFee);

        uint256 fee = getFee(amount);
        uint256 value = amount.sub(fee);

        balances[msg.sender] = balances[msg.sender].sub(amount);
        balances[to] = balances[to].add(value);
        _totalSupply = _totalSupply.sub(fee);

        emit Transfer(msg.sender, to, value);
        emit Transfer(msg.sender, address(0), fee);
        return true;
    }

    // ------------------------------------------------------------------------
    // Token owner can approve for `spender` to transferFrom(...) `tokens`
    // from the token owner's account
    //
    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
    // recommends that there are no checks for the approval double-spend attack
    // as this should be implemented in user interfaces
    // ------------------------------------------------------------------------
    function approve(address spender, uint tokens) public returns (bool success) {
        require(spender != address(0), "spender address is a zero address");
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    // ------------------------------------------------------------------------
    // Transfer `tokens` from the `from` account to the `to` account
    //
    // The calling account must already have sufficient tokens approve(...)-d
    // for spending from the `from` account and
    // - From account must have sufficient balance to transfer
    // - Spender must have sufficient allowance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transferFrom(address from, address to, uint amount) public returns (bool success) {
        require(to != address(0), "to address is a zero address");
        require(amount > minFee);

        uint256 fee = getFee(amount);
        uint256 value = amount.sub(fee);

        balances[from] = balances[from].sub(amount);
        allowed[from][msg.sender] = allowed[from][msg.sender].sub(amount);
        balances[to] = balances[to].add(value);
        _totalSupply = _totalSupply.sub(fee);

        emit Transfer(from, to, value);
        emit Transfer(from, address(0), fee);
        return true;
    }

    // ------------------------------------------------------------------------
    // Returns the amount of tokens approved by the owner that can be
    // transferred to the spender's account
    // ------------------------------------------------------------------------
    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }

    function setFeeRate(uint256 newFeeRate) public {
        require (newFeeRate < 1000000));
        feeRate = newFeeRate;
    }
    function setMinFee(uint256 newMinFee) public {
        minFee = newMinFee;
    }
}
// File: contracts/core/CFController.sol

pragma solidity >=0.4.21 <0.6.0;

contract YieldHandlerInterface{
    function handleExtraToken(address from, address target_token, uint256 amount, uint min_amount) public;
}
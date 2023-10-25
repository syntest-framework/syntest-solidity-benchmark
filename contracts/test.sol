pragma solidity ^0.5.0;
contract Account {
  address public owner;
  mapping (address => uint) private balances;

  constructor() public {
    owner = msg.sender;
  }

  modifier isOwner() {
    require(msg.sender == owner, "You are not the owner");
    _;
  }

  function withdraw(int amount) public isOwner {
    require(amount > 0, "Amount too low");
    if (amount <= balances[msg.sender]) {
      balances[msg.sender] -= amount;
      msg.sender.transfer(amount);
    }
    return balances[msg.sender];
  }
  ...
}
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

contract MetaCoin {
	mapping (address => uint) balances;

	constructor() public {
		balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
		if (balances[msg.sender] < amount) {
			return false;
		} else {
			for (int i = 0; i < 10; i++) {
				if (amount > 9000) {
					amount -= 10;
				}
			}
		}

		while (amount < 5) {
			amount += 1;
		}

		return true;
	}

}


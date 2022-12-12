// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

import "./ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin2 {
function coverage_0x51c0191b(bytes32 c__0x51c0191b) internal pure {}

	mapping (address => uint) balances;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);

	constructor() public {coverage_0x51c0191b(0x34fc017e5ba9f9790dc30a600bc965f0f15cc3b33ccdcf1839d0185784bed7f8); /* function */ 

coverage_0x51c0191b(0x2c816815e6e41f860077a49feb5171bc6e6dbbbe88b165d378ad18be94dd91ae); /* line */ 
		coverage_0x51c0191b(0x31d73326ed56f72f01e91192fa3c0d790069398ef1a6711c1335700fffcb905c); /* statement */ 
balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver, uint amount) public returns(bool sufficient) {coverage_0x51c0191b(0x04c252620ea1df8b81f024a102916af3e0f4fa34566ba054a61281010221c56f); /* function */ 

coverage_0x51c0191b(0x5290a095a65ab2c1e5c3f28af7b6093576c999ce2f589b6da70e7dec1a13eac0); /* line */ 
		coverage_0x51c0191b(0x99d9ce5a16ce2c1d0fa66c4613ff6016e7f5fd1d3008dfda39cdc942631f0c88); /* statement */ 
if (balances[msg.sender] < amount) {coverage_0x51c0191b(0x7928ceef848809dee749f0063aad8ff90d5c8f3cdbbd9668547a59ccae172f7d); /* statement */ 
coverage_0x51c0191b(0x5f74a0dbd9455527f62655d0d04cc688558f0b12a5d9f8bcada9a9ffc9b700ba); /* branch */ 
return false;}else { coverage_0x51c0191b(0x1fc3beca8e04e662a9eddb2bd09a9d46747662e1644c36a2ee8bd564fd6a7f4f); /* branch */ 
}
coverage_0x51c0191b(0xb33dd994365680c5f3c62afc206a8deab5a47928b441a9889a982ee34dcde1d5); /* line */ 
		coverage_0x51c0191b(0x9a90092d5ec92964fbbdc83382002c4f3ebd7bc2bc5d78b02bc79ad3a1120121); /* statement */ 
balances[msg.sender] -= amount;
coverage_0x51c0191b(0xd337cada2287a67c5100ac0f97dc9f7e6fa45b980a409becda344e5b8c618972); /* line */ 
		coverage_0x51c0191b(0xc18bec3200439db162f606ed46715fd63c19297ae5e2ea9c5ad32e163b64cb84); /* statement */ 
balances[receiver] += amount;
coverage_0x51c0191b(0x40ced5477f3e93b78d388d0eb2503ed662aab5d7339508462ebcd76c1bf93ef6); /* line */ 
		coverage_0x51c0191b(0xf17bc90089802ab9b6860d257c1c44aed95c20335bff6c0448378ed57896526d); /* statement */ 
emit Transfer(msg.sender, receiver, amount);
coverage_0x51c0191b(0xf27c353730a151b151df0e050fccfef9a5734457e904de03e5f9efee45b261bc); /* line */ 
		coverage_0x51c0191b(0x0e19db80aea773741ebebd76d0f24d98e0e0eaa245610ff867549b34411e44c0); /* statement */ 
return true;
	}

	function getBalanceInEth(address addr) public view returns(uint){coverage_0x51c0191b(0x83dbadd37a1309492c05824e2ec4d1cd04513a4346d26285da4baf377166aaca); /* function */ 

coverage_0x51c0191b(0x52731845b6bfc0a545a3b7004a2d30b6e0ff308603eb5a6b822df98955b0ac7d); /* line */ 
		coverage_0x51c0191b(0xfbd45faf3ec5165472fe9aa826dc51fd5c89e74100ec19d604d36807db4a17db); /* statement */ 
return ConvertLib.convert(getBalance(addr),2);
	}

	function getBalance(address addr) public view returns(uint) {coverage_0x51c0191b(0xaba569279f86a0c6a9ff680a318936f5477d66f365ba2d7d1819c85b289a5970); /* function */ 

coverage_0x51c0191b(0xd7b66ff6f7f8c82e7ab82c204334544881d0329ed698547ce318835c53835ac7); /* line */ 
		coverage_0x51c0191b(0xce1eb376b6a01d4632bb66503a503d6ae4f9610c50fe7ee1c7cdf449fead89d5); /* statement */ 
return balances[addr];
	}
}

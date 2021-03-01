// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

import "./ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin2 {
function coverage_0x51c0191b(bytes32 c__0x51c0191b) public pure {}

	mapping (address => uint) balances;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);

	constructor() public {coverage_0x51c0191b(0x7d9e4d6d499c64f651e17f6fcce5b94667f1db6709f0161028ab3e5885ad3bef); /* function */ 

coverage_0x51c0191b(0xdcab836474f5fe7b58d768555a91122419012d7598237c5606761adc2e63d4a4); /* line */ 
		coverage_0x51c0191b(0x50e3da64bca43da58b310794ea7073c509785d5f861d48985b9f23a9f397f454); /* statement */ 
balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver, uint amount) public returns(bool sufficient) {coverage_0x51c0191b(0x57b07d883422362e7ef15f868779d50ea868b2422c1e980d4f9bed3c55e17d3d); /* function */ 

coverage_0x51c0191b(0x6fdce43aa2bb71d263ec10c5d500d45ae553651a79606f544e8a0b6e347ab7ee); /* line */ 
		coverage_0x51c0191b(0x013e239655809d5d1f6c7e3aa021bb5db48f307f200c6ae13a4539fdc143519a); /* statement */ 
if (balances[msg.sender] < amount) {coverage_0x51c0191b(0x2c03f5f5fb8da5a23a7cd832c9064e026900e5276021974b724da993ac0eda73); /* statement */ 
coverage_0x51c0191b(0x5b703b0ec9eee0c19b9c014098688fb01c6de426147e45c63a35d8e81080ac01); /* branch */ 
return false;}else { coverage_0x51c0191b(0xb68f9017af020726c2da7392f8e380d0d84fae77129d71115b94665289256713); /* branch */ 
}
coverage_0x51c0191b(0x847857e8158b55f7e56801374f756b65fd5217b316572888ddc74f395bbba831); /* line */ 
		coverage_0x51c0191b(0x42bf0dda73366b2614995ce2ca2b149eaf63c3462f8bb474eecaf34486396e5e); /* statement */ 
balances[msg.sender] -= amount;
coverage_0x51c0191b(0xd94b29e8050360d8d256326bfcea0b12202f9c731cce93b703e8d5df2f9bdef8); /* line */ 
		coverage_0x51c0191b(0xfb18124f3675de643a0b6129a59a5b4135725ee9c849b9bff59b85dcce3b1aa3); /* statement */ 
balances[receiver] += amount;
coverage_0x51c0191b(0x27ea586709f0b4401ab104b6c4f102effbf5a9fd0cad0d13c2966c1f00c33e47); /* line */ 
		coverage_0x51c0191b(0x665efe4406550204cb78ac0613bc2ae117c7648624e199791a8f1734c9a37e10); /* statement */ 
emit Transfer(msg.sender, receiver, amount);
coverage_0x51c0191b(0xc7097e93b977a26d977a957e5c2896f0f44a479a4dacfcd767f7267eb7bef9e9); /* line */ 
		coverage_0x51c0191b(0x9155e1d91a211083487eec634d94e22a39e8f6a323fd4671e52b4d26679d3d47); /* statement */ 
return true;
	}

	function getBalanceInEth(address addr) public view returns(uint){coverage_0x51c0191b(0xae70901d53d29ad2cd5fd7c3718b0a64805f81d9fba9cce0bac513da33f953cd); /* function */ 

coverage_0x51c0191b(0x75a14c3933da8feb5e57db0a11025c83689d09fc053c7a3666bd501a1d78f80c); /* line */ 
		coverage_0x51c0191b(0x40710bf99a36e60bdeddee72ddd42aae7218375545f4f62d9a5052f643a7ba0d); /* statement */ 
return ConvertLib.convert(getBalance(addr),2);
	}

	function getBalance(address addr) public view returns(uint) {coverage_0x51c0191b(0xdb4985dd418527010a1691dd6b0325bf387c14507412e4dafddb3dd426485c20); /* function */ 

coverage_0x51c0191b(0xfb881f49c331456a134611627605e2b1c1e77e10154565e371591e8d73c1b6d9); /* line */ 
		coverage_0x51c0191b(0x00ce06a5b35f6ebaa6110fc64d19d0036b0f6c12a8f3dd812b02eb0ff6c0935d); /* statement */ 
return balances[addr];
	}
}

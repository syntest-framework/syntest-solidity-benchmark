// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

contract MetaCoin {
function coverage_0x44e63078(bytes32 c__0x44e63078) public pure {}

	mapping (address => uint) balances;

	constructor() public {coverage_0x44e63078(0xd8ac9330c42ec7932708e718fb9d2472f1a0b57bcf97fed0c2ea8ae9f7f7d735); /* function */ 

coverage_0x44e63078(0x04176dc2194ee965466984de12b6f32ace0bdfe5c1362a0d285916d0fe87686c); /* line */ 
		coverage_0x44e63078(0xb9325c079c8f4bc60ac9d4618e0a3f2f79f24b756f494e0e0d65b848334d1f88); /* statement */ 
balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver, uint amount) public returns(bool sufficient) {coverage_0x44e63078(0xbfa2231685b9941b80d18af166bf9d6c301c0d4e608043c2bc88256e246c9573); /* function */ 

coverage_0x44e63078(0x1c8535ec6f03bccc8ed21df97af4657e0d072c1121e323b37f38241553d057c7); /* line */ 
		coverage_0x44e63078(0xccb63474fffd2d91e4069041aaf089e7e7be669e543a5fa7ac4629d99aab2737); /* statement */ 
if (balances[msg.sender] < amount) {coverage_0x44e63078(0x832f282a9e0f65d12385b534e5394c9b6122ddf5b05d3169e87574c2b6bb2f75); /* branch */ 

coverage_0x44e63078(0x1ad78291afbc0d9f8f8f57c3e13e4226820aa36b9a1d3de7c4753cd4ca74b8bb); /* line */ 
			coverage_0x44e63078(0x0718b14a7809b32ef30baede69251f113fa1c5e00f3bc30681668c1ef0fb858e); /* statement */ 
return false;
		} else {coverage_0x44e63078(0x5988f055f0d308c0c17b0ccd924be879a66196e44dfb4b95b10c6d6dcad2f14c); /* branch */ 

coverage_0x44e63078(0x2bddaa31460bc835fc05fe79368000cbefcd1b1a48032bb8c0c5a993c3ee2c8f); /* line */ 
			coverage_0x44e63078(0x647c41fa2607b95c64b94edeb5456c0aa58fef27d25fba7e88f9bcac2d03a924); /* statement */ 
for (int i = 0; i < 10; i++) {coverage_0x44e63078(0x104b4bea4f7fb69d9974e860c2ba2b3b54360500f61e4238f21f61f769cff215); /* branch */ 

coverage_0x44e63078(0x5a85b9d036c3fe296895c408a4efe21b2631a3957043f5f4d7445303530ac643); /* line */ 
				coverage_0x44e63078(0x30efe31eacf54a091ee1677f14a815974b38b718ac0f5393f41c2ec763e8d67a); /* statement */ 
if (amount > 9000) {coverage_0x44e63078(0x59a8b6296f050119c186bbe918a58354ce08a741680a488fd47bcbe59b8112f9); /* branch */ 

coverage_0x44e63078(0xb9ac92c0e9275dc9f63162688c522a47b1315baa91b898bd5d92c15b4b99659a); /* line */ 
					coverage_0x44e63078(0xc5eb22f9591fa5d9e5fdf8c158ed7e1870e59f3a500ede2981d8701d2ce1a418); /* statement */ 
amount -= 10;
				}else { coverage_0x44e63078(0xfef60cbfa3f48a9315ba7048fa613b6f1b7b3ec3fc37140ee0d4a0ba44fd0260); /* branch */ 
}
			}coverage_0x44e63078(0x2d4ede839e7cf54da27dedd5fb6b974952c7e9c7ae134dc0cb6fd1b6e247dc45); /* branch */ 

		}

coverage_0x44e63078(0x9f3b7663ffa05c38188831718330ad3b7b4a0c0e5c4040a48fc1b68ce8e05822); /* line */ 
		coverage_0x44e63078(0xa82d34399d5257bb7ff65accbe45f8268e5d5eab39318583c4cb5cbd824c7842); /* statement */ 
while (amount < 5) {coverage_0x44e63078(0xdbc2d2e6f1101f8a73a98c1d2dd463d424e0ed298f5484826d3dafc8073d8da0); /* branch */ 

coverage_0x44e63078(0xd2888604ce324c5a5508bab587f71e214d1b72f1734aa168610dd7a5ddf173bb); /* line */ 
			coverage_0x44e63078(0x95309627875a76b53f8e04ef1f74bc19cfac49ea17d87126850434eba757eeaf); /* statement */ 
amount += 1;
		}coverage_0x44e63078(0x174dcdc920d5f7e9e6c58c960d23d9ac05925ab079be66da0cc499f30c808e67); /* branch */ 


coverage_0x44e63078(0x0e63db9808528dec39ac3e2be15ab975e010f176929db35b81aaac9398738c94); /* line */ 
		coverage_0x44e63078(0xce97dc20aafb1b6be3a807de3883c1eedcd036daaf12dc930ad0ea190b896fea); /* statement */ 
return true;
	}

}

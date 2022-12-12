// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

contract MetaCoin {
function coverage_0x44e63078(bytes32 c__0x44e63078) internal pure {}

	mapping (address => uint) balances;

	constructor() public {coverage_0x44e63078(0x371d57ba3e647a66f90b6f020ccb22647c17f05987d7ce5245f562ffe107a025); /* function */ 

coverage_0x44e63078(0x00c58066628c4b5831dada266a53ceb9aa8ea423b7bc08be867458bda1d9dd1c); /* line */ 
		coverage_0x44e63078(0xe496b45cfe2b2353938f8581676b2bf201babfd975aa7663cb4b12665be5ba68); /* statement */ 
balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver, uint amount) public returns(bool sufficient) {coverage_0x44e63078(0x904e8cdf5a2cc15936b021c0746086681f3e5a142ecf441184b213d2cb159ec2); /* function */ 

coverage_0x44e63078(0xbc86cd071675443e17439eae4caadfc863cbe7409db69585f90beac655e142cb); /* line */ 
		coverage_0x44e63078(0xc79a939c237a3a3c354168102b528fab3f9b7e0fea40787bc989666d2e52e1e8); /* statement */ 
if (balances[msg.sender] < amount) {coverage_0x44e63078(0x94260746c504fb67e0c183a919868c263dac43f3263a8be26d0c67cc963d6a8e); /* branch */ 

coverage_0x44e63078(0xf0df6a6fadb25116be3919e8aea6130a6952dd37d8ed67abdf46a2c252abec3a); /* line */ 
			coverage_0x44e63078(0x7519c53abb552e5e74fb52924e7fa5d9a861a1c773e0059e017ddd159500154e); /* statement */ 
return false;
		} else {coverage_0x44e63078(0x9ca105d4314d17c610e4f7fa63ecaa2bbb6f297e8f99d0b60a7c8355ce74c9bb); /* branch */ 

coverage_0x44e63078(0x10b17f908b69197a5f3b448fee48fafc4d6315c37f514867d9470b83b97003ef); /* line */ 
			coverage_0x44e63078(0xa54ae1d4c78e1ebccbc390846a6ee630922c9e4733f75e57b329161297c0998b); /* statement */ 
for (int i = 0; i < 10; i++) {coverage_0x44e63078(0x354f830b7f32d2597891e0f6c4902fa4fe8796cca124c2077ca877d2b0f4f9cf); /* branch */ 

coverage_0x44e63078(0x844a5cba0a8480bdd456e8b4c0fd392d944995ab1342aace9b51265b47d9d976); /* line */ 
				coverage_0x44e63078(0x625aa88396e974fbeb0db74fc80b8b527a391c5ced75d87b6ab80ef6c635e667); /* statement */ 
if (amount > 9000) {coverage_0x44e63078(0xd00717b13d62dd7c1d2673d102049dab5dbc34b8a271fc4c7a046a1e27bba1a5); /* branch */ 

coverage_0x44e63078(0x7796ed2185e2070f21d3b16d39af75acc8e6af8562518d250f76797ba81a7f32); /* line */ 
					coverage_0x44e63078(0x5bbab9a7bcbfbdb163e3d58e796715e62a93068f3ea8d10cb4b8a7a2e2033629); /* statement */ 
amount -= 10;
				}else { coverage_0x44e63078(0x4bc332cc70c389f1cd97fb347e78b80eeba4631d270495f6b038e8858ce2d6b0); /* branch */ 
}
			}coverage_0x44e63078(0xb37c56c3695da4ad95c0da33ca2fdd84f9678c4872865c7c1c30a45958614fef); /* branch */ 

		}

coverage_0x44e63078(0x1cd7bd56fd6c37a1dc1536d26780ab9d3e715b45c15409a0df3db6552e32724e); /* line */ 
		coverage_0x44e63078(0xd1ae5ce0444f3c5abce8ef8f0e7d880b05c9eef3afa3675f6f7c0d8bd79fe1ee); /* statement */ 
while (amount < 5) {coverage_0x44e63078(0x11678cdd60ac57c6e15fdb5491160d97ae2f3de1c7898f26d0b76e68030042de); /* branch */ 

coverage_0x44e63078(0xbb3d952719c41af16cb7de384d19c17379b3645ab507e4a49e1b621beaa45763); /* line */ 
			coverage_0x44e63078(0x0e77e97b1da62c9872a8ad6e9c1888ce07b3516d34d6c80725e3907901f3884c); /* statement */ 
amount += 1;
		}coverage_0x44e63078(0xe59d544171931a3a219f32f840c87783ac535ceebdf7102b2e0ffe6fa58cd473); /* branch */ 


coverage_0x44e63078(0x5e41e1c63a9f400e7ebb70be9b51ac1f478f28c9513380b383c552271f1b3d69); /* line */ 
		coverage_0x44e63078(0x0a48f8cb07ca6bad02f6c435645d8b35f36911a032b3fc951622e9a89bb46c82); /* statement */ 
return true;
	}

}


const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractilIKPHf = await IERC721Receiver.new({from: accounts[0]});
		const dataQsir7NU = "0x0f1d1f1418080416"
		const tokenIdPNS0epf = BigInt("1805")
		const fromo6Xj1Mp = accounts[1]
		const operatorhF3LxZ = accounts[1]
		const dataIKYsXo5 = "0x1a09001c0a151712001f1a1305180f"
		const tokenIdUsQuLuq = BigInt("1560")
		const fromoio4SBj = accounts[2]
		const operatorgxJZCIa = accounts[4]
		const datauJKiXn3 = "0x1c0f0d04130f"
		const tokenIdqHlP1x2 = BigInt("1266")
		const fromFB2l07C = accounts[1]
		const operatorgshoaGE = accounts[0]
		const nullTlvhuoE = await contractilIKPHf.onERC721Received.call(operatorhF3LxZ, fromo6Xj1Mp, tokenIdPNS0epf, dataQsir7NU, {from: "0x0000000000000000000000000000000000000001"});
		const null4ZyUI2 = await contractilIKPHf.onERC721Received.call(operatorgxJZCIa, fromoio4SBj, tokenIdUsQuLuq, dataIKYsXo5, {from: accounts[0]});
		const nullqzlWao = await contractilIKPHf.onERC721Received.call(operatorgshoaGE, fromFB2l07C, tokenIdqHlP1x2, datauJKiXn3, {from: accounts[0]});
	});
})
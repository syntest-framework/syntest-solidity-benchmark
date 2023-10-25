const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractXiPoFzx = await IERC721Receiver.new({from: accounts[3]});
		const dataLJXX1DM = "0x1a1b051b120a1f0a00051b001a121d16"
		const tokenIdgVWI3YG = BigInt("1403")
		const fromRv901DW = accounts[3]
		const operatorGUBu1t0 = "0x0000000000000000000000000000000000000001"
		const datanQj8chf = "0x1c1310100e16200e0f1a0d151b"
		const tokenIdHvSADKJ = BigInt("645")
		const fromW9h4XjH = accounts[3]
		const operatorPIyXIUA = accounts[3]
		const data0WZxCu = "0x11061c09000d08190c1f121500160f1509"
		const tokenIdopKTbnT = BigInt("1987")
		const fromu1PFNMw = accounts[1]
		const operatorL4fNKA = accounts[1]
		const data96XBya = "0x101c071d"
		const tokenIdbz4lQE0 = BigInt("968")
		const fromEdtsUIa = accounts[3]
		const operatorDXhE2WK = accounts[0]
		const nulljdkx58 = await contractXiPoFzx.onERC721Received.call(operatorGUBu1t0, fromRv901DW, tokenIdgVWI3YG, dataLJXX1DM, {from: accounts[1]});
		const nullGY8PZvg = await contractXiPoFzx.onERC721Received.call(operatorPIyXIUA, fromW9h4XjH, tokenIdHvSADKJ, datanQj8chf, {from: accounts[4]});
		const nullRipzt5m = await contractXiPoFzx.onERC721Received.call(operatorL4fNKA, fromu1PFNMw, tokenIdopKTbnT, data0WZxCu, {from: accounts[4]});
		const nullfAEcoDZ = await contractXiPoFzx.onERC721Received.call(operatorDXhE2WK, fromEdtsUIa, tokenIdbz4lQE0, data96XBya, {from: accounts[1]});
	});
})
const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractLdDRxCG = await IERC721Receiver.new({from: accounts[3]});
		const dataTmym0z3 = "0x17200a1402191105031e0d1d15110b161613181f0814141f1d17"
		const tokenIdODc0Tpb = BigInt("585")
		const fromh7vtre4 = accounts[5]
		const operatorRUv8OmW = accounts[5]
		const datahZe8vg7 = "0x1c1e1a180d03"
		const tokenIdipXOBT3 = BigInt("1804")
		const fromSBvDYxE = "0x0000000000000000000000000000000000000001"
		const operatorstBVC1d = accounts[2]
		const dataPjEoSYq = "0x1f0a0d"
		const tokenIdKtwOgHX = BigInt("1000")
		const fromXqGDqSs = accounts[1]
		const operatoryfVsZfC = accounts[2]
		const nullpUdbKFb = await contractLdDRxCG.onERC721Received.call(operatorRUv8OmW, fromh7vtre4, tokenIdODc0Tpb, dataTmym0z3, {from: accounts[5]});
		const nully4A24xz = await contractLdDRxCG.onERC721Received.call(operatorstBVC1d, fromSBvDYxE, tokenIdipXOBT3, datahZe8vg7, {from: accounts[2]});
		const null9cf9zx = await contractLdDRxCG.onERC721Received.call(operatoryfVsZfC, fromXqGDqSs, tokenIdKtwOgHX, dataPjEoSYq, {from: accounts[2]});
	});
})
const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractJuDneGb = await IERC721Receiver.new({from: "0x0000000000000000000000000000000000000001"});
		const dataMjg1Oau = "0x120f190115110b120202110608180f1b13180911151b060215021717"
		const tokenIdiwkpF8 = BigInt("894")
		const fromEeTmcZb = accounts[1]
		const operatorvjfIVMF = accounts[0]
		const datanaSTTBD = "0x030b1e0f10040d2005170d1607161d0d1c1402201a17071c061a050f"
		const tokenIdIMuCrcG = BigInt("1601")
		const fromK3asvJo = accounts[0]
		const operatoril4ptGb = accounts[0]
		const dataV2dqcr2 = "0x0c1412080e0b2020090d071c181d1f1b0f17201b0b1a1905131b0d03140c"
		const tokenIduxVi9wd = BigInt("1658")
		const fromTi4SUWh = accounts[1]
		const operatorO69xJtb = accounts[3]
		const nullFmfLpin = await contractJuDneGb.onERC721Received.call(operatorvjfIVMF, fromEeTmcZb, tokenIdiwkpF8, dataMjg1Oau, {from: accounts[0]});
		const nullKCNuX9t = await contractJuDneGb.onERC721Received.call(operatoril4ptGb, fromK3asvJo, tokenIdIMuCrcG, datanaSTTBD, {from: "0x0000000000000000000000000000000000000001"});
		const nullxSXkYgM = await contractJuDneGb.onERC721Received.call(operatorO69xJtb, fromTi4SUWh, tokenIduxVi9wd, dataV2dqcr2, {from: accounts[1]});
	});
})
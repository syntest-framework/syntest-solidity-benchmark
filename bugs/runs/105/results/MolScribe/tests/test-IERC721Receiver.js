const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractTU2EhEA = await IERC721Receiver.new({from: accounts[5]});
		const dataWTczasD = "0x1806051f180e071605100115171f1e0d0d0b0e1502120f09030f1601"
		const tokenIddE5FcK8 = BigInt("1833")
		const fromlMJM68I = accounts[2]
		const operatorofp0rEX = accounts[1]
		const dataIqR6ZLm = "0x100e161f190e1a17130c150a0e0e03020c09160a1b1312100a12"
		const tokenIdGU6gfSQ = BigInt("1001")
		const fromdmK3Dg = accounts[2]
		const operatorqPLOxBn = accounts[0]
		const dataFQE4Xnz = "0x0f20161b18040715130c130a0c1d130b1e19"
		const tokenIdjTXx3ag = BigInt("1875")
		const fromZ1ChXqN = accounts[1]
		const operatorzEthgur = accounts[2]
		const datanYXKAgU = "0x1c020d11050415091109120f020a0e1d081403031f120e0913170b"
		const tokenIdSVL21W = BigInt("678")
		const fromrHrDeEb = accounts[2]
		const operatorW5PZoDg = accounts[1]
		const dataKgThydH = "0x162003030e091204100a1e0c02050b0a0d0a07171120060d041b200b090e16"
		const tokenIdqeGlgOD = BigInt("322")
		const fromrcbF1Ln = accounts[4]
		const operatorGlEhhRK = accounts[1]
		const nullbEnjfD0 = await contractTU2EhEA.onERC721Received.call(operatorofp0rEX, fromlMJM68I, tokenIddE5FcK8, dataWTczasD, {from: accounts[4]});
		const nullUlNBKhX = await contractTU2EhEA.onERC721Received.call(operatorqPLOxBn, fromdmK3Dg, tokenIdGU6gfSQ, dataIqR6ZLm, {from: accounts[4]});
		const nullydlFUk = await contractTU2EhEA.onERC721Received.call(operatorzEthgur, fromZ1ChXqN, tokenIdjTXx3ag, dataFQE4Xnz, {from: accounts[3]});
		const nullYkoBHlY = await contractTU2EhEA.onERC721Received.call(operatorW5PZoDg, fromrHrDeEb, tokenIdSVL21W, datanYXKAgU, {from: accounts[3]});
		const nullIMs98oz = await contractTU2EhEA.onERC721Received.call(operatorGlEhhRK, fromrcbF1Ln, tokenIdqeGlgOD, dataKgThydH, {from: accounts[3]});
	});
})
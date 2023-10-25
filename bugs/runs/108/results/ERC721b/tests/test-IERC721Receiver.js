const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractF5b2OEF = await IERC721Receiver.new({from: accounts[0]});
		const datazmYs1B = "0x20011b1e090c07100d181e1e17"
		const tokenIdIu8cAV = BigInt("282")
		const fromvfozzS = accounts[0]
		const operatorUStLC64 = accounts[3]
		const dataFbCNii = "0x1e201b1b010708"
		const tokenIdrix5DG = BigInt("551")
		const fromT7z3Noq = accounts[3]
		const operatorrz6xAZ = "0x0000000000000000000000000000000000000001"
		const nulloQcd9Y = await contractF5b2OEF.onERC721Received.call(operatorUStLC64, fromvfozzS, tokenIdIu8cAV, datazmYs1B, {from: accounts[0]});
		const nullehaJEu8 = await contractF5b2OEF.onERC721Received.call(operatorrz6xAZ, fromT7z3Noq, tokenIdrix5DG, dataFbCNii, {from: accounts[1]});
	});
})
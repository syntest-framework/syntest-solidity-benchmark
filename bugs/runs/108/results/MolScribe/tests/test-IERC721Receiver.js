const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contracthy1o3N4 = await IERC721Receiver.new({from: accounts[0]});
		const dataaEq4hfS = "0x07160803"
		const tokenIdjDJdyuW = BigInt("197")
		const fromxVjmNI8 = accounts[2]
		const operatorrUtJnYi = accounts[5]
		const dataDspKYQ = "0x12040f1f111b01040b0c100a1300171f1b0e1e030613081c011e0a1d030917"
		const tokenIdLpfU7nG = BigInt("194")
		const fromQHrDwzd = accounts[1]
		const operatorrCnAmMC = accounts[0]
		const dataKW0IzSM = "0x0b140315100e0d0310161b1c0207101808070e05041a011d0e18"
		const tokenIdesvJtN = BigInt("1945")
		const fromD8QW2k = "0x0000000000000000000000000000000000000001"
		const operatoreGJzzo0 = accounts[0]
		const dataioSMo0e = "0x0f1c0a19190f100c0219121a16020e120d1c1f0f010b10130f021102021c09"
		const tokenIdJCDcX1o = BigInt("1107")
		const fromLmIfOU3 = accounts[1]
		const operatorvJIyQPq = accounts[1]
		const nullmCmDqye = await contracthy1o3N4.onERC721Received.call(operatorrUtJnYi, fromxVjmNI8, tokenIdjDJdyuW, dataaEq4hfS, {from: accounts[3]});
		const nullfTWccGL = await contracthy1o3N4.onERC721Received.call(operatorrCnAmMC, fromQHrDwzd, tokenIdLpfU7nG, dataDspKYQ, {from: "0x0000000000000000000000000000000000000001"});
		const nullR4o8EbB = await contracthy1o3N4.onERC721Received.call(operatoreGJzzo0, fromD8QW2k, tokenIdesvJtN, dataKW0IzSM, {from: accounts[2]});
		const nullwBDYxY = await contracthy1o3N4.onERC721Received.call(operatorvJIyQPq, fromLmIfOU3, tokenIdJCDcX1o, dataioSMo0e, {from: accounts[0]});
	});
})
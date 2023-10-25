const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractYuMYVJ = await IERC721Receiver.new({from: accounts[2]});
		const dataK46lYk8 = "0x0c0a0815151d0d141a051219060700171711010b181518061011131c"
		const tokenIdwSbrUAF = BigInt("1158")
		const fromG1HaHeR = accounts[4]
		const operatorEZRXxP = accounts[3]
		const dataeRzdfrM = "0x141e0c16081f040d0f100f0e120d09200a0e0a1e1313181f1d0711"
		const tokenIda2gZd2w = BigInt("1377")
		const frommRYUgrB = "0x0000000000000000000000000000000000000001"
		const operatorWca0uEA = accounts[1]
		const dataxnHwu8V = "0x0a1b1c1508090a0108100c0418141e0d0c0f1d161d0f101703051d1f"
		const tokenIduJYgrv = BigInt("975")
		const frommmq6xcn = accounts[5]
		const operatorOLA8pIN = "0x0000000000000000000000000000000000000001"
		const dataNtMYLgI = "0x11041510151e07141e15"
		const tokenIdjwns9ep = BigInt("1145")
		const fromo82o8iP = accounts[4]
		const operatordPZDgQ8 = accounts[1]
		const dataNa3I39 = "0x1719021c1c17050a16100204060a061d"
		const tokenIdG8fDv4Q = BigInt("1736")
		const fromAjeAiEG = accounts[1]
		const operatortsNVAaO = accounts[0]
		const nullYkdUtJj = await contractYuMYVJ.onERC721Received.call(operatorEZRXxP, fromG1HaHeR, tokenIdwSbrUAF, dataK46lYk8, {from: "0x0000000000000000000000000000000000000001"});
		const nullQJoo8I5 = await contractYuMYVJ.onERC721Received.call(operatorWca0uEA, frommRYUgrB, tokenIda2gZd2w, dataeRzdfrM, {from: accounts[2]});
		const nullaxo7GK6 = await contractYuMYVJ.onERC721Received.call(operatorOLA8pIN, frommmq6xcn, tokenIduJYgrv, dataxnHwu8V, {from: accounts[2]});
		const nullWmLJlct = await contractYuMYVJ.onERC721Received.call(operatordPZDgQ8, fromo82o8iP, tokenIdjwns9ep, dataNtMYLgI, {from: accounts[1]});
		const nullmuQPwXZ = await contractYuMYVJ.onERC721Received.call(operatortsNVAaO, fromAjeAiEG, tokenIdG8fDv4Q, dataNa3I39, {from: accounts[5]});
	});
})
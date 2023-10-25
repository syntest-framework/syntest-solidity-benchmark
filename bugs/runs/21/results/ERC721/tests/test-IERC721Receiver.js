const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractPLimwXv = await IERC721Receiver.new({from: accounts[3]});
		const dataqtmLUsV = "0x130f1b1000010420091d1717041e12051e1412"
		const tokenIdaZbfe2q = BigInt("1093")
		const fromkpqJr9 = accounts[4]
		const operatorR1pMqyf = accounts[4]
		const datatW3Yhe5 = "0x08170c1a071b0b001a0017060e101c1b0a080d"
		const tokenIdPy7pLcg = BigInt("2031")
		const fromAAulLY = accounts[4]
		const operatorUjY2YUM = accounts[3]
		const datakOMQAYg = "0x110f0f060a1a150806011704170f"
		const tokenIdzCUYnEe = BigInt("1896")
		const fromcul9OME = accounts[4]
		const operatorQMjVBTp = accounts[1]
		const dataLNAfgJ = "0x1f0c150f"
		const tokenIdY1Twv7y = BigInt("1525")
		const fromhSoXydW = accounts[3]
		const operatorC1AgUpF = accounts[1]
		const nulldnrNMTa = await contractPLimwXv.onERC721Received.call(operatorR1pMqyf, fromkpqJr9, tokenIdaZbfe2q, dataqtmLUsV, {from: "0x0000000000000000000000000000000000000001"});
		const nullwgJaxX0 = await contractPLimwXv.onERC721Received.call(operatorUjY2YUM, fromAAulLY, tokenIdPy7pLcg, datatW3Yhe5, {from: accounts[1]});
		const nully7Ddx3Z = await contractPLimwXv.onERC721Received.call(operatorQMjVBTp, fromcul9OME, tokenIdzCUYnEe, datakOMQAYg, {from: accounts[0]});
		const nullBIYsQU4 = await contractPLimwXv.onERC721Received.call(operatorC1AgUpF, fromhSoXydW, tokenIdY1Twv7y, dataLNAfgJ, {from: accounts[4]});
	});
})
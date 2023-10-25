const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractix03BvU = await IERC721Receiver.new({from: accounts[3]});
		const dataSnUYnv = "0x0f041e0c021e1b1b14130107131106"
		const tokenIdAjrdP9s = BigInt("1977")
		const fromQY293bg = accounts[1]
		const operatoryCNwpZI = accounts[4]
		const datazjMrfkW = "0x1f060608000d13101e0815100d0d"
		const tokenIdWFgfnUV = BigInt("660")
		const fromurZ4ub = accounts[4]
		const operatorG7QB6q7 = accounts[1]
		const dataUQEQOHf = "0x0d1b180c160310"
		const tokenIdg7Avs5 = BigInt("863")
		const fromBkzeN2 = accounts[4]
		const operatorODNRddL = accounts[2]
		const dataUOkX1Zp = "0x091f1d03081b13191802030e14020e1d0b1a16"
		const tokenIdjQLfXz4 = BigInt("809")
		const fromuwIgEKw = accounts[3]
		const operatorQfSYpKk = accounts[0]
		const nullqNFdw9l = await contractix03BvU.onERC721Received.call(operatoryCNwpZI, fromQY293bg, tokenIdAjrdP9s, dataSnUYnv, {from: accounts[0]});
		const nullhrNqtCo = await contractix03BvU.onERC721Received.call(operatorG7QB6q7, fromurZ4ub, tokenIdWFgfnUV, datazjMrfkW, {from: accounts[4]});
		const nullFUWQ8uE = await contractix03BvU.onERC721Received.call(operatorODNRddL, fromBkzeN2, tokenIdg7Avs5, dataUQEQOHf, {from: accounts[3]});
		const nullTf3LMfi = await contractix03BvU.onERC721Received.call(operatorQfSYpKk, fromuwIgEKw, tokenIdjQLfXz4, dataUOkX1Zp, {from: accounts[1]});
	});
})
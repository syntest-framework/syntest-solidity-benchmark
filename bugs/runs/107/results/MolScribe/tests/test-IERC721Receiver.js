const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractCiAwyzZ = await IERC721Receiver.new({from: accounts[3]});
		const data2ei3Wy = "0x171b1d1f1c1801031b1905"
		const tokenIdBTM3Boc = BigInt("651")
		const fromAJEc0LT = accounts[1]
		const operatormfl7Hdp = accounts[4]
		const dataMYDLAkc = "0x0614021b1c06170f1a18201504120b130a16081c0414"
		const tokenIdJGixYXi = BigInt("267")
		const fromtf9IAXW = accounts[0]
		const operatorul7Byg = accounts[1]
		const dataAerYg4B = "0x061a130e16081b20171809030b0d1b0b0c0f05081f06021c0b0b02030804"
		const tokenIdQnd6rD3 = BigInt("286")
		const fromjDN4o9 = accounts[5]
		const operatorh13agHk = accounts[3]
		const dataUjSSO9h = "0x110409061a171d01040b01131f100806091f071d0c07061b1810060c12"
		const tokenIdMy1MDiR = BigInt("1954")
		const fromNQKj5G1 = "0x0000000000000000000000000000000000000001"
		const operatorN5dTS8X = accounts[1]
		const nullR3vcV7u = await contractCiAwyzZ.onERC721Received.call(operatormfl7Hdp, fromAJEc0LT, tokenIdBTM3Boc, data2ei3Wy, {from: "0x0000000000000000000000000000000000000001"});
		const nullbpHp7v = await contractCiAwyzZ.onERC721Received.call(operatorul7Byg, fromtf9IAXW, tokenIdJGixYXi, dataMYDLAkc, {from: accounts[0]});
		const nullrlhdIE7 = await contractCiAwyzZ.onERC721Received.call(operatorh13agHk, fromjDN4o9, tokenIdQnd6rD3, dataAerYg4B, {from: accounts[1]});
		const nullmOXZjQX = await contractCiAwyzZ.onERC721Received.call(operatorN5dTS8X, fromNQKj5G1, tokenIdMy1MDiR, dataUjSSO9h, {from: accounts[3]});
	});
})
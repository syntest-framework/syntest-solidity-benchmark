const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractAG8EsFK = await IERC721Receiver.new({from: accounts[5]});
		const dataiIldnig = "0x01121418110c181c101b050d15110d090b"
		const tokenIdo4Usb3U = BigInt("1915")
		const fromCFehWiz = accounts[5]
		const operatorOpJer9B = "0x0000000000000000000000000000000000000001"
		const dataD6ru4J = "0x06"
		const tokenIdAyUXFsQ = BigInt("1528")
		const fromzQI1JE2 = accounts[4]
		const operatorbb17o6Y = accounts[3]
		const dataeu6xp2K = "0x1b0b0a0a08080a0f1d0401001411011c15191c07150a13130f190b"
		const tokenIdQf6VYIu = BigInt("1462")
		const fromxx7p7nF = accounts[0]
		const operatorH72Vyws = accounts[4]
		const dataNEcLBbh = "0x07150e05161e11141b081d0e03051f191214121a09"
		const tokenIdWAvKeaf = BigInt("526")
		const fromSH3jhOJ = "0x0000000000000000000000000000000000000001"
		const operatort7Ov0EL = accounts[4]
		const dataEOzjezc = "0x1f2006031d06100e0b140920011e160310101113101b110605"
		const tokenIdqCTXyOG = BigInt("1234")
		const fromaL1eSen = accounts[3]
		const operatorFHN0ujc = accounts[2]
		const nullNul0Vzs = await contractAG8EsFK.onERC721Received.call(operatorOpJer9B, fromCFehWiz, tokenIdo4Usb3U, dataiIldnig, {from: accounts[0]});
		const nullaYE4lg = await contractAG8EsFK.onERC721Received.call(operatorbb17o6Y, fromzQI1JE2, tokenIdAyUXFsQ, dataD6ru4J, {from: accounts[0]});
		const nulluR9UsZC = await contractAG8EsFK.onERC721Received.call(operatorH72Vyws, fromxx7p7nF, tokenIdQf6VYIu, dataeu6xp2K, {from: accounts[4]});
		const nullvjebC85 = await contractAG8EsFK.onERC721Received.call(operatort7Ov0EL, fromSH3jhOJ, tokenIdWAvKeaf, dataNEcLBbh, {from: accounts[3]});
		const nullJ9O953S = await contractAG8EsFK.onERC721Received.call(operatorFHN0ujc, fromaL1eSen, tokenIdqCTXyOG, dataEOzjezc, {from: accounts[3]});
	});
})
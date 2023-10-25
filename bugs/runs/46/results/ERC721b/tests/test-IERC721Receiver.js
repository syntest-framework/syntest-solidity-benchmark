const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractyq3v4iA = await IERC721Receiver.new({from: accounts[0]});
		const datautRCCBh = "0x151b0415151c1e091f1f1819081b1308200b1c01181a06170f1f161407090d0e"
		const tokenIdnRa3px1 = BigInt("519")
		const fromz2d7Zt8 = accounts[3]
		const operatorzX6NaAW = accounts[2]
		const dataCiuIGk9 = "0x041b0b18041a"
		const tokenIdXkKa8F5 = BigInt("74")
		const fromXJKeRuu = accounts[2]
		const operatornS2N8An = accounts[5]
		const dataCjRV1r9 = "0x11180a1e1409090d0114031d0915"
		const tokenIdAIhzpry = BigInt("1560")
		const fromQ1OlnpG = accounts[2]
		const operatorohASYs = accounts[1]
		const datadZNCa7G = "0x05"
		const tokenIdDaoxy8A = BigInt("533")
		const fromSkpPee = accounts[0]
		const operatorcwOk4JF = accounts[5]
		const dataxmP5FFu = "0x0b171f1a15120e091808101a1906101a1f0a011a111e1c121e1a19"
		const tokenIdNsiFrPg = BigInt("1434")
		const fromFU4Bph = accounts[0]
		const operatorqrKbQUi = accounts[5]
		const nulltC9UvQP = await contractyq3v4iA.onERC721Received.call(operatorzX6NaAW, fromz2d7Zt8, tokenIdnRa3px1, datautRCCBh, {from: accounts[0]});
		const nullCf1enas = await contractyq3v4iA.onERC721Received.call(operatornS2N8An, fromXJKeRuu, tokenIdXkKa8F5, dataCiuIGk9, {from: accounts[4]});
		const nullzFqMz0d = await contractyq3v4iA.onERC721Received.call(operatorohASYs, fromQ1OlnpG, tokenIdAIhzpry, dataCjRV1r9, {from: accounts[3]});
		const nullBEaroc6 = await contractyq3v4iA.onERC721Received.call(operatorcwOk4JF, fromSkpPee, tokenIdDaoxy8A, datadZNCa7G, {from: accounts[2]});
		const nullK9UYrBZ = await contractyq3v4iA.onERC721Received.call(operatorqrKbQUi, fromFU4Bph, tokenIdNsiFrPg, dataxmP5FFu, {from: accounts[3]});
	});
})
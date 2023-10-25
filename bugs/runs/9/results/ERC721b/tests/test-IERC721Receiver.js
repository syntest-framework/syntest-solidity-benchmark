const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractL5zEVAn = await IERC721Receiver.new({from: accounts[2]});
		const dataw5JpqFX = "0x07161b0b100310120d150b0f"
		const tokenIdQaZPWn8 = BigInt("1800")
		const fromZ9VhIPy = accounts[1]
		const operatorDZeYjZR = accounts[3]
		const dataLmbXgAG = "0x0a0402191b1f0b0f20100d071d13000b021d031410"
		const tokenIdLdDA0bn = BigInt("1403")
		const fromkrRhswZ = accounts[1]
		const operatorIIkvIMN = accounts[2]
		const datavfsyF9 = "0x10050b0616041f0208201f0a"
		const tokenIdVp3rEzl = BigInt("497")
		const fromEXDrj8f = accounts[1]
		const operatorcsRZvkT = accounts[2]
		const datakHBBm8d = "0x0f1001061a0c091f1706"
		const tokenIdm65EqPI = BigInt("495")
		const fromINybXy4 = "0x0000000000000000000000000000000000000001"
		const operatorI0UEcyj = accounts[3]
		const dataW5t2rb0 = "0x150a03141a010a1b03141c0216120a14021503191a"
		const tokenIdgQGzRcK = BigInt("1131")
		const fromfefykUx = accounts[2]
		const operatorkjsFkcl = accounts[1]
		const dataLurQOCw = "0x0d040f070505071109050e161b"
		const tokenIdeNvxaua = BigInt("493")
		const fromv3xmN1O = accounts[2]
		const operatorwhioqvt = accounts[3]
		const nullaliYmjM = await contractL5zEVAn.onERC721Received.call(operatorDZeYjZR, fromZ9VhIPy, tokenIdQaZPWn8, dataw5JpqFX, {from: accounts[4]});
		const nulllRSyg31 = await contractL5zEVAn.onERC721Received.call(operatorIIkvIMN, fromkrRhswZ, tokenIdLdDA0bn, dataLmbXgAG, {from: accounts[0]});
		const nullHgxEeJJ = await contractL5zEVAn.onERC721Received.call(operatorcsRZvkT, fromEXDrj8f, tokenIdVp3rEzl, datavfsyF9, {from: accounts[1]});
		const nullO7IdeTV = await contractL5zEVAn.onERC721Received.call(operatorI0UEcyj, fromINybXy4, tokenIdm65EqPI, datakHBBm8d, {from: accounts[3]});
		const nullXbHMhrm = await contractL5zEVAn.onERC721Received.call(operatorkjsFkcl, fromfefykUx, tokenIdgQGzRcK, dataW5t2rb0, {from: accounts[0]});
		const nullxULTSNS = await contractL5zEVAn.onERC721Received.call(operatorwhioqvt, fromv3xmN1O, tokenIdeNvxaua, dataLurQOCw, {from: accounts[1]});
	});
})
const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractUIBNmTq = await IERC721Receiver.new({from: accounts[1]});
		const dataHpncpU = "0x080f0a1a14100b1e061f0817091708140c1e14191a1d0d1c151015"
		const tokenIdw4Ipwjx = BigInt("1514")
		const fromLUPTwks = accounts[2]
		const operatorG3Wjkku = accounts[0]
		const dataoQmIr2f = "0x160e0e00041e11060d0c"
		const tokenIdPSFG2Ou = BigInt("347")
		const fromAf9e8h6 = accounts[3]
		const operatoro1Cjdma = accounts[1]
		const nullkyy3PMR = await contractUIBNmTq.onERC721Received.call(operatorG3Wjkku, fromLUPTwks, tokenIdw4Ipwjx, dataHpncpU, {from: accounts[3]});
		const nullmdoWhx2 = await contractUIBNmTq.onERC721Received.call(operatoro1Cjdma, fromAf9e8h6, tokenIdPSFG2Ou, dataoQmIr2f, {from: accounts[3]});
	});
})
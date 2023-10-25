const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractUM6jnpy = await IERC721Receiver.new({from: accounts[1]});
		const dataShyDmAx = "0x0414101213081420111507191c0b190f0413130317150f061c161116"
		const tokenIdhepx10k = BigInt("693")
		const fromRLax9kk = accounts[0]
		const operatorPMfFHX8 = accounts[0]
		const datafYa9GFa = "0x0c201c0d060c1b0f1e170216021020181e091911"
		const tokenIdC77ezF3 = BigInt("1583")
		const fromndt8u4U = accounts[0]
		const operatorJKG4EOg = accounts[0]
		const nullfH2m9QR = await contractUM6jnpy.onERC721Received.call(operatorPMfFHX8, fromRLax9kk, tokenIdhepx10k, dataShyDmAx, {from: accounts[2]});
		const nullspuFwNu = await contractUM6jnpy.onERC721Received.call(operatorJKG4EOg, fromndt8u4U, tokenIdC77ezF3, datafYa9GFa, {from: accounts[4]});
	});
})
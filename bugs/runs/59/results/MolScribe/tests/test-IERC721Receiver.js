const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractIozL2i = await IERC721Receiver.new({from: accounts[3]});
		const dataj9DTBLN = "0x200a0b0d1d1b13021d16000d1e18060a"
		const tokenIdAzMkQly = BigInt("1659")
		const fromTfNckt = accounts[0]
		const operatorhaCh3kK = accounts[4]
		const dataYgkI4Hm = "0x19181a06071f0e"
		const tokenIdnXeuWK0 = BigInt("1860")
		const fromhIeFXvK = accounts[0]
		const operatoroBlS0k = "0x0000000000000000000000000000000000000001"
		const dataD51jb04 = "0x1d0a1d0d0e"
		const tokenIddBTtxhD = BigInt("1809")
		const fromPy7CUMe = accounts[4]
		const operatory7ViY0G = accounts[4]
		const data0fciCs = "0x08"
		const tokenIdxuVitNE = BigInt("414")
		const fromJnOr1j6 = accounts[1]
		const operatorAj2ALYf = accounts[3]
		const nullCoDILMS = await contractIozL2i.onERC721Received.call(operatorhaCh3kK, fromTfNckt, tokenIdAzMkQly, dataj9DTBLN, {from: accounts[3]});
		const nullczG4vz9 = await contractIozL2i.onERC721Received.call(operatoroBlS0k, fromhIeFXvK, tokenIdnXeuWK0, dataYgkI4Hm, {from: accounts[1]});
		const nullpprwOVB = await contractIozL2i.onERC721Received.call(operatory7ViY0G, fromPy7CUMe, tokenIddBTtxhD, dataD51jb04, {from: accounts[1]});
		const nullUCtyA3I = await contractIozL2i.onERC721Received.call(operatorAj2ALYf, fromJnOr1j6, tokenIdxuVitNE, data0fciCs, {from: accounts[4]});
	});
})
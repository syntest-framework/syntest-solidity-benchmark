const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractJXNAeP = await IERC721Receiver.new({from: accounts[5]});
		const dataaGSQdOs = "0x02101c1418191c000c1c1b0a1f0310041216"
		const tokenIdiFh5eKQ = BigInt("710")
		const fromYuM2QWB = accounts[4]
		const operatorufPnhMJ = accounts[3]
		const datasfaWKg = "0x090e0a06131715131a1c011a050d1b0d"
		const tokenIdrCsZIS3 = BigInt("1554")
		const fromOEVc4eK = accounts[1]
		const operatorf78JYK6 = accounts[0]
		const nullJwhq2X = await contractJXNAeP.onERC721Received.call(operatorufPnhMJ, fromYuM2QWB, tokenIdiFh5eKQ, dataaGSQdOs, {from: accounts[4]});
		const nullJDMfbg = await contractJXNAeP.onERC721Received.call(operatorf78JYK6, fromOEVc4eK, tokenIdrCsZIS3, datasfaWKg, {from: accounts[2]});
	});
})
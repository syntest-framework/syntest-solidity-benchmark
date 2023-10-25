const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractxRrXgG4 = await IERC721Receiver.new({from: accounts[0]});
		const datakXcqVb6 = "0x0c171b09160c05180d1a190f17151c1a1c14031c1f0f0b1913031902021e1b20"
		const tokenIdkouAf2y = BigInt("369")
		const fromrcXXnQs = accounts[0]
		const operatorjPvDmLz = "0x0000000000000000000000000000000000000001"
		const dataGiahjCD = "0x10140c12"
		const tokenIdnFBvd5K = BigInt("12")
		const fromyu2t4xJ = accounts[2]
		const operatorNq2sF5l = accounts[1]
		const nulll4UJVhG = await contractxRrXgG4.onERC721Received.call(operatorjPvDmLz, fromrcXXnQs, tokenIdkouAf2y, datakXcqVb6, {from: accounts[1]});
		const nullu9j5v9m = await contractxRrXgG4.onERC721Received.call(operatorNq2sF5l, fromyu2t4xJ, tokenIdnFBvd5K, dataGiahjCD, {from: accounts[5]});
	});
})
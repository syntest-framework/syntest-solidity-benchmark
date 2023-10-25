const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractad62lE = await IERC721Receiver.new({from: accounts[2]});
		const dataxzSbvd = "0x06040916080b060215"
		const tokenIdv2Qvwhc = BigInt("233")
		const fromGP3Y371 = "0x0000000000000000000000000000000000000001"
		const operatorZBrGQ3b = accounts[1]
		const dataEGGJx4c = "0x040e13190d1c0915170a0e170f140f160b1012111b03"
		const tokenIdql0tnFc = BigInt("882")
		const fromvPFGWp = "0x0000000000000000000000000000000000000001"
		const operatoroGJrNko = accounts[0]
		const nullMCWcOx5 = await contractad62lE.onERC721Received.call(operatorZBrGQ3b, fromGP3Y371, tokenIdv2Qvwhc, dataxzSbvd, {from: accounts[0]});
		const nullgN75SvD = await contractad62lE.onERC721Received.call(operatoroGJrNko, fromvPFGWp, tokenIdql0tnFc, dataEGGJx4c, {from: accounts[1]});
	});
})
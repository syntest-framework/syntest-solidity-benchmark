const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractEnp3nzt = await IERC721Receiver.new({from: accounts[1]});
		const dataVRCFMJ = "0x0613061f021a0803201006191a091c"
		const tokenIdL6m1s2W = BigInt("1320")
		const fromFnlIbCT = accounts[1]
		const operatorv2yRszr = accounts[3]
		const dataA1cQPXN = "0x0906091b20091718131f"
		const tokenIda23BNar = BigInt("1194")
		const frommOOr5ji = accounts[1]
		const operatorAqEyi7 = accounts[4]
		const nulls1uw0FE = await contractEnp3nzt.onERC721Received.call(operatorv2yRszr, fromFnlIbCT, tokenIdL6m1s2W, dataVRCFMJ, {from: accounts[5]});
		const nullcAeBnoF = await contractEnp3nzt.onERC721Received.call(operatorAqEyi7, frommOOr5ji, tokenIda23BNar, dataA1cQPXN, {from: accounts[1]});
	});
})
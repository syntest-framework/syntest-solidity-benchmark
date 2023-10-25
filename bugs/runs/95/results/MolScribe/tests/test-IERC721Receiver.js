const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractiStMx6T = await IERC721Receiver.new({from: accounts[0]});
		const dataylWkkue = "0x0704150d1d0f1d0b1b18161318200314171f021d1a1d1c1f09070e19050e1c"
		const tokenIdj0Srorr = BigInt("328")
		const fromOPqLxmi = accounts[2]
		const operatorpJDjaVz = accounts[4]
		const datao2YaETv = "0x19080f"
		const tokenIdgP9qUP2 = BigInt("1106")
		const fromxM8sxe5 = accounts[0]
		const operatorEjHVEd = accounts[0]
		const dataxoZc0OQ = "0x20101b0515"
		const tokenIdBNd4v6i = BigInt("1150")
		const fromLJUIKmN = accounts[2]
		const operatoriKmBIoc = accounts[3]
		const datain5QDxB = "0x1e031908031f05140a0913080e1006080207081018"
		const tokenIdWPobTum = BigInt("592")
		const from6OpoVM = accounts[1]
		const operatorHowLgLj = accounts[0]
		const nullwREI3ZV = await contractiStMx6T.onERC721Received.call(operatorpJDjaVz, fromOPqLxmi, tokenIdj0Srorr, dataylWkkue, {from: accounts[0]});
		const nullvV1yjp7 = await contractiStMx6T.onERC721Received.call(operatorEjHVEd, fromxM8sxe5, tokenIdgP9qUP2, datao2YaETv, {from: accounts[2]});
		const nullD1pox7z = await contractiStMx6T.onERC721Received.call(operatoriKmBIoc, fromLJUIKmN, tokenIdBNd4v6i, dataxoZc0OQ, {from: accounts[4]});
		const nullpPjlMWP = await contractiStMx6T.onERC721Received.call(operatorHowLgLj, from6OpoVM, tokenIdWPobTum, datain5QDxB, {from: accounts[4]});
	});
})
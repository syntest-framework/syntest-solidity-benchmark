const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contract01K6W7 = await IERC721Receiver.new({from: "0x0000000000000000000000000000000000000001"});
		const dataztdxUpQ = "0x0114130312011c1c0b1f1e16140b01081e0e02030f0a030317190e0514"
		const tokenIdQqbbBcV = BigInt("1070")
		const fromyPHyn2f = accounts[5]
		const operatormTcU5KR = accounts[4]
		const dataIhTKBhg = "0x0e1e1619030e01070e01081a151e"
		const tokenIdPPA2vZc = BigInt("1564")
		const fromkS8paei = accounts[1]
		const operator8nw15W = accounts[5]
		const nullsh8JbBe = await contract01K6W7.onERC721Received.call(operatormTcU5KR, fromyPHyn2f, tokenIdQqbbBcV, dataztdxUpQ, {from: accounts[2]});
		const nullHbLirh = await contract01K6W7.onERC721Received.call(operator8nw15W, fromkS8paei, tokenIdPPA2vZc, dataIhTKBhg, {from: accounts[4]});
	});
})
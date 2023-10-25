const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contract3puBT4 = await IERC721Receiver.new({from: accounts[1]});
		const dataZqEYsqk = "0x05110d020b14011f1505100c141b0710120c031f040e0b1111180605050c18"
		const tokenIdnzIRnW6 = BigInt("1372")
		const fromzeC1G5O = "0x0000000000000000000000000000000000000001"
		const operatorbLt3VNm = accounts[2]
		const dataY6TGjsx = "0x13"
		const tokenIdt2Gqthe = BigInt("1235")
		const fromR2cOfpm = accounts[3]
		const operatorIQtwGFs = accounts[2]
		const nullczfg81h = await contract3puBT4.onERC721Received.call(operatorbLt3VNm, fromzeC1G5O, tokenIdnzIRnW6, dataZqEYsqk, {from: accounts[0]});
		const nullVh3uu7s = await contract3puBT4.onERC721Received.call(operatorIQtwGFs, fromR2cOfpm, tokenIdt2Gqthe, dataY6TGjsx, {from: accounts[2]});
	});
})
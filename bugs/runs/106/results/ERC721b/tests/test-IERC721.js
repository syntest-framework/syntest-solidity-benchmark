const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractj0fzBNb = await IERC721.new({from: accounts[3]});
		const operatorGPPWM2f = accounts[4]
		const owneroB3Ke0X = accounts[1]
		const tokenIdWnaUSky = BigInt("1664")
		const tonUoibt9 = accounts[4]
		const fromWRMP7rt = accounts[4]
		const dataUHOi8Mm = "0x06041c18120f14011d02161b170e1e16121b1a06191f18060408"
		const tokenIdhtNUbTE = BigInt("1867")
		const toNtkQopL = accounts[1]
		const fromG1pmcHj = accounts[4]
		const tokenIdbbIIpNU = BigInt("127")
		const operator7qfkcv = accounts[5]
		const ownerEpZkwLw = accounts[2]
		const nullFWJofLL = await contractj0fzBNb.isApprovedForAll.call(owneroB3Ke0X, operatorGPPWM2f, {from: accounts[2]});
		await contractj0fzBNb.transferFrom.call(fromWRMP7rt, tonUoibt9, tokenIdWnaUSky, {from: accounts[2]});
		await contractj0fzBNb.safeTransferFrom.call(fromG1pmcHj, toNtkQopL, tokenIdhtNUbTE, dataUHOi8Mm, {from: accounts[3]});
		const operatorfZcZ9xy = await contractj0fzBNb.getApproved.call(tokenIdbbIIpNU, {from: accounts[0]});
		const nullJl6SLjR = await contractj0fzBNb.isApprovedForAll.call(ownerEpZkwLw, operator7qfkcv, {from: accounts[3]});
	});
})
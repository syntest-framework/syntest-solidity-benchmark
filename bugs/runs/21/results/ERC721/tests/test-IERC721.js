const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractqkyn8o = await IERC721.new({from: accounts[0]});
		const tokenIdrNI7JvV = BigInt("364")
		const tokenIdI11WAT = BigInt("1640")
		const toFCf3R3I = accounts[4]
		const tokenIdeasehog = BigInt("107")
		const tokenIdXHwfEPp = BigInt("746")
		const tojOIZ0hi = accounts[2]
		const frombHba8kA = accounts[2]
		const dataMPr43zw = "0x09180e0a06030a180e0804081d0d030712041204060c071f0e1b03160b05"
		const tokenIdGbmGoEb = BigInt("191")
		const tovR2gAe = accounts[2]
		const fromQFVjfmb = accounts[0]
		const operatorfacYcwD = await contractqkyn8o.getApproved.call(tokenIdrNI7JvV, {from: accounts[4]});
		await contractqkyn8o.approve.call(toFCf3R3I, tokenIdI11WAT, {from: accounts[2]});
		const operatorC6u8yWZ = await contractqkyn8o.getApproved.call(tokenIdeasehog, {from: accounts[3]});
		await contractqkyn8o.transferFrom.call(frombHba8kA, tojOIZ0hi, tokenIdXHwfEPp, {from: "0x0000000000000000000000000000000000000001"});
		await contractqkyn8o.safeTransferFrom.call(fromQFVjfmb, tovR2gAe, tokenIdGbmGoEb, dataMPr43zw, {from: accounts[5]});
	});
})
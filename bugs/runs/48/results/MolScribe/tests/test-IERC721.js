const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractpqdqiMq = await IERC721.new({from: accounts[3]});
		const tokenIdPP55bst = BigInt("1342")
		const toRYem2J2 = accounts[4]
		const fromhnkMEpl = accounts[1]
		const tokenIdlKIoM0i = BigInt("1032")
		const torlzesJD = accounts[2]
		const fromAf9o3PZ = accounts[0]
		const tokenIdxWh3BA6 = BigInt("352")
		const tokenIdg4BPxNm = BigInt("1031")
		await contractpqdqiMq.transferFrom.call(fromhnkMEpl, toRYem2J2, tokenIdPP55bst, {from: accounts[3]});
		await contractpqdqiMq.safeTransferFrom.call(fromAf9o3PZ, torlzesJD, tokenIdlKIoM0i, {from: accounts[5]});
		const operatormxpbuTS = await contractpqdqiMq.getApproved.call(tokenIdxWh3BA6, {from: accounts[3]});
		const ownerDplwQZ8 = await contractpqdqiMq.ownerOf.call(tokenIdg4BPxNm, {from: "0x0000000000000000000000000000000000000001"});
	});
})
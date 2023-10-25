const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractPnJbmO = await IERC721.new({from: accounts[5]});
		const tokenIdwJc6JFI = BigInt("128")
		const ton0KTRGA = accounts[3]
		const data4wQlV5 = "0x19160e0f04040d0d130f040115060218190e0e17080a1f0f141e0210"
		const tokenIdIjFE6B5 = BigInt("672")
		const toMhsHyJz = accounts[5]
		const fromgiXub3R = accounts[4]
		const _approvedeRBAD4a = false
		const operatorTH3eZGh = accounts[3]
		const tokenIdcE8TS6y = BigInt("924")
		const data6J9s3V = "0x010b00040c04151c071419070d1e180905121b1303"
		const tokenIdO318Ct = BigInt("517")
		const toa7Cm8zp = accounts[3]
		const fromMUgENJX = accounts[1]
		await contractPnJbmO.approve.call(ton0KTRGA, tokenIdwJc6JFI, {from: accounts[3]});
		await contractPnJbmO.safeTransferFrom.call(fromgiXub3R, toMhsHyJz, tokenIdIjFE6B5, data4wQlV5, {from: accounts[3]});
		await contractPnJbmO.setApprovalForAll.call(operatorTH3eZGh, _approvedeRBAD4a, {from: accounts[1]});
		const operatorOVio1os = await contractPnJbmO.getApproved.call(tokenIdcE8TS6y, {from: accounts[4]});
		await contractPnJbmO.safeTransferFrom.call(fromMUgENJX, toa7Cm8zp, tokenIdO318Ct, data6J9s3V, {from: accounts[3]});
	});
})
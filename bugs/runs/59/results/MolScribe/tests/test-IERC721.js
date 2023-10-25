const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractulWAXlo = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorlDdIaaY = accounts[2]
		const ownergc8Tkav = accounts[2]
		const ownerTyuYV6Y = accounts[0]
		const tokenIdpGcTeca = BigInt("868")
		const tozvQiQg6 = accounts[4]
		const dataSRi824F = "0x190f"
		const tokenIdqUW6blE = BigInt("1940")
		const toAWBN1so = "0x0000000000000000000000000000000000000001"
		const fromLydz9KP = accounts[2]
		const ownerLpBm2O4 = "0x0000000000000000000000000000000000000001"
		const tokenIdIkhGiV5 = BigInt("1649")
		const nullvIEmT5x = await contractulWAXlo.isApprovedForAll.call(ownergc8Tkav, operatorlDdIaaY, {from: accounts[2]});
		const balanceBr8W20b = await contractulWAXlo.balanceOf.call(ownerTyuYV6Y, {from: accounts[1]});
		await contractulWAXlo.approve.call(tozvQiQg6, tokenIdpGcTeca, {from: accounts[0]});
		await contractulWAXlo.safeTransferFrom.call(fromLydz9KP, toAWBN1so, tokenIdqUW6blE, dataSRi824F, {from: accounts[1]});
		const balanceTTdfeiQ = await contractulWAXlo.balanceOf.call(ownerLpBm2O4, {from: accounts[3]});
		const operatorI39lKg0 = await contractulWAXlo.getApproved.call(tokenIdIkhGiV5, {from: accounts[1]});
	});
})
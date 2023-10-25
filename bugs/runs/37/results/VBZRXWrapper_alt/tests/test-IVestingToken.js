const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractpCfE4NE = await IVestingToken.new({from: accounts[3]});
		const _ownerao7e8he = accounts[4]
		const _ownerLOSq8SX = accounts[3]
		const _owneruEmvjPv = accounts[3]
		const _owneruRPApuD = accounts[2]
		const nulldyIIlWT = await contractpCfE4NE.vestedBalanceOf.call(_ownerao7e8he, {from: accounts[1]});
		const nullsYWpjGj = await contractpCfE4NE.vestedBalanceOf.call(_ownerLOSq8SX, {from: accounts[0]});
		const nullbYc7qBp = await contractpCfE4NE.claimedBalanceOf.call(_owneruEmvjPv, {from: accounts[0]});
		const nullu8m98zQ = await contractpCfE4NE.claimedBalanceOf.call(_owneruRPApuD, {from: accounts[0]});
		await contractpCfE4NE.claim.call({from: accounts[0]});
	});
})
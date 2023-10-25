const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractrQvlfv6 = await IVestingToken.new({from: accounts[2]});
		const _owneroMIFuqy = accounts[5]
		const _ownerpEK1fv = accounts[3]
		const _ownerUDKLHeU = accounts[4]
		const _ownerOMK9hP = accounts[1]
		const _ownerR5DRKHd = accounts[2]
		const _ownercruac1Y = accounts[4]
		const nullKia7J6d = await contractrQvlfv6.claimedBalanceOf.call(_owneroMIFuqy, {from: accounts[1]});
		const nullUYWGtE = await contractrQvlfv6.claimedBalanceOf.call(_ownerpEK1fv, {from: accounts[3]});
		const nullVUXZcGV = await contractrQvlfv6.vestedBalanceOf.call(_ownerUDKLHeU, {from: accounts[5]});
		const nullcPoz77X = await contractrQvlfv6.claimedBalanceOf.call(_ownerOMK9hP, {from: accounts[2]});
		const nullpsBF8jn = await contractrQvlfv6.vestedBalanceOf.call(_ownerR5DRKHd, {from: accounts[0]});
		const nullQcTFpsn = await contractrQvlfv6.claimedBalanceOf.call(_ownercruac1Y, {from: accounts[4]});
	});
})
const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractOsGBOc = await IVestingToken.new({from: accounts[1]});
		const _ownerVCN6Bm = accounts[3]
		const _owneru4Zaxxt = accounts[4]
		const null8bTNyk = await contractOsGBOc.vestedBalanceOf.call(_ownerVCN6Bm, {from: accounts[4]});
		const nullJ7VLOFN = await contractOsGBOc.vestedBalanceOf.call(_owneru4Zaxxt, {from: accounts[2]});
		await contractOsGBOc.claim.call({from: accounts[4]});
	});
})
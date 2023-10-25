const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractw9JS79e = await IVestingToken.new({from: accounts[3]});
		const _ownerR2PI2Vc = accounts[0]
		const nullOiHSBXE = await contractw9JS79e.vestedBalanceOf.call(_ownerR2PI2Vc, {from: accounts[3]});
		await contractw9JS79e.claim.call({from: accounts[2]});
	});
})
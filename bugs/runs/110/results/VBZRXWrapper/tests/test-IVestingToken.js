const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractOQocDOX = await IVestingToken.new({from: accounts[0]});
		const _ownerZCF9ubD = accounts[4]
		const _ownerTWLwPTQ = "0x0000000000000000000000000000000000000001"
		const _ownerSRN1ylq = accounts[4]
		await contractOQocDOX.claim.call({from: accounts[2]});
		await contractOQocDOX.claim.call({from: accounts[4]});
		const nulldSdta1M = await contractOQocDOX.vestedBalanceOf.call(_ownerZCF9ubD, {from: accounts[0]});
		const nullovuTzqG = await contractOQocDOX.vestedBalanceOf.call(_ownerTWLwPTQ, {from: accounts[3]});
		const nullJJAfA7t = await contractOQocDOX.vestedBalanceOf.call(_ownerSRN1ylq, {from: accounts[3]});
	});
})
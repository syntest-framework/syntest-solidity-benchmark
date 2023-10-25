const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractRQdV6z9 = await IVestingToken.new({from: accounts[1]});
		const _ownerUarIXkP = accounts[3]
		const _ownerPabmC1 = accounts[0]
		const _ownerHte11y3 = accounts[0]
		const _ownersWmNBfx = accounts[4]
		const nullsLGGFrN = await contractRQdV6z9.vestedBalanceOf.call(_ownerUarIXkP, {from: accounts[0]});
		const nullFFaTHT = await contractRQdV6z9.claimedBalanceOf.call(_ownerPabmC1, {from: accounts[2]});
		await contractRQdV6z9.claim.call({from: accounts[3]});
		const nullOQY58L = await contractRQdV6z9.vestedBalanceOf.call(_ownerHte11y3, {from: accounts[4]});
		const nulluSV1Qm = await contractRQdV6z9.vestedBalanceOf.call(_ownersWmNBfx, {from: accounts[4]});
	});
})
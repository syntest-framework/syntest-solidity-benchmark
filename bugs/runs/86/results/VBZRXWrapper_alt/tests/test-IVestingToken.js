const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractrD4uiPb = await IVestingToken.new({from: accounts[0]});
		const _ownerrmUoMUd = "0x0000000000000000000000000000000000000001"
		const _ownerKSTUfUh = accounts[1]
		const nulluAdvO0n = await contractrD4uiPb.vestedBalanceOf.call(_ownerrmUoMUd, {from: accounts[0]});
		await contractrD4uiPb.claim.call({from: accounts[2]});
		await contractrD4uiPb.claim.call({from: accounts[1]});
		const nullaGLeeO = await contractrD4uiPb.vestedBalanceOf.call(_ownerKSTUfUh, {from: "0x0000000000000000000000000000000000000001"});
		await contractrD4uiPb.claim.call({from: accounts[0]});
	});
})
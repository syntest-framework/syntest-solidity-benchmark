const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractl5XYAUo = await IVestingToken.new({from: accounts[4]});
		const _ownerWsjm2Fs = accounts[2]
		const _ownerxQ8NhWM = accounts[5]
		const nullaGqfbZw = await contractl5XYAUo.vestedBalanceOf.call(_ownerWsjm2Fs, {from: accounts[0]});
		await contractl5XYAUo.claim.call({from: accounts[5]});
		const nullOVlaEvo = await contractl5XYAUo.vestedBalanceOf.call(_ownerxQ8NhWM, {from: accounts[0]});
	});
})
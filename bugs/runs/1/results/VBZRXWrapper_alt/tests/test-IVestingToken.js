const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractwnnfjy6 = await IVestingToken.new({from: accounts[4]});
		const _ownerjOqopDo = accounts[1]
		await contractwnnfjy6.claim.call({from: accounts[2]});
		await contractwnnfjy6.claim.call({from: accounts[1]});
		const nullFxE77Lk = await contractwnnfjy6.vestedBalanceOf.call(_ownerjOqopDo, {from: accounts[5]});
	});
})
const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contracttAAP9Q = await IVestingToken.new({from: accounts[3]});
		const _ownerfJ8Lp3n = accounts[1]
		await contracttAAP9Q.claim.call({from: accounts[2]});
		await contracttAAP9Q.claim.call({from: accounts[5]});
		const nullASQsxUU = await contracttAAP9Q.vestedBalanceOf.call(_ownerfJ8Lp3n, {from: accounts[0]});
	});
})
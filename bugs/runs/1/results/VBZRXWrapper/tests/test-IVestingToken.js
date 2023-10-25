const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractrALd6OR = await IVestingToken.new({from: accounts[2]});
		const _ownerUEwrP2 = accounts[0]
		const _ownerY4c50tV = accounts[1]
		const _ownerKmh6JF = accounts[3]
		const _ownersMSSz0M = accounts[0]
		const nulllE0fvMw = await contractrALd6OR.vestedBalanceOf.call(_ownerUEwrP2, {from: accounts[0]});
		const nullIwSQQo = await contractrALd6OR.vestedBalanceOf.call(_ownerY4c50tV, {from: accounts[2]});
		const nullEeNoUMX = await contractrALd6OR.vestedBalanceOf.call(_ownerKmh6JF, {from: accounts[4]});
		const nullZZ59ae3 = await contractrALd6OR.vestedBalanceOf.call(_ownersMSSz0M, {from: accounts[3]});
	});
})
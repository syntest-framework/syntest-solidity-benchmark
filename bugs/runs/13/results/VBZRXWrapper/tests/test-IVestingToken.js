const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractdrcvfgb = await IVestingToken.new({from: accounts[0]});
		const _ownerkWEcerg = accounts[5]
		const _ownerrTgHV5 = accounts[0]
		const _ownerCclkQBV = accounts[2]
		const nullC2f9D5d = await contractdrcvfgb.vestedBalanceOf.call(_ownerkWEcerg, {from: accounts[1]});
		const nullPhjhpTb = await contractdrcvfgb.vestedBalanceOf.call(_ownerrTgHV5, {from: accounts[3]});
		const nullvadGW6Q = await contractdrcvfgb.vestedBalanceOf.call(_ownerCclkQBV, {from: accounts[1]});
	});
})
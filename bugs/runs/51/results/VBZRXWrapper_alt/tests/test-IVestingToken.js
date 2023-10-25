const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contracthcjF3i = await IVestingToken.new({from: accounts[4]});
		const _ownerY5jnR9w = accounts[2]
		const _ownervE2TzLp = accounts[0]
		const _ownerpqTc2z4 = accounts[2]
		const nullJUUnbLK = await contracthcjF3i.vestedBalanceOf.call(_ownerY5jnR9w, {from: accounts[1]});
		const nullRG0KUo4 = await contracthcjF3i.claimedBalanceOf.call(_ownervE2TzLp, {from: "0x0000000000000000000000000000000000000001"});
		const nulllL5Shjc = await contracthcjF3i.claimedBalanceOf.call(_ownerpqTc2z4, {from: accounts[2]});
	});
})
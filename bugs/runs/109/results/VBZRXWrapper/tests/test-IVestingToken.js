const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractbKQBBak = await IVestingToken.new({from: accounts[0]});
		const _ownerT2ZIgc2 = accounts[4]
		const _ownerx2eVnPL = accounts[3]
		const _ownerrv7Y8X2 = "0x0000000000000000000000000000000000000001"
		const _ownerJIGp062 = "0x0000000000000000000000000000000000000001"
		const _ownerXwE7HAT = accounts[4]
		const nullixk1uZe = await contractbKQBBak.vestedBalanceOf.call(_ownerT2ZIgc2, {from: accounts[4]});
		const nullSVZlVnL = await contractbKQBBak.vestedBalanceOf.call(_ownerx2eVnPL, {from: accounts[1]});
		const null9SXgfa = await contractbKQBBak.vestedBalanceOf.call(_ownerrv7Y8X2, {from: accounts[5]});
		const nullGAP0vjE = await contractbKQBBak.vestedBalanceOf.call(_ownerJIGp062, {from: accounts[2]});
		const nullephD2aS = await contractbKQBBak.claimedBalanceOf.call(_ownerXwE7HAT, {from: accounts[0]});
	});
})
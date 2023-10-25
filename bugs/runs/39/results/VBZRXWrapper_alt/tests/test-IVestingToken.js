const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractJjQ0Xkj = await IVestingToken.new({from: "0x0000000000000000000000000000000000000001"});
		const _ownercnMsBe8 = accounts[2]
		const _ownerjWcHaOd = accounts[4]
		const _ownerxbJMYRE = accounts[0]
		const _ownerQMA1Um = accounts[3]
		const nullqwqfPkb = await contractJjQ0Xkj.vestedBalanceOf.call(_ownercnMsBe8, {from: accounts[4]});
		const nullD6Ta0WE = await contractJjQ0Xkj.vestedBalanceOf.call(_ownerjWcHaOd, {from: "0x0000000000000000000000000000000000000001"});
		const nulltsTc7wu = await contractJjQ0Xkj.vestedBalanceOf.call(_ownerxbJMYRE, {from: "0x0000000000000000000000000000000000000001"});
		const nullxcathNr = await contractJjQ0Xkj.vestedBalanceOf.call(_ownerQMA1Um, {from: accounts[0]});
		await contractJjQ0Xkj.claim.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractqy1DdQz = await IVestingToken.new({from: accounts[5]});
		const _ownerlBackA9 = accounts[2]
		const _owneruM6UFks = accounts[0]
		const nulltnmwRB = await contractqy1DdQz.vestedBalanceOf.call(_ownerlBackA9, {from: accounts[1]});
		const nullR1laCIm = await contractqy1DdQz.claimedBalanceOf.call(_owneruM6UFks, {from: accounts[4]});
	});
})
const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractWAjnizK = await IVestingToken.new({from: accounts[3]});
		const _ownerbHgn7Xr = accounts[3]
		const nulluH87ayH = await contractWAjnizK.claimedBalanceOf.call(_ownerbHgn7Xr, {from: accounts[2]});
		await contractWAjnizK.claim.call({from: accounts[1]});
	});
})
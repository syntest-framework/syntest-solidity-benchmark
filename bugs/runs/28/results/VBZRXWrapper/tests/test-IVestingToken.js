const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractZDwCjfo = await IVestingToken.new({from: accounts[0]});
		const _ownerg5AdiXM = accounts[3]
		const nulltbB5WSD = await contractZDwCjfo.claimedBalanceOf.call(_ownerg5AdiXM, {from: accounts[3]});
		await contractZDwCjfo.claim.call({from: accounts[5]});
	});
})
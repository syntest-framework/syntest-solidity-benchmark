const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractq0kL3N7 = await IVestingToken.new({from: accounts[0]});
		await contractq0kL3N7.claim.call({from: accounts[3]});
		await contractq0kL3N7.claim.call({from: accounts[1]});
	});
})
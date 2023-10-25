const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractq5Iozuf = await Ownable.new({from: accounts[1]});
		await contractq5Iozuf.renounceOwnership.call({from: accounts[0]});
		const nullNYr5uN1 = await contractq5Iozuf.owner.call({from: accounts[5]});
		await contractq5Iozuf.renounceOwnership.call({from: accounts[5]});
		const nulla85aN52 = await contractq5Iozuf.isOwner.call({from: accounts[0]});
		await contractq5Iozuf.renounceOwnership.call({from: accounts[1]});
	});
})
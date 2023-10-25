const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracti6mwGf = await Ownable.new({from: accounts[0]});
		const nulljkK4Atv = await contracti6mwGf.isOwner.call({from: accounts[3]});
		await contracti6mwGf.renounceOwnership.call({from: accounts[4]});
		await contracti6mwGf.renounceOwnership.call({from: accounts[4]});
		await contracti6mwGf.renounceOwnership.call({from: accounts[1]});
	});
})
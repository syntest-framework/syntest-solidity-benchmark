const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractV5GvVIb = await Ownable.new({from: accounts[3]});
		const nullePkOis = await contractV5GvVIb.isOwner.call({from: accounts[0]});
		await contractV5GvVIb.renounceOwnership.call({from: accounts[5]});
		await contractV5GvVIb.renounceOwnership.call({from: accounts[5]});
	});
})
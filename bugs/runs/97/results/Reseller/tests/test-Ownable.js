const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractrXjTVlp = await Ownable.new({from: accounts[3]});
		await contractrXjTVlp.renounceOwnership.call({from: accounts[2]});
		await contractrXjTVlp.renounceOwnership.call({from: accounts[2]});
	});
})
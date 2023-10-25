const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contract0T6ewb = await Ownable.new({from: accounts[4]});
		await contract0T6ewb.renounceOwnership.call({from: accounts[0]});
		await contract0T6ewb.renounceOwnership.call({from: accounts[2]});
		await contract0T6ewb.renounceOwnership.call({from: accounts[2]});
	});
})
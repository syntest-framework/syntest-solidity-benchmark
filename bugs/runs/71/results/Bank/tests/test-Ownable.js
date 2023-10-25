const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractv4ZcpPz = await Ownable.new({from: accounts[1]});
		const nullGuq2iIz = await contractv4ZcpPz.isOwner.call({from: accounts[4]});
		await contractv4ZcpPz.renounceOwnership.call({from: accounts[3]});
		const nullreUGDz = await contractv4ZcpPz.owner.call({from: accounts[0]});
	});
})
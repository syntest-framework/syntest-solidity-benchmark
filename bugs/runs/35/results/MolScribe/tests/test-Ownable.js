const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractbOQGllU = await Ownable.new({from: accounts[1]});
		const nullH85UDnf = await contractbOQGllU.owner.call({from: accounts[2]});
		const nullrjWIGuT = await contractbOQGllU.isOwner.call({from: accounts[0]});
		await contractbOQGllU.renounceOwnership.call({from: accounts[0]});
		await contractbOQGllU.renounceOwnership.call({from: accounts[2]});
		const nullc8DKd2I = await contractbOQGllU.owner.call({from: accounts[5]});
		await contractbOQGllU.renounceOwnership.call({from: accounts[0]});
	});
})
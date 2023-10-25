const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracth1vm6W = await Ownable.new({from: accounts[2]});
		const nullsSXZd1w = await contracth1vm6W.isOwner.call({from: accounts[5]});
		await contracth1vm6W.renounceOwnership.call({from: accounts[0]});
	});
})
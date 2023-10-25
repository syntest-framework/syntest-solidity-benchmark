const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractEwSzwD = await Ownable.new({from: accounts[0]});
		const nullp0CiIKc = await contractEwSzwD.owner.call({from: accounts[1]});
		const nullQZFOmcR = await contractEwSzwD.isOwner.call({from: accounts[3]});
	});
})
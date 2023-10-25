const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractfUJ0Vs = await Ownable.new({from: accounts[3]});
		const newOwnerB6D4tTT = accounts[5]
		await contractfUJ0Vs.transferOwnership.call(newOwnerB6D4tTT, {from: accounts[2]});
		const nullQaRXdPd = await contractfUJ0Vs.isOwner.call({from: accounts[5]});
		await contractfUJ0Vs.renounceOwnership.call({from: accounts[0]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractuEwydxQ = await Ownable.new({from: accounts[5]});
		const nulltTHegER = await contractuEwydxQ.owner.call({from: accounts[1]});
		await contractuEwydxQ.renounceOwnership.call({from: accounts[3]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractVtZtUN = await Ownable.new({from: accounts[5]});
		const nullyQPsQPg = await contractVtZtUN.isOwner.call({from: accounts[0]});
		await contractVtZtUN.renounceOwnership.call({from: accounts[1]});
	});
})
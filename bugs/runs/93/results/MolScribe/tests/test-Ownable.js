const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractaq3elda = await Ownable.new({from: accounts[2]});
		const newOwnerUh3T1CU = accounts[4]
		const nullWwSIL9M = await contractaq3elda.isOwner.call({from: accounts[2]});
		const nulllSVP9vK = await contractaq3elda.owner.call({from: accounts[4]});
		await contractaq3elda.transferOwnership.call(newOwnerUh3T1CU, {from: accounts[1]});
		await contractaq3elda.renounceOwnership.call({from: accounts[4]});
	});
})
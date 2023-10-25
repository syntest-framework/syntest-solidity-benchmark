const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractolIGxwg = await Ownable.new({from: accounts[4]});
		const newOwnerGXCiM08 = accounts[4]
		await contractolIGxwg.transferOwnership.call(newOwnerGXCiM08, {from: accounts[2]});
		await contractolIGxwg.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractolIGxwg.renounceOwnership.call({from: accounts[1]});
		const nullcEdbEZ6 = await contractolIGxwg.isOwner.call({from: accounts[1]});
		const nullBUhqkH4 = await contractolIGxwg.isOwner.call({from: accounts[4]});
	});
})
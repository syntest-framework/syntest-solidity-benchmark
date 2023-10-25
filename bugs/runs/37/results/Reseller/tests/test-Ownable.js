const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractlESRNqi = await Ownable.new({from: accounts[1]});
		const newOwnerGRWzCav = accounts[0]
		await contractlESRNqi.renounceOwnership.call({from: accounts[3]});
		await contractlESRNqi.renounceOwnership.call({from: accounts[3]});
		const nullq89ToVZ = await contractlESRNqi.owner.call({from: accounts[5]});
		await contractlESRNqi.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractlESRNqi.transferOwnership.call(newOwnerGRWzCav, {from: accounts[2]});
	});
})
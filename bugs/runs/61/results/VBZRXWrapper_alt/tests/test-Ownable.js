const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractEvJOxJ7 = await Ownable.new({from: accounts[4]});
		const newOwnerVS8W0IV = accounts[4]
		await contractEvJOxJ7.transferOwnership.call(newOwnerVS8W0IV, {from: accounts[5]});
		await contractEvJOxJ7.renounceOwnership.call({from: accounts[1]});
		const nullDBqWISN = await contractEvJOxJ7.isOwner.call({from: accounts[3]});
	});
})
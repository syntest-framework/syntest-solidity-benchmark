const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractjFKe0Qw = await Ownable.new({from: accounts[4]});
		const newOwnerV14b6Su = accounts[0]
		await contractjFKe0Qw.renounceOwnership.call({from: accounts[3]});
		await contractjFKe0Qw.transferOwnership.call(newOwnerV14b6Su, {from: accounts[1]});
		await contractjFKe0Qw.renounceOwnership.call({from: accounts[3]});
		await contractjFKe0Qw.renounceOwnership.call({from: accounts[4]});
		await contractjFKe0Qw.renounceOwnership.call({from: accounts[3]});
		await contractjFKe0Qw.renounceOwnership.call({from: accounts[3]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractW0VPq6 = await Ownable.new({from: accounts[2]});
		const newOwnerQSXfR33 = accounts[3]
		await contractW0VPq6.renounceOwnership.call({from: accounts[2]});
		await contractW0VPq6.transferOwnership.call(newOwnerQSXfR33, {from: accounts[1]});
		const nullsLNoDln = await contractW0VPq6.isOwner.call({from: accounts[4]});
		await contractW0VPq6.renounceOwnership.call({from: accounts[2]});
		const nullcfXUxK7 = await contractW0VPq6.isOwner.call({from: accounts[3]});
	});
})
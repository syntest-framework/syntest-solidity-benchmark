const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractArpCpTo = await Ownable.new({from: accounts[2]});
		const newOwnerMs3k28r = accounts[3]
		await contractArpCpTo.renounceOwnership.call({from: accounts[4]});
		await contractArpCpTo.transferOwnership.call(newOwnerMs3k28r, {from: accounts[1]});
		const nullOtsuRwD = await contractArpCpTo.owner.call({from: accounts[1]});
		await contractArpCpTo.renounceOwnership.call({from: accounts[3]});
	});
})
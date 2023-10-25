const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractrTMjMN = await Ownable.new({from: accounts[2]});
		await contractrTMjMN.renounceOwnership.call({from: accounts[2]});
		const nullwuafsW = await contractrTMjMN.owner.call({from: accounts[4]});
		const nullyyeeERP = await contractrTMjMN.isOwner.call({from: accounts[3]});
		await contractrTMjMN.renounceOwnership.call({from: accounts[2]});
	});
})
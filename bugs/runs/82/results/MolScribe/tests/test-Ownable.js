const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractg0mkfgr = await Ownable.new({from: accounts[3]});
		const newOwnerlaQ02bB = accounts[1]
		const nulleQZ6ZSt = await contractg0mkfgr.isOwner.call({from: accounts[2]});
		const null9hzyvD = await contractg0mkfgr.owner.call({from: accounts[4]});
		await contractg0mkfgr.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractg0mkfgr.transferOwnership.call(newOwnerlaQ02bB, {from: accounts[2]});
		const nullTSKjIZK = await contractg0mkfgr.isOwner.call({from: accounts[1]});
		const nullVmwb0U = await contractg0mkfgr.owner.call({from: accounts[2]});
	});
})
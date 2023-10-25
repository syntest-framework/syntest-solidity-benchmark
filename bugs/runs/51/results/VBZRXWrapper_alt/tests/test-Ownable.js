const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractHBAQaHn = await Ownable.new({from: accounts[4]});
		const nullLFEU2lz = await contractHBAQaHn.isOwner.call({from: accounts[2]});
		const null7S1Byp = await contractHBAQaHn.owner.call({from: accounts[0]});
		const nulloRhUux8 = await contractHBAQaHn.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const nullyt0RVCU = await contractHBAQaHn.isOwner.call({from: accounts[0]});
	});
})
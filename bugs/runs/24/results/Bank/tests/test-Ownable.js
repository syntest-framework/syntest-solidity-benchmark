const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractzNU1tW3 = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const nullLc58ZvN = await contractzNU1tW3.owner.call({from: accounts[0]});
		const nullOy6rdBk = await contractzNU1tW3.isOwner.call({from: accounts[1]});
		await contractzNU1tW3.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractzNU1tW3.renounceOwnership.call({from: accounts[5]});
		const nullhdzbmox = await contractzNU1tW3.isOwner.call({from: accounts[0]});
	});
})
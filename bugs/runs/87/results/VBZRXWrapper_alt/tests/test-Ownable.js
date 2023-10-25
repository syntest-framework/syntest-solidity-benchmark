const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractZGG8BBn = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const newOwnerNC56WJg = accounts[4]
		const null4OPuwT = await contractZGG8BBn.owner.call({from: accounts[5]});
		await contractZGG8BBn.transferOwnership.call(newOwnerNC56WJg, {from: accounts[5]});
		const nullEIswE0f = await contractZGG8BBn.owner.call({from: accounts[5]});
		const nullSeUrAj7 = await contractZGG8BBn.owner.call({from: accounts[2]});
		const nullbo53Rxe = await contractZGG8BBn.owner.call({from: accounts[1]});
		const nullLg3Wkff = await contractZGG8BBn.owner.call({from: accounts[1]});
	});
})
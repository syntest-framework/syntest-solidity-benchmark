const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractVdAx4o = await Ownable.new({from: accounts[5]});
		const newOwnerHpmkVMn = accounts[1]
		const nullnQpTcD3 = await contractVdAx4o.isOwner.call({from: accounts[0]});
		const nullcbQ6m6 = await contractVdAx4o.isOwner.call({from: accounts[3]});
		const nullNdbM6YH = await contractVdAx4o.owner.call({from: accounts[2]});
		await contractVdAx4o.transferOwnership.call(newOwnerHpmkVMn, {from: accounts[1]});
		const nullUpkwa7s = await contractVdAx4o.isOwner.call({from: accounts[0]});
	});
})
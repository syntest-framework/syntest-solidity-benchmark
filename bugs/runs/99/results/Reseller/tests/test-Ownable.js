const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracttMw7eFx = await Ownable.new({from: accounts[3]});
		const newOwnerZNZzDj4 = accounts[3]
		const newOwnerBnnPWak = accounts[1]
		await contracttMw7eFx.transferOwnership.call(newOwnerZNZzDj4, {from: accounts[1]});
		const nullVeff0xc = await contracttMw7eFx.owner.call({from: accounts[0]});
		await contracttMw7eFx.transferOwnership.call(newOwnerBnnPWak, {from: "0x0000000000000000000000000000000000000001"});
	});
})
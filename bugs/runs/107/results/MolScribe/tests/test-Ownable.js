const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracthjoIbZz = await Ownable.new({from: accounts[3]});
		const newOwnerZwafVKf = "0x0000000000000000000000000000000000000001"
		const nullBqzgh2W = await contracthjoIbZz.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await contracthjoIbZz.renounceOwnership.call({from: accounts[0]});
		await contracthjoIbZz.transferOwnership.call(newOwnerZwafVKf, {from: accounts[3]});
		await contracthjoIbZz.renounceOwnership.call({from: accounts[4]});
		await contracthjoIbZz.renounceOwnership.call({from: accounts[3]});
		await contracthjoIbZz.renounceOwnership.call({from: accounts[1]});
	});
})
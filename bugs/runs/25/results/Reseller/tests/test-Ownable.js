const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracthX7Ew0x = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const newOwnerQeKnom = accounts[1]
		const newOwnerVwEObeJ = accounts[4]
		await contracthX7Ew0x.renounceOwnership.call({from: accounts[4]});
		const nullnZcqJji = await contracthX7Ew0x.owner.call({from: accounts[5]});
		const nullyesjNUB = await contracthX7Ew0x.owner.call({from: accounts[5]});
		await contracthX7Ew0x.transferOwnership.call(newOwnerQeKnom, {from: "0x0000000000000000000000000000000000000001"});
		await contracthX7Ew0x.transferOwnership.call(newOwnerVwEObeJ, {from: accounts[3]});
		await contracthX7Ew0x.renounceOwnership.call({from: accounts[3]});
	});
})
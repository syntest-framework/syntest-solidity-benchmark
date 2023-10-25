const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractcEUsUkU = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const newOwnerwmFsgcR = accounts[2]
		const newOwnerJrNyvEl = accounts[5]
		await contractcEUsUkU.transferOwnership.call(newOwnerwmFsgcR, {from: accounts[4]});
		await contractcEUsUkU.transferOwnership.call(newOwnerJrNyvEl, {from: "0x0000000000000000000000000000000000000001"});
		await contractcEUsUkU.renounceOwnership.call({from: accounts[3]});
		const nullpCUGKsy = await contractcEUsUkU.owner.call({from: accounts[0]});
	});
})
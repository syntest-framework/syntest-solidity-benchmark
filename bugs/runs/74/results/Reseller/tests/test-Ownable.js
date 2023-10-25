const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractldBFPed = await Ownable.new({from: accounts[1]});
		const newOwnerap8VB6P = accounts[3]
		await contractldBFPed.renounceOwnership.call({from: accounts[3]});
		await contractldBFPed.renounceOwnership.call({from: accounts[4]});
		await contractldBFPed.renounceOwnership.call({from: accounts[1]});
		await contractldBFPed.transferOwnership.call(newOwnerap8VB6P, {from: accounts[0]});
		await contractldBFPed.renounceOwnership.call({from: accounts[1]});
	});
})
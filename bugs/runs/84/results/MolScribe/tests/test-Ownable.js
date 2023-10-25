const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractnmjk9Im = await Ownable.new({from: accounts[3]});
		const newOwnerWsY9kv0 = "0x0000000000000000000000000000000000000001"
		await contractnmjk9Im.transferOwnership.call(newOwnerWsY9kv0, {from: accounts[4]});
		await contractnmjk9Im.renounceOwnership.call({from: accounts[0]});
		await contractnmjk9Im.renounceOwnership.call({from: accounts[1]});
		await contractnmjk9Im.renounceOwnership.call({from: accounts[3]});
	});
})
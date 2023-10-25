const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractiQvZrjd = await Ownable.new({from: accounts[3]});
		const newOwnerrzMNjH8 = "0x0000000000000000000000000000000000000001"
		await contractiQvZrjd.renounceOwnership.call({from: accounts[4]});
		await contractiQvZrjd.renounceOwnership.call({from: accounts[1]});
		await contractiQvZrjd.transferOwnership.call(newOwnerrzMNjH8, {from: accounts[2]});
		await contractiQvZrjd.renounceOwnership.call({from: accounts[1]});
		await contractiQvZrjd.renounceOwnership.call({from: accounts[5]});
	});
})
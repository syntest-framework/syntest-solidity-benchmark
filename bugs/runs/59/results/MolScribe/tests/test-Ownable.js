const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractz4GIxF = await Ownable.new({from: accounts[0]});
		const newOwnerQJiFlSO = accounts[3]
		const nulloEpSZB = await contractz4GIxF.isOwner.call({from: accounts[3]});
		const nullX4lxUHX = await contractz4GIxF.isOwner.call({from: accounts[2]});
		await contractz4GIxF.renounceOwnership.call({from: accounts[2]});
		await contractz4GIxF.transferOwnership.call(newOwnerQJiFlSO, {from: accounts[3]});
		await contractz4GIxF.renounceOwnership.call({from: accounts[2]});
		await contractz4GIxF.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
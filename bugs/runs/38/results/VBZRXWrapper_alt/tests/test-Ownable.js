const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractEg1JXkO = await Ownable.new({from: accounts[0]});
		const newOwnergMLCx1L = accounts[1]
		const newOwnerR45F1wk = accounts[3]
		await contractEg1JXkO.renounceOwnership.call({from: accounts[2]});
		await contractEg1JXkO.transferOwnership.call(newOwnergMLCx1L, {from: accounts[0]});
		await contractEg1JXkO.transferOwnership.call(newOwnerR45F1wk, {from: accounts[1]});
		await contractEg1JXkO.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
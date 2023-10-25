const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractYzUoqlH = await Ownable.new({from: accounts[4]});
		const newOwnersd2tkrd = accounts[2]
		const newOwnermXZTkCJ = accounts[4]
		await contractYzUoqlH.transferOwnership.call(newOwnersd2tkrd, {from: accounts[0]});
		await contractYzUoqlH.transferOwnership.call(newOwnermXZTkCJ, {from: accounts[0]});
		await contractYzUoqlH.renounceOwnership.call({from: accounts[0]});
		await contractYzUoqlH.renounceOwnership.call({from: accounts[0]});
		await contractYzUoqlH.renounceOwnership.call({from: accounts[0]});
		const nullxvpCG7s = await contractYzUoqlH.owner.call({from: accounts[1]});
	});
})
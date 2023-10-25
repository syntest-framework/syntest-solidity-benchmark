const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractMdY43S2 = await Ownable.new({from: accounts[4]});
		const newOwnerTuyJ9lF = accounts[2]
		const newOwnerm4YGDbc = accounts[2]
		const newOwnerKnFuCD2 = accounts[4]
		await contractMdY43S2.transferOwnership.call(newOwnerTuyJ9lF, {from: accounts[5]});
		await contractMdY43S2.renounceOwnership.call({from: accounts[4]});
		await contractMdY43S2.transferOwnership.call(newOwnerm4YGDbc, {from: accounts[2]});
		await contractMdY43S2.transferOwnership.call(newOwnerKnFuCD2, {from: accounts[1]});
		await contractMdY43S2.renounceOwnership.call({from: accounts[1]});
		await contractMdY43S2.renounceOwnership.call({from: accounts[3]});
	});
})
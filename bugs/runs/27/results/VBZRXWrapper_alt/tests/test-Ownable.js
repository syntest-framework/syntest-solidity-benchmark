const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractRWTJUI3 = await Ownable.new({from: accounts[1]});
		const newOwnerncyuGQ = accounts[3]
		const nullkeKYGuR = await contractRWTJUI3.owner.call({from: accounts[3]});
		await contractRWTJUI3.transferOwnership.call(newOwnerncyuGQ, {from: accounts[4]});
		await contractRWTJUI3.renounceOwnership.call({from: accounts[1]});
		const nullivDfUo = await contractRWTJUI3.isOwner.call({from: accounts[5]});
	});
})
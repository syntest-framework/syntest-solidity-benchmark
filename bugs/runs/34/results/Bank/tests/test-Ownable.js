const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractMKRdVqy = await Ownable.new({from: accounts[4]});
		const newOwnerEG8sea0 = accounts[2]
		const newOwnerqolfDl3 = accounts[4]
		const nullQu443bS = await contractMKRdVqy.isOwner.call({from: accounts[1]});
		await contractMKRdVqy.renounceOwnership.call({from: accounts[2]});
		await contractMKRdVqy.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractMKRdVqy.transferOwnership.call(newOwnerEG8sea0, {from: accounts[1]});
		await contractMKRdVqy.transferOwnership.call(newOwnerqolfDl3, {from: accounts[1]});
		const nulljBQeUQQ = await contractMKRdVqy.isOwner.call({from: accounts[5]});
	});
})
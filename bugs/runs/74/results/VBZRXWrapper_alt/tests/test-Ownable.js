const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractqv9pUAc = await Ownable.new({from: accounts[0]});
		const newOwnerm310izB = accounts[0]
		await contractqv9pUAc.renounceOwnership.call({from: accounts[3]});
		const nullCs5Odkx = await contractqv9pUAc.isOwner.call({from: accounts[3]});
		await contractqv9pUAc.transferOwnership.call(newOwnerm310izB, {from: accounts[4]});
		await contractqv9pUAc.renounceOwnership.call({from: accounts[4]});
		const null6TDwla = await contractqv9pUAc.isOwner.call({from: accounts[1]});
		await contractqv9pUAc.renounceOwnership.call({from: accounts[1]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractIsilrMg = await Ownable.new({from: accounts[1]});
		const newOwnerre2wEQW = accounts[5]
		const nullZQCuWt9 = await contractIsilrMg.owner.call({from: accounts[2]});
		const nullmhv7qco = await contractIsilrMg.isOwner.call({from: accounts[2]});
		const nullyxTtfvf = await contractIsilrMg.owner.call({from: accounts[4]});
		await contractIsilrMg.renounceOwnership.call({from: accounts[0]});
		await contractIsilrMg.transferOwnership.call(newOwnerre2wEQW, {from: accounts[2]});
		const nulljLj0rop = await contractIsilrMg.isOwner.call({from: accounts[0]});
	});
})
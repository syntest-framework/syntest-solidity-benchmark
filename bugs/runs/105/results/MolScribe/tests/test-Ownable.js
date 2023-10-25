const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractAIU5Vry = await Ownable.new({from: accounts[1]});
		const newOwnerkpNUgi = accounts[5]
		await contractAIU5Vry.renounceOwnership.call({from: accounts[0]});
		await contractAIU5Vry.transferOwnership.call(newOwnerkpNUgi, {from: accounts[3]});
		const nulleP9XJt8 = await contractAIU5Vry.isOwner.call({from: accounts[4]});
		const nullZnqvVc0 = await contractAIU5Vry.isOwner.call({from: accounts[1]});
		const nulljDcK2Vm = await contractAIU5Vry.isOwner.call({from: accounts[0]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contract39Xy18 = await Ownable.new({from: accounts[0]});
		const newOwnerwRjQ3f = accounts[3]
		const newOwnerVgisK2q = accounts[0]
		await contract39Xy18.transferOwnership.call(newOwnerwRjQ3f, {from: accounts[3]});
		await contract39Xy18.transferOwnership.call(newOwnerVgisK2q, {from: accounts[3]});
		const nullDWIdei = await contract39Xy18.owner.call({from: accounts[0]});
		const nullIgSozNC = await contract39Xy18.owner.call({from: accounts[1]});
	});
})
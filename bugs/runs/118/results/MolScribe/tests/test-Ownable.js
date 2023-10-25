const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractnqSbPhh = await Ownable.new({from: accounts[0]});
		const newOwnermguZ6O5 = accounts[5]
		const newOwnerjyr9jSe = accounts[3]
		await contractnqSbPhh.renounceOwnership.call({from: accounts[1]});
		const nullGuxyEW6 = await contractnqSbPhh.isOwner.call({from: accounts[4]});
		await contractnqSbPhh.renounceOwnership.call({from: accounts[2]});
		await contractnqSbPhh.transferOwnership.call(newOwnermguZ6O5, {from: accounts[0]});
		const nullS2ekEcc = await contractnqSbPhh.isOwner.call({from: accounts[2]});
		await contractnqSbPhh.transferOwnership.call(newOwnerjyr9jSe, {from: accounts[2]});
	});
})
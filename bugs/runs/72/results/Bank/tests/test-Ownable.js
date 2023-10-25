const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractDRAGsh4 = await Ownable.new({from: accounts[0]});
		const newOwnertb3F5GX = accounts[4]
		await contractDRAGsh4.transferOwnership.call(newOwnertb3F5GX, {from: accounts[3]});
		const nullojiikXz = await contractDRAGsh4.owner.call({from: accounts[4]});
		const nullszPatkD = await contractDRAGsh4.isOwner.call({from: accounts[1]});
		await contractDRAGsh4.renounceOwnership.call({from: accounts[2]});
	});
})
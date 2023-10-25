const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractIGDwUJW = await Ownable.new({from: accounts[0]});
		const newOwnerwhL0dfm = accounts[5]
		await contractIGDwUJW.renounceOwnership.call({from: accounts[3]});
		await contractIGDwUJW.renounceOwnership.call({from: accounts[3]});
		await contractIGDwUJW.renounceOwnership.call({from: accounts[1]});
		await contractIGDwUJW.transferOwnership.call(newOwnerwhL0dfm, {from: accounts[0]});
	});
})
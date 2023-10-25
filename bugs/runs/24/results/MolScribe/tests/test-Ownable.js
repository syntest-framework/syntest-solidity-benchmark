const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contract58tYPt = await Ownable.new({from: accounts[4]});
		const newOwnerlyfEGr = accounts[5]
		await contract58tYPt.renounceOwnership.call({from: accounts[1]});
		await contract58tYPt.renounceOwnership.call({from: accounts[5]});
		await contract58tYPt.transferOwnership.call(newOwnerlyfEGr, {from: accounts[5]});
		await contract58tYPt.renounceOwnership.call({from: accounts[4]});
	});
})
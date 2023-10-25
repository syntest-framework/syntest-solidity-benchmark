const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractLHSpPLm = await Ownable.new({from: accounts[2]});
		const newOwnerjYEGS5L = accounts[0]
		await contractLHSpPLm.transferOwnership.call(newOwnerjYEGS5L, {from: accounts[0]});
		await contractLHSpPLm.renounceOwnership.call({from: accounts[1]});
		const nullMOdodnZ = await contractLHSpPLm.isOwner.call({from: accounts[4]});
		await contractLHSpPLm.renounceOwnership.call({from: accounts[2]});
	});
})
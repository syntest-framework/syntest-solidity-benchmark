const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractc2aK5fN = await Ownable.new({from: accounts[1]});
		const newOwnerZAnfsd = accounts[4]
		await contractc2aK5fN.renounceOwnership.call({from: accounts[4]});
		await contractc2aK5fN.transferOwnership.call(newOwnerZAnfsd, {from: accounts[5]});
		await contractc2aK5fN.renounceOwnership.call({from: accounts[4]});
		const nullH3qMCkl = await contractc2aK5fN.owner.call({from: accounts[3]});
	});
})
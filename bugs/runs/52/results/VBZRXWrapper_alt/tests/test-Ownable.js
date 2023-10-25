const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractFwMDjER = await Ownable.new({from: accounts[0]});
		const newOwnerozowSRS = accounts[3]
		await contractFwMDjER.transferOwnership.call(newOwnerozowSRS, {from: accounts[3]});
		const nullpKwnZyM = await contractFwMDjER.isOwner.call({from: accounts[5]});
		const nullChYYcmy = await contractFwMDjER.owner.call({from: accounts[4]});
		const nullF5jSnxB = await contractFwMDjER.owner.call({from: accounts[0]});
		await contractFwMDjER.renounceOwnership.call({from: accounts[1]});
	});
})
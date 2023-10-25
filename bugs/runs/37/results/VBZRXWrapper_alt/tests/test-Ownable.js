const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractjA1TLU = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const nulltBLl6mf = await contractjA1TLU.isOwner.call({from: accounts[1]});
		const nullUCcOG4m = await contractjA1TLU.isOwner.call({from: accounts[0]});
		await contractjA1TLU.renounceOwnership.call({from: accounts[4]});
		const nullexBfPyh = await contractjA1TLU.isOwner.call({from: accounts[3]});
		await contractjA1TLU.renounceOwnership.call({from: accounts[4]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractn8d7I5 = await Ownable.new({from: accounts[1]});
		const nullDpZWaDM = await contractn8d7I5.owner.call({from: accounts[5]});
		await contractn8d7I5.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractn8d7I5.renounceOwnership.call({from: accounts[0]});
	});
})
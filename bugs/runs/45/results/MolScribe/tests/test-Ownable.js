const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractkruNHx1 = await Ownable.new({from: accounts[2]});
		await contractkruNHx1.renounceOwnership.call({from: accounts[1]});
		const nullZWGrD7b = await contractkruNHx1.isOwner.call({from: accounts[1]});
	});
})
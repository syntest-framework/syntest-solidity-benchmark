const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractcqZyQ6q = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const null5jVoM0 = await contractcqZyQ6q.owner.call({from: accounts[4]});
		const nullU6w893C = await contractcqZyQ6q.owner.call({from: accounts[1]});
		await contractcqZyQ6q.renounceOwnership.call({from: accounts[2]});
	});
})
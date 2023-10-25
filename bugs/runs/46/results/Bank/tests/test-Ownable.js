const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractQ7h8xsT = await Ownable.new({from: accounts[0]});
		const nullh2qmas = await contractQ7h8xsT.owner.call({from: accounts[4]});
		await contractQ7h8xsT.renounceOwnership.call({from: accounts[2]});
	});
})
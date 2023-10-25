const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracttAobEm = await Ownable.new({from: accounts[2]});
		await contracttAobEm.renounceOwnership.call({from: accounts[0]});
		const nullA2B4W3b = await contracttAobEm.owner.call({from: accounts[3]});
		await contracttAobEm.renounceOwnership.call({from: accounts[5]});
		await contracttAobEm.renounceOwnership.call({from: accounts[1]});
		await contracttAobEm.renounceOwnership.call({from: accounts[0]});
	});
})
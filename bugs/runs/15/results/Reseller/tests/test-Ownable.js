const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractqFs1iU7 = await Ownable.new({from: accounts[1]});
		await contractqFs1iU7.renounceOwnership.call({from: accounts[5]});
		await contractqFs1iU7.renounceOwnership.call({from: accounts[3]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractM7ge0Cp = await Ownable.new({from: accounts[0]});
		await contractM7ge0Cp.renounceOwnership.call({from: accounts[1]});
		await contractM7ge0Cp.renounceOwnership.call({from: accounts[5]});
	});
})
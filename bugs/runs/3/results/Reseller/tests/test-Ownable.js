const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractdJCLzFO = await Ownable.new({from: accounts[3]});
		await contractdJCLzFO.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractdJCLzFO.renounceOwnership.call({from: accounts[3]});
	});
})
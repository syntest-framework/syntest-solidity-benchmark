const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractQePhcpu = await Ownable.new({from: accounts[2]});
		await contractQePhcpu.renounceOwnership.call({from: accounts[4]});
		await contractQePhcpu.renounceOwnership.call({from: accounts[0]});
	});
})
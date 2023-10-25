const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractdzTwQP = await Ownable.new({from: accounts[3]});
		const nullZqsPrw6 = await contractdzTwQP.owner.call({from: accounts[0]});
		await contractdzTwQP.renounceOwnership.call({from: accounts[1]});
		const nullQiFIRGb = await contractdzTwQP.owner.call({from: accounts[3]});
		await contractdzTwQP.renounceOwnership.call({from: accounts[0]});
	});
})
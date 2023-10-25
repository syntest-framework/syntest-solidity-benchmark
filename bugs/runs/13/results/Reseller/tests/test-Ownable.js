const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractBHnSWgx = await Ownable.new({from: accounts[5]});
		const nullNBBFJsg = await contractBHnSWgx.owner.call({from: accounts[4]});
		await contractBHnSWgx.renounceOwnership.call({from: accounts[0]});
	});
})
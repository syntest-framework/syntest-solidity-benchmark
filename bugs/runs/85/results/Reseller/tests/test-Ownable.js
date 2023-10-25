const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractKWOsk3f = await Ownable.new({from: accounts[5]});
		await contractKWOsk3f.renounceOwnership.call({from: accounts[4]});
		await contractKWOsk3f.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractKWOsk3f.renounceOwnership.call({from: accounts[3]});
		const nullou4h96y = await contractKWOsk3f.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
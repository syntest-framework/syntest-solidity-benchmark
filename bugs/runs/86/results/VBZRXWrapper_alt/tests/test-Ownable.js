const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractKwfuzCH = await Ownable.new({from: accounts[2]});
		await contractKwfuzCH.renounceOwnership.call({from: accounts[5]});
		await contractKwfuzCH.renounceOwnership.call({from: accounts[3]});
		const nullVybVlSI = await contractKwfuzCH.isOwner.call({from: accounts[0]});
	});
})
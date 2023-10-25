const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractftw8GqO = await Ownable.new({from: accounts[2]});
		await contractftw8GqO.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const nullDR03TD0 = await contractftw8GqO.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const nullWrkWQ7 = await contractftw8GqO.isOwner.call({from: accounts[0]});
	});
})
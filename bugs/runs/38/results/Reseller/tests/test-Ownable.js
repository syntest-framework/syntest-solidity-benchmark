const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractPoKNPwV = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const nulleAQfnWi = await contractPoKNPwV.owner.call({from: accounts[0]});
		await contractPoKNPwV.renounceOwnership.call({from: accounts[1]});
		const nullBsJZEDy = await contractPoKNPwV.owner.call({from: accounts[5]});
		await contractPoKNPwV.renounceOwnership.call({from: accounts[4]});
		await contractPoKNPwV.renounceOwnership.call({from: accounts[1]});
		await contractPoKNPwV.renounceOwnership.call({from: accounts[4]});
	});
})
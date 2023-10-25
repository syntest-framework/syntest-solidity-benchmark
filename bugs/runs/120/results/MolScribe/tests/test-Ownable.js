const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractsMcEivB = await Ownable.new({from: accounts[3]});
		const nullgGxwsKy = await contractsMcEivB.owner.call({from: accounts[1]});
		const nullm7FfzT = await contractsMcEivB.owner.call({from: accounts[0]});
		await contractsMcEivB.renounceOwnership.call({from: accounts[0]});
		await contractsMcEivB.renounceOwnership.call({from: accounts[5]});
		const nullumPSn9p = await contractsMcEivB.isOwner.call({from: accounts[0]});
	});
})
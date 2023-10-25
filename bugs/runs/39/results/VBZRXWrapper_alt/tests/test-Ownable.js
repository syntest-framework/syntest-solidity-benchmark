const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracteFmebup = await Ownable.new({from: accounts[2]});
		const nullgDZstr3 = await contracteFmebup.isOwner.call({from: accounts[4]});
		const nullS4TwD2B = await contracteFmebup.isOwner.call({from: accounts[2]});
		const nulltLL1HhE = await contracteFmebup.isOwner.call({from: accounts[3]});
		await contracteFmebup.renounceOwnership.call({from: accounts[4]});
	});
})
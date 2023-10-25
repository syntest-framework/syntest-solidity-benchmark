const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracttpwzfJH = await Ownable.new({from: accounts[4]});
		const newOwner6jUgIF = accounts[2]
		const newOwnerGyjwziW = accounts[4]
		const newOwnerxPcUWgM = accounts[2]
		await contracttpwzfJH.transferOwnership.call(newOwner6jUgIF, {from: accounts[5]});
		await contracttpwzfJH.transferOwnership.call(newOwnerGyjwziW, {from: accounts[3]});
		const nullH8INsDW = await contracttpwzfJH.owner.call({from: accounts[1]});
		await contracttpwzfJH.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contracttpwzfJH.renounceOwnership.call({from: accounts[4]});
		await contracttpwzfJH.transferOwnership.call(newOwnerxPcUWgM, {from: accounts[0]});
	});
})
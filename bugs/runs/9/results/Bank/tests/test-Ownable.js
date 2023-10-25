const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractwhxJrvS = await Ownable.new({from: accounts[3]});
		const newOwnerebGsy8s = accounts[2]
		const newOwneryXniJKO = accounts[5]
		await contractwhxJrvS.transferOwnership.call(newOwnerebGsy8s, {from: accounts[3]});
		const nulliJufX9W = await contractwhxJrvS.isOwner.call({from: accounts[0]});
		const nullUBeYjXh = await contractwhxJrvS.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await contractwhxJrvS.transferOwnership.call(newOwneryXniJKO, {from: accounts[0]});
	});
})
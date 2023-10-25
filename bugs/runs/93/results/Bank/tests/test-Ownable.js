const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractU3gxkKH = await Ownable.new({from: accounts[1]});
		const newOwnerRSDPnEb = accounts[0]
		const newOwnerch3V7Ns = accounts[2]
		await contractU3gxkKH.transferOwnership.call(newOwnerRSDPnEb, {from: accounts[1]});
		const nulloUapbhm = await contractU3gxkKH.isOwner.call({from: accounts[1]});
		await contractU3gxkKH.transferOwnership.call(newOwnerch3V7Ns, {from: accounts[5]});
		const nullKVJdGJU = await contractU3gxkKH.owner.call({from: accounts[1]});
		const null1wgY1f = await contractU3gxkKH.isOwner.call({from: accounts[0]});
	});
})
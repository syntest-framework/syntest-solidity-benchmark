const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractrsZG2T = await Ownable.new({from: accounts[2]});
		const newOwnerNCxy2SJ = accounts[5]
		await contractrsZG2T.transferOwnership.call(newOwnerNCxy2SJ, {from: accounts[3]});
		const nullswVVxm = await contractrsZG2T.isOwner.call({from: accounts[1]});
		await contractrsZG2T.renounceOwnership.call({from: accounts[4]});
		await contractrsZG2T.renounceOwnership.call({from: accounts[3]});
	});
})
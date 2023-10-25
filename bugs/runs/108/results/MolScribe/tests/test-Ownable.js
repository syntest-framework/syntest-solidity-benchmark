const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractxe51uSY = await Ownable.new({from: accounts[5]});
		const newOwnerCwkTRa = accounts[4]
		await contractxe51uSY.transferOwnership.call(newOwnerCwkTRa, {from: accounts[0]});
		const nullOpSvQ4t = await contractxe51uSY.isOwner.call({from: accounts[0]});
		await contractxe51uSY.renounceOwnership.call({from: accounts[1]});
	});
})
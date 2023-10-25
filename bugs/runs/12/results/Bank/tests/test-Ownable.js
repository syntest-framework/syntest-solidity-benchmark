const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractysyNSRM = await Ownable.new({from: accounts[3]});
		const newOwnerRriFhs = accounts[0]
		const nullGmMhBJI = await contractysyNSRM.isOwner.call({from: accounts[3]});
		const nullBOh8Rjs = await contractysyNSRM.owner.call({from: accounts[4]});
		await contractysyNSRM.renounceOwnership.call({from: accounts[3]});
		await contractysyNSRM.transferOwnership.call(newOwnerRriFhs, {from: accounts[1]});
	});
})
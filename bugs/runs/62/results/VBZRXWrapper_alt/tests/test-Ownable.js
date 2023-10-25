const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractb19pHUy = await Ownable.new({from: accounts[3]});
		const newOwnerowpAx3x = accounts[0]
		const newOwnerthjY8CR = accounts[1]
		await contractb19pHUy.renounceOwnership.call({from: accounts[0]});
		await contractb19pHUy.transferOwnership.call(newOwnerowpAx3x, {from: accounts[1]});
		const nullI3k146 = await contractb19pHUy.owner.call({from: accounts[0]});
		await contractb19pHUy.transferOwnership.call(newOwnerthjY8CR, {from: accounts[0]});
	});
})
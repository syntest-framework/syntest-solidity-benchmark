const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractTf7qWud = await Ownable.new({from: accounts[1]});
		const newOwnerH39ZRal = accounts[4]
		await contractTf7qWud.renounceOwnership.call({from: accounts[5]});
		await contractTf7qWud.renounceOwnership.call({from: accounts[1]});
		await contractTf7qWud.transferOwnership.call(newOwnerH39ZRal, {from: accounts[3]});
		await contractTf7qWud.renounceOwnership.call({from: accounts[4]});
		const nullfbSDZOr = await contractTf7qWud.owner.call({from: accounts[4]});
	});
})
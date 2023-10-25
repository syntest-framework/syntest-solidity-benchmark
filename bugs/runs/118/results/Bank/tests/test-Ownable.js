const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractY8HW76O = await Ownable.new({from: accounts[3]});
		const nulldbJ3d6f = await contractY8HW76O.owner.call({from: accounts[3]});
		await contractY8HW76O.renounceOwnership.call({from: accounts[5]});
		const nullVOfoL8G = await contractY8HW76O.isOwner.call({from: accounts[1]});
	});
})
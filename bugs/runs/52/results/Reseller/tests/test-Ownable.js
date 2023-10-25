const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractNnQfexz = await Ownable.new({from: accounts[0]});
		const newOwnerNzRKYin = accounts[4]
		const nullgwsYsdA = await contractNnQfexz.owner.call({from: accounts[4]});
		await contractNnQfexz.renounceOwnership.call({from: accounts[4]});
		await contractNnQfexz.renounceOwnership.call({from: accounts[4]});
		await contractNnQfexz.transferOwnership.call(newOwnerNzRKYin, {from: accounts[3]});
		await contractNnQfexz.renounceOwnership.call({from: accounts[2]});
		await contractNnQfexz.renounceOwnership.call({from: accounts[1]});
	});
})
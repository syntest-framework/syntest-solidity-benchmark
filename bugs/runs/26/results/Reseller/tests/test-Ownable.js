const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractWnVtJAF = await Ownable.new({from: accounts[3]});
		const newOwnerzhtvNLC = accounts[0]
		await contractWnVtJAF.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractWnVtJAF.transferOwnership.call(newOwnerzhtvNLC, {from: accounts[0]});
		await contractWnVtJAF.renounceOwnership.call({from: accounts[0]});
	});
})
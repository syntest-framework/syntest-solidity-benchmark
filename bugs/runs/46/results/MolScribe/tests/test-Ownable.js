const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractkj50Zto = await Ownable.new({from: accounts[3]});
		const newOwnerWjnZro = accounts[3]
		await contractkj50Zto.renounceOwnership.call({from: accounts[1]});
		await contractkj50Zto.renounceOwnership.call({from: accounts[3]});
		await contractkj50Zto.transferOwnership.call(newOwnerWjnZro, {from: "0x0000000000000000000000000000000000000001"});
	});
})
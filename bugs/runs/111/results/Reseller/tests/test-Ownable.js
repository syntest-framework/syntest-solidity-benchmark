const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractk0o1jW9 = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const newOwnerB8pTLbv = accounts[5]
		await contractk0o1jW9.transferOwnership.call(newOwnerB8pTLbv, {from: accounts[2]});
		const nullMRSxpnr = await contractk0o1jW9.owner.call({from: accounts[4]});
	});
})
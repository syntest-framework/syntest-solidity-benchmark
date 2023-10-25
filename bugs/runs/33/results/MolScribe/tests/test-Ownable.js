const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractvUH9EqV = await Ownable.new({from: accounts[1]});
		const newOwnerpoipaat = accounts[0]
		const newOwnerdycbNJ = accounts[3]
		const nullyrFjAnS = await contractvUH9EqV.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await contractvUH9EqV.transferOwnership.call(newOwnerpoipaat, {from: accounts[0]});
		await contractvUH9EqV.transferOwnership.call(newOwnerdycbNJ, {from: accounts[5]});
	});
})
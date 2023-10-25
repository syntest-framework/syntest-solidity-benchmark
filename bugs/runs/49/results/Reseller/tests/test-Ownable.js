const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractKnLZSui = await Ownable.new({from: accounts[0]});
		const newOwnerZUdKav2 = accounts[4]
		const newOwnerdQF0qvz = accounts[5]
		await contractKnLZSui.transferOwnership.call(newOwnerZUdKav2, {from: accounts[3]});
		await contractKnLZSui.transferOwnership.call(newOwnerdQF0qvz, {from: accounts[5]});
		await contractKnLZSui.renounceOwnership.call({from: accounts[2]});
		const nullgcC8bSk = await contractKnLZSui.owner.call({from: accounts[2]});
		await contractKnLZSui.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
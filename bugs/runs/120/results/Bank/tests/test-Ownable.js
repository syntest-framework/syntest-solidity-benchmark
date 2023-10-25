const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractft9OYBZ = await Ownable.new({from: accounts[2]});
		const newOwnerb8PlCI8 = "0x0000000000000000000000000000000000000001"
		const newOwnerAc1oTw4 = accounts[3]
		await contractft9OYBZ.renounceOwnership.call({from: accounts[2]});
		const nullGPhPSxt = await contractft9OYBZ.isOwner.call({from: accounts[2]});
		await contractft9OYBZ.transferOwnership.call(newOwnerb8PlCI8, {from: accounts[0]});
		await contractft9OYBZ.transferOwnership.call(newOwnerAc1oTw4, {from: accounts[4]});
		await contractft9OYBZ.renounceOwnership.call({from: accounts[1]});
	});
})
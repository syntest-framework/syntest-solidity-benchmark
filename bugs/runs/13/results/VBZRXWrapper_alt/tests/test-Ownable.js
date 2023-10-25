const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractT5Sn8KZ = await Ownable.new({from: accounts[4]});
		const newOwnerUfMbUh5 = accounts[2]
		await contractT5Sn8KZ.transferOwnership.call(newOwnerUfMbUh5, {from: "0x0000000000000000000000000000000000000001"});
		await contractT5Sn8KZ.renounceOwnership.call({from: accounts[2]});
		const nulltgbtjdG = await contractT5Sn8KZ.isOwner.call({from: accounts[3]});
		await contractT5Sn8KZ.renounceOwnership.call({from: accounts[1]});
	});
})
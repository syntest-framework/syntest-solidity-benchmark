const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractT73Uij8 = await Ownable.new({from: "0x0000000000000000000000000000000000000001"});
		const newOwnerKBgXptT = accounts[3]
		await contractT73Uij8.transferOwnership.call(newOwnerKBgXptT, {from: accounts[2]});
		await contractT73Uij8.renounceOwnership.call({from: accounts[5]});
		await contractT73Uij8.renounceOwnership.call({from: accounts[1]});
		const nullszTHfb7 = await contractT73Uij8.isOwner.call({from: accounts[4]});
	});
})
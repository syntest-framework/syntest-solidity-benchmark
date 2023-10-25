const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contract2fXNzI = await Ownable.new({from: accounts[3]});
		const newOwnerY6LWI4 = accounts[3]
		const nullucWO7D6 = await contract2fXNzI.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await contract2fXNzI.renounceOwnership.call({from: accounts[5]});
		await contract2fXNzI.transferOwnership.call(newOwnerY6LWI4, {from: accounts[3]});
		const nullX2Mfzg3 = await contract2fXNzI.owner.call({from: accounts[0]});
	});
})
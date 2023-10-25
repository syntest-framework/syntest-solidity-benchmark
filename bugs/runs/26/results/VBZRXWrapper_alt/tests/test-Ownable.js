const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractiN3OutX = await Ownable.new({from: accounts[1]});
		const newOwneruQf9mxq = "0x0000000000000000000000000000000000000001"
		const nullROdV7Kp = await contractiN3OutX.isOwner.call({from: accounts[1]});
		await contractiN3OutX.renounceOwnership.call({from: accounts[3]});
		const nullBF4sWp = await contractiN3OutX.isOwner.call({from: accounts[2]});
		await contractiN3OutX.transferOwnership.call(newOwneruQf9mxq, {from: accounts[4]});
		const nullkHrisy = await contractiN3OutX.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const nulleVWSJ6a = await contractiN3OutX.owner.call({from: accounts[5]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractEk5tAP2 = await Ownable.new({from: accounts[0]});
		const newOwneriREpHRX = accounts[5]
		const newOwnerxNfquq = accounts[0]
		const nulllDCfqeb = await contractEk5tAP2.owner.call({from: accounts[1]});
		await contractEk5tAP2.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await contractEk5tAP2.transferOwnership.call(newOwneriREpHRX, {from: accounts[0]});
		const nullyk0Hcy5 = await contractEk5tAP2.owner.call({from: accounts[2]});
		await contractEk5tAP2.transferOwnership.call(newOwnerxNfquq, {from: accounts[3]});
		await contractEk5tAP2.renounceOwnership.call({from: accounts[3]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractRXRS0aW = await Ownable.new({from: accounts[5]});
		const nullubO69DT = await contractRXRS0aW.isOwner.call({from: accounts[0]});
		const nullbu4OS0l = await contractRXRS0aW.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const nullrl6y5sd = await contractRXRS0aW.owner.call({from: accounts[2]});
		await contractRXRS0aW.renounceOwnership.call({from: accounts[1]});
		const nullnP9Dwun = await contractRXRS0aW.isOwner.call({from: accounts[2]});
	});
})
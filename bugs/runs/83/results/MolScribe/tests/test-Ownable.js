const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractTC4lve7 = await Ownable.new({from: accounts[0]});
		const nullCHEmnl = await contractTC4lve7.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const nulliXWwG1B = await contractTC4lve7.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const nullC9rDUHe = await contractTC4lve7.owner.call({from: accounts[0]});
		const nullMU7lKuM = await contractTC4lve7.isOwner.call({from: accounts[3]});
		await contractTC4lve7.renounceOwnership.call({from: accounts[2]});
	});
})
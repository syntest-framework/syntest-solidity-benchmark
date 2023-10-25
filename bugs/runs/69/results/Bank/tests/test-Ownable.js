const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contract2j2cY8 = await Ownable.new({from: accounts[5]});
		await contract2j2cY8.renounceOwnership.call({from: accounts[0]});
		const nullhcatfw7 = await contract2j2cY8.isOwner.call({from: accounts[4]});
		await contract2j2cY8.renounceOwnership.call({from: accounts[4]});
		await contract2j2cY8.renounceOwnership.call({from: accounts[1]});
		await contract2j2cY8.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
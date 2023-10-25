const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractwlveSsf = await Ownable.new({from: accounts[0]});
		const newOwnerxuxHoE = accounts[2]
		const newOwnerC2g2eUB = accounts[0]
		await contractwlveSsf.transferOwnership.call(newOwnerxuxHoE, {from: accounts[4]});
		const nulljlVtIe7 = await contractwlveSsf.isOwner.call({from: accounts[3]});
		const nullEj3taUE = await contractwlveSsf.isOwner.call({from: accounts[1]});
		await contractwlveSsf.renounceOwnership.call({from: accounts[4]});
		await contractwlveSsf.transferOwnership.call(newOwnerC2g2eUB, {from: accounts[2]});
	});
})
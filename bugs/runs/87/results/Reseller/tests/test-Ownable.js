const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contract90rwrM = await Ownable.new({from: accounts[2]});
		const nullLN68rpg = await contract90rwrM.owner.call({from: accounts[2]});
		await contract90rwrM.renounceOwnership.call({from: accounts[0]});
		await contract90rwrM.renounceOwnership.call({from: accounts[3]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractTiPmxm2 = await Ownable.new({from: accounts[3]});
		await contractTiPmxm2.renounceOwnership.call({from: accounts[4]});
		const nullr46Krnv = await contractTiPmxm2.owner.call({from: accounts[0]});
		await contractTiPmxm2.renounceOwnership.call({from: accounts[4]});
		await contractTiPmxm2.renounceOwnership.call({from: accounts[0]});
		const nullLX9T0L6 = await contractTiPmxm2.isOwner.call({from: accounts[4]});
	});
})
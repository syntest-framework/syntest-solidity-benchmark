const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractgJqttvZ = await Ownable.new({from: accounts[4]});
		await contractgJqttvZ.renounceOwnership.call({from: accounts[3]});
		const nullPGCdmih = await contractgJqttvZ.owner.call({from: accounts[5]});
		await contractgJqttvZ.renounceOwnership.call({from: accounts[0]});
		const nullBrCda80 = await contractgJqttvZ.isOwner.call({from: accounts[3]});
		const nullc2TzMF = await contractgJqttvZ.owner.call({from: accounts[5]});
		await contractgJqttvZ.renounceOwnership.call({from: accounts[1]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractv9koOl4 = await Ownable.new({from: accounts[2]});
		const newOwnertUIoup = accounts[1]
		await contractv9koOl4.renounceOwnership.call({from: accounts[3]});
		await contractv9koOl4.transferOwnership.call(newOwnertUIoup, {from: accounts[5]});
		const nullPEMCHwU = await contractv9koOl4.isOwner.call({from: accounts[4]});
		await contractv9koOl4.renounceOwnership.call({from: accounts[5]});
	});
})
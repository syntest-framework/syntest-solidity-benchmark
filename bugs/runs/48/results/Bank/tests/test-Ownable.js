const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractPKCE3d5 = await Ownable.new({from: accounts[0]});
		const newOwnerShrCs6O = accounts[4]
		const null090VCR = await contractPKCE3d5.owner.call({from: accounts[2]});
		const nulllyzNZg1 = await contractPKCE3d5.isOwner.call({from: accounts[1]});
		await contractPKCE3d5.transferOwnership.call(newOwnerShrCs6O, {from: accounts[4]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractfYlOUA7 = await Ownable.new({from: accounts[2]});
		await contractfYlOUA7.renounceOwnership.call({from: accounts[4]});
		const nullzOxOIuv = await contractfYlOUA7.isOwner.call({from: accounts[2]});
		const nulllp2XVfJ = await contractfYlOUA7.isOwner.call({from: accounts[5]});
		const nullkyNIFFp = await contractfYlOUA7.owner.call({from: accounts[3]});
	});
})
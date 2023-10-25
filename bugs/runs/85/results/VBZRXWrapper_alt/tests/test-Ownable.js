const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractJSxBCgE = await Ownable.new({from: accounts[3]});
		const nullzs8jngQ = await contractJSxBCgE.owner.call({from: accounts[0]});
		const nullYXFt8Ii = await contractJSxBCgE.isOwner.call({from: accounts[1]});
		await contractJSxBCgE.renounceOwnership.call({from: accounts[5]});
		await contractJSxBCgE.renounceOwnership.call({from: accounts[0]});
		const nulli2mV0ij = await contractJSxBCgE.isOwner.call({from: accounts[2]});
	});
})
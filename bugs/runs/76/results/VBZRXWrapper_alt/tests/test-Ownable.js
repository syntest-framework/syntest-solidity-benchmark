const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractezeLvB = await Ownable.new({from: accounts[5]});
		const nullIW6UHdP = await contractezeLvB.isOwner.call({from: accounts[5]});
		const nullvGBAN8n = await contractezeLvB.owner.call({from: accounts[4]});
		const nulldu4mfSI = await contractezeLvB.isOwner.call({from: accounts[2]});
	});
})
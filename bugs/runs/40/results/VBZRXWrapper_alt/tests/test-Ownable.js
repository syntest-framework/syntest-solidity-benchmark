const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractUfgEj8g = await Ownable.new({from: accounts[4]});
		const nullS1Muus0 = await contractUfgEj8g.isOwner.call({from: accounts[1]});
		const nulliI6vdf1 = await contractUfgEj8g.isOwner.call({from: accounts[4]});
	});
})
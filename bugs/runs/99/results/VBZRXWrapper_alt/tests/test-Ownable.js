const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractD1gtHl = await Ownable.new({from: accounts[4]});
		await contractD1gtHl.renounceOwnership.call({from: accounts[2]});
		const nullgMLsgnj = await contractD1gtHl.owner.call({from: accounts[0]});
	});
})
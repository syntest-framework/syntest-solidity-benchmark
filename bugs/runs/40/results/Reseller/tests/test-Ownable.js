const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractMIN7zLR = await Ownable.new({from: accounts[1]});
		await contractMIN7zLR.renounceOwnership.call({from: accounts[1]});
		const nullA7XPXwM = await contractMIN7zLR.owner.call({from: accounts[5]});
		await contractMIN7zLR.renounceOwnership.call({from: accounts[3]});
	});
})
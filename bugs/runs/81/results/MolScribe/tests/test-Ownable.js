const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractdPLqBhM = await Ownable.new({from: accounts[2]});
		const nullI0JO0W4 = await contractdPLqBhM.owner.call({from: accounts[0]});
		await contractdPLqBhM.renounceOwnership.call({from: accounts[3]});
		await contractdPLqBhM.renounceOwnership.call({from: accounts[5]});
	});
})
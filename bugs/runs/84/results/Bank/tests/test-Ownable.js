const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractDAQHBo2 = await Ownable.new({from: accounts[0]});
		await contractDAQHBo2.renounceOwnership.call({from: accounts[3]});
		await contractDAQHBo2.renounceOwnership.call({from: accounts[0]});
		await contractDAQHBo2.renounceOwnership.call({from: accounts[0]});
		await contractDAQHBo2.renounceOwnership.call({from: accounts[4]});
	});
})
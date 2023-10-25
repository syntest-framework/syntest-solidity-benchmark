const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractt9V2eD = await Ownable.new({from: accounts[4]});
		const newOwnerYxNb44N = accounts[0]
		await contractt9V2eD.renounceOwnership.call({from: accounts[3]});
		await contractt9V2eD.renounceOwnership.call({from: accounts[0]});
		await contractt9V2eD.renounceOwnership.call({from: accounts[2]});
		await contractt9V2eD.renounceOwnership.call({from: accounts[5]});
		await contractt9V2eD.renounceOwnership.call({from: accounts[0]});
		await contractt9V2eD.transferOwnership.call(newOwnerYxNb44N, {from: accounts[4]});
	});
})
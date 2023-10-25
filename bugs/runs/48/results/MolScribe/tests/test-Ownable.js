const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractMefa7rn = await Ownable.new({from: accounts[2]});
		await contractMefa7rn.renounceOwnership.call({from: accounts[2]});
		const nullHjZFXiu = await contractMefa7rn.owner.call({from: accounts[1]});
	});
})
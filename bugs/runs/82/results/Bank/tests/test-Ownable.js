const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractFDnyY8T = await Ownable.new({from: accounts[1]});
		await contractFDnyY8T.renounceOwnership.call({from: accounts[2]});
		const nulloOsLrhV = await contractFDnyY8T.owner.call({from: accounts[3]});
		const nulllOTpLx = await contractFDnyY8T.owner.call({from: accounts[0]});
		await contractFDnyY8T.renounceOwnership.call({from: accounts[5]});
	});
})
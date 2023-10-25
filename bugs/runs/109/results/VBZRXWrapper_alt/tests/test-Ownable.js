const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractbIjsDVh = await Ownable.new({from: accounts[4]});
		await contractbIjsDVh.renounceOwnership.call({from: accounts[1]});
		const nullKtbIfqu = await contractbIjsDVh.owner.call({from: accounts[4]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractSZ77bK = await Ownable.new({from: accounts[1]});
		const nullsKNlbeQ = await contractSZ77bK.owner.call({from: accounts[0]});
		const nullpzNDuWh = await contractSZ77bK.isOwner.call({from: accounts[4]});
		const nullEbnHOMy = await contractSZ77bK.isOwner.call({from: accounts[2]});
	});
})
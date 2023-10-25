const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractaQAPtdS = await Ownable.new({from: accounts[1]});
		const nullJKM99rm = await contractaQAPtdS.isOwner.call({from: accounts[1]});
		const nullYLZCiLH = await contractaQAPtdS.isOwner.call({from: accounts[0]});
		const nullOPn5prH = await contractaQAPtdS.isOwner.call({from: accounts[4]});
		const null2ZzeWk = await contractaQAPtdS.isOwner.call({from: accounts[2]});
		const nullvC62TM = await contractaQAPtdS.owner.call({from: accounts[5]});
	});
})
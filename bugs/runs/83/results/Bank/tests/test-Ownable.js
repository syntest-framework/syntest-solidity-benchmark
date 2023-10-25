const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractcIeCCPY = await Ownable.new({from: accounts[2]});
		await contractcIeCCPY.renounceOwnership.call({from: accounts[0]});
		const nullMbBw5Rt = await contractcIeCCPY.isOwner.call({from: accounts[1]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contracto2ymXgs = await Ownable.new({from: accounts[3]});
		const newOwnercIyUTvC = accounts[0]
		const nullzhbh2K = await contracto2ymXgs.owner.call({from: accounts[1]});
		await contracto2ymXgs.transferOwnership.call(newOwnercIyUTvC, {from: accounts[1]});
	});
})
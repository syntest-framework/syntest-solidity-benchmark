const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractE64Jxfl = await Ownable.new({from: accounts[5]});
		const nulluvYw2TC = await contractE64Jxfl.owner.call({from: accounts[4]});
		const nullx3tvAkI = await contractE64Jxfl.owner.call({from: accounts[1]});
	});
})
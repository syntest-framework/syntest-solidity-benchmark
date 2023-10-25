const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractiqwvBCv = await Ownable.new({from: accounts[1]});
		const null4EGpIj = await contractiqwvBCv.owner.call({from: accounts[0]});
		const nullg0CEAJZ = await contractiqwvBCv.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
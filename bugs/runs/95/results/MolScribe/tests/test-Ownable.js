const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractXPpgpuK = await Ownable.new({from: accounts[4]});
		const nullKBXoZI = await contractXPpgpuK.isOwner.call({from: accounts[4]});
		const nullSQyc2Qd = await contractXPpgpuK.owner.call({from: accounts[0]});
	});
})
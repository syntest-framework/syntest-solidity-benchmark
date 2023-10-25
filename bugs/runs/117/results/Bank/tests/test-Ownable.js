const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractoYAPJN9 = await Ownable.new({from: accounts[0]});
		await contractoYAPJN9.renounceOwnership.call({from: accounts[3]});
		const nullIPEsWq = await contractoYAPJN9.isOwner.call({from: accounts[3]});
		const nullCXVGF4z = await contractoYAPJN9.isOwner.call({from: accounts[0]});
		const nullKFlSLKo = await contractoYAPJN9.owner.call({from: accounts[2]});
	});
})
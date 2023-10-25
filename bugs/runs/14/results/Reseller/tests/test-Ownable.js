const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractvNnn1vf = await Ownable.new({from: accounts[2]});
		const nullz5CKhjM = await contractvNnn1vf.owner.call({from: accounts[3]});
		await contractvNnn1vf.renounceOwnership.call({from: accounts[1]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractdPMdLWl = await Ownable.new({from: accounts[1]});
		await contractdPMdLWl.renounceOwnership.call({from: accounts[2]});
		const nulla1XgtiA = await contractdPMdLWl.owner.call({from: accounts[3]});
		const nullNzR12e5 = await contractdPMdLWl.owner.call({from: accounts[0]});
		await contractdPMdLWl.renounceOwnership.call({from: accounts[3]});
		const nullZRpTurC = await contractdPMdLWl.owner.call({from: accounts[1]});
	});
})
const Ownable = artifacts.require("Ownable");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ownable', (accounts) => {
	it('test for Ownable', async () => {
		const contractvLRshrA = await Ownable.new({from: accounts[1]});
		const nullkwIPM6 = await contractvLRshrA.owner.call({from: accounts[0]});
		await contractvLRshrA.renounceOwnership.call({from: accounts[3]});
		const null6LuOWM = await contractvLRshrA.owner.call({from: accounts[3]});
		const nullf8DhqtV = await contractvLRshrA.owner.call({from: accounts[1]});
		await contractvLRshrA.renounceOwnership.call({from: accounts[0]});
		const nullN2T6fIR = await contractvLRshrA.owner.call({from: accounts[4]});
	});
})
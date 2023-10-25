const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractpGo4ON6 = await IVestingToken.new({from: accounts[3]});
		const _ownereEwlulB = accounts[2]
		const _ownerL3ly3pJ = accounts[5]
		const _ownerzW8dtCD = accounts[3]
		const nullWAFLWxn = await contractpGo4ON6.vestedBalanceOf.call(_ownereEwlulB, {from: accounts[4]});
		const nulloL0hO2C = await contractpGo4ON6.vestedBalanceOf.call(_ownerL3ly3pJ, {from: accounts[3]});
		const nulls5p13oD = await contractpGo4ON6.vestedBalanceOf.call(_ownerzW8dtCD, {from: accounts[5]});
	});
})
const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractOMZHiiR = await IERC20.new({from: accounts[2]});
		const _valueTo25LKM = BigInt("990")
		const _spenderHxb5vT7 = accounts[0]
		const _valueuhsPcn9 = BigInt("1657")
		const _spenderdahdtr = accounts[3]
		const _spenderAGBbWF9 = accounts[5]
		const _owneraXQsWrc = accounts[3]
		const _spenderirZc0L = accounts[0]
		const _ownerlacgXHF = accounts[1]
		const nullsiiaaI1 = await contractOMZHiiR.approve.call(_spenderHxb5vT7, _valueTo25LKM, {from: accounts[4]});
		const nullvpbaiW = await contractOMZHiiR.approve.call(_spenderdahdtr, _valueuhsPcn9, {from: accounts[0]});
		const nullkkE3JwJ = await contractOMZHiiR.totalSupply.call({from: accounts[4]});
		const nullwV2rU8 = await contractOMZHiiR.allowance.call(_owneraXQsWrc, _spenderAGBbWF9, {from: "0x0000000000000000000000000000000000000001"});
		const nullFRqeST2 = await contractOMZHiiR.allowance.call(_ownerlacgXHF, _spenderirZc0L, {from: accounts[1]});
	});
})
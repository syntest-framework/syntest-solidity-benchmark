const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractrOuZTOb = await IERC20.new({from: accounts[2]});
		const _valueWPFn5fl = BigInt("1076")
		const _tokAOXzzH = accounts[2]
		const _valuejpsCKzU = BigInt("1059")
		const _toyPf2BYG = accounts[0]
		const _whoGbdqnHQ = accounts[3]
		const _whou5awMX = accounts[5]
		const _valuerv0YK2 = BigInt("28")
		const _toEyKnT0Y = accounts[0]
		const nullGCxh38S = await contractrOuZTOb.transfer.call(_tokAOXzzH, _valueWPFn5fl, {from: accounts[3]});
		const nullgSenv9 = await contractrOuZTOb.transfer.call(_toyPf2BYG, _valuejpsCKzU, {from: accounts[5]});
		const nulldX2uL81 = await contractrOuZTOb.balanceOf.call(_whoGbdqnHQ, {from: accounts[4]});
		const nullVasIiLV = await contractrOuZTOb.balanceOf.call(_whou5awMX, {from: accounts[0]});
		const nulltlP5tVc = await contractrOuZTOb.transfer.call(_toEyKnT0Y, _valuerv0YK2, {from: accounts[3]});
	});
})
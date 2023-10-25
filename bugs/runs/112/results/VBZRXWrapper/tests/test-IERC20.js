const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracteGzAoK4 = await IERC20.new({from: accounts[5]});
		const _valueNAg9kA = BigInt("1824")
		const _tozkvuWme = accounts[0]
		const _fromhaLW1Tw = accounts[1]
		const _spenderZlxOfWQ = accounts[1]
		const _ownernQ2GJQ9 = accounts[3]
		const _valueEeyN0D = BigInt("1091")
		const _toAtJOl6Z = accounts[4]
		const _fromfhQOPai = accounts[2]
		const _valuefSLU2k0 = BigInt("878")
		const _toiBC4bnl = accounts[2]
		const _value1gzHGI = BigInt("433")
		const _spenderWIMbSmc = accounts[0]
		const nullvFjl0SW = await contracteGzAoK4.transferFrom.call(_fromhaLW1Tw, _tozkvuWme, _valueNAg9kA, {from: accounts[5]});
		const nullRukNCVg = await contracteGzAoK4.allowance.call(_ownernQ2GJQ9, _spenderZlxOfWQ, {from: accounts[4]});
		const nullmtaYfiP = await contracteGzAoK4.transferFrom.call(_fromfhQOPai, _toAtJOl6Z, _valueEeyN0D, {from: accounts[2]});
		const nullrq5u2VA = await contracteGzAoK4.transfer.call(_toiBC4bnl, _valuefSLU2k0, {from: accounts[2]});
		const nullPgfRHXt = await contracteGzAoK4.totalSupply.call({from: accounts[4]});
		const nulloYQVMAb = await contracteGzAoK4.approve.call(_spenderWIMbSmc, _value1gzHGI, {from: "0x0000000000000000000000000000000000000001"});
	});
})
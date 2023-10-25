const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractvHuTTlu = await IERC20.new({from: accounts[5]});
		const _valuewDrNcMI = BigInt("812")
		const _torikQBOp = accounts[2]
		const _valuedJP5Orz = BigInt("1912")
		const _tojbNAjAF = "0x0000000000000000000000000000000000000001"
		const _fromFj8bjE6 = accounts[2]
		const _values13nea = BigInt("293")
		const _spender9TJWs1 = accounts[2]
		const _spenderK2iPuNu = accounts[5]
		const _owneraCjeJKv = accounts[1]
		const nullQK8BdE = await contractvHuTTlu.transfer.call(_torikQBOp, _valuewDrNcMI, {from: accounts[0]});
		const nullkXkU1Ep = await contractvHuTTlu.transferFrom.call(_fromFj8bjE6, _tojbNAjAF, _valuedJP5Orz, {from: "0x0000000000000000000000000000000000000001"});
		const nulls8jM4O5 = await contractvHuTTlu.approve.call(_spender9TJWs1, _values13nea, {from: accounts[3]});
		const nullX86jZFS = await contractvHuTTlu.totalSupply.call({from: accounts[0]});
		const nullGWVIGI1 = await contractvHuTTlu.allowance.call(_owneraCjeJKv, _spenderK2iPuNu, {from: accounts[3]});
	});
})
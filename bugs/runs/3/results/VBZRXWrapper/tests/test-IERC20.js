const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractDIw9Xff = await IERC20.new({from: accounts[4]});
		const _spenderiKMN8Kg = accounts[0]
		const _ownerw6SvTr5 = accounts[0]
		const _valuelrmdX7 = BigInt("37")
		const _tobajO5g0 = accounts[0]
		const _valueobPqKiq = BigInt("819")
		const _toSwvt71r = accounts[0]
		const _valuek0OvmG8 = BigInt("490")
		const _spenderDXSX7iB = "0x0000000000000000000000000000000000000001"
		const nulloIPeKuA = await contractDIw9Xff.allowance.call(_ownerw6SvTr5, _spenderiKMN8Kg, {from: accounts[4]});
		const nullkBA6EPg = await contractDIw9Xff.totalSupply.call({from: accounts[5]});
		const nullBMoD3Kq = await contractDIw9Xff.transfer.call(_tobajO5g0, _valuelrmdX7, {from: "0x0000000000000000000000000000000000000001"});
		const nulllcS64Wk = await contractDIw9Xff.totalSupply.call({from: accounts[0]});
		const nullhaET7Qn = await contractDIw9Xff.transfer.call(_toSwvt71r, _valueobPqKiq, {from: accounts[3]});
		const nullkaqXh6W = await contractDIw9Xff.approve.call(_spenderDXSX7iB, _valuek0OvmG8, {from: accounts[0]});
	});
})
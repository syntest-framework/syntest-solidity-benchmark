const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractNWzBoXe = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const _valueDbpugqo = BigInt("1894")
		const _toPEntgZv = accounts[2]
		const _whoi9iUh32 = accounts[1]
		const _valueEHsNoKT = BigInt("187")
		const _tomKUGbCq = accounts[2]
		const _valueoXccnZ6 = BigInt("1179")
		const _tomE8cIEz = accounts[3]
		const _frompv0NNDo = accounts[4]
		const nullq3vEbdW = await contractNWzBoXe.transfer.call(_toPEntgZv, _valueDbpugqo, {from: accounts[4]});
		const nullJG3MBl = await contractNWzBoXe.balanceOf.call(_whoi9iUh32, {from: accounts[1]});
		const nullgyOuWyc = await contractNWzBoXe.transfer.call(_tomKUGbCq, _valueEHsNoKT, {from: accounts[4]});
		const nullSA2SB7a = await contractNWzBoXe.transferFrom.call(_frompv0NNDo, _tomE8cIEz, _valueoXccnZ6, {from: accounts[0]});
	});
})
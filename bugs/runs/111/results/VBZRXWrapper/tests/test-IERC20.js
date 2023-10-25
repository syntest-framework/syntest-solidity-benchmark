const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracto0dji2r = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const _valueKZX0u9V = BigInt("889")
		const _toBaqogF = accounts[1]
		const _fromvENqzzr = accounts[0]
		const _whoPXTyY2w = accounts[2]
		const _valueJKnMDp5 = BigInt("1657")
		const _toN6cU9y2 = accounts[3]
		const _valuehU8PTE0 = BigInt("941")
		const _toJ2ieKZ8 = accounts[5]
		const _valueTuJF5UT = BigInt("753")
		const _spenderZPtpY8A = accounts[2]
		const nullOdMAy0W = await contracto0dji2r.transferFrom.call(_fromvENqzzr, _toBaqogF, _valueKZX0u9V, {from: accounts[5]});
		const nullpYfqI19 = await contracto0dji2r.balanceOf.call(_whoPXTyY2w, {from: "0x0000000000000000000000000000000000000001"});
		const nulltioedl = await contracto0dji2r.transfer.call(_toN6cU9y2, _valueJKnMDp5, {from: accounts[5]});
		const nullm9bwjWI = await contracto0dji2r.totalSupply.call({from: accounts[4]});
		const nullkrvgqM = await contracto0dji2r.transfer.call(_toJ2ieKZ8, _valuehU8PTE0, {from: accounts[1]});
		const nullAgYKqRk = await contracto0dji2r.approve.call(_spenderZPtpY8A, _valueTuJF5UT, {from: accounts[4]});
	});
})
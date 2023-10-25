const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractnO2VCOj = await IERC20.new({from: accounts[2]});
		const _spenderokRMrew = accounts[4]
		const _ownerA942fUt = accounts[2]
		const _valueEeYqVT4 = BigInt("1897")
		const _toEbyg9Xn = accounts[2]
		const _valuef0Yv2tu = BigInt("610")
		const _tof2TDYAb = accounts[4]
		const _fromkBW9im5 = accounts[2]
		const nullHfYntpF = await contractnO2VCOj.allowance.call(_ownerA942fUt, _spenderokRMrew, {from: accounts[3]});
		const null8PZ6Ox = await contractnO2VCOj.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullb7pDEU = await contractnO2VCOj.transfer.call(_toEbyg9Xn, _valueEeYqVT4, {from: accounts[0]});
		const nullHB4gzz = await contractnO2VCOj.transferFrom.call(_fromkBW9im5, _tof2TDYAb, _valuef0Yv2tu, {from: "0x0000000000000000000000000000000000000001"});
	});
})
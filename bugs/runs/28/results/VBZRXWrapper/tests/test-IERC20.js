const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracthHFq7SY = await IERC20.new({from: accounts[0]});
		const _spendertEXPP8q = accounts[2]
		const _owneriDH8LCg = "0x0000000000000000000000000000000000000001"
		const _valuercMQubC = BigInt("1107")
		const _tomYxdiA = accounts[4]
		const _fromzMhbUyt = "0x0000000000000000000000000000000000000001"
		const _valueDpqEZdy = BigInt("1102")
		const _spenderPWihkQ9 = accounts[0]
		const nullfKYEArR = await contracthHFq7SY.allowance.call(_owneriDH8LCg, _spendertEXPP8q, {from: accounts[3]});
		const nullFcDtSeZ = await contracthHFq7SY.transferFrom.call(_fromzMhbUyt, _tomYxdiA, _valuercMQubC, {from: accounts[3]});
		const nullBmDsdl = await contracthHFq7SY.approve.call(_spenderPWihkQ9, _valueDpqEZdy, {from: accounts[1]});
	});
})
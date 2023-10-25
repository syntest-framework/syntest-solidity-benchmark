const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractJN1gs2k = await IERC20.new({from: accounts[3]});
		const _spenderYxvh26Z = accounts[0]
		const _ownerwArTuu = accounts[1]
		const _valueWhElzEp = BigInt("1312")
		const _toIrsMwlB = accounts[2]
		const _fromhyYNZjs = accounts[0]
		const nullIHJn9be = await contractJN1gs2k.totalSupply.call({from: accounts[5]});
		const nullc4WD0EF = await contractJN1gs2k.allowance.call(_ownerwArTuu, _spenderYxvh26Z, {from: accounts[5]});
		const nullORtPtPc = await contractJN1gs2k.transferFrom.call(_fromhyYNZjs, _toIrsMwlB, _valueWhElzEp, {from: accounts[2]});
	});
})
const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractNupcQfj = await IERC20.new({from: accounts[0]});
		const _valueFeVqZ2D = BigInt("1329")
		const _tokhMKOmZ = accounts[5]
		const _spenderDsoe1l = accounts[0]
		const _ownerlQgCacT = accounts[0]
		const _valueydAO4yG = BigInt("589")
		const _spenderfgFZgH = accounts[5]
		const nullHvZFShS = await contractNupcQfj.transfer.call(_tokhMKOmZ, _valueFeVqZ2D, {from: accounts[1]});
		const nulltam7ZiU = await contractNupcQfj.allowance.call(_ownerlQgCacT, _spenderDsoe1l, {from: accounts[1]});
		const nullcKpJJt7 = await contractNupcQfj.approve.call(_spenderfgFZgH, _valueydAO4yG, {from: accounts[4]});
	});
})
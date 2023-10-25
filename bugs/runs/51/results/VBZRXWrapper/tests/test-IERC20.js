const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractC78A2I = await IERC20.new({from: accounts[0]});
		const _valueCEOpdnC = BigInt("1494")
		const _spenderNzZyvw3 = accounts[1]
		const _valueRdGhEAO = BigInt("598")
		const _spenderIXASUjJ = accounts[0]
		const nullksFYTSo = await contractC78A2I.approve.call(_spenderNzZyvw3, _valueCEOpdnC, {from: accounts[1]});
		const nullyP3YWcn = await contractC78A2I.approve.call(_spenderIXASUjJ, _valueRdGhEAO, {from: accounts[4]});
	});
})
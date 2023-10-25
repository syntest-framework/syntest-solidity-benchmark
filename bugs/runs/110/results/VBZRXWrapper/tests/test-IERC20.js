const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractTKWkFmh = await IERC20.new({from: accounts[3]});
		const _valueXmpeml8 = BigInt("256")
		const _spendertIpYAIV = accounts[2]
		const _valuehvEYvmn = BigInt("965")
		const _toAs1NUjE = accounts[2]
		const _whoBk9r0NA = accounts[0]
		const _valuerKxU3wg = BigInt("96")
		const _spenderkAZPaBO = accounts[4]
		const nullVyymtu8 = await contractTKWkFmh.approve.call(_spendertIpYAIV, _valueXmpeml8, {from: accounts[1]});
		const nullWMquvwx = await contractTKWkFmh.transfer.call(_toAs1NUjE, _valuehvEYvmn, {from: accounts[4]});
		const nullPX1GamB = await contractTKWkFmh.balanceOf.call(_whoBk9r0NA, {from: accounts[3]});
		const nullL6JMvj = await contractTKWkFmh.approve.call(_spenderkAZPaBO, _valuerKxU3wg, {from: accounts[3]});
	});
})
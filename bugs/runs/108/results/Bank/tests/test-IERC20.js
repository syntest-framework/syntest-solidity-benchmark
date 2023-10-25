const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractwP6OCw6 = await IERC20.new({from: accounts[2]});
		const valuej4t16cb = BigInt("168")
		const spenderBpXGrRq = accounts[1]
		const valuesTgWtNa = BigInt("585")
		const tossgIe51 = accounts[4]
		const valueNsOVpP = BigInt("89")
		const tomJt0E1 = accounts[1]
		const valuePPCBN9C = BigInt("314")
		const spenderPxXVDo = accounts[4]
		const valuecjQniDP = BigInt("1696")
		const spendere5oT8Bm = accounts[4]
		const nullV0SnX0S = await contractwP6OCw6.approve.call(spenderBpXGrRq, valuej4t16cb, {from: accounts[4]});
		const nulld6I4Llm = await contractwP6OCw6.transfer.call(tossgIe51, valuesTgWtNa, {from: accounts[5]});
		const nullo3dqU6W = await contractwP6OCw6.transfer.call(tomJt0E1, valueNsOVpP, {from: accounts[1]});
		const nullteXmxbI = await contractwP6OCw6.approve.call(spenderPxXVDo, valuePPCBN9C, {from: accounts[5]});
		const nullXUm8DSJ = await contractwP6OCw6.approve.call(spendere5oT8Bm, valuecjQniDP, {from: accounts[1]});
	});
})
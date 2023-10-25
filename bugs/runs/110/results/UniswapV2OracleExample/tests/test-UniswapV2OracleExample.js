const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryAFiBlXX = accounts[3]
		const tokenAIxtmqC = accounts[1]
		const tokenBKnpOtBU = accounts[1]
		const contractJs5soAv = await UniswapV2OracleExample.new(factoryAFiBlXX, tokenAIxtmqC, tokenBKnpOtBU, {from: accounts[1]});
		const amountInBi45jys = BigInt("1742")
		const tokenInTaD9Uf = accounts[5]
		const amountOutuatjD35 = await contractJs5soAv.quote.call(tokenInTaD9Uf, amountInBi45jys, {from: accounts[3]});
		await contractJs5soAv.initialize.call({from: accounts[2]});
		await contractJs5soAv.initialize.call({from: accounts[3]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factorywrxlBly = accounts[0]
		const tokenAiIsuZ5 = accounts[4]
		const tokenBzjw3aH = accounts[4]
		const contractf95cimf = await UniswapV2OracleExample.new(factorywrxlBly, tokenAiIsuZ5, tokenBzjw3aH, {from: "0x0000000000000000000000000000000000000001"});
		await contractf95cimf.initialize.call({from: "0x0000000000000000000000000000000000000001"});
		await contractf95cimf.update.call({from: accounts[1]});
	});
})
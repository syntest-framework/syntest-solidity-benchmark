const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryvlr8ZsU = accounts[3]
		const tokenAyXZZVtO = accounts[3]
		const tokenBPrMQe7S = accounts[2]
		const contractzJycE6G = await UniswapV2OracleExample.new(factoryvlr8ZsU, tokenAyXZZVtO, tokenBPrMQe7S, {from: "0x0000000000000000000000000000000000000001"});
		const amountInxoj5NWR = BigInt("980")
		const tokenInTSAsRXL = accounts[2]
		await contractzJycE6G.update.call({from: accounts[2]});
		await contractzJycE6G.initialize.call({from: accounts[0]});
		await contractzJycE6G.initialize.call({from: accounts[3]});
		await contractzJycE6G.update.call({from: accounts[3]});
		const amountOutAkelCv5 = await contractzJycE6G.quote.call(tokenInTSAsRXL, amountInxoj5NWR, {from: accounts[1]});
		await contractzJycE6G.update.call({from: accounts[1]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factorylc9Z22v = "0x0000000000000000000000000000000000000001"
		const tokenAJ5D74II = accounts[3]
		const tokenB6XzZDO = accounts[5]
		const contractAkjXSgO = await UniswapV2OracleExample.new(factorylc9Z22v, tokenAJ5D74II, tokenB6XzZDO, {from: accounts[3]});
		const amountIndgCMD8X = BigInt("1396")
		const tokenIntsUE3nQ = accounts[3]
		await contractAkjXSgO.initialize.call({from: accounts[3]});
		const amountOutB92vFgn = await contractAkjXSgO.quote.call(tokenIntsUE3nQ, amountIndgCMD8X, {from: accounts[1]});
		await contractAkjXSgO.initialize.call({from: accounts[4]});
	});
})
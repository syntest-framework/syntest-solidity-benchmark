const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractgFXQbwQ = await IUniswapV2OracleExample.new({from: accounts[0]});
		const amountIn4XoqEV = BigInt("1806")
		const tokenInbV5SPVW = accounts[2]
		const amountInspYQWQA = BigInt("924")
		const tokenIndf8n2Jy = "0x0000000000000000000000000000000000000001"
		const nulleKpJnz7 = await contractgFXQbwQ.exchange.call({from: accounts[3]});
		const amountOuthdRKyGJ = await contractgFXQbwQ.quote.call(tokenInbV5SPVW, amountIn4XoqEV, {from: accounts[4]});
		const amountOutRapGYMu = await contractgFXQbwQ.quote.call(tokenIndf8n2Jy, amountInspYQWQA, {from: accounts[5]});
		const nullsXWyqBi = await contractgFXQbwQ.price1Average.call({from: accounts[0]});
	});
})
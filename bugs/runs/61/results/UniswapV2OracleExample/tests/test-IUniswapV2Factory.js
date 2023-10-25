const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contracts7MibJF = await IUniswapV2Factory.new({from: accounts[0]});
		const tokenBWo65r8a = accounts[0]
		const tokenArQ2uS1S = accounts[2]
		const tokenBlNK6h5q = accounts[1]
		const tokenAfKmfbIi = "0x0000000000000000000000000000000000000001"
		const tokenBPefhk8l = accounts[2]
		const tokenAQMilzRH = accounts[3]
		const nullxFvPqC6 = await contracts7MibJF.exchangesCount.call({from: "0x0000000000000000000000000000000000000001"});
		const exchangePBA0l3P = await contracts7MibJF.createExchange.call(tokenArQ2uS1S, tokenBWo65r8a, {from: accounts[0]});
		const [token0aipdSAD, token1CPOvVZV] = await contracts7MibJF.sortTokens.call(tokenAfKmfbIi, tokenBlNK6h5q, {from: accounts[0]});
		const exchangei8xG60L = await contracts7MibJF.getExchange.call(tokenAQMilzRH, tokenBPefhk8l, {from: accounts[3]});
		const nullIC1XjbT = await contracts7MibJF.exchangesCount.call({from: accounts[0]});
	});
})
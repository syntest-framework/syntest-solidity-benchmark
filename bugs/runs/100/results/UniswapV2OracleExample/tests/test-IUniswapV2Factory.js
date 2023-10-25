const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractlk8Zeeo = await IUniswapV2Factory.new({from: accounts[4]});
		const tokenBXbZUmff = accounts[4]
		const tokenAnrNggZ2 = accounts[5]
		const tokenBmjfahvH = accounts[1]
		const tokenAt9JV43E = accounts[2]
		const tokenBaPnkZb2 = accounts[1]
		const tokenArKVlvu0 = accounts[0]
		const exchangeT4cNA41 = await contractlk8Zeeo.getExchange.call(tokenAnrNggZ2, tokenBXbZUmff, {from: accounts[3]});
		const nullukll3I9 = await contractlk8Zeeo.exchangesCount.call({from: accounts[5]});
		const [token0mzETQd5, token1GIJwQc] = await contractlk8Zeeo.sortTokens.call(tokenAt9JV43E, tokenBmjfahvH, {from: accounts[1]});
		const [token0k5N0are, token1a582cc3] = await contractlk8Zeeo.sortTokens.call(tokenArKVlvu0, tokenBaPnkZb2, {from: accounts[0]});
	});
})
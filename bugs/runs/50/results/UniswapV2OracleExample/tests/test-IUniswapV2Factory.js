const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractvsJSAQX = await IUniswapV2Factory.new({from: accounts[3]});
		const tokenBFhyUDhz = accounts[3]
		const tokenAJdGRR8J = accounts[2]
		const tokenBiZEE5T3 = accounts[1]
		const tokenAy6CSoEt = accounts[3]
		const nullNI66q1g = BigInt("1184")
		const [token0bK7td0K, token1ofnbfb8] = await contractvsJSAQX.sortTokens.call(tokenAJdGRR8J, tokenBFhyUDhz, {from: accounts[0]});
		const exchangerWWX5uu = await contractvsJSAQX.createExchange.call(tokenAy6CSoEt, tokenBiZEE5T3, {from: accounts[2]});
		const nullxCrwRUZ = await contractvsJSAQX.exchangeBytecode.call({from: "0x0000000000000000000000000000000000000001"});
		const exchangeT7qcqBY = await contractvsJSAQX.exchanges.call(nullNI66q1g, {from: accounts[3]});
		const nullwboxVNL = await contractvsJSAQX.exchangesCount.call({from: accounts[2]});
	});
})
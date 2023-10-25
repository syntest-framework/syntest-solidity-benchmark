const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractrhrFJv9 = await IUniswapV2Factory.new({from: accounts[3]});
		const tokenBaXpMRz5 = accounts[2]
		const tokenAjPGoYx9 = accounts[3]
		const tokenBqXGQWqH = accounts[4]
		const tokenAB6yXY2i = accounts[1]
		const [token0xAPSM6z, token1tB5iZsB] = await contractrhrFJv9.sortTokens.call(tokenAjPGoYx9, tokenBaXpMRz5, {from: accounts[5]});
		const [token0j60KOP, token1R2l57YN] = await contractrhrFJv9.sortTokens.call(tokenAB6yXY2i, tokenBqXGQWqH, {from: accounts[4]});
		const nullmNJKzim = await contractrhrFJv9.exchangesCount.call({from: accounts[0]});
	});
})
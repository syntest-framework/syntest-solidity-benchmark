const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractKLPr8tn = await IUniswapV2Factory.new({from: accounts[4]});
		const tokenBmjKIKK2 = accounts[0]
		const tokenAY64x5Y6 = accounts[0]
		const tokenBKlS98kh = accounts[2]
		const tokenAJRxs9en = "0x0000000000000000000000000000000000000001"
		const nullf1umP9Q = await contractKLPr8tn.exchangesCount.call({from: accounts[3]});
		const exchangeWB7JBdZ = await contractKLPr8tn.getExchange.call(tokenAY64x5Y6, tokenBmjKIKK2, {from: accounts[1]});
		const [token0OhKoFfi, token1bNalFGj] = await contractKLPr8tn.sortTokens.call(tokenAJRxs9en, tokenBKlS98kh, {from: accounts[4]});
	});
})
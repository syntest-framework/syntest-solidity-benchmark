const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractwpNn8i = await IUniswapV2Factory.new({from: accounts[1]});
		const tokenBKLKC6rh = accounts[1]
		const tokenADUZL5vc = accounts[0]
		const tokenBS9VUupm = accounts[0]
		const tokenAV3pzlGY = accounts[2]
		const [token0Y1KdXCw, token1jPbwIid] = await contractwpNn8i.sortTokens.call(tokenADUZL5vc, tokenBKLKC6rh, {from: accounts[1]});
		const [token0yl0Nx5X, token1WrERt4U] = await contractwpNn8i.sortTokens.call(tokenAV3pzlGY, tokenBS9VUupm, {from: accounts[3]});
	});
})
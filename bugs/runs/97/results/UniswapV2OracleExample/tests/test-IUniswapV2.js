const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contracts77KUL = await IUniswapV2.new({from: accounts[5]});
		const amountOutfwaPnkR = BigInt("1470")
		const tokenInsyfHeR = accounts[0]
		await contracts77KUL.swap.call(tokenInsyfHeR, amountOutfwaPnkR, {from: accounts[1]});
		const nullH2z1Dy = await contracts77KUL.reserve1.call({from: accounts[3]});
		const liquidityIYxiaET = await contracts77KUL.mint.call({from: accounts[0]});
		await contracts77KUL.sync.call({from: accounts[0]});
	});
})
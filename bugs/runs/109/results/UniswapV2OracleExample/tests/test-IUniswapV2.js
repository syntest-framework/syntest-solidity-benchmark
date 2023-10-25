const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractPaX69BP = await IUniswapV2.new({from: accounts[5]});
		const amountOutvadgrNF = BigInt("1510")
		const tokenInlWMXl4S = accounts[0]
		const amountOutxjmuHZT = BigInt("393")
		const tokenInnDu3v7j = accounts[2]
		await contractPaX69BP.swap.call(tokenInlWMXl4S, amountOutvadgrNF, {from: accounts[2]});
		const nullm0L1tbn = await contractPaX69BP.token1.call({from: accounts[0]});
		await contractPaX69BP.skim.call({from: accounts[4]});
		await contractPaX69BP.swap.call(tokenInnDu3v7j, amountOutxjmuHZT, {from: accounts[3]});
		const nullmc90O5x = await contractPaX69BP.blockNumberLast.call({from: accounts[2]});
		const nullqLnDDnP = await contractPaX69BP.reserve0.call({from: accounts[3]});
	});
})
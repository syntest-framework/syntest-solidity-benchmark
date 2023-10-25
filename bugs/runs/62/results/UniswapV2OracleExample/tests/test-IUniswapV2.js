const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractT1Uh5pe = await IUniswapV2.new({from: accounts[0]});
		const amountOutPd7UkY0 = BigInt("1278")
		const tokenInT2zSy9c = accounts[4]
		await contractT1Uh5pe.sync.call({from: accounts[3]});
		await contractT1Uh5pe.swap.call(tokenInT2zSy9c, amountOutPd7UkY0, {from: accounts[2]});
		const liquidityJVk7TfB = await contractT1Uh5pe.mint.call({from: accounts[1]});
	});
})
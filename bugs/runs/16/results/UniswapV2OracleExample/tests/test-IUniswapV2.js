const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractlCSHFOz = await IUniswapV2.new({from: accounts[4]});
		const [amount0LIRnah0, amount1QS04u2] = await contractlCSHFOz.burn.call({from: accounts[3]});
		await contractlCSHFOz.skim.call({from: accounts[3]});
		const nullwWtQle = await contractlCSHFOz.token0.call({from: accounts[3]});
	});
})
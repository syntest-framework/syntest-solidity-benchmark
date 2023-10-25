const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractkGQZkY = await IUniswapV2.new({from: accounts[2]});
		const amountOutSYhbSj = BigInt("1587")
		const tokenInii1xj7D = accounts[1]
		const nullYBzRumq = await contractkGQZkY.price0CumulativeLast.call({from: accounts[4]});
		await contractkGQZkY.swap.call(tokenInii1xj7D, amountOutSYhbSj, {from: accounts[2]});
		const nullrpt7IRn = await contractkGQZkY.price0CumulativeLast.call({from: accounts[2]});
		const nullp6FP2L3 = await contractkGQZkY.reserve1.call({from: accounts[2]});
	});
})
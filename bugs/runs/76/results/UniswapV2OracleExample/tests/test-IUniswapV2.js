const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractSwRe6Yb = await IUniswapV2.new({from: accounts[4]});
		await contractSwRe6Yb.sync.call({from: accounts[2]});
		const nullQT510k = await contractSwRe6Yb.token0.call({from: accounts[2]});
		const nullk7rJ8W2 = await contractSwRe6Yb.price1CumulativeLast.call({from: accounts[0]});
	});
})
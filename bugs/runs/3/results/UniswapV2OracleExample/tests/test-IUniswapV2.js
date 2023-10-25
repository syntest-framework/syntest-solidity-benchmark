const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractYI98k4K = await IUniswapV2.new({from: accounts[4]});
		const [amount0Mu1gYY5, amount1xHdZvaw] = await contractYI98k4K.burn.call({from: accounts[2]});
		await contractYI98k4K.sync.call({from: accounts[1]});
		const nullxWV4l0g = await contractYI98k4K.price1CumulativeLast.call({from: accounts[4]});
	});
})
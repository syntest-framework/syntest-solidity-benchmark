const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractJr62YaY = await IUniswapV2.new({from: accounts[0]});
		const nullZYjoICx = await contractJr62YaY.token1.call({from: accounts[2]});
		const nulleQgm7bv = await contractJr62YaY.price0CumulativeLast.call({from: accounts[0]});
		const nullypSoqJ8 = await contractJr62YaY.reserve1.call({from: accounts[3]});
	});
})
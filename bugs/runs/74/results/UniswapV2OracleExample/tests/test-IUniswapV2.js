const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractVWHrnz9 = await IUniswapV2.new({from: accounts[4]});
		const nullg9jt3JI = await contractVWHrnz9.reserve1.call({from: accounts[5]});
		const [amount0sJyYsUG, amount1AuRtsPK] = await contractVWHrnz9.burn.call({from: accounts[5]});
		const nullGaO4Bbu = await contractVWHrnz9.reserve0.call({from: accounts[4]});
		const liquidityCMS4AqV = await contractVWHrnz9.mint.call({from: accounts[4]});
		const nullI65Bxdv = await contractVWHrnz9.price0CumulativeLast.call({from: accounts[1]});
	});
})
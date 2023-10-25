const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractdxOvxGK = await IUniswapV2.new({from: accounts[3]});
		const nulloY5xn69 = await contractdxOvxGK.reserve0.call({from: accounts[3]});
		const nullnvKnjHU = await contractdxOvxGK.token1.call({from: accounts[0]});
		const nullRD2JrlX = await contractdxOvxGK.price1CumulativeLast.call({from: accounts[0]});
	});
})
const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractA4dh7EP = await IUniswapV2.new({from: accounts[1]});
		const nullc7uIbHP = await contractA4dh7EP.token0.call({from: accounts[4]});
		const nullys6stZ = await contractA4dh7EP.reserve1.call({from: accounts[5]});
		const liquidityYKKVYG = await contractA4dh7EP.mint.call({from: accounts[5]});
		const nullnTfv64L = await contractA4dh7EP.reserve0.call({from: accounts[4]});
		const liquidityU01qAOi = await contractA4dh7EP.mint.call({from: accounts[4]});
	});
})
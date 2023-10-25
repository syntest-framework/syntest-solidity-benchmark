const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractFEdpee0 = await IUniswapV2.new({from: accounts[0]});
		await contractFEdpee0.skim.call({from: accounts[5]});
		const nullclhI4eb = await contractFEdpee0.reserve0.call({from: accounts[5]});
		const [amount0KWca0bq, amount1MkxXhEJ] = await contractFEdpee0.burn.call({from: accounts[2]});
		await contractFEdpee0.sync.call({from: accounts[3]});
		const liquidityjsRTOi3 = await contractFEdpee0.mint.call({from: accounts[2]});
	});
})
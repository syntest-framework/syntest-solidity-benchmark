const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractamtIlOq = await IUniswapV2.new({from: accounts[1]});
		const nullP78a1Tt = await contractamtIlOq.reserve0.call({from: accounts[5]});
		await contractamtIlOq.skim.call({from: accounts[3]});
		const nullG2cMsXp = await contractamtIlOq.reserve1.call({from: accounts[0]});
	});
})
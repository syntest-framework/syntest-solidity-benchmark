const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractZg9B7hH = await IUniswapV2.new({from: accounts[2]});
		const nullGdyYbJi = await contractZg9B7hH.factory.call({from: accounts[4]});
		const nullYJo5MDq = await contractZg9B7hH.token1.call({from: accounts[1]});
		await contractZg9B7hH.skim.call({from: accounts[0]});
		const liquidityCkGtBez = await contractZg9B7hH.mint.call({from: accounts[1]});
		const nullqRIPkv = await contractZg9B7hH.reserve1.call({from: accounts[3]});
		await contractZg9B7hH.sync.call({from: accounts[1]});
	});
})
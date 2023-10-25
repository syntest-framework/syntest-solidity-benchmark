const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractpG8ydfX = await IUniswapV2Factory.new({from: accounts[2]});
		const tokenBaIiYhYJ = accounts[0]
		const tokenA4bSl1p = accounts[0]
		const nullSSj4Ds = await contractpG8ydfX.exchangesCount.call({from: accounts[4]});
		const nulloKnBhSN = await contractpG8ydfX.exchangesCount.call({from: "0x0000000000000000000000000000000000000001"});
		const [token0XlP5VPy, token1QVUBuIs] = await contractpG8ydfX.sortTokens.call(tokenA4bSl1p, tokenBaIiYhYJ, {from: accounts[0]});
	});
})
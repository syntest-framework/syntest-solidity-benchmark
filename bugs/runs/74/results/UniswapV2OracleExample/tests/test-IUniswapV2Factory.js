const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contracttuqZmly = await IUniswapV2Factory.new({from: accounts[4]});
		const nullJVo9Noq = BigInt("1134")
		const tokenBlPdCbGe = accounts[4]
		const tokenAD1446Is = accounts[2]
		const exchangejC7ZSVa = await contracttuqZmly.exchanges.call(nullJVo9Noq, {from: accounts[3]});
		const exchangeFus9k5 = await contracttuqZmly.getExchange.call(tokenAD1446Is, tokenBlPdCbGe, {from: accounts[3]});
	});
})
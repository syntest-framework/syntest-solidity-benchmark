const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractfifaRQu = await IUniswapV2Factory.new({from: accounts[3]});
		const nullg7C8osT = BigInt("403")
		const exchangeNsWxdF = await contractfifaRQu.exchanges.call(nullg7C8osT, {from: accounts[0]});
		const nullvADIXwR = await contractfifaRQu.exchangeBytecode.call({from: accounts[1]});
	});
})
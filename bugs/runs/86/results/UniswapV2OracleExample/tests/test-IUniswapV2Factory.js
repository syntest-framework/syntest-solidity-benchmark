const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractnaTZRYT = await IUniswapV2Factory.new({from: accounts[4]});
		const tokenBaldWbrk = accounts[4]
		const tokenAnHi0niT = accounts[3]
		const nullYpunetk = await contractnaTZRYT.feeRecipient.call({from: accounts[4]});
		const exchangekQjWuzB = await contractnaTZRYT.createExchange.call(tokenAnHi0niT, tokenBaldWbrk, {from: accounts[1]});
		const nullubeoW4W = await contractnaTZRYT.feeRecipient.call({from: accounts[2]});
		const nullfKZH8jg = await contractnaTZRYT.exchangesCount.call({from: accounts[5]});
	});
})
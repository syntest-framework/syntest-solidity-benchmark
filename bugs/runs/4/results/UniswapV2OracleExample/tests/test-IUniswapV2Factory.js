const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractecHAwlq = await IUniswapV2Factory.new({from: accounts[1]});
		const tokenBq1Tg0UF = accounts[1]
		const tokenAleHGjQR = accounts[2]
		const nullA0EvUh5 = await contractecHAwlq.exchangesCount.call({from: accounts[0]});
		const nullsDVESbn = await contractecHAwlq.exchangeBytecode.call({from: accounts[4]});
		const exchangelPXuba0 = await contractecHAwlq.createExchange.call(tokenAleHGjQR, tokenBq1Tg0UF, {from: accounts[1]});
	});
})
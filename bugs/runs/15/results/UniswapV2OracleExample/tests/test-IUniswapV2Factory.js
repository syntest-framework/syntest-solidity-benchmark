const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractOcAOGQ = await IUniswapV2Factory.new({from: accounts[0]});
		const tokenBdUlcLaR = accounts[0]
		const tokenA5eyzzU = "0x0000000000000000000000000000000000000001"
		const tokenBvvsrTgY = accounts[3]
		const tokenAnHxiJQ = accounts[0]
		const exchangeShGXpG0 = await contractOcAOGQ.getExchange.call(tokenA5eyzzU, tokenBdUlcLaR, {from: accounts[4]});
		const exchangeN3beex = await contractOcAOGQ.getExchange.call(tokenAnHxiJQ, tokenBvvsrTgY, {from: "0x0000000000000000000000000000000000000001"});
	});
})
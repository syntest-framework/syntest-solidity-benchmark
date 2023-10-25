const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractIm7YaaT = await IUniswapV2Factory.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenBtSszetM = accounts[1]
		const tokenAt9b58Cs = "0x0000000000000000000000000000000000000001"
		const tokenBxwnDPcT = accounts[1]
		const tokenAXvGLdOF = accounts[0]
		const exchangeHWPkEFG = await contractIm7YaaT.createExchange.call(tokenAt9b58Cs, tokenBtSszetM, {from: accounts[4]});
		const nullMUr1Fq = await contractIm7YaaT.exchangesCount.call({from: accounts[0]});
		const exchangerunF381 = await contractIm7YaaT.createExchange.call(tokenAXvGLdOF, tokenBxwnDPcT, {from: accounts[1]});
	});
})
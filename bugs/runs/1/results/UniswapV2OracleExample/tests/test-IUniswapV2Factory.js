const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractQb5yhmz = await IUniswapV2Factory.new({from: accounts[0]});
		const tokenBbhncdAF = accounts[0]
		const tokenApDg5uzH = accounts[0]
		const tokenBBca9VI3 = accounts[1]
		const tokenAwzJ1ubL = "0x0000000000000000000000000000000000000001"
		const tokenBW7MxUF0 = accounts[3]
		const tokenAiDzSPXK = accounts[4]
		const exchangeSMjqRve = await contractQb5yhmz.getExchange.call(tokenApDg5uzH, tokenBbhncdAF, {from: accounts[4]});
		const [token06VbN2o, token1BhahuW6] = await contractQb5yhmz.sortTokens.call(tokenAwzJ1ubL, tokenBBca9VI3, {from: accounts[2]});
		const nullT6K9SRX = await contractQb5yhmz.factoryOwner.call({from: accounts[0]});
		const nulleEpjsGA = await contractQb5yhmz.exchangeBytecode.call({from: accounts[1]});
		const exchangea6aAf7c = await contractQb5yhmz.getExchange.call(tokenAiDzSPXK, tokenBW7MxUF0, {from: "0x0000000000000000000000000000000000000001"});
	});
})
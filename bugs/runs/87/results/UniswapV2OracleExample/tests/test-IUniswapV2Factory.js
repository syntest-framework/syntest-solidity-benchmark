const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractfqDYTTt = await IUniswapV2Factory.new({from: accounts[3]});
		const tokenBD2p32f = accounts[1]
		const tokenAhqQUWIl = accounts[0]
		const tokenBZvJ9uLP = accounts[4]
		const tokenAH7jVGnK = accounts[3]
		const nullUmezLyF = BigInt("925")
		const tokenBm39lvkj = accounts[2]
		const tokenANvV5mq3 = accounts[3]
		const exchangeWor5lsM = await contractfqDYTTt.getExchange.call(tokenAhqQUWIl, tokenBD2p32f, {from: accounts[1]});
		const exchangedsbOgPJ = await contractfqDYTTt.getExchange.call(tokenAH7jVGnK, tokenBZvJ9uLP, {from: accounts[1]});
		const nullvzaCAz = await contractfqDYTTt.factoryOwner.call({from: accounts[0]});
		const exchangeM4K61Te = await contractfqDYTTt.exchanges.call(nullUmezLyF, {from: accounts[1]});
		const exchangeFguvUoz = await contractfqDYTTt.createExchange.call(tokenANvV5mq3, tokenBm39lvkj, {from: accounts[3]});
	});
})
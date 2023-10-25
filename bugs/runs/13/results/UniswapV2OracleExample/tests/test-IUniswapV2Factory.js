const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractoFeAc3n = await IUniswapV2Factory.new({from: accounts[2]});
		const tokenBRcUDmHh = accounts[1]
		const tokenAK62oQBC = accounts[1]
		const tokenBsVxtyfr = accounts[1]
		const tokenAHESKVO = "0x0000000000000000000000000000000000000001"
		const nullQAY1jgQ = BigInt("1336")
		const nullBBhOxaJ = await contractoFeAc3n.factoryOwner.call({from: accounts[5]});
		const nulljAXVZ8o = await contractoFeAc3n.exchangesCount.call({from: accounts[1]});
		const [token0I3Cjp3G, token1V9tjCZz] = await contractoFeAc3n.sortTokens.call(tokenAK62oQBC, tokenBRcUDmHh, {from: accounts[0]});
		const exchangeQYZn0M6 = await contractoFeAc3n.createExchange.call(tokenAHESKVO, tokenBsVxtyfr, {from: accounts[0]});
		const exchangeFGEcW81 = await contractoFeAc3n.exchanges.call(nullQAY1jgQ, {from: accounts[2]});
		const nulln12PlEV = await contractoFeAc3n.exchangesCount.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
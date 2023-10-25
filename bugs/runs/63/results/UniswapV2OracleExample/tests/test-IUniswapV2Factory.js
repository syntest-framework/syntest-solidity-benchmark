const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractwNb4ypH = await IUniswapV2Factory.new({from: accounts[4]});
		const nulleKsg0fv = BigInt("1186")
		const tokenBXfL8DpJ = accounts[4]
		const tokenANUn0QgO = accounts[0]
		const tokenBXciLIr = accounts[1]
		const tokenAcaQ5NaC = accounts[5]
		const tokenBk0MBcEe = accounts[3]
		const tokenAo7EE9Bq = "0x0000000000000000000000000000000000000001"
		const exchangeV2KAuOZ = await contractwNb4ypH.exchanges.call(nulleKsg0fv, {from: accounts[2]});
		const [token0k9FCev, token1D4ZRj8V] = await contractwNb4ypH.sortTokens.call(tokenANUn0QgO, tokenBXfL8DpJ, {from: "0x0000000000000000000000000000000000000001"});
		const exchangeLZH58qQ = await contractwNb4ypH.getExchange.call(tokenAcaQ5NaC, tokenBXciLIr, {from: accounts[3]});
		const exchangeXcdoxPw = await contractwNb4ypH.getExchange.call(tokenAo7EE9Bq, tokenBk0MBcEe, {from: "0x0000000000000000000000000000000000000001"});
		const nullVk9w9Er = await contractwNb4ypH.factoryOwner.call({from: accounts[2]});
		const nullu8dcbTW = await contractwNb4ypH.exchangeBytecode.call({from: accounts[3]});
	});
})
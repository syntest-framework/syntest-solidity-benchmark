const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractWXiSwwa = await IUniswapV2Factory.new({from: accounts[1]});
		const nullFahzDao = BigInt("789")
		const tokenBCdpSyuG = accounts[0]
		const tokenAMFKYlXF = accounts[0]
		const exchangewIzQVk = await contractWXiSwwa.exchanges.call(nullFahzDao, {from: accounts[3]});
		const exchangeBzGYxqf = await contractWXiSwwa.createExchange.call(tokenAMFKYlXF, tokenBCdpSyuG, {from: "0x0000000000000000000000000000000000000001"});
		const nullbznPgLG = await contractWXiSwwa.exchangesCount.call({from: accounts[1]});
	});
})
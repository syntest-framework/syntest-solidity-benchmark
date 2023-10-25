const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractlkqDDQ = await IUniswapV2OracleExample.new({from: accounts[2]});
		const amountInmwweuf8 = BigInt("1184")
		const tokenInyEy5SS0 = accounts[0]
		const nulli2Gximl = await contractlkqDDQ.token1.call({from: accounts[0]});
		const nullds3cAqA = await contractlkqDDQ.token0.call({from: accounts[4]});
		await contractlkqDDQ.update.call({from: accounts[4]});
		await contractlkqDDQ.update.call({from: accounts[0]});
		const amountOutxhENJUE = await contractlkqDDQ.quote.call(tokenInyEy5SS0, amountInmwweuf8, {from: accounts[3]});
	});
})
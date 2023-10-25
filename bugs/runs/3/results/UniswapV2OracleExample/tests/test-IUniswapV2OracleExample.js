const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractoE1LYuZ = await IUniswapV2OracleExample.new({from: accounts[3]});
		const amountInshfbAMv = BigInt("838")
		const tokenInGMHv4a2 = accounts[5]
		const nullkp5pOES = await contractoE1LYuZ.price0Average.call({from: accounts[0]});
		await contractoE1LYuZ.initialize.call({from: accounts[0]});
		const nullZbZoYu = await contractoE1LYuZ.exchange.call({from: accounts[3]});
		const nullkSXLDZP = await contractoE1LYuZ.price1Average.call({from: accounts[1]});
		const amountOutsKqZ01r = await contractoE1LYuZ.quote.call(tokenInGMHv4a2, amountInshfbAMv, {from: accounts[1]});
	});
})
const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractLV1R7j = await IUniswapV2OracleExample.new({from: accounts[1]});
		const amountInsgrk0sX = BigInt("623")
		const tokenIntEC2L4 = accounts[5]
		await contractLV1R7j.update.call({from: accounts[5]});
		const nulluWug27s = await contractLV1R7j.price0Average.call({from: accounts[5]});
		const nullbuQxf3R = await contractLV1R7j.token1.call({from: "0x0000000000000000000000000000000000000001"});
		const amountOutRRSajkd = await contractLV1R7j.quote.call(tokenIntEC2L4, amountInsgrk0sX, {from: accounts[0]});
	});
})
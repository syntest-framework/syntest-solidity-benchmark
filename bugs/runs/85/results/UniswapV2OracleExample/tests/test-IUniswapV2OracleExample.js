const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractBdRJStb = await IUniswapV2OracleExample.new({from: accounts[4]});
		const amountInEXEgk8m = BigInt("1114")
		const tokenInAJOnrcw = accounts[1]
		const nullmwSjqGp = await contractBdRJStb.price1Average.call({from: accounts[0]});
		const nulltVlma2E = await contractBdRJStb.price1Average.call({from: "0x0000000000000000000000000000000000000001"});
		const amountOutecJlyZ = await contractBdRJStb.quote.call(tokenInAJOnrcw, amountInEXEgk8m, {from: accounts[1]});
		const nullC6xRPIS = await contractBdRJStb.token1.call({from: accounts[4]});
	});
})
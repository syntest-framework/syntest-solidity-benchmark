const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractQJWMbq9 = await IUniswapV2OracleExample.new({from: accounts[4]});
		const nullRtiROC5 = await contractQJWMbq9.exchange.call({from: accounts[4]});
		const nullL4bksy = await contractQJWMbq9.period.call({from: accounts[1]});
	});
})
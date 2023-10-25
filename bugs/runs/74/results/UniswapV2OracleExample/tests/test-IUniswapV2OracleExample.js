const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractUUu0iBa = await IUniswapV2OracleExample.new({from: accounts[3]});
		await contractUUu0iBa.initialize.call({from: accounts[4]});
		const nulljB1PRS = await contractUUu0iBa.token0.call({from: accounts[4]});
		const nullZ7rbrI9 = await contractUUu0iBa.price1Average.call({from: accounts[0]});
	});
})
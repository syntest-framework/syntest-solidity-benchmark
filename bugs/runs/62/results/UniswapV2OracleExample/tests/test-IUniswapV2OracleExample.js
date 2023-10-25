const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractg0nBczB = await IUniswapV2OracleExample.new({from: accounts[1]});
		await contractg0nBczB.update.call({from: accounts[2]});
		const nullTT47fcG = await contractg0nBczB.token0.call({from: accounts[1]});
	});
})
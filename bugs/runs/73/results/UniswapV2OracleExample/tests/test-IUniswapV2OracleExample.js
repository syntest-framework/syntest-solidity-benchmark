const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractvBOb5FA = await IUniswapV2OracleExample.new({from: accounts[1]});
		await contractvBOb5FA.initialize.call({from: accounts[4]});
		const nullgrCYeO = await contractvBOb5FA.token0.call({from: accounts[1]});
	});
})
const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractjlBFDA8 = await IUniswapV2OracleExample.new({from: accounts[1]});
		await contractjlBFDA8.initialize.call({from: accounts[5]});
		const nullKWgKQ1b = await contractjlBFDA8.token1.call({from: accounts[2]});
	});
})
const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractXeuNI7n = await IUniswapV2OracleExample.new({from: accounts[5]});
		const nullNt6M8fR = await contractXeuNI7n.price0Average.call({from: accounts[2]});
		const nullmXzwnRS = await contractXeuNI7n.initialized.call({from: accounts[1]});
		const nullclQK8vp = await contractXeuNI7n.token0.call({from: accounts[3]});
		const nullxAM6VIR = await contractXeuNI7n.initialized.call({from: accounts[3]});
	});
})
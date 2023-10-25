const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractmsWhNj = await IUniswapV2OracleExample.new({from: accounts[4]});
		const nulltYcKnbV = await contractmsWhNj.token1.call({from: accounts[5]});
		await contractmsWhNj.update.call({from: accounts[2]});
		const nullNCs0dWp = await contractmsWhNj.token1.call({from: accounts[2]});
		const nullZk9ZBVT = await contractmsWhNj.initialized.call({from: accounts[2]});
	});
})
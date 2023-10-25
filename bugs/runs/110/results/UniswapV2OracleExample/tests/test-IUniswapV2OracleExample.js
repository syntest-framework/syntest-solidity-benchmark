const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractWkRjpO0 = await IUniswapV2OracleExample.new({from: accounts[0]});
		const nulljLbkGOb = await contractWkRjpO0.token1.call({from: accounts[1]});
		const nullgpCwKyc = await contractWkRjpO0.price0Average.call({from: accounts[1]});
		const nullrFFY8o0 = await contractWkRjpO0.exchange.call({from: accounts[3]});
		const nullFfLtBGl = await contractWkRjpO0.period.call({from: accounts[3]});
		const nullQR4ay4m = await contractWkRjpO0.initialized.call({from: accounts[3]});
	});
})
const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractnW9ZnWn = await IUniswapV2OracleExample.new({from: accounts[3]});
		const amountInHmT0ay = BigInt("992")
		const tokenInflYn2yE = accounts[2]
		const amountOutEH4bQVL = await contractnW9ZnWn.quote.call(tokenInflYn2yE, amountInHmT0ay, {from: accounts[3]});
		const nullwqvCpBI = await contractnW9ZnWn.price0Average.call({from: accounts[3]});
		const nullei4Bbu7 = await contractnW9ZnWn.price1Average.call({from: accounts[0]});
		const nullyY7k8J0 = await contractnW9ZnWn.initialized.call({from: accounts[4]});
		const nullFImPMUT = await contractnW9ZnWn.price1Average.call({from: accounts[1]});
	});
})
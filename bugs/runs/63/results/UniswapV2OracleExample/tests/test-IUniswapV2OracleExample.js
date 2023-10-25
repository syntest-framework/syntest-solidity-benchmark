const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractpj63c3V = await IUniswapV2OracleExample.new({from: accounts[2]});
		const amountInUEMJpgG = BigInt("1090")
		const tokenIntELv8t8 = accounts[3]
		const nullHSaUpNE = await contractpj63c3V.initialized.call({from: accounts[4]});
		const amountOutmGTUuVh = await contractpj63c3V.quote.call(tokenIntELv8t8, amountInUEMJpgG, {from: accounts[1]});
		const nullFc0H2WY = await contractpj63c3V.initialized.call({from: accounts[3]});
		await contractpj63c3V.initialize.call({from: accounts[4]});
	});
})
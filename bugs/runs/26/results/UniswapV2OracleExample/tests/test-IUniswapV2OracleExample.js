const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractcHp98nD = await IUniswapV2OracleExample.new({from: accounts[2]});
		const amountIns3WEtNT = BigInt("724")
		const tokenInrD33BA8 = accounts[2]
		const amountOutqoLKmcE = await contractcHp98nD.quote.call(tokenInrD33BA8, amountIns3WEtNT, {from: accounts[2]});
		const nullqqZNC4y = await contractcHp98nD.token0.call({from: accounts[5]});
		const nullkKCRdj3 = await contractcHp98nD.exchange.call({from: accounts[1]});
		await contractcHp98nD.initialize.call({from: accounts[2]});
		const nullC3RuC8U = await contractcHp98nD.initialized.call({from: accounts[0]});
	});
})
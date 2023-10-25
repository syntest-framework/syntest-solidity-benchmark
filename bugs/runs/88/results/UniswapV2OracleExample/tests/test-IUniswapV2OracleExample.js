const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractKamQlY1 = await IUniswapV2OracleExample.new({from: accounts[2]});
		await contractKamQlY1.update.call({from: accounts[1]});
		const nullmo1ZXDX = await contractKamQlY1.price1Average.call({from: accounts[4]});
		const nullfxU0kzI = await contractKamQlY1.initialized.call({from: accounts[4]});
		const nulloVAEoEy = await contractKamQlY1.exchange.call({from: accounts[0]});
		const nulljusuV88 = await contractKamQlY1.price1Average.call({from: accounts[3]});
	});
})
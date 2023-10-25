const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractpgAY2xq = await IUniswapV2OracleExample.new({from: "0x0000000000000000000000000000000000000001"});
		const nullfQ1UrRd = await contractpgAY2xq.token1.call({from: accounts[3]});
		const nullp7UNOKY = await contractpgAY2xq.initialized.call({from: accounts[5]});
		const nullB4dRCat = await contractpgAY2xq.exchange.call({from: accounts[1]});
		await contractpgAY2xq.update.call({from: accounts[4]});
		const nullur6nLK = await contractpgAY2xq.token1.call({from: accounts[2]});
	});
})
const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractablpLpr = await IUniswapV2OracleExample.new({from: accounts[4]});
		const amountInGpzbrTW = BigInt("503")
		const tokenInaVICNUo = accounts[2]
		const amountOutcvsd53r = await contractablpLpr.quote.call(tokenInaVICNUo, amountInGpzbrTW, {from: accounts[1]});
		const nullNLnIQG = await contractablpLpr.exchange.call({from: accounts[4]});
		const nulleen3FS2 = await contractablpLpr.initialized.call({from: accounts[0]});
	});
})
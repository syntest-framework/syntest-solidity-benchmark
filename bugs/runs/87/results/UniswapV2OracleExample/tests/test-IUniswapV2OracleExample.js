const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractU2yZOGU = await IUniswapV2OracleExample.new({from: accounts[1]});
		const amountInEI2UJpq = BigInt("1675")
		const tokenInJbFAHS = accounts[3]
		await contractU2yZOGU.update.call({from: accounts[0]});
		const nullUHtTyk5 = await contractU2yZOGU.initialized.call({from: accounts[4]});
		const nullokC2y79 = await contractU2yZOGU.token0.call({from: accounts[5]});
		const amountOutnG5S8DR = await contractU2yZOGU.quote.call(tokenInJbFAHS, amountInEI2UJpq, {from: accounts[4]});
		const nullp1U2Kw = await contractU2yZOGU.token0.call({from: accounts[4]});
		const nullKDqolJx = await contractU2yZOGU.token0.call({from: accounts[0]});
	});
})
const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryl9ghDru = accounts[1]
		const tokenAqSt03GX = accounts[2]
		const tokenBUXQ2xy5 = accounts[0]
		const contractg30mal9 = await UniswapV2OracleExample.new(factoryl9ghDru, tokenAqSt03GX, tokenBUXQ2xy5, {from: accounts[2]});
		const amountInBPNzviL = BigInt("379")
		const tokenIn5Utc3E = accounts[1]
		await contractg30mal9.update.call({from: accounts[3]});
		const amountOutxbs3rpP = await contractg30mal9.quote.call(tokenIn5Utc3E, amountInBPNzviL, {from: accounts[5]});
		await contractg30mal9.update.call({from: accounts[4]});
		await contractg30mal9.initialize.call({from: accounts[4]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryGawSpdN = accounts[5]
		const tokenASQDwawt = accounts[0]
		const tokenBvCGSsmc = "0x0000000000000000000000000000000000000001"
		const contractCqtJnbe = await UniswapV2OracleExample.new(factoryGawSpdN, tokenASQDwawt, tokenBvCGSsmc, {from: "0x0000000000000000000000000000000000000001"});
		await contractCqtJnbe.initialize.call({from: accounts[1]});
		await contractCqtJnbe.initialize.call({from: accounts[1]});
		await contractCqtJnbe.initialize.call({from: accounts[1]});
		await contractCqtJnbe.initialize.call({from: accounts[1]});
	});
})
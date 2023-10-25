const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factorySxNGrUw = accounts[5]
		const tokenAqJE0QjW = accounts[5]
		const tokenBg7Vs5x = accounts[4]
		const contractJz0p3FI = await UniswapV2OracleExample.new(factorySxNGrUw, tokenAqJE0QjW, tokenBg7Vs5x, {from: "0x0000000000000000000000000000000000000001"});
		const amountInc7GQWkQ = BigInt("1386")
		const tokenInrgl50Sl = accounts[0]
		await contractJz0p3FI.initialize.call({from: accounts[4]});
		await contractJz0p3FI.initialize.call({from: accounts[4]});
		const amountOutcsEnNs = await contractJz0p3FI.quote.call(tokenInrgl50Sl, amountInc7GQWkQ, {from: accounts[1]});
		await contractJz0p3FI.initialize.call({from: accounts[5]});
		await contractJz0p3FI.initialize.call({from: accounts[4]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryGRMUQvZ = accounts[0]
		const tokenAlezinCW = "0x0000000000000000000000000000000000000001"
		const tokenBAjm3Rp = accounts[4]
		const contractIbU1SDb = await UniswapV2OracleExample.new(factoryGRMUQvZ, tokenAlezinCW, tokenBAjm3Rp, {from: accounts[2]});
		const amountInYc89mJC = BigInt("873")
		const tokenInjtJKcnN = accounts[1]
		const amountOuthl4RHig = await contractIbU1SDb.quote.call(tokenInjtJKcnN, amountInYc89mJC, {from: accounts[2]});
		await contractIbU1SDb.initialize.call({from: accounts[2]});
		await contractIbU1SDb.update.call({from: accounts[0]});
		await contractIbU1SDb.update.call({from: accounts[3]});
	});
})
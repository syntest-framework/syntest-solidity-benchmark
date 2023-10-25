const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryidM77U = accounts[2]
		const tokenAfcjsYb = accounts[0]
		const tokenBC9HSJ4M = accounts[1]
		const contractcUGRwmU = await UniswapV2OracleExample.new(factoryidM77U, tokenAfcjsYb, tokenBC9HSJ4M, {from: accounts[3]});
		const amountInjuT8Xh = BigInt("1878")
		const tokenInhobQD9n = accounts[3]
		const amountInT95eCLE = BigInt("1554")
		const tokenInODiYDKq = accounts[1]
		const amountOutTcfBJCT = await contractcUGRwmU.quote.call(tokenInhobQD9n, amountInjuT8Xh, {from: accounts[3]});
		await contractcUGRwmU.initialize.call({from: accounts[0]});
		const amountOutLhTJg2j = await contractcUGRwmU.quote.call(tokenInODiYDKq, amountInT95eCLE, {from: accounts[5]});
		await contractcUGRwmU.update.call({from: accounts[3]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryApr4vua = accounts[1]
		const tokenATqecgY = accounts[2]
		const tokenBgyvGPxi = accounts[0]
		const contracthCguWBA = await UniswapV2OracleExample.new(factoryApr4vua, tokenATqecgY, tokenBgyvGPxi, {from: "0x0000000000000000000000000000000000000001"});
		const amountInx0ymbZU = BigInt("1427")
		const tokenInA5QydBe = "0x0000000000000000000000000000000000000001"
		await contracthCguWBA.initialize.call({from: accounts[5]});
		await contracthCguWBA.initialize.call({from: accounts[3]});
		const amountOutPPMz3us = await contracthCguWBA.quote.call(tokenInA5QydBe, amountInx0ymbZU, {from: accounts[1]});
	});
})
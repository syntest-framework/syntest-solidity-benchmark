const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryobQRWZ = accounts[1]
		const tokenAhZ5gf4Y = accounts[2]
		const tokenBMMy7hY7 = "0x0000000000000000000000000000000000000001"
		const contractnMbbQ7S = await UniswapV2OracleExample.new(factoryobQRWZ, tokenAhZ5gf4Y, tokenBMMy7hY7, {from: accounts[0]});
		await contractnMbbQ7S.initialize.call({from: accounts[1]});
		await contractnMbbQ7S.initialize.call({from: accounts[1]});
		await contractnMbbQ7S.update.call({from: accounts[0]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryv97okDv = accounts[5]
		const tokenARtSnMB = accounts[0]
		const tokenBbC0Gx9E = accounts[0]
		const contractV0AJDVD = await UniswapV2OracleExample.new(factoryv97okDv, tokenARtSnMB, tokenBbC0Gx9E, {from: "0x0000000000000000000000000000000000000001"});
		const amountInhFv4Km = BigInt("986")
		const tokenInOfMt9dW = accounts[5]
		const amountInccoLx8z = BigInt("1069")
		const tokenInLA3gC2F = "0x0000000000000000000000000000000000000001"
		await contractV0AJDVD.initialize.call({from: accounts[2]});
		const amountOutwKyEOCz = await contractV0AJDVD.quote.call(tokenInOfMt9dW, amountInhFv4Km, {from: accounts[1]});
		const amountOuteCIxEgt = await contractV0AJDVD.quote.call(tokenInLA3gC2F, amountInccoLx8z, {from: accounts[5]});
		await contractV0AJDVD.initialize.call({from: accounts[3]});
		await contractV0AJDVD.update.call({from: accounts[0]});
		await contractV0AJDVD.initialize.call({from: accounts[1]});
	});
})
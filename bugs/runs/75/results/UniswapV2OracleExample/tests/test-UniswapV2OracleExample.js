const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryDqUeuwH = accounts[4]
		const tokenANaFUvRI = accounts[2]
		const tokenBwf2xvcK = accounts[4]
		const contractllgpRze = await UniswapV2OracleExample.new(factoryDqUeuwH, tokenANaFUvRI, tokenBwf2xvcK, {from: accounts[0]});
		await contractllgpRze.update.call({from: accounts[4]});
		await contractllgpRze.update.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryALnBxQ = "0x0000000000000000000000000000000000000001"
		const tokenAyeFWHY2 = "0x0000000000000000000000000000000000000001"
		const tokenBi1UXDYC = accounts[3]
		const contractIuX0QfN = await UniswapV2OracleExample.new(factoryALnBxQ, tokenAyeFWHY2, tokenBi1UXDYC, {from: "0x0000000000000000000000000000000000000001"});
		const amountInJGHphBm = BigInt("466")
		const tokenInGVEKZXq = accounts[1]
		const amountInvtElON = BigInt("1776")
		const tokenInMuNztCz = "0x0000000000000000000000000000000000000001"
		const amountOutZIk6fEv = await contractIuX0QfN.quote.call(tokenInGVEKZXq, amountInJGHphBm, {from: accounts[1]});
		await contractIuX0QfN.initialize.call({from: "0x0000000000000000000000000000000000000001"});
		await contractIuX0QfN.update.call({from: accounts[0]});
		const amountOutISAsiXf = await contractIuX0QfN.quote.call(tokenInMuNztCz, amountInvtElON, {from: accounts[0]});
		await contractIuX0QfN.initialize.call({from: accounts[0]});
	});
})
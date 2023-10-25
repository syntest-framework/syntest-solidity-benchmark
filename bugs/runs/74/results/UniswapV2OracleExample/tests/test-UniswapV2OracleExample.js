const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factorymF6GWaI = "0x0000000000000000000000000000000000000001"
		const tokenAIhHx0QH = accounts[1]
		const tokenBtR5IvuL = accounts[0]
		const contractbqCMwd = await UniswapV2OracleExample.new(factorymF6GWaI, tokenAIhHx0QH, tokenBtR5IvuL, {from: accounts[1]});
		const amountInHDkxGjG = BigInt("429")
		const tokenInoDyo4t = accounts[1]
		const amountOutKkDQaDe = await contractbqCMwd.quote.call(tokenInoDyo4t, amountInHDkxGjG, {from: "0x0000000000000000000000000000000000000001"});
		await contractbqCMwd.update.call({from: accounts[3]});
		await contractbqCMwd.update.call({from: accounts[4]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryqM6ibgw = accounts[4]
		const tokenAkiseEB4 = accounts[4]
		const tokenBsbTsO0e = accounts[0]
		const contracthlU3oub = await UniswapV2OracleExample.new(factoryqM6ibgw, tokenAkiseEB4, tokenBsbTsO0e, {from: "0x0000000000000000000000000000000000000001"});
		await contracthlU3oub.update.call({from: accounts[4]});
		await contracthlU3oub.initialize.call({from: accounts[0]});
		await contracthlU3oub.initialize.call({from: accounts[1]});
		await contracthlU3oub.update.call({from: accounts[4]});
		await contracthlU3oub.update.call({from: accounts[2]});
	});
})
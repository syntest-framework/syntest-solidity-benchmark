const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryQdDBzOw = accounts[3]
		const tokenAaMiySvK = accounts[3]
		const tokenBfzd9dYV = accounts[2]
		const contractgF5SGuz = await UniswapV2OracleExample.new(factoryQdDBzOw, tokenAaMiySvK, tokenBfzd9dYV, {from: "0x0000000000000000000000000000000000000001"});
		const amountInJTMPA7t = BigInt("681")
		const tokenInO2jmUjN = accounts[2]
		const amountOutMsKsWzG = await contractgF5SGuz.quote.call(tokenInO2jmUjN, amountInJTMPA7t, {from: accounts[1]});
		await contractgF5SGuz.initialize.call({from: accounts[0]});
		await contractgF5SGuz.initialize.call({from: accounts[5]});
		await contractgF5SGuz.initialize.call({from: accounts[2]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryOGaOLs = "0x0000000000000000000000000000000000000001"
		const tokenAlkcP465 = accounts[1]
		const tokenBx25ZWu = accounts[3]
		const contractMZOES9h = await UniswapV2OracleExample.new(factoryOGaOLs, tokenAlkcP465, tokenBx25ZWu, {from: accounts[2]});
		const amountInwlzyc0G = BigInt("1680")
		const tokenIngg6z73a = accounts[5]
		await contractMZOES9h.initialize.call({from: "0x0000000000000000000000000000000000000001"});
		const amountOutjQqg4O = await contractMZOES9h.quote.call(tokenIngg6z73a, amountInwlzyc0G, {from: accounts[4]});
	});
})
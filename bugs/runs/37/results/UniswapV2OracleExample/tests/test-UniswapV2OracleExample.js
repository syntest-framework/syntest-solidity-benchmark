const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryoosJgEr = accounts[5]
		const tokenArVQXkBZ = accounts[2]
		const tokenBxoZa3Sy = accounts[2]
		const contracthsHrIvU = await UniswapV2OracleExample.new(factoryoosJgEr, tokenArVQXkBZ, tokenBxoZa3Sy, {from: accounts[3]});
		const amountInI7ENcy = BigInt("6")
		const tokenInsCT7HpF = accounts[0]
		const amountOutL6K8Goj = await contracthsHrIvU.quote.call(tokenInsCT7HpF, amountInI7ENcy, {from: accounts[3]});
		await contracthsHrIvU.update.call({from: accounts[1]});
		await contracthsHrIvU.initialize.call({from: accounts[4]});
		await contracthsHrIvU.initialize.call({from: accounts[0]});
		await contracthsHrIvU.update.call({from: accounts[0]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryolvyuE0 = accounts[2]
		const tokenAJRZnqaQ = accounts[0]
		const tokenBGKdG66 = accounts[4]
		const contractv5Dsect = await UniswapV2OracleExample.new(factoryolvyuE0, tokenAJRZnqaQ, tokenBGKdG66, {from: "0x0000000000000000000000000000000000000001"});
		const amountInwajrzD = BigInt("1487")
		const tokenInBqhBxs = accounts[0]
		await contractv5Dsect.initialize.call({from: accounts[3]});
		const amountOutL6H8Vs5 = await contractv5Dsect.quote.call(tokenInBqhBxs, amountInwajrzD, {from: accounts[4]});
	});
})
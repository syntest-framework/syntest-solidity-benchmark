const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryBlvbKbK = accounts[4]
		const tokenACbpvROR = accounts[0]
		const tokenBUvCGIwT = accounts[4]
		const contractiwHlF4F = await UniswapV2OracleExample.new(factoryBlvbKbK, tokenACbpvROR, tokenBUvCGIwT, {from: accounts[4]});
		await contractiwHlF4F.initialize.call({from: accounts[2]});
		await contractiwHlF4F.update.call({from: accounts[4]});
		await contractiwHlF4F.initialize.call({from: accounts[2]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryBqT6VNn = accounts[4]
		const tokenAVZjvkid = accounts[2]
		const tokenBLmhq7HS = accounts[4]
		const contractr7WcKV1 = await UniswapV2OracleExample.new(factoryBqT6VNn, tokenAVZjvkid, tokenBLmhq7HS, {from: "0x0000000000000000000000000000000000000001"});
		await contractr7WcKV1.update.call({from: accounts[1]});
		await contractr7WcKV1.initialize.call({from: accounts[1]});
		await contractr7WcKV1.update.call({from: accounts[0]});
		await contractr7WcKV1.initialize.call({from: accounts[2]});
	});
})
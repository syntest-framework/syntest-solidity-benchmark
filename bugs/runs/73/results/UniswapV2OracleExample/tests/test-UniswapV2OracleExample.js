const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryGz9fk03 = accounts[5]
		const tokenAT3kgnCC = accounts[1]
		const tokenBO3q3PzO = accounts[0]
		const contractEnlx8RD = await UniswapV2OracleExample.new(factoryGz9fk03, tokenAT3kgnCC, tokenBO3q3PzO, {from: accounts[3]});
		const amountInFZWpoaE = BigInt("1302")
		const tokenInh1rjUUV = accounts[4]
		const amountIna3g9KyD = BigInt("177")
		const tokenInmiWeoMe = "0x0000000000000000000000000000000000000001"
		const amountOutudFfJ5J = await contractEnlx8RD.quote.call(tokenInh1rjUUV, amountInFZWpoaE, {from: accounts[5]});
		const amountOutWCQZfht = await contractEnlx8RD.quote.call(tokenInmiWeoMe, amountIna3g9KyD, {from: accounts[3]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryXoO3wV = accounts[2]
		const tokenAWKbZvHU = accounts[3]
		const tokenBqY0YbT5 = accounts[5]
		const contractgPksYQz = await UniswapV2OracleExample.new(factoryXoO3wV, tokenAWKbZvHU, tokenBqY0YbT5, {from: "0x0000000000000000000000000000000000000001"});
		const amountInWXi4hie = BigInt("353")
		const tokenInZkWRFfE = "0x0000000000000000000000000000000000000001"
		const amountInutz2SiB = BigInt("1111")
		const tokenInWiYPF9M = accounts[4]
		await contractgPksYQz.update.call({from: accounts[3]});
		await contractgPksYQz.update.call({from: accounts[2]});
		const amountOutvQEuTJx = await contractgPksYQz.quote.call(tokenInZkWRFfE, amountInWXi4hie, {from: accounts[4]});
		const amountOutLL5qM2R = await contractgPksYQz.quote.call(tokenInWiYPF9M, amountInutz2SiB, {from: accounts[5]});
	});
})
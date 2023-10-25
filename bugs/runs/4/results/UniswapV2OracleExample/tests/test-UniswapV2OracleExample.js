const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryMxCrrWS = accounts[3]
		const tokenAGUisbt = accounts[1]
		const tokenBiZZcD7g = accounts[2]
		const contractvoc7kI = await UniswapV2OracleExample.new(factoryMxCrrWS, tokenAGUisbt, tokenBiZZcD7g, {from: accounts[4]});
		const amountInB5bqwqm = BigInt("553")
		const tokenInPkraa9z = accounts[3]
		const amountIns7xnhb = BigInt("428")
		const tokenInoGRVT52 = accounts[3]
		const amountOutjNuyEHP = await contractvoc7kI.quote.call(tokenInPkraa9z, amountInB5bqwqm, {from: "0x0000000000000000000000000000000000000001"});
		await contractvoc7kI.update.call({from: accounts[3]});
		await contractvoc7kI.initialize.call({from: accounts[1]});
		await contractvoc7kI.update.call({from: accounts[3]});
		const amountOutOYPG82a = await contractvoc7kI.quote.call(tokenInoGRVT52, amountIns7xnhb, {from: accounts[3]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factorykXL7Yw8 = accounts[2]
		const tokenAKsW7kue = accounts[5]
		const tokenBOGTQule = accounts[2]
		const contractiB8MZ7R = await UniswapV2OracleExample.new(factorykXL7Yw8, tokenAKsW7kue, tokenBOGTQule, {from: "0x0000000000000000000000000000000000000001"});
		const amountInHZHko4f = BigInt("782")
		const tokenInAUgQYN8 = accounts[4]
		const amountInCmuegi = BigInt("48")
		const tokenInuBiwhE3 = accounts[4]
		await contractiB8MZ7R.update.call({from: accounts[3]});
		await contractiB8MZ7R.update.call({from: accounts[0]});
		const amountOutmAL1blw = await contractiB8MZ7R.quote.call(tokenInAUgQYN8, amountInHZHko4f, {from: accounts[0]});
		await contractiB8MZ7R.initialize.call({from: accounts[4]});
		await contractiB8MZ7R.initialize.call({from: accounts[0]});
		const amountOutm63LkFw = await contractiB8MZ7R.quote.call(tokenInuBiwhE3, amountInCmuegi, {from: accounts[3]});
	});
})
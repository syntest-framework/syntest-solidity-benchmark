const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryvqFM4mG = accounts[0]
		const tokenAeBvelu = accounts[3]
		const tokenBFH8eVoB = accounts[0]
		const contractepEpjpM = await UniswapV2OracleExample.new(factoryvqFM4mG, tokenAeBvelu, tokenBFH8eVoB, {from: "0x0000000000000000000000000000000000000001"});
		const amountInUjXB7Cu = BigInt("813")
		const tokenIncJTxsne = accounts[1]
		await contractepEpjpM.initialize.call({from: accounts[0]});
		await contractepEpjpM.initialize.call({from: accounts[3]});
		await contractepEpjpM.initialize.call({from: accounts[5]});
		await contractepEpjpM.initialize.call({from: accounts[1]});
		const amountOutlEo8CpJ = await contractepEpjpM.quote.call(tokenIncJTxsne, amountInUjXB7Cu, {from: accounts[0]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryp3cNbFV = "0x0000000000000000000000000000000000000001"
		const tokenAGgHMKxr = accounts[3]
		const tokenBQix9Aw3 = accounts[4]
		const contractgEWKiHK = await UniswapV2OracleExample.new(factoryp3cNbFV, tokenAGgHMKxr, tokenBQix9Aw3, {from: accounts[3]});
		const amountInGkhZpfd = BigInt("622")
		const tokenInywfNI6I = accounts[1]
		const amountOutBRTB0K = await contractgEWKiHK.quote.call(tokenInywfNI6I, amountInGkhZpfd, {from: accounts[3]});
		await contractgEWKiHK.update.call({from: accounts[4]});
		await contractgEWKiHK.initialize.call({from: accounts[0]});
		await contractgEWKiHK.initialize.call({from: accounts[4]});
		await contractgEWKiHK.initialize.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
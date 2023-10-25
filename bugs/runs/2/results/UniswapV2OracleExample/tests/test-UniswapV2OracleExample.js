const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryKPhnTKt = "0x0000000000000000000000000000000000000001"
		const tokenAvLeP8NC = accounts[2]
		const tokenBbjKSMiA = accounts[1]
		const contractlsTANhk = await UniswapV2OracleExample.new(factoryKPhnTKt, tokenAvLeP8NC, tokenBbjKSMiA, {from: accounts[1]});
		await contractlsTANhk.initialize.call({from: accounts[5]});
		await contractlsTANhk.initialize.call({from: accounts[2]});
		await contractlsTANhk.update.call({from: accounts[0]});
		await contractlsTANhk.initialize.call({from: accounts[4]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryykjop1b = accounts[4]
		const tokenAQgPnDSL = accounts[0]
		const tokenBSnKiMXj = accounts[3]
		const contractT6QRpFf = await UniswapV2OracleExample.new(factoryykjop1b, tokenAQgPnDSL, tokenBSnKiMXj, {from: "0x0000000000000000000000000000000000000001"});
		const amountInwVN0izo = BigInt("1286")
		const tokenInKdM6yRG = accounts[2]
		const amountInGmcrBeS = BigInt("189")
		const tokenInQ8D0Zde = "0x0000000000000000000000000000000000000001"
		const amountOutmBoGEBy = await contractT6QRpFf.quote.call(tokenInKdM6yRG, amountInwVN0izo, {from: accounts[3]});
		await contractT6QRpFf.update.call({from: accounts[1]});
		const amountOutsh0IlxB = await contractT6QRpFf.quote.call(tokenInQ8D0Zde, amountInGmcrBeS, {from: accounts[4]});
		await contractT6QRpFf.initialize.call({from: "0x0000000000000000000000000000000000000001"});
		await contractT6QRpFf.initialize.call({from: accounts[4]});
	});
})
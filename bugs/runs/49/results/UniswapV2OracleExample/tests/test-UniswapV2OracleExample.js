const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryoFBiENn = "0x0000000000000000000000000000000000000001"
		const tokenAOaVSesp = accounts[1]
		const tokenBiT7ko6G = accounts[4]
		const contractPOfH1Jz = await UniswapV2OracleExample.new(factoryoFBiENn, tokenAOaVSesp, tokenBiT7ko6G, {from: accounts[2]});
		const amountIn7eKLyc = BigInt("481")
		const tokenInKuJSQ6S = accounts[1]
		await contractPOfH1Jz.update.call({from: accounts[2]});
		await contractPOfH1Jz.update.call({from: accounts[0]});
		await contractPOfH1Jz.update.call({from: accounts[0]});
		const amountOutUIZgRwS = await contractPOfH1Jz.quote.call(tokenInKuJSQ6S, amountIn7eKLyc, {from: accounts[2]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryXzife3l = accounts[5]
		const tokenAtQ70h4W = accounts[4]
		const tokenBtueonxq = "0x0000000000000000000000000000000000000001"
		const contractedATS7p = await UniswapV2OracleExample.new(factoryXzife3l, tokenAtQ70h4W, tokenBtueonxq, {from: "0x0000000000000000000000000000000000000001"});
		const amountInl3zbIfN = BigInt("1924")
		const tokenInyS5RP09 = accounts[3]
		await contractedATS7p.initialize.call({from: "0x0000000000000000000000000000000000000001"});
		await contractedATS7p.initialize.call({from: accounts[0]});
		const amountOutEa97ny1 = await contractedATS7p.quote.call(tokenInyS5RP09, amountInl3zbIfN, {from: accounts[4]});
		await contractedATS7p.update.call({from: accounts[1]});
	});
})
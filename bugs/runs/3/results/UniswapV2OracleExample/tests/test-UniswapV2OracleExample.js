const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryhs2w4Ia = accounts[0]
		const tokenASkIpAw = accounts[2]
		const tokenBe8ZXyv4 = accounts[0]
		const contractHy9JTb = await UniswapV2OracleExample.new(factoryhs2w4Ia, tokenASkIpAw, tokenBe8ZXyv4, {from: accounts[4]});
		const amountInAIK2exa = BigInt("1793")
		const tokenInWuXrGFt = accounts[4]
		await contractHy9JTb.initialize.call({from: accounts[1]});
		await contractHy9JTb.initialize.call({from: accounts[3]});
		const amountOutuFwMBm = await contractHy9JTb.quote.call(tokenInWuXrGFt, amountInAIK2exa, {from: accounts[5]});
		await contractHy9JTb.update.call({from: accounts[3]});
		await contractHy9JTb.initialize.call({from: accounts[3]});
		await contractHy9JTb.update.call({from: accounts[2]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryQhIcgmF = accounts[0]
		const tokenAlZF58hL = accounts[3]
		const tokenBDEcDd1D = accounts[2]
		const contractzKnrJ6 = await UniswapV2OracleExample.new(factoryQhIcgmF, tokenAlZF58hL, tokenBDEcDd1D, {from: "0x0000000000000000000000000000000000000001"});
		const amountInxB2OA3F = BigInt("1806")
		const tokenIn2Msakc = accounts[1]
		await contractzKnrJ6.update.call({from: accounts[1]});
		await contractzKnrJ6.update.call({from: accounts[3]});
		await contractzKnrJ6.initialize.call({from: accounts[3]});
		const amountOutwlLf9wI = await contractzKnrJ6.quote.call(tokenIn2Msakc, amountInxB2OA3F, {from: accounts[0]});
	});
})
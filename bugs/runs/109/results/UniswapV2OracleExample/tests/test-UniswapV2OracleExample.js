const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryWlFZkJh = accounts[0]
		const tokenAgtR5fM1 = accounts[0]
		const tokenBSDdw0Sf = accounts[0]
		const contractVn6zNe = await UniswapV2OracleExample.new(factoryWlFZkJh, tokenAgtR5fM1, tokenBSDdw0Sf, {from: accounts[3]});
		const amountInLJoJa1Y = BigInt("1947")
		const tokenInJCxFtBJ = accounts[3]
		await contractVn6zNe.initialize.call({from: accounts[2]});
		const amountOutoXskonx = await contractVn6zNe.quote.call(tokenInJCxFtBJ, amountInLJoJa1Y, {from: accounts[0]});
		await contractVn6zNe.update.call({from: accounts[3]});
		await contractVn6zNe.initialize.call({from: accounts[5]});
		await contractVn6zNe.initialize.call({from: accounts[0]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factorygsy5dxU = accounts[3]
		const tokenAKPDMoDe = accounts[1]
		const tokenBXRcy1ux = accounts[2]
		const contractHm1aKbo = await UniswapV2OracleExample.new(factorygsy5dxU, tokenAKPDMoDe, tokenBXRcy1ux, {from: "0x0000000000000000000000000000000000000001"});
		const amountInTnjaNQw = BigInt("231")
		const tokenInbmhQjAb = accounts[3]
		const amountOutc68EUec = await contractHm1aKbo.quote.call(tokenInbmhQjAb, amountInTnjaNQw, {from: accounts[0]});
		await contractHm1aKbo.update.call({from: "0x0000000000000000000000000000000000000001"});
		await contractHm1aKbo.initialize.call({from: accounts[1]});
		await contractHm1aKbo.update.call({from: accounts[0]});
		await contractHm1aKbo.initialize.call({from: accounts[0]});
	});
})
const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factorypMnwb7E = accounts[0]
		const tokenAgMbHRWN = accounts[3]
		const tokenBCnhEwWk = accounts[3]
		const contractOQzVAa = await UniswapV2OracleExample.new(factorypMnwb7E, tokenAgMbHRWN, tokenBCnhEwWk, {from: accounts[3]});
		const amountInwzUsbx0 = BigInt("507")
		const tokenInZbrVUqt = accounts[0]
		await contractOQzVAa.initialize.call({from: accounts[0]});
		const amountOutQQ0iJOu = await contractOQzVAa.quote.call(tokenInZbrVUqt, amountInwzUsbx0, {from: accounts[4]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryOkPx3C = accounts[0]
		const tokenAC2tNdw = accounts[1]
		const tokenBZ8rTIP4 = accounts[0]
		const contractjBGs5E = await UniswapV2OracleExample.new(factoryOkPx3C, tokenAC2tNdw, tokenBZ8rTIP4, {from: "0x0000000000000000000000000000000000000001"});
		const amountInKXCFqJU = BigInt("875")
		const tokenInJ5bvTb4 = accounts[1]
		const amountInwtuXHd = BigInt("1790")
		const tokenIn9JWW5t = accounts[3]
		await contractjBGs5E.initialize.call({from: accounts[2]});
		await contractjBGs5E.initialize.call({from: accounts[2]});
		const amountOutRqiJ8rJ = await contractjBGs5E.quote.call(tokenInJ5bvTb4, amountInKXCFqJU, {from: accounts[1]});
		await contractjBGs5E.initialize.call({from: accounts[0]});
		const amountOutV5k1IBr = await contractjBGs5E.quote.call(tokenIn9JWW5t, amountInwtuXHd, {from: accounts[5]});
		await contractjBGs5E.update.call({from: accounts[1]});
	});
})
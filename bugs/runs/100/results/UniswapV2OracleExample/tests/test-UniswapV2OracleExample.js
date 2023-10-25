const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factorynbwA4PS = accounts[0]
		const tokenAEFOnITJ = accounts[2]
		const tokenBup0IgT = accounts[2]
		const contractavNqRjZ = await UniswapV2OracleExample.new(factorynbwA4PS, tokenAEFOnITJ, tokenBup0IgT, {from: accounts[1]});
		const amountInkXsl6K5 = BigInt("1126")
		const tokenInZtcGgG = accounts[0]
		const amountInuVvR655 = BigInt("1110")
		const tokenInoaGexiS = accounts[0]
		await contractavNqRjZ.update.call({from: accounts[0]});
		await contractavNqRjZ.initialize.call({from: accounts[4]});
		await contractavNqRjZ.update.call({from: accounts[4]});
		const amountOutMp0d4Zi = await contractavNqRjZ.quote.call(tokenInZtcGgG, amountInkXsl6K5, {from: accounts[3]});
		const amountOutC4TECa8 = await contractavNqRjZ.quote.call(tokenInoaGexiS, amountInuVvR655, {from: accounts[5]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factory2kaEL8 = accounts[0]
		const tokenAGSOMbDq = accounts[0]
		const tokenBbKGSzq = accounts[1]
		const contract3phDrB = await UniswapV2OracleExample.new(factory2kaEL8, tokenAGSOMbDq, tokenBbKGSzq, {from: "0x0000000000000000000000000000000000000001"});
		await contract3phDrB.update.call({from: accounts[4]});
		await contract3phDrB.update.call({from: accounts[2]});
		await contract3phDrB.initialize.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryocVMsEH = accounts[4]
		const tokenAeFdmjm5 = accounts[0]
		const tokenBvMLH8KO = accounts[3]
		const contractyLOUKd9 = await UniswapV2OracleExample.new(factoryocVMsEH, tokenAeFdmjm5, tokenBvMLH8KO, {from: accounts[4]});
		const amountInioAyKAq = BigInt("1789")
		const tokenInSM8Ltx4 = accounts[4]
		const amountInEo89vb = BigInt("240")
		const tokenInjuh8Ylx = accounts[3]
		await contractyLOUKd9.initialize.call({from: accounts[0]});
		const amountOutdAoLcQz = await contractyLOUKd9.quote.call(tokenInSM8Ltx4, amountInioAyKAq, {from: accounts[3]});
		await contractyLOUKd9.update.call({from: accounts[3]});
		await contractyLOUKd9.update.call({from: accounts[1]});
		const amountOutkqnGhWm = await contractyLOUKd9.quote.call(tokenInjuh8Ylx, amountInEo89vb, {from: accounts[0]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factorysBta6B9 = accounts[1]
		const tokenAfpLZ9PG = accounts[5]
		const tokenBTuJlUza = accounts[0]
		const contractd0RVRV = await UniswapV2OracleExample.new(factorysBta6B9, tokenAfpLZ9PG, tokenBTuJlUza, {from: "0x0000000000000000000000000000000000000001"});
		const amountInb6czaRG = BigInt("1640")
		const tokenInEQaU2u = accounts[0]
		await contractd0RVRV.initialize.call({from: accounts[4]});
		await contractd0RVRV.initialize.call({from: accounts[4]});
		await contractd0RVRV.initialize.call({from: accounts[2]});
		await contractd0RVRV.initialize.call({from: accounts[4]});
		await contractd0RVRV.update.call({from: accounts[0]});
		const amountOutgrqGMUv = await contractd0RVRV.quote.call(tokenInEQaU2u, amountInb6czaRG, {from: "0x0000000000000000000000000000000000000001"});
	});
})
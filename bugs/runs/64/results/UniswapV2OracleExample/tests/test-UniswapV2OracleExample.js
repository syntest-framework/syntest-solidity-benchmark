const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factory2veXQa = accounts[3]
		const tokenAt18q7F0 = accounts[0]
		const tokenBC6wdafg = "0x0000000000000000000000000000000000000001"
		const contractHKeZ5Ut = await UniswapV2OracleExample.new(factory2veXQa, tokenAt18q7F0, tokenBC6wdafg, {from: accounts[4]});
		await contractHKeZ5Ut.initialize.call({from: accounts[2]});
		await contractHKeZ5Ut.initialize.call({from: accounts[0]});
		await contractHKeZ5Ut.initialize.call({from: accounts[0]});
		await contractHKeZ5Ut.initialize.call({from: accounts[1]});
		await contractHKeZ5Ut.update.call({from: accounts[5]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryZPXgxdJ = accounts[3]
		const tokenAx5mw2yk = accounts[2]
		const tokenBj78gc9W = accounts[2]
		const contractysqDwIL = await UniswapV2OracleExample.new(factoryZPXgxdJ, tokenAx5mw2yk, tokenBj78gc9W, {from: "0x0000000000000000000000000000000000000001"});
		const amountInJF3ZtNe = BigInt("1350")
		const tokenInupcm9Lo = accounts[2]
		await contractysqDwIL.update.call({from: accounts[1]});
		const amountOutUD5F4Vh = await contractysqDwIL.quote.call(tokenInupcm9Lo, amountInJF3ZtNe, {from: accounts[4]});
		await contractysqDwIL.initialize.call({from: accounts[2]});
		await contractysqDwIL.initialize.call({from: accounts[1]});
	});
})
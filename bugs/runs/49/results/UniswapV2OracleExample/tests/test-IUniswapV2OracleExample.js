const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractiKIg7Re = await IUniswapV2OracleExample.new({from: accounts[4]});
		const amountIncUeWsNN = BigInt("1732")
		const tokenInDvOLFJv = accounts[3]
		const amountInX4mpBbT = BigInt("1757")
		const tokenInKDR4m9f = accounts[2]
		const amountOutkL4dK7F = await contractiKIg7Re.quote.call(tokenInDvOLFJv, amountIncUeWsNN, {from: accounts[4]});
		const amountOutZkFuad6 = await contractiKIg7Re.quote.call(tokenInKDR4m9f, amountInX4mpBbT, {from: accounts[4]});
		const nullj7hPjb8 = await contractiKIg7Re.price0Average.call({from: accounts[5]});
		const nullZ7E5QKu = await contractiKIg7Re.token0.call({from: accounts[3]});
	});
})
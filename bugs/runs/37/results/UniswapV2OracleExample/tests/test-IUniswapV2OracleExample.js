const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractdf7PB8 = await IUniswapV2OracleExample.new({from: accounts[0]});
		const amountInQuNEJ2 = BigInt("655")
		const tokenInueqIsTG = accounts[3]
		const nullP5MpQDU = await contractdf7PB8.token0.call({from: accounts[3]});
		const amountOutRXVMU4l = await contractdf7PB8.quote.call(tokenInueqIsTG, amountInQuNEJ2, {from: accounts[0]});
		await contractdf7PB8.initialize.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
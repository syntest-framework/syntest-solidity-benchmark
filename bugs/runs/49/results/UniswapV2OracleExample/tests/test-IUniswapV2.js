const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractWD44a5k = await IUniswapV2.new({from: accounts[1]});
		const amountOutldEEQaV = BigInt("1027")
		const tokenInKIo6WaC = "0x0000000000000000000000000000000000000001"
		const null5jBMbM = await contractWD44a5k.reserve1.call({from: accounts[0]});
		await contractWD44a5k.swap.call(tokenInKIo6WaC, amountOutldEEQaV, {from: accounts[4]});
		const nullJ1KLasl = await contractWD44a5k.reserve1.call({from: accounts[3]});
	});
})
const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractLq2JSJT = await IUniswapV2.new({from: "0x0000000000000000000000000000000000000001"});
		const amountOutvWAiomC = BigInt("195")
		const tokenInvLkzvo3 = "0x0000000000000000000000000000000000000001"
		const liquidityQZlizt = await contractLq2JSJT.mint.call({from: accounts[1]});
		const nullpbOmtnS = await contractLq2JSJT.price1CumulativeLast.call({from: accounts[4]});
		const nullxNo2L1R = await contractLq2JSJT.reserve1.call({from: accounts[4]});
		await contractLq2JSJT.swap.call(tokenInvLkzvo3, amountOutvWAiomC, {from: accounts[2]});
		const nullVV9KC0w = await contractLq2JSJT.price0CumulativeLast.call({from: accounts[3]});
	});
})
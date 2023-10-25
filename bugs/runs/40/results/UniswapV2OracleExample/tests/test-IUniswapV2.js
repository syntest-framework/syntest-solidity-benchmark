const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractEb3GLZI = await IUniswapV2.new({from: "0x0000000000000000000000000000000000000001"});
		const amountOutcGhdTfG = BigInt("1310")
		const tokenInq8Wfvi = accounts[5]
		const liquidityVCK4Pv6 = await contractEb3GLZI.mint.call({from: accounts[4]});
		const liquiditygUrXZrZ = await contractEb3GLZI.mint.call({from: accounts[0]});
		await contractEb3GLZI.swap.call(tokenInq8Wfvi, amountOutcGhdTfG, {from: accounts[4]});
		const nullCTqyM2J = await contractEb3GLZI.blockNumberLast.call({from: accounts[5]});
		const nullUf7Binx = await contractEb3GLZI.token1.call({from: accounts[1]});
	});
})
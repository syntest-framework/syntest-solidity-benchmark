const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contract043Qj9 = await IUniswapV2.new({from: accounts[4]});
		const amountOutLGafBg9 = BigInt("1749")
		const tokenInb1jgDjt = accounts[2]
		const amountOutSMTj4Xn = BigInt("1441")
		const tokenInpBHed1 = accounts[4]
		const liquidityHVlMWtq = await contract043Qj9.mint.call({from: accounts[0]});
		const nullFl6ovGB = await contract043Qj9.reserve1.call({from: accounts[5]});
		await contract043Qj9.swap.call(tokenInb1jgDjt, amountOutLGafBg9, {from: accounts[4]});
		await contract043Qj9.swap.call(tokenInpBHed1, amountOutSMTj4Xn, {from: accounts[5]});
		const nullPAjkNDa = await contract043Qj9.reserve1.call({from: "0x0000000000000000000000000000000000000001"});
		const liquidityfw3Ix05 = await contract043Qj9.mint.call({from: accounts[2]});
	});
})
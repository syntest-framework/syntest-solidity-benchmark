const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractB82NYv6 = await IUniswapV2.new({from: accounts[4]});
		const nullWf070Io = "0x0000000000000000000000000000000000000001"
		const nullrmXwZG = accounts[3]
		const amountOutLFSdiAZ = BigInt("735")
		const tokenInxfRj36f = accounts[4]
		const nulltOk28Wc = await contractB82NYv6.reserve1.call({from: accounts[2]});
		await contractB82NYv6.initialize.call(nullrmXwZG, nullWf070Io, {from: accounts[4]});
		const nullTQgav1v = await contractB82NYv6.factory.call({from: accounts[0]});
		await contractB82NYv6.swap.call(tokenInxfRj36f, amountOutLFSdiAZ, {from: accounts[1]});
	});
})
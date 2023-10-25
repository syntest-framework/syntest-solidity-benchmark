const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractE72SVQ5 = await IUniswapV2.new({from: accounts[3]});
		const null00fGHj = await contractE72SVQ5.reserve1.call({from: accounts[1]});
		const nullWJw9UwB = await contractE72SVQ5.blockNumberLast.call({from: accounts[1]});
		await contractE72SVQ5.skim.call({from: "0x0000000000000000000000000000000000000001"});
		const liquidityt1gu2um = await contractE72SVQ5.mint.call({from: accounts[3]});
	});
})
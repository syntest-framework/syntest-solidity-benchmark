const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractaz3IOPZ = await IUniswapV2.new({from: accounts[2]});
		const nulljcA7vH0 = await contractaz3IOPZ.blockNumberLast.call({from: accounts[0]});
		const nullnNICS1H = await contractaz3IOPZ.token1.call({from: accounts[4]});
		const nullE7izoMs = await contractaz3IOPZ.reserve1.call({from: "0x0000000000000000000000000000000000000001"});
		const nullCjjfut = await contractaz3IOPZ.reserve0.call({from: accounts[0]});
	});
})
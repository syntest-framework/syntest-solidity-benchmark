const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractq83oTw1 = await IUniswapV2.new({from: accounts[2]});
		const nullF2szF2a = await contractq83oTw1.reserve0.call({from: accounts[1]});
		const nullg9fSB0 = await contractq83oTw1.token0.call({from: accounts[0]});
		const nullJWVRFh0 = await contractq83oTw1.blockNumberLast.call({from: accounts[1]});
	});
})
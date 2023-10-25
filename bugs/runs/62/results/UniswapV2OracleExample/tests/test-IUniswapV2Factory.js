const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractHABYnsR = await IUniswapV2Factory.new({from: accounts[2]});
		const nulldCbNEWa = BigInt("784")
		const nullvSUtpnG = await contractHABYnsR.exchangesCount.call({from: accounts[3]});
		const exchangeXdYt1M = await contractHABYnsR.exchanges.call(nulldCbNEWa, {from: accounts[4]});
		const nullhjV7hJ = await contractHABYnsR.exchangeBytecode.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
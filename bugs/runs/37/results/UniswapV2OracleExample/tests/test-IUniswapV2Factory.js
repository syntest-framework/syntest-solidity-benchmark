const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractdp048q1 = await IUniswapV2Factory.new({from: accounts[4]});
		const tokenBACN9PLO = accounts[1]
		const tokenANcF81WX = "0x0000000000000000000000000000000000000001"
		const nullRntkqnh = await contractdp048q1.factoryOwner.call({from: accounts[1]});
		const exchangeb88GS31 = await contractdp048q1.getExchange.call(tokenANcF81WX, tokenBACN9PLO, {from: accounts[4]});
		const nullz2fDWh = await contractdp048q1.factoryOwner.call({from: accounts[4]});
		const nulla2p5BJO = await contractdp048q1.factoryOwner.call({from: accounts[5]});
	});
})
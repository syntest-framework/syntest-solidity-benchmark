const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractuUjh0Rb = await IUniswapV2Factory.new({from: accounts[4]});
		const tokenBviSd2QQ = accounts[5]
		const tokenAUBLPNJ4 = accounts[1]
		const nullsnbOEE4 = await contractuUjh0Rb.feeRecipient.call({from: "0x0000000000000000000000000000000000000001"});
		const nullQQTanOQ = await contractuUjh0Rb.factoryOwner.call({from: accounts[0]});
		const exchangeoJzDPzm = await contractuUjh0Rb.getExchange.call(tokenAUBLPNJ4, tokenBviSd2QQ, {from: accounts[3]});
	});
})
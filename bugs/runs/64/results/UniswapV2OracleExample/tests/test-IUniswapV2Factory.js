const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractGn6Vx7j = await IUniswapV2Factory.new({from: accounts[3]});
		const nullK1FZRs4 = await contractGn6Vx7j.exchangeBytecode.call({from: accounts[4]});
		const nullmq0JzTm = await contractGn6Vx7j.factoryOwner.call({from: accounts[1]});
		const nullp0tvzg = await contractGn6Vx7j.feeRecipient.call({from: accounts[5]});
		const nullRCZAFcd = await contractGn6Vx7j.exchangesCount.call({from: accounts[1]});
		const null0GyUE6 = await contractGn6Vx7j.factoryOwner.call({from: accounts[1]});
	});
})
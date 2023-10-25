const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractkXoRSji = await IUniswapV2Factory.new({from: accounts[4]});
		const tokenBK6eVsuw = accounts[0]
		const tokenAwNjtRXC = accounts[1]
		const nullA0QXyl = BigInt("1403")
		const exchangefSijzOf = await contractkXoRSji.createExchange.call(tokenAwNjtRXC, tokenBK6eVsuw, {from: accounts[3]});
		const nullqRvgpFN = await contractkXoRSji.exchangesCount.call({from: accounts[4]});
		const nullVjK9CYe = await contractkXoRSji.factoryOwner.call({from: accounts[5]});
		const nullJBMFzto = await contractkXoRSji.exchangesCount.call({from: accounts[3]});
		const nullXz8vOn2 = await contractkXoRSji.feeRecipient.call({from: accounts[1]});
		const exchangeSeKeNj = await contractkXoRSji.exchanges.call(nullA0QXyl, {from: accounts[3]});
	});
})
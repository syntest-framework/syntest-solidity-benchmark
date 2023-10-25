const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractqHTXXva = await IUniswapV2Factory.new({from: accounts[1]});
		const tokenBHY31fGb = accounts[2]
		const tokenAKudXege = accounts[5]
		const nullDC07QMU = BigInt("1449")
		const exchangeD40QHz5 = await contractqHTXXva.createExchange.call(tokenAKudXege, tokenBHY31fGb, {from: accounts[3]});
		const nullPCPhVk = await contractqHTXXva.factoryOwner.call({from: accounts[0]});
		const exchangeeIuoJf7 = await contractqHTXXva.exchanges.call(nullDC07QMU, {from: accounts[4]});
	});
})
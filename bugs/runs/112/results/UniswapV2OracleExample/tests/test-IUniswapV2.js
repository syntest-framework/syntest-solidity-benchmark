const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractfdOrrzl = await IUniswapV2.new({from: accounts[2]});
		const nullIzddjO = await contractfdOrrzl.reserve0.call({from: accounts[1]});
		const nullt3VtUjY = await contractfdOrrzl.blockNumberLast.call({from: accounts[4]});
		const nullqiDwrz = await contractfdOrrzl.price1CumulativeLast.call({from: accounts[4]});
		const liquidityz8mTwNw = await contractfdOrrzl.mint.call({from: accounts[4]});
	});
})
const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractaJiocS = await IUniswapV2.new({from: accounts[4]});
		const nullskJQNuR = await contractaJiocS.factory.call({from: accounts[5]});
		const liquidityzkjHpql = await contractaJiocS.mint.call({from: accounts[4]});
		const nullxcEHvdw = await contractaJiocS.token1.call({from: accounts[4]});
		const nullkDu9iUy = await contractaJiocS.price0CumulativeLast.call({from: accounts[3]});
	});
})
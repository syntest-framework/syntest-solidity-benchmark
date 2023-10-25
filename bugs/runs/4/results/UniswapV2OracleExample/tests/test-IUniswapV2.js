const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractV6Epbcx = await IUniswapV2.new({from: accounts[5]});
		await contractV6Epbcx.skim.call({from: accounts[3]});
		const nullkdRPf2c = await contractV6Epbcx.blockNumberLast.call({from: accounts[1]});
		const nullj901yyp = await contractV6Epbcx.price1CumulativeLast.call({from: accounts[4]});
		const nullcn3bWQ = await contractV6Epbcx.factory.call({from: accounts[1]});
	});
})
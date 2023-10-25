const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractDKMA55x = await IUniswapV2.new({from: accounts[4]});
		const nullJWrAtV = await contractDKMA55x.factory.call({from: accounts[3]});
		const nullSI9JMPw = await contractDKMA55x.price1CumulativeLast.call({from: accounts[3]});
		const [amount0SnD1nM, amount1aTkRtk] = await contractDKMA55x.burn.call({from: accounts[0]});
		const nullAT0kUjf = await contractDKMA55x.token0.call({from: accounts[5]});
	});
})
const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractqfVA50S = await IUniswapV2.new({from: accounts[0]});
		const nullAONMm4C = await contractqfVA50S.blockNumberLast.call({from: "0x0000000000000000000000000000000000000001"});
		const nullIzfmsOx = await contractqfVA50S.blockNumberLast.call({from: accounts[1]});
		const nullVOvno5 = await contractqfVA50S.token0.call({from: accounts[4]});
		const null2MJyty = await contractqfVA50S.reserve0.call({from: accounts[0]});
	});
})
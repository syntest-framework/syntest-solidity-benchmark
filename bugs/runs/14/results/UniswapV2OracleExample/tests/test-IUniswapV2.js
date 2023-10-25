const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractwLYsm19 = await IUniswapV2.new({from: accounts[5]});
		const nullibGTT3R = await contractwLYsm19.blockNumberLast.call({from: accounts[0]});
		await contractwLYsm19.sync.call({from: accounts[0]});
	});
})
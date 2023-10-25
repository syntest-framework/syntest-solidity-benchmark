const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractDLZeWc = await IUniswapV2.new({from: accounts[1]});
		const nullP3B6bcU = await contractDLZeWc.token1.call({from: accounts[0]});
		const liquiditybG1EYZX = await contractDLZeWc.mint.call({from: "0x0000000000000000000000000000000000000001"});
		const nullDpJe1J3 = await contractDLZeWc.reserve1.call({from: accounts[1]});
		const nulldhYr22k = await contractDLZeWc.blockNumberLast.call({from: accounts[4]});
	});
})
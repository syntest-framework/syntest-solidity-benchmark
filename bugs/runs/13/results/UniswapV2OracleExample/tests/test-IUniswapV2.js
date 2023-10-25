const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractVBTDGg3 = await IUniswapV2.new({from: accounts[1]});
		const nullRGSar32 = await contractVBTDGg3.token1.call({from: accounts[0]});
		const nullLKApwcO = await contractVBTDGg3.price0CumulativeLast.call({from: "0x0000000000000000000000000000000000000001"});
		const nullDeUYGg = await contractVBTDGg3.price1CumulativeLast.call({from: accounts[2]});
	});
})
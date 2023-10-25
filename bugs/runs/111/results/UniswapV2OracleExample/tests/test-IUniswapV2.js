const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractOMlfEy8 = await IUniswapV2.new({from: "0x0000000000000000000000000000000000000001"});
		const nullsCrb9Dv = await contractOMlfEy8.token0.call({from: accounts[4]});
		const nullgNIxeNg = await contractOMlfEy8.reserve0.call({from: accounts[0]});
		const nullP3da8u1 = await contractOMlfEy8.token1.call({from: "0x0000000000000000000000000000000000000001"});
		const nullXuHq3eb = await contractOMlfEy8.price1CumulativeLast.call({from: "0x0000000000000000000000000000000000000001"});
		const nullTvca6o6 = await contractOMlfEy8.price1CumulativeLast.call({from: accounts[3]});
	});
})
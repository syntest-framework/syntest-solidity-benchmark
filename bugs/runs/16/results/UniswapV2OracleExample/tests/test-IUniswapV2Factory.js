const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contract9ytWw7 = await IUniswapV2Factory.new({from: "0x0000000000000000000000000000000000000001"});
		const nullUHYgJLg = await contract9ytWw7.factoryOwner.call({from: accounts[2]});
		const nullnfUVo8U = await contract9ytWw7.factoryOwner.call({from: accounts[2]});
	});
})
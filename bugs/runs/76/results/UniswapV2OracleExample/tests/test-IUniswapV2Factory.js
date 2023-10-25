const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contracteUUqV3I = await IUniswapV2Factory.new({from: accounts[3]});
		const nullhWn56ZJ = await contracteUUqV3I.exchangeBytecode.call({from: accounts[3]});
		const nullD60okUr = await contracteUUqV3I.exchangesCount.call({from: accounts[3]});
	});
})
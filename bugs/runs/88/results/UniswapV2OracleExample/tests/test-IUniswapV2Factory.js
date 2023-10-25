const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractl1Rp9MS = await IUniswapV2Factory.new({from: accounts[3]});
		const nullf4eb2SW = await contractl1Rp9MS.factoryOwner.call({from: accounts[4]});
		const nullltyTBOl = await contractl1Rp9MS.feeRecipient.call({from: accounts[1]});
	});
})
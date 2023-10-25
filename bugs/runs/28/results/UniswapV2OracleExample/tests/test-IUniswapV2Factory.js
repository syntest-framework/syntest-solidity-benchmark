const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractUKSFVSJ = await IUniswapV2Factory.new({from: accounts[0]});
		const nullTnEeEZ7 = await contractUKSFVSJ.feeRecipient.call({from: "0x0000000000000000000000000000000000000001"});
		const nullfk2DW9 = await contractUKSFVSJ.exchangeBytecode.call({from: accounts[3]});
	});
})
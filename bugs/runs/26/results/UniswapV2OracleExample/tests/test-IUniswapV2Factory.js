const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractsaD3Mx = await IUniswapV2Factory.new({from: accounts[0]});
		const nullUIR2JrG = BigInt("1989")
		const nullBU90zjs = await contractsaD3Mx.factoryOwner.call({from: accounts[3]});
		const exchange94I8gk = await contractsaD3Mx.exchanges.call(nullUIR2JrG, {from: accounts[5]});
		const nullHEIS9q5 = await contractsaD3Mx.feeRecipient.call({from: accounts[5]});
		const nullNHQ7D4 = await contractsaD3Mx.exchangesCount.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
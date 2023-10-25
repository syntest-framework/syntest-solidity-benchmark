const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractDsEHTSe = await IUniswapV2Factory.new({from: accounts[2]});
		const nullrC1VvZ2 = BigInt("1566")
		const nullaw3PDn6 = await contractDsEHTSe.exchangesCount.call({from: accounts[1]});
		const nullr5iGAGY = await contractDsEHTSe.feeRecipient.call({from: accounts[1]});
		const exchangeJBnvli4 = await contractDsEHTSe.exchanges.call(nullrC1VvZ2, {from: accounts[0]});
		const nullgRef2El = await contractDsEHTSe.factoryOwner.call({from: accounts[0]});
	});
})
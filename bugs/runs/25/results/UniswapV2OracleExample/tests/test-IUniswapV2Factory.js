const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractthB0qbI = await IUniswapV2Factory.new({from: accounts[1]});
		const nullnUFEmDN = BigInt("212")
		const exchangeNv0pt4t = await contractthB0qbI.exchanges.call(nullnUFEmDN, {from: accounts[3]});
		const nullxUrU0f = await contractthB0qbI.feeRecipient.call({from: "0x0000000000000000000000000000000000000001"});
		const nullZDwWRXK = await contractthB0qbI.feeRecipient.call({from: accounts[0]});
	});
})
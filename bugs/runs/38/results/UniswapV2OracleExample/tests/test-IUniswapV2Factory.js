const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractVsMCW1K = await IUniswapV2Factory.new({from: accounts[0]});
		const nullu9liTfP = BigInt("30")
		const nullG47QsWz = BigInt("544")
		const nullaW1cN0 = await contractVsMCW1K.factoryOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const nullBy9dtIE = await contractVsMCW1K.exchangesCount.call({from: accounts[3]});
		const exchangejFK6I4S = await contractVsMCW1K.exchanges.call(nullu9liTfP, {from: accounts[1]});
		const nulln1lW2iI = await contractVsMCW1K.factoryOwner.call({from: accounts[1]});
		const nulln8nrPbj = await contractVsMCW1K.exchangesCount.call({from: accounts[3]});
		const exchangeYNFIfUq = await contractVsMCW1K.exchanges.call(nullG47QsWz, {from: accounts[2]});
	});
})
const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractDGxC4pE = await IUniswapV2Factory.new({from: accounts[2]});
		const nullw6wGMw = BigInt("1687")
		const tokenBXwZfWXZ = accounts[1]
		const tokenAkjrAkfU = accounts[2]
		const tokenBsWPe843 = accounts[0]
		const tokenAYRzbBh5 = accounts[1]
		const nulla42z9M = await contractDGxC4pE.factoryOwner.call({from: accounts[2]});
		const exchangeqHkMwK = await contractDGxC4pE.exchanges.call(nullw6wGMw, {from: accounts[5]});
		const exchangekSsMCp2 = await contractDGxC4pE.createExchange.call(tokenAkjrAkfU, tokenBXwZfWXZ, {from: accounts[1]});
		const nulleZqP4d = await contractDGxC4pE.factoryOwner.call({from: accounts[1]});
		const exchangeRL1b7PC = await contractDGxC4pE.createExchange.call(tokenAYRzbBh5, tokenBsWPe843, {from: accounts[4]});
	});
})
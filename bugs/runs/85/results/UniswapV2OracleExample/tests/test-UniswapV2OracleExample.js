const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryIESavyS = accounts[2]
		const tokenAc9Oky9l = accounts[0]
		const tokenBhWUfZHi = accounts[3]
		const contractu8uX1F = await UniswapV2OracleExample.new(factoryIESavyS, tokenAc9Oky9l, tokenBhWUfZHi, {from: accounts[2]});
		await contractu8uX1F.initialize.call({from: accounts[4]});
		await contractu8uX1F.initialize.call({from: accounts[4]});
		await contractu8uX1F.initialize.call({from: accounts[3]});
		await contractu8uX1F.update.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryDaXpGgV = accounts[0]
		const tokenAIwoYlD = accounts[3]
		const tokenBuk0kgm4 = accounts[0]
		const contractwoj3MC = await UniswapV2OracleExample.new(factoryDaXpGgV, tokenAIwoYlD, tokenBuk0kgm4, {from: "0x0000000000000000000000000000000000000001"});
		await contractwoj3MC.update.call({from: accounts[2]});
		await contractwoj3MC.initialize.call({from: accounts[0]});
		await contractwoj3MC.initialize.call({from: accounts[1]});
	});
})
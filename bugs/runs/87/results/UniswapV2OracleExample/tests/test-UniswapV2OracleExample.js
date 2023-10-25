const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryL0dAJ9L = "0x0000000000000000000000000000000000000001"
		const tokenALjxfAAA = accounts[2]
		const tokenBxNQM1NH = accounts[1]
		const contractyxVlvn = await UniswapV2OracleExample.new(factoryL0dAJ9L, tokenALjxfAAA, tokenBxNQM1NH, {from: accounts[4]});
		await contractyxVlvn.update.call({from: accounts[0]});
		await contractyxVlvn.initialize.call({from: accounts[1]});
		await contractyxVlvn.initialize.call({from: accounts[0]});
		await contractyxVlvn.update.call({from: accounts[3]});
		await contractyxVlvn.initialize.call({from: accounts[2]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryozpD4DT = accounts[2]
		const tokenAA1kjnl = accounts[1]
		const tokenBEMm2ymi = accounts[1]
		const contractHcjrZ0W = await UniswapV2OracleExample.new(factoryozpD4DT, tokenAA1kjnl, tokenBEMm2ymi, {from: "0x0000000000000000000000000000000000000001"});
		await contractHcjrZ0W.update.call({from: accounts[0]});
		await contractHcjrZ0W.initialize.call({from: accounts[1]});
	});
})
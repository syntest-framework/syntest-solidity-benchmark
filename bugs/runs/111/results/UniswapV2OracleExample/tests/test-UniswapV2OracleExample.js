const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryMEumUJa = accounts[3]
		const tokenAqM2TDXx = accounts[1]
		const tokenBWiVQ6XU = "0x0000000000000000000000000000000000000001"
		const contractArjYErw = await UniswapV2OracleExample.new(factoryMEumUJa, tokenAqM2TDXx, tokenBWiVQ6XU, {from: accounts[4]});
		const amountInLb2sdA = BigInt("372")
		const tokenInNURdJ97 = accounts[0]
		const amountInbGsWG9Q = BigInt("1983")
		const tokenIn1z9drG = accounts[4]
		const amountOutZpb7rxd = await contractArjYErw.quote.call(tokenInNURdJ97, amountInLb2sdA, {from: accounts[1]});
		const amountOutf05pliO = await contractArjYErw.quote.call(tokenIn1z9drG, amountInbGsWG9Q, {from: accounts[1]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryJpnWqrT = accounts[2]
		const tokenAlbXE5w = accounts[2]
		const tokenBZs8rFl8 = accounts[1]
		const contractCHx7az = await UniswapV2OracleExample.new(factoryJpnWqrT, tokenAlbXE5w, tokenBZs8rFl8, {from: "0x0000000000000000000000000000000000000001"});
		const amountIne76Xrui = BigInt("589")
		const tokenInfbTQsvn = accounts[1]
		await contractCHx7az.initialize.call({from: "0x0000000000000000000000000000000000000001"});
		await contractCHx7az.initialize.call({from: accounts[3]});
		const amountOutDcvDydf = await contractCHx7az.quote.call(tokenInfbTQsvn, amountIne76Xrui, {from: accounts[4]});
		await contractCHx7az.initialize.call({from: accounts[3]});
		await contractCHx7az.initialize.call({from: accounts[1]});
		await contractCHx7az.update.call({from: accounts[0]});
	});
})
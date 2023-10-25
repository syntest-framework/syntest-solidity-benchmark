const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryh3ARVZ = accounts[2]
		const tokenARp7oIh = accounts[2]
		const tokenBLaJB7U = accounts[0]
		const contractd4DSin = await UniswapV2OracleExample.new(factoryh3ARVZ, tokenARp7oIh, tokenBLaJB7U, {from: "0x0000000000000000000000000000000000000001"});
		const amountInXzPrgUM = BigInt("1294")
		const tokenInbphSxj4 = accounts[1]
		await contractd4DSin.update.call({from: accounts[0]});
		await contractd4DSin.update.call({from: accounts[5]});
		const amountOuta1KC5NY = await contractd4DSin.quote.call(tokenInbphSxj4, amountInXzPrgUM, {from: accounts[1]});
		await contractd4DSin.update.call({from: accounts[5]});
		await contractd4DSin.initialize.call({from: accounts[0]});
		await contractd4DSin.update.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryAxgm1zq = "0x0000000000000000000000000000000000000001"
		const tokenAcF20h1g = accounts[2]
		const tokenBIKwCOsz = accounts[0]
		const contractPiOTZN7 = await UniswapV2OracleExample.new(factoryAxgm1zq, tokenAcF20h1g, tokenBIKwCOsz, {from: accounts[2]});
		const amountInzDlafHf = BigInt("1225")
		const tokenInlIwAie2 = accounts[2]
		const amountInWYb3MHD = BigInt("1846")
		const tokenInbx6HzBE = accounts[1]
		const amountOutqKOBJzd = await contractPiOTZN7.quote.call(tokenInlIwAie2, amountInzDlafHf, {from: accounts[4]});
		const amountOutT2eeEkc = await contractPiOTZN7.quote.call(tokenInbx6HzBE, amountInWYb3MHD, {from: accounts[3]});
		await contractPiOTZN7.initialize.call({from: accounts[0]});
		await contractPiOTZN7.initialize.call({from: accounts[3]});
		await contractPiOTZN7.initialize.call({from: accounts[4]});
		await contractPiOTZN7.initialize.call({from: accounts[2]});
	});
})
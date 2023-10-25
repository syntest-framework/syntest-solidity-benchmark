const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryGcRVLAx = accounts[4]
		const tokenAVpYbqaT = accounts[1]
		const tokenBghSCc2 = "0x0000000000000000000000000000000000000001"
		const contractxZHNViA = await UniswapV2OracleExample.new(factoryGcRVLAx, tokenAVpYbqaT, tokenBghSCc2, {from: accounts[3]});
		const amountInaJ1jsOt = BigInt("1265")
		const tokenInmpjgRgz = accounts[2]
		const amountInDimS0Sx = BigInt("680")
		const tokenInmELkx9q = accounts[4]
		const amountOutElonvoy = await contractxZHNViA.quote.call(tokenInmpjgRgz, amountInaJ1jsOt, {from: "0x0000000000000000000000000000000000000001"});
		await contractxZHNViA.update.call({from: accounts[4]});
		await contractxZHNViA.update.call({from: accounts[5]});
		const amountOuttt3Sahb = await contractxZHNViA.quote.call(tokenInmELkx9q, amountInDimS0Sx, {from: accounts[1]});
		await contractxZHNViA.initialize.call({from: accounts[0]});
		await contractxZHNViA.initialize.call({from: accounts[1]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factorykBoY6gv = accounts[4]
		const tokenAEeVldwA = "0x0000000000000000000000000000000000000001"
		const tokenBNR6ZjUE = accounts[4]
		const contractXFzLhL2 = await UniswapV2OracleExample.new(factorykBoY6gv, tokenAEeVldwA, tokenBNR6ZjUE, {from: "0x0000000000000000000000000000000000000001"});
		const amountInSQbJGjt = BigInt("1531")
		const tokenInkLVK1hh = accounts[3]
		const amountInBWPjyt2 = BigInt("1520")
		const tokenInQtmcyI = accounts[1]
		const amountOutiTCCGa6 = await contractXFzLhL2.quote.call(tokenInkLVK1hh, amountInSQbJGjt, {from: accounts[3]});
		await contractXFzLhL2.update.call({from: "0x0000000000000000000000000000000000000001"});
		const amountOutEcRq1t = await contractXFzLhL2.quote.call(tokenInQtmcyI, amountInBWPjyt2, {from: "0x0000000000000000000000000000000000000001"});
		await contractXFzLhL2.initialize.call({from: accounts[1]});
	});
})
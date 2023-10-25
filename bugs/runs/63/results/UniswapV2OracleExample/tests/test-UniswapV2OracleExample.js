const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryIp3AXD = "0x0000000000000000000000000000000000000001"
		const tokenAGtPtpc = accounts[0]
		const tokenBSAkT19 = accounts[3]
		const contractidsrQxH = await UniswapV2OracleExample.new(factoryIp3AXD, tokenAGtPtpc, tokenBSAkT19, {from: accounts[1]});
		const amountInameQitu = BigInt("30")
		const tokenInULJmHl = accounts[0]
		const amountInkS3Q8bL = BigInt("1559")
		const tokenInRSvO18 = accounts[4]
		const amountIn7ZTFBT = BigInt("311")
		const tokenIn5MUExm = accounts[4]
		const amountOutis0NFWV = await contractidsrQxH.quote.call(tokenInULJmHl, amountInameQitu, {from: "0x0000000000000000000000000000000000000001"});
		const amountOuti68Eh6j = await contractidsrQxH.quote.call(tokenInRSvO18, amountInkS3Q8bL, {from: accounts[5]});
		await contractidsrQxH.initialize.call({from: accounts[2]});
		const amountOutVmwUug = await contractidsrQxH.quote.call(tokenIn5MUExm, amountIn7ZTFBT, {from: accounts[4]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryGUQrBtO = accounts[5]
		const tokenAj2E1GiG = "0x0000000000000000000000000000000000000001"
		const tokenBkAwlATA = accounts[3]
		const contractpkWDFx = await UniswapV2OracleExample.new(factoryGUQrBtO, tokenAj2E1GiG, tokenBkAwlATA, {from: "0x0000000000000000000000000000000000000001"});
		const amountInoCmtcj8 = BigInt("1396")
		const tokenInUJqClVR = accounts[2]
		await contractpkWDFx.update.call({from: accounts[2]});
		await contractpkWDFx.initialize.call({from: accounts[1]});
		await contractpkWDFx.initialize.call({from: accounts[0]});
		const amountOutD1Beq65 = await contractpkWDFx.quote.call(tokenInUJqClVR, amountInoCmtcj8, {from: "0x0000000000000000000000000000000000000001"});
	});
})
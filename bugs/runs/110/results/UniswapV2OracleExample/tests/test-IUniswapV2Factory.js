const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractPrNOdps = await IUniswapV2Factory.new({from: accounts[1]});
		const tokenBH8b6Chq = accounts[1]
		const tokenAy59p004 = accounts[4]
		const tokenByFhcHz = accounts[4]
		const tokenALthufQ = accounts[5]
		const tokenBp79JaAL = accounts[4]
		const tokenAPwH0YoE = accounts[1]
		const exchange3sAPBD = await contractPrNOdps.createExchange.call(tokenAy59p004, tokenBH8b6Chq, {from: accounts[2]});
		const nullpUVHma = await contractPrNOdps.exchangeBytecode.call({from: accounts[2]});
		const exchangeePVs5rT = await contractPrNOdps.getExchange.call(tokenALthufQ, tokenByFhcHz, {from: accounts[1]});
		const nulln6RNba = await contractPrNOdps.exchangeBytecode.call({from: accounts[4]});
		const nullSmUDF8v = await contractPrNOdps.feeRecipient.call({from: accounts[5]});
		const exchangelXamfTg = await contractPrNOdps.createExchange.call(tokenAPwH0YoE, tokenBp79JaAL, {from: accounts[3]});
	});
})
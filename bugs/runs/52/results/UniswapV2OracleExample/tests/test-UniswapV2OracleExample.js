const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factorygSHJ1gl = accounts[0]
		const tokenAf0tigBU = "0x0000000000000000000000000000000000000001"
		const tokenBqvkoUKt = accounts[2]
		const contractrehawAO = await UniswapV2OracleExample.new(factorygSHJ1gl, tokenAf0tigBU, tokenBqvkoUKt, {from: accounts[5]});
		await contractrehawAO.update.call({from: accounts[2]});
		await contractrehawAO.update.call({from: accounts[4]});
		await contractrehawAO.update.call({from: accounts[2]});
		await contractrehawAO.initialize.call({from: accounts[1]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryiyYGuz = accounts[4]
		const tokenAuxvKKgL = accounts[1]
		const tokenBJVzRvED = accounts[3]
		const contractHMYjZWS = await UniswapV2OracleExample.new(factoryiyYGuz, tokenAuxvKKgL, tokenBJVzRvED, {from: "0x0000000000000000000000000000000000000001"});
		const amountInbm8bbSF = BigInt("406")
		const tokenInyWcgIV3 = accounts[1]
		const amountInKZfqZgZ = BigInt("58")
		const tokenInSQpVyq9 = accounts[2]
		const amountInOW7T51L = BigInt("193")
		const tokenInbwJ0gg8 = accounts[0]
		const amountOutvW4fOm4 = await contractHMYjZWS.quote.call(tokenInyWcgIV3, amountInbm8bbSF, {from: accounts[4]});
		await contractHMYjZWS.update.call({from: accounts[0]});
		const amountOutlejfaYx = await contractHMYjZWS.quote.call(tokenInSQpVyq9, amountInKZfqZgZ, {from: accounts[3]});
		const amountOutVGX3oIb = await contractHMYjZWS.quote.call(tokenInbwJ0gg8, amountInOW7T51L, {from: accounts[3]});
	});
})
const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryvKfmsYM = accounts[3]
		const tokenAv0ZtoP5 = accounts[0]
		const tokenBWjnZro = accounts[3]
		const contractoUAZjke = await UniswapV2OracleExample.new(factoryvKfmsYM, tokenAv0ZtoP5, tokenBWjnZro, {from: "0x0000000000000000000000000000000000000001"});
		await contractoUAZjke.initialize.call({from: accounts[1]});
		await contractoUAZjke.initialize.call({from: accounts[2]});
		await contractoUAZjke.initialize.call({from: accounts[4]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryxjdisM = accounts[4]
		const tokenATcFeiux = accounts[2]
		const tokenBwbj3l0A = accounts[4]
		const contractRHDE0xK = await UniswapV2OracleExample.new(factoryxjdisM, tokenATcFeiux, tokenBwbj3l0A, {from: accounts[3]});
		await contractRHDE0xK.initialize.call({from: "0x0000000000000000000000000000000000000001"});
		await contractRHDE0xK.initialize.call({from: accounts[4]});
		await contractRHDE0xK.initialize.call({from: accounts[3]});
	});
})
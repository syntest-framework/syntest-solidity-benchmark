const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factory1rroTI = accounts[2]
		const tokenAsgMAk8K = accounts[3]
		const tokenBqrUICM1 = accounts[5]
		const contracttiw39h = await UniswapV2OracleExample.new(factory1rroTI, tokenAsgMAk8K, tokenBqrUICM1, {from: accounts[2]});
		await contracttiw39h.initialize.call({from: accounts[2]});
		await contracttiw39h.update.call({from: accounts[4]});
		await contracttiw39h.initialize.call({from: accounts[3]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryVZwVN2O = accounts[5]
		const tokenAho1KSD = accounts[3]
		const tokenB4323im = accounts[0]
		const contractcSu7wdE = await UniswapV2OracleExample.new(factoryVZwVN2O, tokenAho1KSD, tokenB4323im, {from: "0x0000000000000000000000000000000000000001"});
		await contractcSu7wdE.update.call({from: accounts[1]});
		await contractcSu7wdE.initialize.call({from: accounts[3]});
		await contractcSu7wdE.initialize.call({from: accounts[2]});
		await contractcSu7wdE.initialize.call({from: accounts[5]});
	});
})
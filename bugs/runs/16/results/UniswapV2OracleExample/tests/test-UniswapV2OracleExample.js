const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryNd4uD0X = accounts[0]
		const tokenATOPtZjK = accounts[0]
		const tokenBXCDaO7R = accounts[2]
		const contractDA1P3L7 = await UniswapV2OracleExample.new(factoryNd4uD0X, tokenATOPtZjK, tokenBXCDaO7R, {from: accounts[3]});
		await contractDA1P3L7.initialize.call({from: accounts[2]});
		await contractDA1P3L7.update.call({from: accounts[1]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryA0KmDe4 = accounts[2]
		const tokenAvYtIgh = accounts[2]
		const tokenBAOpUdl4 = accounts[4]
		const contracty2SfTOk = await UniswapV2OracleExample.new(factoryA0KmDe4, tokenAvYtIgh, tokenBAOpUdl4, {from: "0x0000000000000000000000000000000000000001"});
		await contracty2SfTOk.update.call({from: accounts[2]});
		await contracty2SfTOk.initialize.call({from: accounts[0]});
		await contracty2SfTOk.initialize.call({from: accounts[5]});
	});
})
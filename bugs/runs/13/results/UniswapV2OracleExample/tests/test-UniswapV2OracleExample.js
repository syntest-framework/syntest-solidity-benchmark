const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryxGheEU = accounts[0]
		const tokenAJH1soCZ = accounts[3]
		const tokenBQiZFcyY = accounts[4]
		const contractpezO3Ws = await UniswapV2OracleExample.new(factoryxGheEU, tokenAJH1soCZ, tokenBQiZFcyY, {from: accounts[5]});
		await contractpezO3Ws.update.call({from: accounts[0]});
		await contractpezO3Ws.update.call({from: accounts[1]});
		await contractpezO3Ws.initialize.call({from: accounts[2]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factorybBjfycA = accounts[3]
		const tokenAEGs7KyZ = accounts[1]
		const tokenB6nKAtu = accounts[0]
		const contract4DMpUb = await UniswapV2OracleExample.new(factorybBjfycA, tokenAEGs7KyZ, tokenB6nKAtu, {from: "0x0000000000000000000000000000000000000001"});
		const amountInN3rjEtv = BigInt("136")
		const tokenIngqNQtC0 = accounts[5]
		const amountOutk4Kj0r = await contract4DMpUb.quote.call(tokenIngqNQtC0, amountInN3rjEtv, {from: accounts[4]});
		await contract4DMpUb.initialize.call({from: accounts[4]});
		await contract4DMpUb.initialize.call({from: accounts[5]});
	});
})
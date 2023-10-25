const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryB1wKKzG = accounts[0]
		const tokenAPcqJBO = accounts[5]
		const tokenBripAY8 = accounts[0]
		const contractMrkBn89 = await UniswapV2OracleExample.new(factoryB1wKKzG, tokenAPcqJBO, tokenBripAY8, {from: accounts[3]});
		await contractMrkBn89.initialize.call({from: accounts[4]});
		await contractMrkBn89.initialize.call({from: accounts[2]});
		await contractMrkBn89.initialize.call({from: accounts[3]});
		await contractMrkBn89.update.call({from: accounts[3]});
		await contractMrkBn89.initialize.call({from: accounts[1]});
		await contractMrkBn89.update.call({from: accounts[2]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryKlT6sHB = accounts[0]
		const tokenAAVN5HH5 = accounts[1]
		const tokenBGINpj1k = accounts[3]
		const contractBVRxlTR = await UniswapV2OracleExample.new(factoryKlT6sHB, tokenAAVN5HH5, tokenBGINpj1k, {from: "0x0000000000000000000000000000000000000001"});
		const amountInBhtQigG = BigInt("813")
		const tokenIniaE6BDF = accounts[1]
		await contractBVRxlTR.initialize.call({from: accounts[5]});
		await contractBVRxlTR.initialize.call({from: accounts[0]});
		const amountOutepBnFsc = await contractBVRxlTR.quote.call(tokenIniaE6BDF, amountInBhtQigG, {from: accounts[2]});
		await contractBVRxlTR.initialize.call({from: accounts[2]});
	});
})
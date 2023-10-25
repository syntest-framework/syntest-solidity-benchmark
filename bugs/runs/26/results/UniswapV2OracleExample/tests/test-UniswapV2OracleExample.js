const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryhxPVHm9 = accounts[1]
		const tokenAJtTsS7G = accounts[4]
		const tokenBG5Dosun = "0x0000000000000000000000000000000000000001"
		const contractZbePEMR = await UniswapV2OracleExample.new(factoryhxPVHm9, tokenAJtTsS7G, tokenBG5Dosun, {from: accounts[2]});
		const amountInFWz0UxW = BigInt("739")
		const tokenInBTczISS = accounts[2]
		const amountInW7F8BQN = BigInt("1220")
		const tokenInAghyCNo = accounts[4]
		const amountOutTExiDao = await contractZbePEMR.quote.call(tokenInBTczISS, amountInFWz0UxW, {from: "0x0000000000000000000000000000000000000001"});
		const amountOutd57os19 = await contractZbePEMR.quote.call(tokenInAghyCNo, amountInW7F8BQN, {from: accounts[0]});
		await contractZbePEMR.initialize.call({from: accounts[4]});
		await contractZbePEMR.update.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factorymUeETN0 = accounts[0]
		const tokenADYsDUeO = accounts[3]
		const tokenBFkclwWI = accounts[0]
		const contractCgkWMJl = await UniswapV2OracleExample.new(factorymUeETN0, tokenADYsDUeO, tokenBFkclwWI, {from: "0x0000000000000000000000000000000000000001"});
		const amountIniQhM41 = BigInt("702")
		const tokenInkZDQ5cX = accounts[4]
		await contractCgkWMJl.initialize.call({from: accounts[1]});
		const amountOutj22QoVP = await contractCgkWMJl.quote.call(tokenInkZDQ5cX, amountIniQhM41, {from: accounts[3]});
		await contractCgkWMJl.initialize.call({from: accounts[5]});
	});
})
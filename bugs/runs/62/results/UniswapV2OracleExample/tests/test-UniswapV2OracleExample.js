const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryl3Dihuh = accounts[4]
		const tokenAihMevro = accounts[0]
		const tokenBGeQMgAM = accounts[3]
		const contractc9PKq7 = await UniswapV2OracleExample.new(factoryl3Dihuh, tokenAihMevro, tokenBGeQMgAM, {from: accounts[1]});
		await contractc9PKq7.initialize.call({from: accounts[0]});
		await contractc9PKq7.initialize.call({from: accounts[4]});
		await contractc9PKq7.update.call({from: accounts[5]});
		await contractc9PKq7.initialize.call({from: accounts[1]});
		await contractc9PKq7.initialize.call({from: accounts[2]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryX6l9NAa = accounts[1]
		const tokenAI0VAJVL = accounts[3]
		const tokenBw6kIgzm = accounts[5]
		const contractInKu1Dj = await UniswapV2OracleExample.new(factoryX6l9NAa, tokenAI0VAJVL, tokenBw6kIgzm, {from: "0x0000000000000000000000000000000000000001"});
		await contractInKu1Dj.initialize.call({from: accounts[3]});
		await contractInKu1Dj.initialize.call({from: accounts[0]});
		await contractInKu1Dj.initialize.call({from: accounts[1]});
		await contractInKu1Dj.initialize.call({from: accounts[5]});
		await contractInKu1Dj.initialize.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
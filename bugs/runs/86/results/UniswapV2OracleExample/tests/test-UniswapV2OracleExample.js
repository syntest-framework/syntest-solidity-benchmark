const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryIvUAVeE = "0x0000000000000000000000000000000000000001"
		const tokenAv8UDM2o = accounts[3]
		const tokenBe2B8MC7 = accounts[1]
		const contractg6rseDv = await UniswapV2OracleExample.new(factoryIvUAVeE, tokenAv8UDM2o, tokenBe2B8MC7, {from: accounts[2]});
		const amountIner1Ls46 = BigInt("1691")
		const tokenInR6k9yZ = accounts[2]
		await contractg6rseDv.initialize.call({from: accounts[2]});
		await contractg6rseDv.initialize.call({from: accounts[3]});
		const amountOutsW3iDs = await contractg6rseDv.quote.call(tokenInR6k9yZ, amountIner1Ls46, {from: accounts[1]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryaeFG3W = accounts[0]
		const tokenAqsFhWla = accounts[4]
		const tokenBxPpjWaT = accounts[3]
		const contractTUFMQg = await UniswapV2OracleExample.new(factoryaeFG3W, tokenAqsFhWla, tokenBxPpjWaT, {from: "0x0000000000000000000000000000000000000001"});
		await contractTUFMQg.update.call({from: accounts[4]});
		await contractTUFMQg.initialize.call({from: accounts[5]});
		await contractTUFMQg.update.call({from: accounts[4]});
		await contractTUFMQg.initialize.call({from: accounts[3]});
	});
})
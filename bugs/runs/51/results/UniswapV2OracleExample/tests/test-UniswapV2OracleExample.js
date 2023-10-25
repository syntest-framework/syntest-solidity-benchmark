const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factorypqgTpKe = accounts[0]
		const tokenA0srEwD = accounts[1]
		const tokenBTOX8Eeh = accounts[5]
		const contractbDys3jN = await UniswapV2OracleExample.new(factorypqgTpKe, tokenA0srEwD, tokenBTOX8Eeh, {from: accounts[3]});
		const amountInzUzX9GM = BigInt("694")
		const tokenInmwVBCBX = accounts[3]
		await contractbDys3jN.initialize.call({from: accounts[3]});
		await contractbDys3jN.initialize.call({from: accounts[2]});
		const amountOuteGtY5f = await contractbDys3jN.quote.call(tokenInmwVBCBX, amountInzUzX9GM, {from: accounts[1]});
		await contractbDys3jN.initialize.call({from: accounts[5]});
		await contractbDys3jN.update.call({from: accounts[5]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryZqtVpaK = accounts[2]
		const tokenAvWR9Wzn = accounts[4]
		const tokenBv0JKafC = accounts[0]
		const contractCIDrqn1 = await UniswapV2OracleExample.new(factoryZqtVpaK, tokenAvWR9Wzn, tokenBv0JKafC, {from: "0x0000000000000000000000000000000000000001"});
		await contractCIDrqn1.update.call({from: accounts[5]});
		await contractCIDrqn1.initialize.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factoryfdKRT2 = accounts[2]
		const tokenAcbU3EU1 = accounts[3]
		const tokenBzarp1rV = accounts[5]
		const contractrf7cx9 = await UniswapV2OracleExample.new(factoryfdKRT2, tokenAcbU3EU1, tokenBzarp1rV, {from: accounts[3]});
		const amountIng6nozhC = BigInt("290")
		const tokenInkynMQRV = accounts[2]
		const amountInUy8iBZ7 = BigInt("1850")
		const tokenInxtB2MhH = accounts[0]
		await contractrf7cx9.initialize.call({from: accounts[0]});
		await contractrf7cx9.initialize.call({from: accounts[5]});
		await contractrf7cx9.initialize.call({from: accounts[4]});
		const amountOutnSFQbHj = await contractrf7cx9.quote.call(tokenInkynMQRV, amountIng6nozhC, {from: accounts[4]});
		await contractrf7cx9.update.call({from: accounts[1]});
		const amountOutbXYCQWz = await contractrf7cx9.quote.call(tokenInxtB2MhH, amountInUy8iBZ7, {from: accounts[1]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryAg0jJ9 = accounts[0]
		const tokenAhTJZge5 = accounts[2]
		const tokenBdXSg2T8 = accounts[2]
		const contractDs7f33s = await UniswapV2OracleExample.new(factoryAg0jJ9, tokenAhTJZge5, tokenBdXSg2T8, {from: "0x0000000000000000000000000000000000000001"});
		const amountInUZY92Zq = BigInt("1729")
		const tokenInXcEDfSR = accounts[4]
		await contractDs7f33s.update.call({from: accounts[2]});
		await contractDs7f33s.initialize.call({from: accounts[2]});
		await contractDs7f33s.update.call({from: accounts[0]});
		const amountOutKqLKpIc = await contractDs7f33s.quote.call(tokenInXcEDfSR, amountInUZY92Zq, {from: accounts[2]});
		await contractDs7f33s.initialize.call({from: accounts[1]});
	});
})
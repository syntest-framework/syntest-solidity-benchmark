const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractTWtllRQ = await IUniswapV2Factory.new({from: accounts[5]});
		const tokenBRfldxz = accounts[4]
		const tokenAj3IdYSI = accounts[2]
		const nullkTyT9d0 = BigInt("227")
		const tokenBuewRpbf = accounts[4]
		const tokenAJ3nt4Py = accounts[1]
		const tokenBZt0TuNQ = accounts[4]
		const tokenARKBF6G5 = accounts[2]
		const nullWfxyvPt = await contractTWtllRQ.factoryOwner.call({from: accounts[5]});
		const exchangeAukT7An = await contractTWtllRQ.createExchange.call(tokenAj3IdYSI, tokenBRfldxz, {from: accounts[2]});
		const exchangeEGBaPQT = await contractTWtllRQ.exchanges.call(nullkTyT9d0, {from: accounts[1]});
		const nullivjqip2 = await contractTWtllRQ.factoryOwner.call({from: accounts[2]});
		const [token0BYHJXAb, token1KaKx8M4] = await contractTWtllRQ.sortTokens.call(tokenAJ3nt4Py, tokenBuewRpbf, {from: "0x0000000000000000000000000000000000000001"});
		const exchangeSMw7tV = await contractTWtllRQ.createExchange.call(tokenARKBF6G5, tokenBZt0TuNQ, {from: accounts[3]});
	});
})
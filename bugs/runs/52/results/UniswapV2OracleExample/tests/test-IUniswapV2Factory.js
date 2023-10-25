const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractc0cAaxK = await IUniswapV2Factory.new({from: accounts[0]});
		const nullsAIf8JL = BigInt("272")
		const tokenBZGMRJYv = accounts[2]
		const tokenAecAfUH1 = accounts[5]
		const nullCcrHgeC = await contractc0cAaxK.feeRecipient.call({from: accounts[0]});
		const nullngfRgy2 = await contractc0cAaxK.exchangeBytecode.call({from: accounts[2]});
		const nullFOv8vwG = await contractc0cAaxK.exchangesCount.call({from: accounts[1]});
		const exchangeRxJH8O9 = await contractc0cAaxK.exchanges.call(nullsAIf8JL, {from: accounts[3]});
		const exchangeBLldCOh = await contractc0cAaxK.getExchange.call(tokenAecAfUH1, tokenBZGMRJYv, {from: accounts[0]});
	});
})
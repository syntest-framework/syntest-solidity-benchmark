const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractkT38R57 = await IUniswapV2Factory.new({from: accounts[0]});
		const tokenB44j02P = accounts[4]
		const tokenAt4Z4PND = accounts[1]
		const tokenBzntigTV = accounts[1]
		const tokenAn9abGk = "0x0000000000000000000000000000000000000001"
		const tokenBVazPWZO = accounts[4]
		const tokenAUTJdNkx = accounts[0]
		const tokenBzB0QENF = accounts[0]
		const tokenAm6zixmt = accounts[4]
		const [token0cUNM3jB, token1moFckNt] = await contractkT38R57.sortTokens.call(tokenAt4Z4PND, tokenB44j02P, {from: accounts[5]});
		const [token0WpRI6AW, token1uXC4Vk0] = await contractkT38R57.sortTokens.call(tokenAn9abGk, tokenBzntigTV, {from: accounts[3]});
		const exchangehjQPdyh = await contractkT38R57.createExchange.call(tokenAUTJdNkx, tokenBVazPWZO, {from: accounts[0]});
		const nullw1uITjD = await contractkT38R57.feeRecipient.call({from: accounts[4]});
		const exchangegHUoIPu = await contractkT38R57.getExchange.call(tokenAm6zixmt, tokenBzB0QENF, {from: accounts[1]});
		const nullTiUidnX = await contractkT38R57.feeRecipient.call({from: accounts[2]});
	});
})
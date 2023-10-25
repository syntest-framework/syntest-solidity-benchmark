const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contracttlOHTcx = await IUniswapV2.new({from: accounts[1]});
		const amountOuthhvIiL = BigInt("1121")
		const tokenInHNSvWbY = accounts[1]
		const nullFFAj5V7 = await contracttlOHTcx.price1CumulativeLast.call({from: accounts[1]});
		const nullqUs5S0D = await contracttlOHTcx.token0.call({from: accounts[1]});
		const nullWWvPQQU = await contracttlOHTcx.price0CumulativeLast.call({from: accounts[3]});
		await contracttlOHTcx.swap.call(tokenInHNSvWbY, amountOuthhvIiL, {from: accounts[5]});
	});
})
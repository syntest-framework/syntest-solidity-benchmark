const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractrPSoYZ = await IUniswapV2Factory.new({from: accounts[3]});
		const tokenBLRLPlom = accounts[4]
		const tokenAd7FC0ig = accounts[2]
		const [token0VOAlsnr, token1ljCP2Zr] = await contractrPSoYZ.sortTokens.call(tokenAd7FC0ig, tokenBLRLPlom, {from: accounts[3]});
		const nullL5sRbJR = await contractrPSoYZ.exchangeBytecode.call({from: accounts[2]});
		const nullF0Jin3 = await contractrPSoYZ.exchangeBytecode.call({from: accounts[2]});
	});
})
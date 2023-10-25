const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractq5CyWNm = await IUniswapV2Factory.new({from: accounts[2]});
		const tokenBn185PGs = accounts[1]
		const tokenAmnSii1 = accounts[1]
		const tokenByUUI5tP = accounts[4]
		const tokenABVlsfL = "0x0000000000000000000000000000000000000001"
		const [token0vr7juvh, token1ufaOmZf] = await contractq5CyWNm.sortTokens.call(tokenAmnSii1, tokenBn185PGs, {from: "0x0000000000000000000000000000000000000001"});
		const exchangeo2ewWCW = await contractq5CyWNm.createExchange.call(tokenABVlsfL, tokenByUUI5tP, {from: "0x0000000000000000000000000000000000000001"});
		const nullWzf7wF = await contractq5CyWNm.exchangesCount.call({from: accounts[5]});
		const nullpwnRAn7 = await contractq5CyWNm.feeRecipient.call({from: accounts[0]});
		const nully7KgzSk = await contractq5CyWNm.exchangeBytecode.call({from: accounts[4]});
	});
})
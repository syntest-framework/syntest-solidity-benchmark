const IUniswapV2Factory = artifacts.require("IUniswapV2Factory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2Factory', (accounts) => {
	it('test for IUniswapV2Factory', async () => {
		const contractqzRhot4 = await IUniswapV2Factory.new({from: accounts[5]});
		const tokenBrdh2cNN = accounts[5]
		const tokenAQR8ue4I = accounts[1]
		const tokenBv4dwzgz = "0x0000000000000000000000000000000000000001"
		const tokenAhci6SQC = accounts[3]
		const [token0brkClws, token1b9vEC27] = await contractqzRhot4.sortTokens.call(tokenAQR8ue4I, tokenBrdh2cNN, {from: accounts[2]});
		const nullG4uH1g = await contractqzRhot4.factoryOwner.call({from: accounts[2]});
		const [token0ED9DncI, token1OnZ6tyR] = await contractqzRhot4.sortTokens.call(tokenAhci6SQC, tokenBv4dwzgz, {from: accounts[4]});
		const nullFunlKJP = await contractqzRhot4.feeRecipient.call({from: accounts[3]});
		const nulll7gM3e2 = await contractqzRhot4.factoryOwner.call({from: accounts[3]});
	});
})
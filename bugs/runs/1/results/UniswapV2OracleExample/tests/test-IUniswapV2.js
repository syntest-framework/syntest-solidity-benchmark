const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractzGg9xZe = await IUniswapV2.new({from: accounts[1]});
		const nullbv0TftI = await contractzGg9xZe.reserve0.call({from: accounts[1]});
		const liquiditysLFKsP5 = await contractzGg9xZe.mint.call({from: accounts[4]});
		await contractzGg9xZe.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const nulleW6VYBn = await contractzGg9xZe.reserve0.call({from: accounts[4]});
		const nullY3CqTGC = await contractzGg9xZe.reserve1.call({from: accounts[4]});
		const nullB71e2G = await contractzGg9xZe.factory.call({from: accounts[3]});
	});
})
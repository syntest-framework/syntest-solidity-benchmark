const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractDDZrTpP = await IUniswapV2.new({from: "0x0000000000000000000000000000000000000001"});
		const nullced8ZFf = await contractDDZrTpP.reserve1.call({from: accounts[2]});
		const nullIi2HiGK = await contractDDZrTpP.reserve1.call({from: accounts[1]});
		const nullKo540GP = await contractDDZrTpP.blockNumberLast.call({from: accounts[2]});
		await contractDDZrTpP.skim.call({from: accounts[2]});
		const nullfeYpG4 = await contractDDZrTpP.reserve0.call({from: accounts[0]});
	});
})
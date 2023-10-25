const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractcWt053W = await IUniswapV2.new({from: accounts[4]});
		const [amount0FR3cjCd, amount1prPVfQt] = await contractcWt053W.burn.call({from: "0x0000000000000000000000000000000000000001"});
		const nullYIFLJ1L = await contractcWt053W.reserve1.call({from: accounts[2]});
		await contractcWt053W.skim.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
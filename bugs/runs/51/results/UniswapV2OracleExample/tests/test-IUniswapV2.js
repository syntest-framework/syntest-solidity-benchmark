const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractNEwtBNq = await IUniswapV2.new({from: accounts[0]});
		await contractNEwtBNq.skim.call({from: accounts[1]});
		await contractNEwtBNq.sync.call({from: accounts[1]});
		const nullO9w6sd = await contractNEwtBNq.price0CumulativeLast.call({from: accounts[0]});
		const liquiditym8sCnLG = await contractNEwtBNq.mint.call({from: accounts[5]});
		const [amount0dM5l0oR, amount1odJc2I0] = await contractNEwtBNq.burn.call({from: accounts[0]});
		const nullhyWOxX3 = await contractNEwtBNq.reserve1.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
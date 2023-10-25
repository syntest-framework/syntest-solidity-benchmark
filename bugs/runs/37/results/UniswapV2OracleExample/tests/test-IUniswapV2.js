const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractCPEeGQo = await IUniswapV2.new({from: accounts[5]});
		await contractCPEeGQo.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const nullpEKRGYy = await contractCPEeGQo.price1CumulativeLast.call({from: accounts[2]});
	});
})
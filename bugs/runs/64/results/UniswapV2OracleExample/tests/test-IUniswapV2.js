const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractGTRctm1 = await IUniswapV2.new({from: accounts[4]});
		const nulllXY1Nmp = await contractGTRctm1.price0CumulativeLast.call({from: "0x0000000000000000000000000000000000000001"});
		await contractGTRctm1.skim.call({from: accounts[1]});
		const nullMtJJ0wE = await contractGTRctm1.token1.call({from: accounts[3]});
		const nullH1TRE0U = await contractGTRctm1.reserve0.call({from: accounts[1]});
		const nullojxThG4 = await contractGTRctm1.factory.call({from: accounts[4]});
		const nullfE8fS3X = await contractGTRctm1.reserve0.call({from: accounts[3]});
	});
})
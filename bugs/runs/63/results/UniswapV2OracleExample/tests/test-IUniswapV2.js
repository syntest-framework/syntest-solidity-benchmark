const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractsglBSjt = await IUniswapV2.new({from: accounts[4]});
		const nullZJtVhn = await contractsglBSjt.token0.call({from: "0x0000000000000000000000000000000000000001"});
		const nullzHEIeom = await contractsglBSjt.reserve0.call({from: accounts[5]});
		const [amount0HEObsoP, amount1FP2raic] = await contractsglBSjt.burn.call({from: accounts[4]});
		await contractsglBSjt.skim.call({from: accounts[1]});
		const liquiditycDe8fKc = await contractsglBSjt.mint.call({from: accounts[1]});
	});
})
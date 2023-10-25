const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractP2KgjVp = await IUniswapV2OracleExample.new({from: accounts[1]});
		await contractP2KgjVp.initialize.call({from: "0x0000000000000000000000000000000000000001"});
		const nullDiHetul = await contractP2KgjVp.price0Average.call({from: accounts[1]});
		const nullvykaymY = await contractP2KgjVp.token0.call({from: accounts[1]});
	});
})
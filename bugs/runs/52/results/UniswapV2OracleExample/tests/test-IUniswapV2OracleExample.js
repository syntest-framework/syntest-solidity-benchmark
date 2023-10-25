const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractjrScmwU = await IUniswapV2OracleExample.new({from: accounts[1]});
		const nulleq23Tkk = await contractjrScmwU.price0Average.call({from: accounts[2]});
		await contractjrScmwU.update.call({from: accounts[3]});
		const nullT0PMotB = await contractjrScmwU.token0.call({from: accounts[1]});
	});
})
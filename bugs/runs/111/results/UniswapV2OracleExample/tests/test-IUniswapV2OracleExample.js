const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractYiaJ3bB = await IUniswapV2OracleExample.new({from: accounts[3]});
		const nullYdntJ2c = await contractYiaJ3bB.token1.call({from: accounts[4]});
		await contractYiaJ3bB.initialize.call({from: accounts[1]});
		const nullzpdRRE3 = await contractYiaJ3bB.price0Average.call({from: accounts[4]});
	});
})
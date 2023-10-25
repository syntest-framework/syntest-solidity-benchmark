const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractM7kw8Rw = await IUniswapV2OracleExample.new({from: accounts[3]});
		await contractM7kw8Rw.initialize.call({from: accounts[3]});
		const nullXyaXnX = await contractM7kw8Rw.price0Average.call({from: accounts[3]});
	});
})
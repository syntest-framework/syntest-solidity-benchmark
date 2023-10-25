const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractII1e2j7 = await IUniswapV2OracleExample.new({from: accounts[2]});
		const nullmOC7iK = await contractII1e2j7.price1Average.call({from: accounts[1]});
		const nullf5mB5Pk = await contractII1e2j7.period.call({from: accounts[3]});
		const nullurSwWsi = await contractII1e2j7.period.call({from: accounts[0]});
		await contractII1e2j7.initialize.call({from: accounts[0]});
	});
})
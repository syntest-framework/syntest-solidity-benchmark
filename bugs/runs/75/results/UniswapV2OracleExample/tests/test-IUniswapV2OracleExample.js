const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractF1U5W5c = await IUniswapV2OracleExample.new({from: accounts[5]});
		const nullaadWEi = await contractF1U5W5c.period.call({from: accounts[1]});
		const nullEICfPHl = await contractF1U5W5c.exchange.call({from: accounts[4]});
		await contractF1U5W5c.initialize.call({from: accounts[3]});
	});
})
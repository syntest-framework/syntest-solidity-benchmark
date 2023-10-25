const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractS1EZp5k = await IUniswapV2OracleExample.new({from: accounts[1]});
		const nullB4cqdd = await contractS1EZp5k.initialized.call({from: accounts[0]});
		const nullJZ0IyEE = await contractS1EZp5k.price0Average.call({from: accounts[4]});
	});
})
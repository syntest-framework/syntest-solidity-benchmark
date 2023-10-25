const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractRJGZYN7 = await IUniswapV2OracleExample.new({from: accounts[1]});
		const nullnE6a2dg = await contractRJGZYN7.price0Average.call({from: accounts[0]});
		const nullIohbJCl = await contractRJGZYN7.period.call({from: "0x0000000000000000000000000000000000000001"});
		await contractRJGZYN7.initialize.call({from: accounts[3]});
	});
})
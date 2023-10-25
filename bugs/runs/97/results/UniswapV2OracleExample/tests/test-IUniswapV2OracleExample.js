const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractM3b9Xi5 = await IUniswapV2OracleExample.new({from: accounts[2]});
		const nullU0DjKzv = await contractM3b9Xi5.exchange.call({from: accounts[1]});
		const nullJGRQ4I7 = await contractM3b9Xi5.exchange.call({from: accounts[4]});
		await contractM3b9Xi5.initialize.call({from: accounts[4]});
		const nullrAmJuyq = await contractM3b9Xi5.price0Average.call({from: accounts[3]});
		const nullKZEdt51 = await contractM3b9Xi5.token0.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractkrcDTt4 = await IUniswapV2OracleExample.new({from: accounts[4]});
		const nullXa4OWAO = await contractkrcDTt4.price1Average.call({from: accounts[5]});
		const nulluueSx0J = await contractkrcDTt4.token0.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
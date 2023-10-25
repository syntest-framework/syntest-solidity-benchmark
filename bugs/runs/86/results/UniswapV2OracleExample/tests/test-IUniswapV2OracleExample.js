const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractdQ0cTiT = await IUniswapV2OracleExample.new({from: accounts[2]});
		const nullrqnUx4w = await contractdQ0cTiT.price0Average.call({from: accounts[1]});
		const nullwXWapJ = await contractdQ0cTiT.initialized.call({from: accounts[0]});
	});
})
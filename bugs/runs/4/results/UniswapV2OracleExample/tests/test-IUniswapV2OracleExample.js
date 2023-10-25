const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractsM2iznL = await IUniswapV2OracleExample.new({from: accounts[3]});
		const nullHCMhlB4 = await contractsM2iznL.initialized.call({from: accounts[1]});
		const nullNW7Ywcs = await contractsM2iznL.price0Average.call({from: accounts[3]});
		const nullsJ90otR = await contractsM2iznL.price1Average.call({from: accounts[4]});
		const nullCJvRt01 = await contractsM2iznL.token1.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
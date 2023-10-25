const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractIQrFHvU = await IUniswapV2OracleExample.new({from: "0x0000000000000000000000000000000000000001"});
		await contractIQrFHvU.initialize.call({from: accounts[2]});
		const nullITjpqUv = await contractIQrFHvU.initialized.call({from: accounts[0]});
	});
})
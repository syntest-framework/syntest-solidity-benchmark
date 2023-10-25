const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractj0WcymS = await IUniswapV2OracleExample.new({from: accounts[3]});
		await contractj0WcymS.initialize.call({from: accounts[2]});
		const nullw0XT6RA = await contractj0WcymS.price1Average.call({from: accounts[2]});
		const nulllvkQtvR = await contractj0WcymS.price1Average.call({from: "0x0000000000000000000000000000000000000001"});
		await contractj0WcymS.initialize.call({from: accounts[2]});
	});
})
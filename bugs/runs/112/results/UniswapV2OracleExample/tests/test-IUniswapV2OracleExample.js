const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractuc1OnAO = await IUniswapV2OracleExample.new({from: "0x0000000000000000000000000000000000000001"});
		const amountInoeoPmR = BigInt("944")
		const tokenInwIniMKU = accounts[0]
		const amountOutyxUmJ75 = await contractuc1OnAO.quote.call(tokenInwIniMKU, amountInoeoPmR, {from: accounts[1]});
		await contractuc1OnAO.update.call({from: accounts[5]});
		const nullyE3K9lO = await contractuc1OnAO.token0.call({from: accounts[0]});
		const nullkrj7heE = await contractuc1OnAO.initialized.call({from: accounts[5]});
		const nullPDa1WOF = await contractuc1OnAO.token1.call({from: accounts[2]});
	});
})
const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractXitvK2 = await IUniswapV2OracleExample.new({from: accounts[1]});
		const amountInF5dYyd8 = BigInt("1060")
		const tokenInY26DvSD = accounts[0]
		const nullzhn2mDe = await contractXitvK2.initialized.call({from: accounts[2]});
		const amountOutMT68kdy = await contractXitvK2.quote.call(tokenInY26DvSD, amountInF5dYyd8, {from: accounts[3]});
		const nulllAx1AL = await contractXitvK2.token0.call({from: accounts[4]});
	});
})
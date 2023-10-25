const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractp78Ie5B = await IUniswapV2OracleExample.new({from: "0x0000000000000000000000000000000000000001"});
		const amountInTQiCoAg = BigInt("1981")
		const tokenInieTWty = accounts[5]
		const amountInQzGApK = BigInt("147")
		const tokenInUzj6UUO = accounts[3]
		const nullBLnjV9V = await contractp78Ie5B.token0.call({from: accounts[3]});
		const nullBTQMnYL = await contractp78Ie5B.period.call({from: accounts[3]});
		const nullwk8MhqO = await contractp78Ie5B.price1Average.call({from: accounts[0]});
		const amountOutdiKYHus = await contractp78Ie5B.quote.call(tokenInieTWty, amountInTQiCoAg, {from: accounts[0]});
		const amountOut69CmVQ = await contractp78Ie5B.quote.call(tokenInUzj6UUO, amountInQzGApK, {from: accounts[2]});
	});
})
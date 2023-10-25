const IUniswapV2OracleExample = artifacts.require("IUniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2OracleExample', (accounts) => {
	it('test for IUniswapV2OracleExample', async () => {
		const contractbHO4G0Z = await IUniswapV2OracleExample.new({from: accounts[2]});
		const nulllKS03wk = await contractbHO4G0Z.price0Average.call({from: "0x0000000000000000000000000000000000000001"});
		const nullV7UNUI = await contractbHO4G0Z.price1Average.call({from: accounts[5]});
		const nullEmZtcXx = await contractbHO4G0Z.token1.call({from: accounts[4]});
		const nullP3bcynp = await contractbHO4G0Z.token1.call({from: accounts[4]});
		const nullohNmnqS = await contractbHO4G0Z.price0Average.call({from: accounts[4]});
	});
})
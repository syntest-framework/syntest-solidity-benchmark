const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractff3RV7D = await IERC20.new({from: accounts[2]});
		const valueZ1UFzpw = BigInt("1425")
		const toomxQDJ8 = accounts[4]
		const fromMFh1246 = accounts[4]
		const whoQOAwy9E = accounts[5]
		const nullqllUvp6 = await contractff3RV7D.transferFrom.call(fromMFh1246, toomxQDJ8, valueZ1UFzpw, {from: accounts[4]});
		const nullFNyLkXw = await contractff3RV7D.balanceOf.call(whoQOAwy9E, {from: accounts[4]});
		const nullF5IndSJ = await contractff3RV7D.totalSupply.call({from: accounts[4]});
		const nullf8nLc6 = await contractff3RV7D.totalSupply.call({from: accounts[0]});
	});
})
const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractydSJd8g = await IERC165.new({from: accounts[1]});
		const interfaceIdqP24oOK = "0x09041406"
		const interfaceIdctzsZD1 = "0x1204170a"
		const interfaceIduQDcvw0 = "0x18051a1f"
		const interfaceIdyWcRNHr = "0x0d011400"
		const nullIZtxpEV = await contractydSJd8g.supportsInterface.call(interfaceIdqP24oOK, {from: accounts[4]});
		const nullML32VQ = await contractydSJd8g.supportsInterface.call(interfaceIdctzsZD1, {from: accounts[1]});
		const nullXUlzGlU = await contractydSJd8g.supportsInterface.call(interfaceIduQDcvw0, {from: accounts[1]});
		const nullFvTJVVd = await contractydSJd8g.supportsInterface.call(interfaceIdyWcRNHr, {from: accounts[1]});
	});
})
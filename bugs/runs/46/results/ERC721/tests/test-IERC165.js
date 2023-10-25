const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractsLv5MZV = await IERC165.new({from: accounts[0]});
		const interfaceIdI94tkT0 = "0x02030612"
		const interfaceIdtgb4eMA = "0x1c0e0815"
		const interfaceIdRPb58q = "0x0a07141e"
		const interfaceIdG1uVHhO = "0x04190206"
		const interfaceIdG1w3qir = "0x04041b1b"
		const nullfe3izl4 = await contractsLv5MZV.supportsInterface.call(interfaceIdI94tkT0, {from: accounts[5]});
		const nullJYKdGcv = await contractsLv5MZV.supportsInterface.call(interfaceIdtgb4eMA, {from: accounts[4]});
		const nullIC480W = await contractsLv5MZV.supportsInterface.call(interfaceIdRPb58q, {from: accounts[0]});
		const nullqsEsVzj = await contractsLv5MZV.supportsInterface.call(interfaceIdG1uVHhO, {from: accounts[3]});
		const nullJiKevR2 = await contractsLv5MZV.supportsInterface.call(interfaceIdG1w3qir, {from: accounts[1]});
	});
})
const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractZ3JQ2Yy = await ERC165.new({from: accounts[4]});
		const interfaceIdRljBoMz = "0x1d1a0913"
		const interfaceIdXVoM1RB = "0x1e1a0004"
		const interfaceIdBZGtSS9 = "0x180f1f11"
		const interfaceIdOamJKYm = "0x1c18051e"
		const nullJsLWAXb = await contractZ3JQ2Yy.supportsInterface.call(interfaceIdRljBoMz, {from: accounts[2]});
		const nullHpjavSv = await contractZ3JQ2Yy.supportsInterface.call(interfaceIdXVoM1RB, {from: accounts[0]});
		const nullWDOTSo3 = await contractZ3JQ2Yy.supportsInterface.call(interfaceIdBZGtSS9, {from: accounts[5]});
		const nullXTXVv13 = await contractZ3JQ2Yy.supportsInterface.call(interfaceIdOamJKYm, {from: accounts[4]});
	});
})
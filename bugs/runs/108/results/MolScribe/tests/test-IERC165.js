const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractuhUGFUb = await IERC165.new({from: accounts[1]});
		const interfaceIdVNKkOO = "0x180e1713"
		const interfaceId4OYyPD = "0x10000110"
		const interfaceIdvStv29B = "0x100b010b"
		const interfaceIdHDjhk4p = "0x0b0f1c11"
		const interfaceIdtv3uTJ = "0x0f1e111e"
		const interfaceIdWdRubfb = "0x0f170503"
		const nullwL3DT9b = await contractuhUGFUb.supportsInterface.call(interfaceIdVNKkOO, {from: "0x0000000000000000000000000000000000000001"});
		const nullbid5Cnb = await contractuhUGFUb.supportsInterface.call(interfaceId4OYyPD, {from: accounts[5]});
		const nullTx9XdBy = await contractuhUGFUb.supportsInterface.call(interfaceIdvStv29B, {from: accounts[5]});
		const nullwinV1K = await contractuhUGFUb.supportsInterface.call(interfaceIdHDjhk4p, {from: accounts[2]});
		const nullLNyBs9k = await contractuhUGFUb.supportsInterface.call(interfaceIdtv3uTJ, {from: accounts[0]});
		const nullHpAGNJ7 = await contractuhUGFUb.supportsInterface.call(interfaceIdWdRubfb, {from: accounts[1]});
	});
})
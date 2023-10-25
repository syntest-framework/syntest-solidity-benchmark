const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractSGXlCr = await IERC165.new({from: accounts[3]});
		const interfaceIduuiZvQT = "0x1a0c1a07"
		const interfaceIdOBr2ISL = "0x0c06001d"
		const interfaceIdJPzART = "0x00071601"
		const interfaceIdgx8P7x7 = "0x06070319"
		const interfaceIdPwRCb5p = "0x1e171701"
		const nullTPIg8R = await contractSGXlCr.supportsInterface.call(interfaceIduuiZvQT, {from: accounts[4]});
		const nulllvbZI5N = await contractSGXlCr.supportsInterface.call(interfaceIdOBr2ISL, {from: accounts[5]});
		const nullKsPdrBx = await contractSGXlCr.supportsInterface.call(interfaceIdJPzART, {from: accounts[0]});
		const nullCJDgI63 = await contractSGXlCr.supportsInterface.call(interfaceIdgx8P7x7, {from: accounts[3]});
		const nullyUbJdty = await contractSGXlCr.supportsInterface.call(interfaceIdPwRCb5p, {from: accounts[1]});
	});
})
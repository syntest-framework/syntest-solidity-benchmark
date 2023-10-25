const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractpk3hbk = await IERC165.new({from: accounts[1]});
		const interfaceIdvhdS4UB = "0x10041b00"
		const interfaceIdHBtXb0Q = "0x1406081c"
		const interfaceIdg0M7eO6 = "0x0c020b13"
		const nullASa2j16 = await contractpk3hbk.supportsInterface.call(interfaceIdvhdS4UB, {from: accounts[0]});
		const nullQTQxpg8 = await contractpk3hbk.supportsInterface.call(interfaceIdHBtXb0Q, {from: accounts[3]});
		const nullPqscduh = await contractpk3hbk.supportsInterface.call(interfaceIdg0M7eO6, {from: accounts[1]});
	});
})
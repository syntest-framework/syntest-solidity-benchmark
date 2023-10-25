const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractHoPqaC = await IERC165.new({from: accounts[5]});
		const interfaceIdXYCyOZh = "0x010c1a16"
		const interfaceIdgPa0iF = "0x041f0616"
		const interfaceIdhODqYIf = "0x2004180f"
		const interfaceIdT1loo8R = "0x01131618"
		const interfaceIdYCXG9nR = "0x08051a01"
		const nulld270yRW = await contractHoPqaC.supportsInterface.call(interfaceIdXYCyOZh, {from: accounts[2]});
		const nullc744AW2 = await contractHoPqaC.supportsInterface.call(interfaceIdgPa0iF, {from: accounts[3]});
		const nullrOlj2PU = await contractHoPqaC.supportsInterface.call(interfaceIdhODqYIf, {from: "0x0000000000000000000000000000000000000001"});
		const null5iVWxd = await contractHoPqaC.supportsInterface.call(interfaceIdT1loo8R, {from: accounts[3]});
		const nulllE9UvbE = await contractHoPqaC.supportsInterface.call(interfaceIdYCXG9nR, {from: accounts[2]});
	});
})
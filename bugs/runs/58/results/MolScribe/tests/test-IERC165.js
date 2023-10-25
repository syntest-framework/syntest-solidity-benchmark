const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractaoe6bZN = await IERC165.new({from: accounts[4]});
		const interfaceIdJMgZot8 = "0x0809120d"
		const interfaceIdBDgubY8 = "0x16161506"
		const interfaceIdW1qh8ri = "0x0c101113"
		const interfaceIdBYLbEgb = "0x02200618"
		const interfaceIdkj3jKC = "0x20031c00"
		const nullPlwV29f = await contractaoe6bZN.supportsInterface.call(interfaceIdJMgZot8, {from: accounts[1]});
		const null42MBEi = await contractaoe6bZN.supportsInterface.call(interfaceIdBDgubY8, {from: accounts[3]});
		const nullNGBg7dU = await contractaoe6bZN.supportsInterface.call(interfaceIdW1qh8ri, {from: "0x0000000000000000000000000000000000000001"});
		const nullY0itGsx = await contractaoe6bZN.supportsInterface.call(interfaceIdBYLbEgb, {from: accounts[0]});
		const nullJuYPFdf = await contractaoe6bZN.supportsInterface.call(interfaceIdkj3jKC, {from: accounts[3]});
	});
})
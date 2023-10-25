const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractOlNuHJv = await IERC165.new({from: accounts[4]});
		const interfaceIdIB4YyzG = "0x110d061f"
		const interfaceIdK3JJcJq = "0x14010e10"
		const interfaceIdtrvG46 = "0x161d091d"
		const interfaceIdKJRz9w9 = "0x141c120d"
		const nullnVvptU4 = await contractOlNuHJv.supportsInterface.call(interfaceIdIB4YyzG, {from: accounts[1]});
		const nullHJOHhVS = await contractOlNuHJv.supportsInterface.call(interfaceIdK3JJcJq, {from: accounts[3]});
		const nulliriuD8 = await contractOlNuHJv.supportsInterface.call(interfaceIdtrvG46, {from: accounts[1]});
		const nullbwqjoI = await contractOlNuHJv.supportsInterface.call(interfaceIdKJRz9w9, {from: accounts[4]});
	});
})
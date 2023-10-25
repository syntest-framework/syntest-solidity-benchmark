const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractzlUVe0c = await IERC165.new({from: accounts[2]});
		const interfaceIdsUkwd6 = "0x0208031b"
		const interfaceIdUjHquz1 = "0x0f0a0708"
		const interfaceIdBgS9Qi5 = "0x1c10180d"
		const interfaceIdk2Nn4kW = "0x091a0f0a"
		const interfaceIdNHoSc9p = "0x1217081c"
		const nulljbTgEjk = await contractzlUVe0c.supportsInterface.call(interfaceIdsUkwd6, {from: accounts[3]});
		const nullNoqBntz = await contractzlUVe0c.supportsInterface.call(interfaceIdUjHquz1, {from: accounts[4]});
		const nullu3JnhZO = await contractzlUVe0c.supportsInterface.call(interfaceIdBgS9Qi5, {from: accounts[1]});
		const nulljc9tiF = await contractzlUVe0c.supportsInterface.call(interfaceIdk2Nn4kW, {from: "0x0000000000000000000000000000000000000001"});
		const nullvMR6SJe = await contractzlUVe0c.supportsInterface.call(interfaceIdNHoSc9p, {from: accounts[1]});
	});
})
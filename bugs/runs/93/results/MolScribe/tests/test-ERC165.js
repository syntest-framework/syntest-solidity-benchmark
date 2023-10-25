const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractLimMLMY = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdBnHP5to = "0x0a131514"
		const interfaceIdNhf3E1g = "0x16160f01"
		const interfaceIdnpLq7Wx = "0x1a1a1e0d"
		const interfaceIdk1eBU17 = "0x000e1613"
		const interfaceIdi0mkdt7 = "0x07190c0e"
		const nulllx1p1pv = await contractLimMLMY.supportsInterface.call(interfaceIdBnHP5to, {from: accounts[4]});
		const nullvSDrkj = await contractLimMLMY.supportsInterface.call(interfaceIdNhf3E1g, {from: accounts[3]});
		const nullb9TigdU = await contractLimMLMY.supportsInterface.call(interfaceIdnpLq7Wx, {from: accounts[2]});
		const nullodI7f0 = await contractLimMLMY.supportsInterface.call(interfaceIdk1eBU17, {from: accounts[3]});
		const nullTVL2vda = await contractLimMLMY.supportsInterface.call(interfaceIdi0mkdt7, {from: accounts[4]});
	});
})
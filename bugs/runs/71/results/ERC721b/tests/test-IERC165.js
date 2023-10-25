const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contracti35pKpU = await IERC165.new({from: accounts[4]});
		const interfaceIdaQS38hL = "0x0d1a0a10"
		const interfaceIdwvvHoUx = "0x140b140f"
		const interfaceIdX4IcwL8 = "0x130e0d11"
		const interfaceIdOg9Jxlf = "0x1a131404"
		const nulltygnk4p = await contracti35pKpU.supportsInterface.call(interfaceIdaQS38hL, {from: accounts[1]});
		const nullg0UaUX = await contracti35pKpU.supportsInterface.call(interfaceIdwvvHoUx, {from: accounts[3]});
		const nullemqoGuq = await contracti35pKpU.supportsInterface.call(interfaceIdX4IcwL8, {from: accounts[1]});
		const nullRZcatQ = await contracti35pKpU.supportsInterface.call(interfaceIdOg9Jxlf, {from: accounts[1]});
	});
})
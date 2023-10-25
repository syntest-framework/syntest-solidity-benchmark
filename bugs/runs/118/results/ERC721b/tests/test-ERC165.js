const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractHFe6Ak5 = await ERC165.new({from: accounts[3]});
		const interfaceIdusOYik5 = "0x141b1620"
		const interfaceIdnLxFo9 = "0x021c0101"
		const interfaceIdXDPwLWl = "0x05180213"
		const interfaceIdtImEuLv = "0x180b181d"
		const nullY4EqVMx = await contractHFe6Ak5.supportsInterface.call(interfaceIdusOYik5, {from: accounts[1]});
		const null2y81Ty = await contractHFe6Ak5.supportsInterface.call(interfaceIdnLxFo9, {from: accounts[1]});
		const nullQU6zK6p = await contractHFe6Ak5.supportsInterface.call(interfaceIdXDPwLWl, {from: accounts[1]});
		const nullcJZXUVX = await contractHFe6Ak5.supportsInterface.call(interfaceIdtImEuLv, {from: accounts[3]});
	});
})
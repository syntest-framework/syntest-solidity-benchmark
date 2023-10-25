const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractIf8uD9R = await ERC165.new({from: accounts[3]});
		const interfaceIdmn7hT19 = "0x16191116"
		const interfaceIdaDtHnI = "0x0f05010d"
		const interfaceIdpAfG6Z = "0x1115021c"
		const interfaceIdWg1G1YB = "0x060c160d"
		const interfaceIdHLw16wM = "0x06081c08"
		const nullcrp7O9y = await contractIf8uD9R.supportsInterface.call(interfaceIdmn7hT19, {from: accounts[2]});
		const nullx17kxVm = await contractIf8uD9R.supportsInterface.call(interfaceIdaDtHnI, {from: accounts[2]});
		const nullGwhqktw = await contractIf8uD9R.supportsInterface.call(interfaceIdpAfG6Z, {from: accounts[5]});
		const nullkvHaQzD = await contractIf8uD9R.supportsInterface.call(interfaceIdWg1G1YB, {from: accounts[1]});
		const nullg2zlHLv = await contractIf8uD9R.supportsInterface.call(interfaceIdHLw16wM, {from: accounts[2]});
	});
})
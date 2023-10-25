const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractma25gjg = await IERC165.new({from: accounts[2]});
		const interfaceIdTEvkcg8 = "0x18051304"
		const interfaceIdEmczZV = "0x02031e17"
		const interfaceIdblhzvNO = "0x040f1d0b"
		const interfaceIdOyMUqLI = "0x191d1515"
		const nullgzWWvkR = await contractma25gjg.supportsInterface.call(interfaceIdTEvkcg8, {from: accounts[2]});
		const nullyePk2X9 = await contractma25gjg.supportsInterface.call(interfaceIdEmczZV, {from: accounts[5]});
		const nullM1lZQjE = await contractma25gjg.supportsInterface.call(interfaceIdblhzvNO, {from: accounts[4]});
		const nullBaC3t7s = await contractma25gjg.supportsInterface.call(interfaceIdOyMUqLI, {from: accounts[4]});
	});
})
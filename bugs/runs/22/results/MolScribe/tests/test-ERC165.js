const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractmFelkpe = await ERC165.new({from: accounts[1]});
		const interfaceIdAULpXv = "0x041e1106"
		const interfaceIdbU0SY0c = "0x1008180c"
		const nullpDA8nn = await contractmFelkpe.supportsInterface.call(interfaceIdAULpXv, {from: accounts[1]});
		const nullFipDb5r = await contractmFelkpe.supportsInterface.call(interfaceIdbU0SY0c, {from: accounts[3]});
	});
})
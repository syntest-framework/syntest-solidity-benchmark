const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractaSramf = await ERC165.new({from: accounts[2]});
		const interfaceIdSjHjhMJ = "0x1003051e"
		const interfaceIdCELfXN = "0x1716130c"
		const interfaceIdcUT3kHp = "0x1a06190d"
		const nullLhYr08x = await contractaSramf.supportsInterface.call(interfaceIdSjHjhMJ, {from: accounts[4]});
		const nullHaKCdyB = await contractaSramf.supportsInterface.call(interfaceIdCELfXN, {from: accounts[2]});
		const nullLU4HTg = await contractaSramf.supportsInterface.call(interfaceIdcUT3kHp, {from: accounts[0]});
	});
})
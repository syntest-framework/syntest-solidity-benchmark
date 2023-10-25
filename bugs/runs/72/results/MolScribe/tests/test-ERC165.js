const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracttbCdfhv = await ERC165.new({from: accounts[0]});
		const interfaceIdi40geZg = "0x0b080613"
		const interfaceIdwaemID = "0x03160e11"
		const interfaceIdsNlfaZC = "0x12110708"
		const nullnAF6ZCD = await contracttbCdfhv.supportsInterface.call(interfaceIdi40geZg, {from: accounts[3]});
		const nullrp8DfG2 = await contracttbCdfhv.supportsInterface.call(interfaceIdwaemID, {from: accounts[0]});
		const nulltBfqEXb = await contracttbCdfhv.supportsInterface.call(interfaceIdsNlfaZC, {from: accounts[3]});
	});
})
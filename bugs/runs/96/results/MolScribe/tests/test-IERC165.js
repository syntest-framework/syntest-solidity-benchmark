const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractdENhuwO = await IERC165.new({from: accounts[0]});
		const interfaceIduWHHrF = "0x16101d03"
		const interfaceId5xKX8x = "0x191d0008"
		const interfaceIdZ2KoJAI = "0x17170800"
		const nullRoWV5Ed = await contractdENhuwO.supportsInterface.call(interfaceIduWHHrF, {from: accounts[1]});
		const nullFpIY3s7 = await contractdENhuwO.supportsInterface.call(interfaceId5xKX8x, {from: accounts[5]});
		const nullqi3CW0U = await contractdENhuwO.supportsInterface.call(interfaceIdZ2KoJAI, {from: accounts[1]});
	});
})
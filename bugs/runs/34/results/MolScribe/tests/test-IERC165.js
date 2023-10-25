const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractmKUfXo = await IERC165.new({from: accounts[0]});
		const interfaceIdrXDURTe = "0x081f0e0f"
		const interfaceIdb7bKlD3 = "0x0d041802"
		const interfaceIdfP3PvNT = "0x18111e08"
		const nulliILhxX = await contractmKUfXo.supportsInterface.call(interfaceIdrXDURTe, {from: accounts[4]});
		const nullt3H7Uy5 = await contractmKUfXo.supportsInterface.call(interfaceIdb7bKlD3, {from: accounts[2]});
		const nullvpG0YBN = await contractmKUfXo.supportsInterface.call(interfaceIdfP3PvNT, {from: accounts[3]});
	});
})
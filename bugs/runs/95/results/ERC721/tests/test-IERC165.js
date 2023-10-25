const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractNTNLHpq = await IERC165.new({from: accounts[5]});
		const interfaceId804WpD = "0x0b17081d"
		const interfaceIdZPoeNxy = "0x1b140615"
		const interfaceIdxaletGP = "0x171a0208"
		const interfaceIdTdnYiCv = "0x12060106"
		const nullCYg0Jz2 = await contractNTNLHpq.supportsInterface.call(interfaceId804WpD, {from: accounts[3]});
		const nulli2QJUWm = await contractNTNLHpq.supportsInterface.call(interfaceIdZPoeNxy, {from: accounts[4]});
		const nullKzmjSBW = await contractNTNLHpq.supportsInterface.call(interfaceIdxaletGP, {from: accounts[2]});
		const nullQMqNbt = await contractNTNLHpq.supportsInterface.call(interfaceIdTdnYiCv, {from: accounts[3]});
	});
})
const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractJvTaKkS = await ERC165.new({from: accounts[0]});
		const interfaceIdiKxio34 = "0x1d170c02"
		const interfaceIdWntHzQR = "0x160e100e"
		const interfaceIdt93vluO = "0x12160f16"
		const interfaceIdowpOkQs = "0x1415181d"
		const interfaceIdPkea1nW = "0x0d0b1e17"
		const nullvxvnG8g = await contractJvTaKkS.supportsInterface.call(interfaceIdiKxio34, {from: accounts[1]});
		const nullkOsHkQ = await contractJvTaKkS.supportsInterface.call(interfaceIdWntHzQR, {from: accounts[4]});
		const nulli89DfFp = await contractJvTaKkS.supportsInterface.call(interfaceIdt93vluO, {from: accounts[3]});
		const nullZvxIMVv = await contractJvTaKkS.supportsInterface.call(interfaceIdowpOkQs, {from: accounts[0]});
		const nullTqYVPmw = await contractJvTaKkS.supportsInterface.call(interfaceIdPkea1nW, {from: accounts[2]});
	});
})
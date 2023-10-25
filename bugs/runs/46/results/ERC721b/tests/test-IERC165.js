const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractXFfIXS1 = await IERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdGzYBdK2 = "0x1d140319"
		const interfaceIdAbmpWbC = "0x180b1a1d"
		const interfaceIdYXBCsPn = "0x100d0a02"
		const interfaceIdeD8pU4i = "0x03050308"
		const nullyh7JXy7 = await contractXFfIXS1.supportsInterface.call(interfaceIdGzYBdK2, {from: accounts[2]});
		const nullzaiiGJO = await contractXFfIXS1.supportsInterface.call(interfaceIdAbmpWbC, {from: accounts[4]});
		const null1vODpB = await contractXFfIXS1.supportsInterface.call(interfaceIdYXBCsPn, {from: accounts[0]});
		const nulllO8nliO = await contractXFfIXS1.supportsInterface.call(interfaceIdeD8pU4i, {from: accounts[2]});
	});
})
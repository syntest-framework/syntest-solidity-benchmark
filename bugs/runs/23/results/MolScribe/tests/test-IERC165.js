const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractOlWPWn = await IERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdnEqvgKN = "0x1b1c0813"
		const interfaceIdZWKGgnx = "0x0201090a"
		const nullENZ89w = await contractOlWPWn.supportsInterface.call(interfaceIdnEqvgKN, {from: "0x0000000000000000000000000000000000000001"});
		const null6QgTRK = await contractOlWPWn.supportsInterface.call(interfaceIdZWKGgnx, {from: "0x0000000000000000000000000000000000000001"});
	});
})
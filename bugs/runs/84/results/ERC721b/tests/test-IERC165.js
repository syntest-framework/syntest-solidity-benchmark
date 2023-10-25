const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractnEXFbeH = await IERC165.new({from: accounts[4]});
		const interfaceIdR3YEnMl = "0x0e021109"
		const interfaceIdeJOXNnD = "0x191b1e1c"
		const interfaceIdvkxBrx7 = "0x1f1c1b0b"
		const nullxmkNT5A = await contractnEXFbeH.supportsInterface.call(interfaceIdR3YEnMl, {from: accounts[5]});
		const nullVYTm2e1 = await contractnEXFbeH.supportsInterface.call(interfaceIdeJOXNnD, {from: accounts[1]});
		const nulllGK6o4K = await contractnEXFbeH.supportsInterface.call(interfaceIdvkxBrx7, {from: accounts[2]});
	});
})
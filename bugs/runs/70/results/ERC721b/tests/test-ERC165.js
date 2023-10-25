const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractAU1Rr3X = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdOfi2O8N = "0x08040e10"
		const interfaceIdkeDUg9C = "0x0008121d"
		const interfaceIdkkt2exz = "0x0b051e19"
		const interfaceIdzzwMDh = "0x17130515"
		const interfaceIdHzr2rOb = "0x07131300"
		const interfaceIdchwUJDa = "0x0e20070a"
		const nullcuJFmyT = await contractAU1Rr3X.supportsInterface.call(interfaceIdOfi2O8N, {from: accounts[4]});
		const nullUPdenki = await contractAU1Rr3X.supportsInterface.call(interfaceIdkeDUg9C, {from: accounts[0]});
		const nullj04bCC6 = await contractAU1Rr3X.supportsInterface.call(interfaceIdkkt2exz, {from: accounts[1]});
		const nullOUiXGH9 = await contractAU1Rr3X.supportsInterface.call(interfaceIdzzwMDh, {from: accounts[4]});
		const nullBfhdBht = await contractAU1Rr3X.supportsInterface.call(interfaceIdHzr2rOb, {from: accounts[5]});
		const nullXS1OKll = await contractAU1Rr3X.supportsInterface.call(interfaceIdchwUJDa, {from: accounts[2]});
	});
})
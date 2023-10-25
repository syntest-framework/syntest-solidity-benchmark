const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractnJm6NaS = await IERC165.new({from: accounts[0]});
		const interfaceIdVNLlfiy = "0x131c161c"
		const interfaceIdSegQgR = "0x16120e0a"
		const interfaceIddQMhOlN = "0x10190e06"
		const interfaceIdTzPSXa8 = "0x1c1f0d20"
		const interfaceIdFMrkBCg = "0x04150916"
		const nullgVN9D46 = await contractnJm6NaS.supportsInterface.call(interfaceIdVNLlfiy, {from: accounts[2]});
		const nullXdtx4Hp = await contractnJm6NaS.supportsInterface.call(interfaceIdSegQgR, {from: accounts[3]});
		const nullejE9Lkz = await contractnJm6NaS.supportsInterface.call(interfaceIddQMhOlN, {from: accounts[4]});
		const nullfI3BwT = await contractnJm6NaS.supportsInterface.call(interfaceIdTzPSXa8, {from: accounts[0]});
		const nullNbLOpHK = await contractnJm6NaS.supportsInterface.call(interfaceIdFMrkBCg, {from: accounts[4]});
	});
})
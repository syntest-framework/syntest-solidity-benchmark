const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractFWyMsck = await IERC165.new({from: accounts[4]});
		const interfaceIdvrwBoaw = "0x01000a03"
		const interfaceIdrT2kpaj = "0x01180b1c"
		const interfaceIdooVpUth = "0x1617070a"
		const interfaceIdWWhRlPR = "0x050e090e"
		const interfaceIdmIDLx0G = "0x1f0d1f15"
		const nullELF9szK = await contractFWyMsck.supportsInterface.call(interfaceIdvrwBoaw, {from: accounts[3]});
		const nullm8l4dxA = await contractFWyMsck.supportsInterface.call(interfaceIdrT2kpaj, {from: accounts[5]});
		const nullmEpaDXb = await contractFWyMsck.supportsInterface.call(interfaceIdooVpUth, {from: accounts[1]});
		const nullBXy7Xvj = await contractFWyMsck.supportsInterface.call(interfaceIdWWhRlPR, {from: accounts[4]});
		const nullgyCNb9Y = await contractFWyMsck.supportsInterface.call(interfaceIdmIDLx0G, {from: accounts[5]});
	});
})
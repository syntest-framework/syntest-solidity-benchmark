const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractfXJ3Sip = await IERC165.new({from: accounts[1]});
		const interfaceIdAzJznvc = "0x010e180d"
		const interfaceIdFX3Dkqg = "0x0f1f0220"
		const interfaceIdWLWDLBo = "0x050a041c"
		const nullr81N4h8 = await contractfXJ3Sip.supportsInterface.call(interfaceIdAzJznvc, {from: accounts[0]});
		const nullMuUgkJb = await contractfXJ3Sip.supportsInterface.call(interfaceIdFX3Dkqg, {from: accounts[5]});
		const nullGVfvEl = await contractfXJ3Sip.supportsInterface.call(interfaceIdWLWDLBo, {from: accounts[1]});
	});
})
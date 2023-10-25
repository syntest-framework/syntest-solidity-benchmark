const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractledtZkH = await IERC165.new({from: accounts[4]});
		const interfaceIdrCMuP19 = "0x0100020e"
		const interfaceIdoPMqS5h = "0x111a1207"
		const interfaceIdpVocFZ2 = "0x090b0102"
		const interfaceIdHbQ5MfD = "0x17152001"
		const nulla0Ctvlf = await contractledtZkH.supportsInterface.call(interfaceIdrCMuP19, {from: accounts[0]});
		const nulliiKgdF = await contractledtZkH.supportsInterface.call(interfaceIdoPMqS5h, {from: accounts[1]});
		const nullaoGc221 = await contractledtZkH.supportsInterface.call(interfaceIdpVocFZ2, {from: accounts[1]});
		const nully1eIAdn = await contractledtZkH.supportsInterface.call(interfaceIdHbQ5MfD, {from: accounts[4]});
	});
})
const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractQAVN3aR = await IERC165.new({from: accounts[4]});
		const interfaceIdmKn4200 = "0x0b11120d"
		const interfaceIdApQoNw = "0x19140407"
		const interfaceIdFlpRjOd = "0x1204051c"
		const interfaceIdYke85S1 = "0x1a161e08"
		const interfaceIdrtYPdkp = "0x0b121514"
		const nullKLvlxxH = await contractQAVN3aR.supportsInterface.call(interfaceIdmKn4200, {from: accounts[0]});
		const nullqwMPkiP = await contractQAVN3aR.supportsInterface.call(interfaceIdApQoNw, {from: accounts[0]});
		const nullAma2Gpa = await contractQAVN3aR.supportsInterface.call(interfaceIdFlpRjOd, {from: accounts[3]});
		const nullhrH87uW = await contractQAVN3aR.supportsInterface.call(interfaceIdYke85S1, {from: accounts[2]});
		const nullWgySOEu = await contractQAVN3aR.supportsInterface.call(interfaceIdrtYPdkp, {from: accounts[4]});
	});
})
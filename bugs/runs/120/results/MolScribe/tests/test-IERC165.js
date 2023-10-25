const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractYqwNr9J = await IERC165.new({from: accounts[4]});
		const interfaceIdyeylzxW = "0x0611010a"
		const interfaceIdKcao7Um = "0x1b1b1001"
		const interfaceIdr7310P = "0x011a0005"
		const nullQ17EmXU = await contractYqwNr9J.supportsInterface.call(interfaceIdyeylzxW, {from: accounts[0]});
		const nullVwH3De5 = await contractYqwNr9J.supportsInterface.call(interfaceIdKcao7Um, {from: accounts[4]});
		const nullGscjPM2 = await contractYqwNr9J.supportsInterface.call(interfaceIdr7310P, {from: accounts[4]});
	});
})
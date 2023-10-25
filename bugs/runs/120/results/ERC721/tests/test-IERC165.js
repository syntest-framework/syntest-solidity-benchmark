const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractOWLfSBR = await IERC165.new({from: accounts[3]});
		const interfaceIdkcYoUL = "0x09050d1f"
		const interfaceIdkacD9E6 = "0x0a101307"
		const interfaceIdcuXJJR = "0x16151a11"
		const nullnOFXJZx = await contractOWLfSBR.supportsInterface.call(interfaceIdkcYoUL, {from: accounts[3]});
		const nulldxJgtyz = await contractOWLfSBR.supportsInterface.call(interfaceIdkacD9E6, {from: accounts[4]});
		const nullA5Z5J7U = await contractOWLfSBR.supportsInterface.call(interfaceIdcuXJJR, {from: accounts[4]});
	});
})
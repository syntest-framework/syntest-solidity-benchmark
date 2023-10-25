const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractUBk3aeh = await IERC165.new({from: accounts[1]});
		const interfaceIdjN3E6K6 = "0x1b051405"
		const interfaceIdDozI9Ui = "0x1b0d0f1a"
		const interfaceIdCMQFqT7 = "0x14081c0f"
		const interfaceIdJcB6tPp = "0x10151b0c"
		const interfaceIdBqt9HP7 = "0x1f1a080b"
		const interfaceIdJKwXvrF = "0x011e0909"
		const nullT2ykx4 = await contractUBk3aeh.supportsInterface.call(interfaceIdjN3E6K6, {from: accounts[2]});
		const nullZy17LsD = await contractUBk3aeh.supportsInterface.call(interfaceIdDozI9Ui, {from: accounts[0]});
		const nullq8K3aqU = await contractUBk3aeh.supportsInterface.call(interfaceIdCMQFqT7, {from: accounts[0]});
		const nullFE2Vba3 = await contractUBk3aeh.supportsInterface.call(interfaceIdJcB6tPp, {from: accounts[2]});
		const nullhQTzDM = await contractUBk3aeh.supportsInterface.call(interfaceIdBqt9HP7, {from: accounts[1]});
		const nullcKCV9Cn = await contractUBk3aeh.supportsInterface.call(interfaceIdJKwXvrF, {from: accounts[0]});
	});
})
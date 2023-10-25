const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractt7zQjY0 = await IERC165.new({from: accounts[4]});
		const interfaceIdb7sYBYE = "0x041f070f"
		const interfaceIdTA4MhD5 = "0x1f1e1305"
		const interfaceIdLzr3sbU = "0x05181e02"
		const nulllsX8fbM = await contractt7zQjY0.supportsInterface.call(interfaceIdb7sYBYE, {from: accounts[4]});
		const nullPwFEH23 = await contractt7zQjY0.supportsInterface.call(interfaceIdTA4MhD5, {from: accounts[3]});
		const nulldPbtiOM = await contractt7zQjY0.supportsInterface.call(interfaceIdLzr3sbU, {from: accounts[4]});
	});
})
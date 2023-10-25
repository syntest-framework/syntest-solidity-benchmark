const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractp4TBi6u = await IERC165.new({from: accounts[0]});
		const interfaceIdjotO9Yt = "0x1d120717"
		const interfaceIdkVDJLae = "0x10021604"
		const nullGEAQU8t = await contractp4TBi6u.supportsInterface.call(interfaceIdjotO9Yt, {from: accounts[3]});
		const nullXd5O5B = await contractp4TBi6u.supportsInterface.call(interfaceIdkVDJLae, {from: accounts[1]});
	});
})
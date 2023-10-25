const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contracteFHJnQG = await IERC165.new({from: accounts[5]});
		const interfaceIdK8VFHGI = "0x0619170a"
		const interfaceIdYU8947Y = "0x11190213"
		const interfaceIdqAcoOs = "0x1d150f04"
		const interfaceIdqiiKDy = "0x01040d1f"
		const interfaceIdUCfapB = "0x0216071c"
		const nullI4FYbo = await contracteFHJnQG.supportsInterface.call(interfaceIdK8VFHGI, {from: accounts[2]});
		const nulliGUjLgp = await contracteFHJnQG.supportsInterface.call(interfaceIdYU8947Y, {from: accounts[4]});
		const nullVUsG6uZ = await contracteFHJnQG.supportsInterface.call(interfaceIdqAcoOs, {from: accounts[4]});
		const nullbiIzZI7 = await contracteFHJnQG.supportsInterface.call(interfaceIdqiiKDy, {from: accounts[0]});
		const nullNVMrMp = await contracteFHJnQG.supportsInterface.call(interfaceIdUCfapB, {from: accounts[3]});
	});
})
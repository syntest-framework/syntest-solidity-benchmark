const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contract1VRpIM = await IERC165.new({from: accounts[2]});
		const interfaceIdnZfceHz = "0x1b041714"
		const interfaceIdlnxPQj = "0x1a070b0f"
		const interfaceIdFXofeQ4 = "0x1f1a121c"
		const interfaceIdySkNNf = "0x1b071f10"
		const interfaceIdIGxCX6R = "0x02071d15"
		const nullnpQrSdS = await contract1VRpIM.supportsInterface.call(interfaceIdnZfceHz, {from: accounts[3]});
		const nullxsfEWf = await contract1VRpIM.supportsInterface.call(interfaceIdlnxPQj, {from: accounts[2]});
		const nullWKtPHE3 = await contract1VRpIM.supportsInterface.call(interfaceIdFXofeQ4, {from: accounts[3]});
		const nullB1uqwX = await contract1VRpIM.supportsInterface.call(interfaceIdySkNNf, {from: accounts[2]});
		const nullZ1rclY4 = await contract1VRpIM.supportsInterface.call(interfaceIdIGxCX6R, {from: accounts[2]});
	});
})
const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractrAZyPo = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdzhZpEwd = "0x1016191a"
		const interfaceIdx3p99D = "0x07100816"
		const interfaceIdP5ufsG = "0x18191f04"
		const interfaceIdZZ7Mhw7 = "0x030f0a11"
		const nullVIlhxwR = await contractrAZyPo.supportsInterface.call(interfaceIdzhZpEwd, {from: "0x0000000000000000000000000000000000000001"});
		const nullZ7Ovovf = await contractrAZyPo.supportsInterface.call(interfaceIdx3p99D, {from: accounts[3]});
		const nulljyG96Kf = await contractrAZyPo.supportsInterface.call(interfaceIdP5ufsG, {from: "0x0000000000000000000000000000000000000001"});
		const nullH2mQob8 = await contractrAZyPo.supportsInterface.call(interfaceIdZZ7Mhw7, {from: accounts[2]});
	});
})
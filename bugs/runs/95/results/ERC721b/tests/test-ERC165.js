const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractUCQoWaH = await ERC165.new({from: accounts[2]});
		const interfaceIdNB11T1i = "0x1f191a1f"
		const interfaceIdxv4tjtH = "0x0b16160c"
		const interfaceIdmoKnd4t = "0x000d060f"
		const nullt5hxziQ = await contractUCQoWaH.supportsInterface.call(interfaceIdNB11T1i, {from: accounts[2]});
		const nullluKHgJ = await contractUCQoWaH.supportsInterface.call(interfaceIdxv4tjtH, {from: "0x0000000000000000000000000000000000000001"});
		const nulldZI8cJj = await contractUCQoWaH.supportsInterface.call(interfaceIdmoKnd4t, {from: accounts[5]});
	});
})
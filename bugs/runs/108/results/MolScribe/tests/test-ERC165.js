const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractl4qJyJB = await ERC165.new({from: accounts[3]});
		const interfaceIdMFYT2AZ = "0x0b070107"
		const interfaceIdU43vby = "0x090d101a"
		const interfaceIdVt6RkS = "0x1903191b"
		const interfaceIdN2hc3Ll = "0x031c0706"
		const interfaceIdLy14Jiu = "0x12090712"
		const nullosRPqz = await contractl4qJyJB.supportsInterface.call(interfaceIdMFYT2AZ, {from: accounts[4]});
		const nullfWVMEMX = await contractl4qJyJB.supportsInterface.call(interfaceIdU43vby, {from: accounts[0]});
		const nullElTSFoQ = await contractl4qJyJB.supportsInterface.call(interfaceIdVt6RkS, {from: accounts[0]});
		const nullHKHXjBy = await contractl4qJyJB.supportsInterface.call(interfaceIdN2hc3Ll, {from: accounts[2]});
		const nullutd7s9o = await contractl4qJyJB.supportsInterface.call(interfaceIdLy14Jiu, {from: accounts[5]});
	});
})
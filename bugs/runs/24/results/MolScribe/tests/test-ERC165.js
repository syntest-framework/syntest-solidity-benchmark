const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracta31IMwN = await ERC165.new({from: accounts[2]});
		const interfaceIdVR5aw7d = "0x0b1b0519"
		const interfaceIdGvItGQM = "0x1f091c0d"
		const nullSa1YwCQ = await contracta31IMwN.supportsInterface.call(interfaceIdVR5aw7d, {from: "0x0000000000000000000000000000000000000001"});
		const nullZTFdCAd = await contracta31IMwN.supportsInterface.call(interfaceIdGvItGQM, {from: accounts[1]});
	});
})
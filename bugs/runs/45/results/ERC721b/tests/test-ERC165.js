const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractjL3am8N = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdULvbf66 = "0x10151005"
		const interfaceIdkb9K8hh = "0x19170c0b"
		const interfaceIdC0HVfBF = "0x09151118"
		const interfaceIdaKgm5Ns = "0x0619101a"
		const interfaceIdp7rGI1q = "0x091e0d11"
		const interfaceIdzMUBCy3 = "0x02141a18"
		const nulliDGqUf = await contractjL3am8N.supportsInterface.call(interfaceIdULvbf66, {from: accounts[2]});
		const nullZtootua = await contractjL3am8N.supportsInterface.call(interfaceIdkb9K8hh, {from: "0x0000000000000000000000000000000000000001"});
		const nullfjQW9n = await contractjL3am8N.supportsInterface.call(interfaceIdC0HVfBF, {from: accounts[4]});
		const nullGZfNETz = await contractjL3am8N.supportsInterface.call(interfaceIdaKgm5Ns, {from: accounts[3]});
		const nullhIgMnbB = await contractjL3am8N.supportsInterface.call(interfaceIdp7rGI1q, {from: accounts[4]});
		const nullIB6witr = await contractjL3am8N.supportsInterface.call(interfaceIdzMUBCy3, {from: accounts[4]});
	});
})
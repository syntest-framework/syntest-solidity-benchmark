const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractgxO9JG = await ERC165.new({from: accounts[2]});
		const interfaceIdO4KYFLA = "0x11090717"
		const interfaceIdUUi4wOM = "0x15040201"
		const interfaceIdjawiOex = "0x040a051c"
		const nullRNlyw5o = await contractgxO9JG.supportsInterface.call(interfaceIdO4KYFLA, {from: accounts[5]});
		const nullBhbIy6c = await contractgxO9JG.supportsInterface.call(interfaceIdUUi4wOM, {from: accounts[4]});
		const nullrq1wkra = await contractgxO9JG.supportsInterface.call(interfaceIdjawiOex, {from: accounts[3]});
	});
})
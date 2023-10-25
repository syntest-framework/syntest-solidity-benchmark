const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractGnUgV8 = await ERC165.new({from: accounts[1]});
		const interfaceIdbtobjwu = "0x1f0c1319"
		const interfaceIdY0nerRN = "0x0903001d"
		const interfaceIdDr9wMs8 = "0x1918101c"
		const interfaceIdrdYenee = "0x071b0504"
		const interfaceIdLDUhaj = "0x061c0c14"
		const nullkvcUMX1 = await contractGnUgV8.supportsInterface.call(interfaceIdbtobjwu, {from: accounts[3]});
		const nullZT5xapn = await contractGnUgV8.supportsInterface.call(interfaceIdY0nerRN, {from: accounts[1]});
		const nullft1dJLX = await contractGnUgV8.supportsInterface.call(interfaceIdDr9wMs8, {from: accounts[0]});
		const nullUFV40St = await contractGnUgV8.supportsInterface.call(interfaceIdrdYenee, {from: accounts[3]});
		const null6t2miA = await contractGnUgV8.supportsInterface.call(interfaceIdLDUhaj, {from: accounts[0]});
	});
})
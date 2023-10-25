const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractnbdqUVu = await IERC165.new({from: accounts[4]});
		const interfaceIdNpEutez = "0x09071620"
		const interfaceIddQgcNtH = "0x0e061710"
		const interfaceIdZ3wI3zG = "0x10021913"
		const interfaceIdX0EWh0q = "0x0b1b120e"
		const interfaceIdCv9LTO = "0x17051702"
		const nullDA4Ow7G = await contractnbdqUVu.supportsInterface.call(interfaceIdNpEutez, {from: accounts[5]});
		const nullCA7FiI = await contractnbdqUVu.supportsInterface.call(interfaceIddQgcNtH, {from: accounts[2]});
		const nullJ5cqsPf = await contractnbdqUVu.supportsInterface.call(interfaceIdZ3wI3zG, {from: accounts[5]});
		const nullV2vfngL = await contractnbdqUVu.supportsInterface.call(interfaceIdX0EWh0q, {from: accounts[1]});
		const nullcqptWSu = await contractnbdqUVu.supportsInterface.call(interfaceIdCv9LTO, {from: accounts[0]});
	});
})
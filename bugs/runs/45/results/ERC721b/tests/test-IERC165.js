const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractguF2iRW = await IERC165.new({from: accounts[3]});
		const interfaceIdsrfafSK = "0x06010b01"
		const interfaceIdXUFIae4 = "0x160c2007"
		const interfaceIdLyQ8S70 = "0x12121904"
		const interfaceIdk8WE2wY = "0x0e0c061b"
		const interfaceIdzzgn30G = "0x04171410"
		const nullO1QrMir = await contractguF2iRW.supportsInterface.call(interfaceIdsrfafSK, {from: accounts[0]});
		const nullGjQJkb = await contractguF2iRW.supportsInterface.call(interfaceIdXUFIae4, {from: accounts[4]});
		const nulljLmzKC = await contractguF2iRW.supportsInterface.call(interfaceIdLyQ8S70, {from: accounts[3]});
		const nullpjKniYM = await contractguF2iRW.supportsInterface.call(interfaceIdk8WE2wY, {from: accounts[1]});
		const nullUZrc7kU = await contractguF2iRW.supportsInterface.call(interfaceIdzzgn30G, {from: accounts[2]});
	});
})
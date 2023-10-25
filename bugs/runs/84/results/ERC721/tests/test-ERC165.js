const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractFaQ9Id = await ERC165.new({from: accounts[5]});
		const interfaceIdzCmir7z = "0x1f060e17"
		const interfaceIdOHw281w = "0x100e0e1f"
		const interfaceIdQKfGNpt = "0x1408180e"
		const interfaceIdF66UFBs = "0x0d13140e"
		const interfaceIdxeDEbnu = "0x0c161f05"
		const interfaceIdP9Q9rH = "0x1d1e0703"
		const nullbiP04wu = await contractFaQ9Id.supportsInterface.call(interfaceIdzCmir7z, {from: accounts[1]});
		const nullFALldqU = await contractFaQ9Id.supportsInterface.call(interfaceIdOHw281w, {from: accounts[2]});
		const null5nVMrx = await contractFaQ9Id.supportsInterface.call(interfaceIdQKfGNpt, {from: accounts[1]});
		const nullF7Viy61 = await contractFaQ9Id.supportsInterface.call(interfaceIdF66UFBs, {from: accounts[2]});
		const nullHJ1XLX6 = await contractFaQ9Id.supportsInterface.call(interfaceIdxeDEbnu, {from: accounts[4]});
		const nullD3OzWwS = await contractFaQ9Id.supportsInterface.call(interfaceIdP9Q9rH, {from: "0x0000000000000000000000000000000000000001"});
	});
})
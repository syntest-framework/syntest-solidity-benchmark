const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractzZdbtGd = await ERC165.new({from: accounts[2]});
		const interfaceIdGHNR6oU = "0x10160e16"
		const interfaceIdOUjTmoc = "0x021e001b"
		const interfaceIdHBRBdpr = "0x0b0b1f1d"
		const interfaceIdbxc25KQ = "0x11110612"
		const interfaceIdi5V1rz = "0x0113091d"
		const nullGYuoCJD = await contractzZdbtGd.supportsInterface.call(interfaceIdGHNR6oU, {from: accounts[0]});
		const nullqLGFXzN = await contractzZdbtGd.supportsInterface.call(interfaceIdOUjTmoc, {from: accounts[3]});
		const nullkxj9rfT = await contractzZdbtGd.supportsInterface.call(interfaceIdHBRBdpr, {from: accounts[2]});
		const nullUBW6KVg = await contractzZdbtGd.supportsInterface.call(interfaceIdbxc25KQ, {from: accounts[5]});
		const nullnGa2km = await contractzZdbtGd.supportsInterface.call(interfaceIdi5V1rz, {from: accounts[4]});
	});
})
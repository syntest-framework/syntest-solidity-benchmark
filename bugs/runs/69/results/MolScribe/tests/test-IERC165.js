const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractanqQIk5 = await IERC165.new({from: accounts[0]});
		const interfaceIdsYjcri = "0x040d1c05"
		const interfaceIdRlveT6p = "0x1f18170a"
		const interfaceIdUi8wype = "0x09031b10"
		const interfaceIdOAuxLRd = "0x180d0503"
		const interfaceIddBev61j = "0x021b1f1f"
		const interfaceId8maakD = "0x1b08170c"
		const nullJVLaD5 = await contractanqQIk5.supportsInterface.call(interfaceIdsYjcri, {from: accounts[1]});
		const nullfT8UCDN = await contractanqQIk5.supportsInterface.call(interfaceIdRlveT6p, {from: "0x0000000000000000000000000000000000000001"});
		const nullw3IZ1b0 = await contractanqQIk5.supportsInterface.call(interfaceIdUi8wype, {from: accounts[5]});
		const nullJEdw9wo = await contractanqQIk5.supportsInterface.call(interfaceIdOAuxLRd, {from: accounts[3]});
		const nulljQZMRkM = await contractanqQIk5.supportsInterface.call(interfaceIddBev61j, {from: accounts[1]});
		const nullDFx71Tq = await contractanqQIk5.supportsInterface.call(interfaceId8maakD, {from: accounts[1]});
	});
})
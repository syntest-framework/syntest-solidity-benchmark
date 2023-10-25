const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractV5ulFE6 = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdOs5B41l = "0x0a081103"
		const interfaceIdW8PktZG = "0x0b190218"
		const interfaceIdaicI9lk = "0x0f1c130c"
		const interfaceIdfce53U3 = "0x1f13150c"
		const interfaceIds6tmLT = "0x1e100a0e"
		const nullwTSVJKo = await contractV5ulFE6.supportsInterface.call(interfaceIdOs5B41l, {from: accounts[4]});
		const nullUcKnLRc = await contractV5ulFE6.supportsInterface.call(interfaceIdW8PktZG, {from: accounts[3]});
		const nullRB3sJHo = await contractV5ulFE6.supportsInterface.call(interfaceIdaicI9lk, {from: accounts[5]});
		const nullEm2QPdq = await contractV5ulFE6.supportsInterface.call(interfaceIdfce53U3, {from: "0x0000000000000000000000000000000000000001"});
		const nullIRS4Bau = await contractV5ulFE6.supportsInterface.call(interfaceIds6tmLT, {from: "0x0000000000000000000000000000000000000001"});
	});
})
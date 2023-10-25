const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractNDcoYsn = await ERC165.new({from: accounts[2]});
		const interfaceIdz8GfHW5 = "0x14130817"
		const interfaceIdaxCUhBC = "0x1f021904"
		const interfaceIdFcxrf4J = "0x15140106"
		const interfaceIddm4L0MI = "0x171d0500"
		const interfaceIdZM0DAN9 = "0x0c131b0b"
		const interfaceIdDP0cNe = "0x1f1f1818"
		const nullyhpAVao = await contractNDcoYsn.supportsInterface.call(interfaceIdz8GfHW5, {from: accounts[4]});
		const nulllnbwubP = await contractNDcoYsn.supportsInterface.call(interfaceIdaxCUhBC, {from: accounts[5]});
		const nullOzd4D4t = await contractNDcoYsn.supportsInterface.call(interfaceIdFcxrf4J, {from: accounts[1]});
		const nullcCXJ2tf = await contractNDcoYsn.supportsInterface.call(interfaceIddm4L0MI, {from: "0x0000000000000000000000000000000000000001"});
		const nullU38nhVn = await contractNDcoYsn.supportsInterface.call(interfaceIdZM0DAN9, {from: accounts[1]});
		const nullgcw375 = await contractNDcoYsn.supportsInterface.call(interfaceIdDP0cNe, {from: accounts[3]});
	});
})
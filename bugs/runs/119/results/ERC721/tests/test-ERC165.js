const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractEQweWW8 = await ERC165.new({from: accounts[2]});
		const interfaceIdSUtqlXd = "0x1f120f1a"
		const interfaceIdaN5si2l = "0x13151906"
		const interfaceIdcEbco79 = "0x18060814"
		const interfaceIdR5Q8NV = "0x04100013"
		const nulltri9oBo = await contractEQweWW8.supportsInterface.call(interfaceIdSUtqlXd, {from: "0x0000000000000000000000000000000000000001"});
		const nullTjiR0fv = await contractEQweWW8.supportsInterface.call(interfaceIdaN5si2l, {from: accounts[5]});
		const nullC67tYz = await contractEQweWW8.supportsInterface.call(interfaceIdcEbco79, {from: accounts[1]});
		const nullieVs8o = await contractEQweWW8.supportsInterface.call(interfaceIdR5Q8NV, {from: "0x0000000000000000000000000000000000000001"});
	});
})
const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractyVuhZP = await ERC165.new({from: accounts[0]});
		const interfaceIdf5okB4i = "0x0e140f04"
		const interfaceIdXRFlw6I = "0x0f05000c"
		const interfaceIdYvfGbEd = "0x1516111d"
		const interfaceIdGv59gFb = "0x0e06100b"
		const interfaceIdQzOXryQ = "0x07091701"
		const nullP6WomDG = await contractyVuhZP.supportsInterface.call(interfaceIdf5okB4i, {from: accounts[1]});
		const nullzLhiXYB = await contractyVuhZP.supportsInterface.call(interfaceIdXRFlw6I, {from: accounts[0]});
		const nullnu995wf = await contractyVuhZP.supportsInterface.call(interfaceIdYvfGbEd, {from: accounts[4]});
		const nullvaF8ATP = await contractyVuhZP.supportsInterface.call(interfaceIdGv59gFb, {from: accounts[4]});
		const nullrj2lkYE = await contractyVuhZP.supportsInterface.call(interfaceIdQzOXryQ, {from: accounts[3]});
	});
})
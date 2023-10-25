const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractWD4e3u = await ERC165.new({from: accounts[0]});
		const interfaceIdkAC60D = "0x1108130a"
		const interfaceIdGYE2Sqy = "0x0b0c0c16"
		const interfaceIdSFwbaGc = "0x20130303"
		const nullqhcaWl = await contractWD4e3u.supportsInterface.call(interfaceIdkAC60D, {from: accounts[0]});
		const nulleFaOjr8 = await contractWD4e3u.supportsInterface.call(interfaceIdGYE2Sqy, {from: accounts[4]});
		const nullXfPTB9m = await contractWD4e3u.supportsInterface.call(interfaceIdSFwbaGc, {from: accounts[1]});
	});
})
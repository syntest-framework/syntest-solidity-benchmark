const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractbJIJUSF = await IERC165.new({from: accounts[4]});
		const interfaceIdSnselyN = "0x14050810"
		const interfaceIdxOWC2me = "0x14101a05"
		const interfaceIdyCwEPro = "0x08080817"
		const interfaceIdpecWSHF = "0x1316170c"
		const nullbmmfLN9 = await contractbJIJUSF.supportsInterface.call(interfaceIdSnselyN, {from: accounts[2]});
		const nullrWFxFRa = await contractbJIJUSF.supportsInterface.call(interfaceIdxOWC2me, {from: accounts[0]});
		const nullmOeTn5R = await contractbJIJUSF.supportsInterface.call(interfaceIdyCwEPro, {from: accounts[3]});
		const null6YjdeK = await contractbJIJUSF.supportsInterface.call(interfaceIdpecWSHF, {from: accounts[5]});
	});
})
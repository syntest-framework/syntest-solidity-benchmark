const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractEmCK4vM = await ERC165.new({from: accounts[0]});
		const interfaceIdKJWWpEo = "0x060d2017"
		const interfaceIdl4qUJM0 = "0x0e050603"
		const interfaceIdCfLKesg = "0x20130709"
		const interfaceIdGRTHtD = "0x1c161a00"
		const interfaceIdi0qPAQI = "0x10150d00"
		const nullhaBdOUb = await contractEmCK4vM.supportsInterface.call(interfaceIdKJWWpEo, {from: accounts[3]});
		const nullycYlH1O = await contractEmCK4vM.supportsInterface.call(interfaceIdl4qUJM0, {from: accounts[3]});
		const nullJ9iqumy = await contractEmCK4vM.supportsInterface.call(interfaceIdCfLKesg, {from: accounts[4]});
		const nullnMH6eP1 = await contractEmCK4vM.supportsInterface.call(interfaceIdGRTHtD, {from: accounts[0]});
		const nullZ5Ufnc2 = await contractEmCK4vM.supportsInterface.call(interfaceIdi0qPAQI, {from: accounts[1]});
	});
})
const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractcM3n50W = await IERC165.new({from: accounts[3]});
		const interfaceIdgOKP1P7 = "0x18141c09"
		const interfaceIdpWWC27D = "0x0d0d1211"
		const nullwLS6lfu = await contractcM3n50W.supportsInterface.call(interfaceIdgOKP1P7, {from: accounts[2]});
		const nulljqHXoJQ = await contractcM3n50W.supportsInterface.call(interfaceIdpWWC27D, {from: accounts[0]});
	});
})
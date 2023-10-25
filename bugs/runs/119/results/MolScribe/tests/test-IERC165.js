const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractR9OFnOK = await IERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdldKMAfl = "0x1d0d1401"
		const interfaceIdMqP8N6u = "0x1c0d0116"
		const interfaceIdKCtimjQ = "0x070f0600"
		const interfaceIdT3AJ9NG = "0x030b1e1d"
		const interfaceIdH4Zn1m2 = "0x0d1f0802"
		const nullqxdOtRL = await contractR9OFnOK.supportsInterface.call(interfaceIdldKMAfl, {from: accounts[2]});
		const nullpSnPQMi = await contractR9OFnOK.supportsInterface.call(interfaceIdMqP8N6u, {from: accounts[2]});
		const nullO1gPC2i = await contractR9OFnOK.supportsInterface.call(interfaceIdKCtimjQ, {from: accounts[3]});
		const nullFQ8OeW = await contractR9OFnOK.supportsInterface.call(interfaceIdT3AJ9NG, {from: accounts[3]});
		const nullDF6pRPT = await contractR9OFnOK.supportsInterface.call(interfaceIdH4Zn1m2, {from: accounts[0]});
	});
})
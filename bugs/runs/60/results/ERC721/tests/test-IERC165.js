const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractjTRZH42 = await IERC165.new({from: accounts[4]});
		const interfaceIdcLSG2oq = "0x16191010"
		const interfaceIdLKTTXJx = "0x1d1f061d"
		const interfaceIdwqUGI1l = "0x1f031f0e"
		const interfaceIdn1Yobo = "0x0708161d"
		const nullRVczYrT = await contractjTRZH42.supportsInterface.call(interfaceIdcLSG2oq, {from: accounts[1]});
		const nullUQpX7oy = await contractjTRZH42.supportsInterface.call(interfaceIdLKTTXJx, {from: accounts[1]});
		const nullkS3NSmK = await contractjTRZH42.supportsInterface.call(interfaceIdwqUGI1l, {from: accounts[5]});
		const nulllc8gkqQ = await contractjTRZH42.supportsInterface.call(interfaceIdn1Yobo, {from: accounts[2]});
	});
})
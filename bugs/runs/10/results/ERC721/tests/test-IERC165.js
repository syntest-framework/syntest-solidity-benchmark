const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractu4gzsls = await IERC165.new({from: accounts[2]});
		const interfaceIduKJewpJ = "0x140b0906"
		const interfaceIdRHzr6FO = "0x02040b10"
		const interfaceIdf4oGGC = "0x1b131b08"
		const interfaceIdrCqnN7m = "0x0610140e"
		const interfaceIdDAqfg8 = "0x08150e0c"
		const nulla85lp3l = await contractu4gzsls.supportsInterface.call(interfaceIduKJewpJ, {from: accounts[4]});
		const nullEtYD426 = await contractu4gzsls.supportsInterface.call(interfaceIdRHzr6FO, {from: accounts[2]});
		const nulljsip2R7 = await contractu4gzsls.supportsInterface.call(interfaceIdf4oGGC, {from: accounts[1]});
		const nullPLEtZGx = await contractu4gzsls.supportsInterface.call(interfaceIdrCqnN7m, {from: accounts[5]});
		const nullDhaoAnd = await contractu4gzsls.supportsInterface.call(interfaceIdDAqfg8, {from: accounts[4]});
	});
})
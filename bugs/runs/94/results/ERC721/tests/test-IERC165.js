const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractvM9JTRI = await IERC165.new({from: accounts[0]});
		const interfaceIdAPmHCWg = "0x0e07200e"
		const interfaceIdhgJHlky = "0x1a080113"
		const interfaceIdAKd5qsn = "0x111f151c"
		const interfaceIdTDixlfx = "0x1f0e0e20"
		const null5OdpQ7 = await contractvM9JTRI.supportsInterface.call(interfaceIdAPmHCWg, {from: accounts[3]});
		const nullG860yDt = await contractvM9JTRI.supportsInterface.call(interfaceIdhgJHlky, {from: accounts[0]});
		const nullThpLDhg = await contractvM9JTRI.supportsInterface.call(interfaceIdAKd5qsn, {from: accounts[3]});
		const nullQX30zA = await contractvM9JTRI.supportsInterface.call(interfaceIdTDixlfx, {from: accounts[4]});
	});
})
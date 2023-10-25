const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractfw3cfvj = await IERC165.new({from: accounts[4]});
		const interfaceId6osLrc = "0x1c120d1c"
		const interfaceIdeNRn81w = "0x0301061b"
		const interfaceIdVt650tq = "0x14040b0a"
		const interfaceIdACf2ucd = "0x1e071c0c"
		const interfaceIdA1A1zGx = "0x071f1213"
		const interfaceIdJ04ZQ5X = "0x0701110e"
		const nullkYH3grj = await contractfw3cfvj.supportsInterface.call(interfaceId6osLrc, {from: accounts[0]});
		const nulllRVERLK = await contractfw3cfvj.supportsInterface.call(interfaceIdeNRn81w, {from: accounts[0]});
		const nulltqCmqAd = await contractfw3cfvj.supportsInterface.call(interfaceIdVt650tq, {from: accounts[4]});
		const nullkrPwZiI = await contractfw3cfvj.supportsInterface.call(interfaceIdACf2ucd, {from: accounts[3]});
		const nullaDbp3Mx = await contractfw3cfvj.supportsInterface.call(interfaceIdA1A1zGx, {from: accounts[1]});
		const nullhdCSOv6 = await contractfw3cfvj.supportsInterface.call(interfaceIdJ04ZQ5X, {from: accounts[1]});
	});
})
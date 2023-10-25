const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractb04U42B = await IERC165.new({from: accounts[4]});
		const interfaceIdJ2jHLT1 = "0x1f012007"
		const interfaceIdMbCLooR = "0x1a11190b"
		const interfaceIdSgrORhU = "0x010d070d"
		const interfaceIdvhcIRxC = "0x020d090f"
		const interfaceIdX4TYYWK = "0x1416141d"
		const nullIpvulFk = await contractb04U42B.supportsInterface.call(interfaceIdJ2jHLT1, {from: accounts[5]});
		const nullvJLKL8l = await contractb04U42B.supportsInterface.call(interfaceIdMbCLooR, {from: accounts[2]});
		const nullRtSKJlY = await contractb04U42B.supportsInterface.call(interfaceIdSgrORhU, {from: accounts[5]});
		const nullzTqy32P = await contractb04U42B.supportsInterface.call(interfaceIdvhcIRxC, {from: accounts[0]});
		const nullA87Gve = await contractb04U42B.supportsInterface.call(interfaceIdX4TYYWK, {from: accounts[1]});
	});
})
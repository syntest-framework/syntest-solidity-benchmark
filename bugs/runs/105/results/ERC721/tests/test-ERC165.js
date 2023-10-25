const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractUI0bdqB = await ERC165.new({from: accounts[0]});
		const interfaceIddSVEsVt = "0x07201b09"
		const interfaceIdToU7m3C = "0x1c022005"
		const interfaceIdT8VEOt = "0x03120e0e"
		const interfaceIdd7X5bFy = "0x12140713"
		const nullcdHMBAZ = await contractUI0bdqB.supportsInterface.call(interfaceIddSVEsVt, {from: accounts[1]});
		const nullQPPRzV = await contractUI0bdqB.supportsInterface.call(interfaceIdToU7m3C, {from: accounts[3]});
		const nullC0JoEle = await contractUI0bdqB.supportsInterface.call(interfaceIdT8VEOt, {from: accounts[5]});
		const nullql1F1J = await contractUI0bdqB.supportsInterface.call(interfaceIdd7X5bFy, {from: "0x0000000000000000000000000000000000000001"});
	});
})
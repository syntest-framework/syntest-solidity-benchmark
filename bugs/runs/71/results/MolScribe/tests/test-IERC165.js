const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractRiPrJRE = await IERC165.new({from: accounts[3]});
		const interfaceId5Xlc3o = "0x02130406"
		const interfaceIdwqG6IZ2 = "0x110f1a0d"
		const interfaceIdaKiMpns = "0x021f060f"
		const nullWk7UaP7 = await contractRiPrJRE.supportsInterface.call(interfaceId5Xlc3o, {from: accounts[3]});
		const nullNF0WSN0 = await contractRiPrJRE.supportsInterface.call(interfaceIdwqG6IZ2, {from: accounts[2]});
		const nullKfe1c9I = await contractRiPrJRE.supportsInterface.call(interfaceIdaKiMpns, {from: accounts[3]});
	});
})
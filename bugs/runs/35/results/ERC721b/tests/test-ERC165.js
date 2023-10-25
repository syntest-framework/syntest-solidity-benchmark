const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractftsE1Yo = await ERC165.new({from: accounts[2]});
		const interfaceIdWm6FuB = "0x030e0f14"
		const interfaceIdUIpIrjt = "0x0f1c1f0f"
		const interfaceIdRREVWHt = "0x19131514"
		const interfaceIdIKz67s = "0x051d131d"
		const nullx9HNweI = await contractftsE1Yo.supportsInterface.call(interfaceIdWm6FuB, {from: accounts[4]});
		const nullveXorTD = await contractftsE1Yo.supportsInterface.call(interfaceIdUIpIrjt, {from: "0x0000000000000000000000000000000000000001"});
		const nullH3K0bgb = await contractftsE1Yo.supportsInterface.call(interfaceIdRREVWHt, {from: accounts[4]});
		const nullipORh0K = await contractftsE1Yo.supportsInterface.call(interfaceIdIKz67s, {from: accounts[4]});
	});
})
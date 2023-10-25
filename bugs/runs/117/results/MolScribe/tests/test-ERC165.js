const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractz9iHSg3 = await ERC165.new({from: accounts[4]});
		const interfaceIdTLRfq9o = "0x0309150b"
		const interfaceIdCDMW0hN = "0x1b1b0212"
		const interfaceIdQlwzpxP = "0x03080812"
		const interfaceIdsWuispe = "0x0c1c0302"
		const interfaceIdJ12ZCTz = "0x0d0f0a11"
		const nullnLzpqyo = await contractz9iHSg3.supportsInterface.call(interfaceIdTLRfq9o, {from: accounts[0]});
		const nullUyn6DK = await contractz9iHSg3.supportsInterface.call(interfaceIdCDMW0hN, {from: accounts[0]});
		const nullCURVB2P = await contractz9iHSg3.supportsInterface.call(interfaceIdQlwzpxP, {from: accounts[4]});
		const nullJ5xb5qr = await contractz9iHSg3.supportsInterface.call(interfaceIdsWuispe, {from: accounts[0]});
		const nullxvOED9R = await contractz9iHSg3.supportsInterface.call(interfaceIdJ12ZCTz, {from: "0x0000000000000000000000000000000000000001"});
	});
})
const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracty1l4ThZ = await ERC165.new({from: accounts[5]});
		const interfaceIdrlAJ9dC = "0x1a190318"
		const interfaceIdTI5YQde = "0x010b0b08"
		const interfaceIdeqnqvP = "0x021f0404"
		const interfaceIdr2B8LZl = "0x0b060404"
		const null5icpPy = await contracty1l4ThZ.supportsInterface.call(interfaceIdrlAJ9dC, {from: accounts[0]});
		const nullM7nwj6 = await contracty1l4ThZ.supportsInterface.call(interfaceIdTI5YQde, {from: accounts[1]});
		const nullHimUPQu = await contracty1l4ThZ.supportsInterface.call(interfaceIdeqnqvP, {from: accounts[1]});
		const nullIhhZF2j = await contracty1l4ThZ.supportsInterface.call(interfaceIdr2B8LZl, {from: accounts[2]});
	});
})
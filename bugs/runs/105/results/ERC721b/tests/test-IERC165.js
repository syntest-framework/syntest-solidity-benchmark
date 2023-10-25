const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractfh3uU4I = await IERC165.new({from: accounts[1]});
		const interfaceIdL23l80e = "0x13070f02"
		const interfaceIdpqKQG9B = "0x1a01000c"
		const interfaceIdKxzEdIl = "0x161f1010"
		const interfaceIdv07u2IS = "0x1b1b0e1d"
		const interfaceIdm79aDBC = "0x041c1c20"
		const nullxII5JqV = await contractfh3uU4I.supportsInterface.call(interfaceIdL23l80e, {from: accounts[5]});
		const null6sIJBN = await contractfh3uU4I.supportsInterface.call(interfaceIdpqKQG9B, {from: accounts[0]});
		const nullPaeF51 = await contractfh3uU4I.supportsInterface.call(interfaceIdKxzEdIl, {from: accounts[2]});
		const nullq9y1YCn = await contractfh3uU4I.supportsInterface.call(interfaceIdv07u2IS, {from: accounts[1]});
		const nullz9alRnW = await contractfh3uU4I.supportsInterface.call(interfaceIdm79aDBC, {from: accounts[4]});
	});
})
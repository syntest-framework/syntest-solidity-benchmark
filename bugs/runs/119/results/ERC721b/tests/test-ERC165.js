const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractk3cFrNh = await ERC165.new({from: accounts[3]});
		const interfaceIdoskLRyJ = "0x10170818"
		const interfaceIdi9A99IE = "0x10011317"
		const nullvadBYcl = await contractk3cFrNh.supportsInterface.call(interfaceIdoskLRyJ, {from: accounts[3]});
		const nulleXDbnVv = await contractk3cFrNh.supportsInterface.call(interfaceIdi9A99IE, {from: accounts[1]});
	});
})
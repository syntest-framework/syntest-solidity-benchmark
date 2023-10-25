const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractwg89uaQ = await ERC165.new({from: accounts[3]});
		const interfaceIdKzIWxZ = "0x1d041d13"
		const interfaceIdz2ptmtC = "0x1c0b1009"
		const interfaceIdLkPwMKl = "0x02181308"
		const nulls6NyDX = await contractwg89uaQ.supportsInterface.call(interfaceIdKzIWxZ, {from: accounts[0]});
		const nullXq4XsXC = await contractwg89uaQ.supportsInterface.call(interfaceIdz2ptmtC, {from: accounts[2]});
		const nullXDLRNft = await contractwg89uaQ.supportsInterface.call(interfaceIdLkPwMKl, {from: accounts[1]});
	});
})
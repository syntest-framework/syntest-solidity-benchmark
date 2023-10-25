const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractc7hV3x = await ERC165.new({from: accounts[4]});
		const interfaceIdHVeC14 = "0x03091f03"
		const interfaceIdcswmNOk = "0x1e17181b"
		const nullDO8o4c0 = await contractc7hV3x.supportsInterface.call(interfaceIdHVeC14, {from: accounts[2]});
		const nullOncMicN = await contractc7hV3x.supportsInterface.call(interfaceIdcswmNOk, {from: accounts[3]});
	});
})
const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractD7NCCMK = await ERC165.new({from: accounts[1]});
		const interfaceIdxlibfW4 = "0x1c04180d"
		const interfaceIdB8Qkb3X = "0x14180710"
		const interfaceIdz7tB8gS = "0x1220040c"
		const nullSmbdDc4 = await contractD7NCCMK.supportsInterface.call(interfaceIdxlibfW4, {from: accounts[2]});
		const nullqyVqWHb = await contractD7NCCMK.supportsInterface.call(interfaceIdB8Qkb3X, {from: accounts[5]});
		const nullskEuCbz = await contractD7NCCMK.supportsInterface.call(interfaceIdz7tB8gS, {from: accounts[2]});
	});
})
const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractf504lRa = await ERC165.new({from: accounts[3]});
		const interfaceIdRORISaY = "0x0f101c11"
		const interfaceIduqP6CZp = "0x0303090d"
		const interfaceIdEmg9FQy = "0x1d0b0709"
		const interfaceIdMBHcQCz = "0x1309010b"
		const interfaceIdRLGp7GT = "0x08062019"
		const nullaabewC = await contractf504lRa.supportsInterface.call(interfaceIdRORISaY, {from: accounts[2]});
		const nullbanE9x7 = await contractf504lRa.supportsInterface.call(interfaceIduqP6CZp, {from: accounts[5]});
		const nulljRMHh0 = await contractf504lRa.supportsInterface.call(interfaceIdEmg9FQy, {from: accounts[1]});
		const nullbfT4uzN = await contractf504lRa.supportsInterface.call(interfaceIdMBHcQCz, {from: "0x0000000000000000000000000000000000000001"});
		const nullBvgzqA9 = await contractf504lRa.supportsInterface.call(interfaceIdRLGp7GT, {from: accounts[1]});
	});
})
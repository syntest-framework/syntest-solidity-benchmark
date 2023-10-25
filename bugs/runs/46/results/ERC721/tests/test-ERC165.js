const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractNN6Qlai = await ERC165.new({from: accounts[1]});
		const interfaceIdOOlroJo = "0x08080a15"
		const interfaceIdbAbJxRJ = "0x0b111e09"
		const interfaceIdANt7ch0 = "0x1d1c1407"
		const interfaceIdoQMHEkU = "0x180b1f15"
		const nullWcWm6ZQ = await contractNN6Qlai.supportsInterface.call(interfaceIdOOlroJo, {from: accounts[1]});
		const nulluZDGZf7 = await contractNN6Qlai.supportsInterface.call(interfaceIdbAbJxRJ, {from: accounts[0]});
		const nullEvVmpiv = await contractNN6Qlai.supportsInterface.call(interfaceIdANt7ch0, {from: "0x0000000000000000000000000000000000000001"});
		const nullrqBVOyj = await contractNN6Qlai.supportsInterface.call(interfaceIdoQMHEkU, {from: accounts[0]});
	});
})
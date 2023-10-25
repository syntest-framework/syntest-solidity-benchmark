const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractjdLiF0w = await ERC165.new({from: accounts[1]});
		const interfaceIdikxyKSy = "0x02080a00"
		const interfaceId4uZpwv = "0x01051911"
		const interfaceIdhN4ZfFX = "0x051c0a13"
		const interfaceIdXEH8LZo = "0x0f1a0e18"
		const interfaceIdwyIWpjc = "0x1b0d1e0c"
		const nullCakfoYF = await contractjdLiF0w.supportsInterface.call(interfaceIdikxyKSy, {from: accounts[2]});
		const nullOwHpMvw = await contractjdLiF0w.supportsInterface.call(interfaceId4uZpwv, {from: "0x0000000000000000000000000000000000000001"});
		const nullHKY0PwU = await contractjdLiF0w.supportsInterface.call(interfaceIdhN4ZfFX, {from: accounts[4]});
		const nullRg5KV2V = await contractjdLiF0w.supportsInterface.call(interfaceIdXEH8LZo, {from: accounts[5]});
		const nullBqG4NSL = await contractjdLiF0w.supportsInterface.call(interfaceIdwyIWpjc, {from: accounts[3]});
	});
})
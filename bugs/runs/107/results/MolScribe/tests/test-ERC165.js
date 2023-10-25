const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractoKtGM8w = await ERC165.new({from: accounts[1]});
		const interfaceIdqlvqscw = "0x1c1e1b11"
		const interfaceIdNhxUKVg = "0x0d080b02"
		const interfaceIdnLqDAGy = "0x18191407"
		const interfaceIdFutn0Yl = "0x1b14040b"
		const nullbgVdBds = await contractoKtGM8w.supportsInterface.call(interfaceIdqlvqscw, {from: accounts[1]});
		const nullGZBvFv = await contractoKtGM8w.supportsInterface.call(interfaceIdNhxUKVg, {from: accounts[2]});
		const nulljIh6G0 = await contractoKtGM8w.supportsInterface.call(interfaceIdnLqDAGy, {from: accounts[2]});
		const nullxNszaKt = await contractoKtGM8w.supportsInterface.call(interfaceIdFutn0Yl, {from: accounts[4]});
	});
})
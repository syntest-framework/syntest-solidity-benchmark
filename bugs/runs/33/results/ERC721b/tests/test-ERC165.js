const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractvW0WQBi = await ERC165.new({from: accounts[0]});
		const interfaceIdIA8uOum = "0x031c170d"
		const interfaceIdyJIGApS = "0x181a0217"
		const interfaceIdos64SFS = "0x0d0f101d"
		const nulllx7qENz = await contractvW0WQBi.supportsInterface.call(interfaceIdIA8uOum, {from: accounts[2]});
		const nullEbqobSe = await contractvW0WQBi.supportsInterface.call(interfaceIdyJIGApS, {from: accounts[1]});
		const nullzY7HZkC = await contractvW0WQBi.supportsInterface.call(interfaceIdos64SFS, {from: accounts[2]});
	});
})
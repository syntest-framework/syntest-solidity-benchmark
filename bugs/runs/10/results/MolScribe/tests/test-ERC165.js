const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractwcwHC9e = await ERC165.new({from: accounts[3]});
		const interfaceIdeo3L3Ty = "0x02141e15"
		const interfaceIdA11yhbH = "0x0b20121a"
		const interfaceIdu4bE8CP = "0x1402081c"
		const interfaceIdoXG9x8j = "0x05090911"
		const interfaceIdEJQypS4 = "0x170b0418"
		const interfaceIdHqGKzbf = "0x021d0616"
		const nullhKhf8be = await contractwcwHC9e.supportsInterface.call(interfaceIdeo3L3Ty, {from: accounts[4]});
		const nully9kBsb = await contractwcwHC9e.supportsInterface.call(interfaceIdA11yhbH, {from: accounts[0]});
		const nulltknp4Eu = await contractwcwHC9e.supportsInterface.call(interfaceIdu4bE8CP, {from: accounts[3]});
		const nullSHuqdWf = await contractwcwHC9e.supportsInterface.call(interfaceIdoXG9x8j, {from: accounts[1]});
		const nullJbpoChO = await contractwcwHC9e.supportsInterface.call(interfaceIdEJQypS4, {from: accounts[4]});
		const null1JqybK = await contractwcwHC9e.supportsInterface.call(interfaceIdHqGKzbf, {from: accounts[3]});
	});
})
const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractdFJxshf = await ERC165.new({from: accounts[3]});
		const interfaceIdNfFeZcQ = "0x020f0803"
		const interfaceIdO5AcBVq = "0x0c080b0b"
		const interfaceIduXwt2UL = "0x0b061310"
		const interfaceIdWaf9osI = "0x0b070a05"
		const nullidpll8o = await contractdFJxshf.supportsInterface.call(interfaceIdNfFeZcQ, {from: accounts[1]});
		const nullUAgEi64 = await contractdFJxshf.supportsInterface.call(interfaceIdO5AcBVq, {from: accounts[2]});
		const nullVofUE8X = await contractdFJxshf.supportsInterface.call(interfaceIduXwt2UL, {from: accounts[2]});
		const nullONw6hDu = await contractdFJxshf.supportsInterface.call(interfaceIdWaf9osI, {from: "0x0000000000000000000000000000000000000001"});
	});
})
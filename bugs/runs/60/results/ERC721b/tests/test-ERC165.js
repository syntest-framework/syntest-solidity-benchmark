const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractr1phWcZ = await ERC165.new({from: accounts[1]});
		const interfaceIdkxpNC02 = "0x130b0116"
		const interfaceIdigRBGpx = "0x0c180915"
		const interfaceIdhhp6b88 = "0x04161a14"
		const nullTrOIPuN = await contractr1phWcZ.supportsInterface.call(interfaceIdkxpNC02, {from: accounts[1]});
		const nullnpmoCs1 = await contractr1phWcZ.supportsInterface.call(interfaceIdigRBGpx, {from: accounts[4]});
		const nullfdbywm = await contractr1phWcZ.supportsInterface.call(interfaceIdhhp6b88, {from: accounts[0]});
	});
})
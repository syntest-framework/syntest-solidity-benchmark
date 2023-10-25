const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractVdV0vuQ = await ERC165.new({from: accounts[2]});
		const interfaceIdxmwqWU6 = "0x1c04041b"
		const interfaceIdnWFEinl = "0x121f150d"
		const interfaceIdTKHq7f3 = "0x020a011d"
		const nullXy1EbM9 = await contractVdV0vuQ.supportsInterface.call(interfaceIdxmwqWU6, {from: accounts[4]});
		const nullx8HxTGE = await contractVdV0vuQ.supportsInterface.call(interfaceIdnWFEinl, {from: accounts[3]});
		const nullTQpGR3R = await contractVdV0vuQ.supportsInterface.call(interfaceIdTKHq7f3, {from: accounts[2]});
	});
})
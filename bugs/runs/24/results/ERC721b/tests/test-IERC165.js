const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractwo3vm8g = await IERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdXjqSKf5 = "0x0f0b1001"
		const interfaceIduFxqoQu = "0x19091f05"
		const nullt4CoVia = await contractwo3vm8g.supportsInterface.call(interfaceIdXjqSKf5, {from: accounts[4]});
		const nullb2rAhVS = await contractwo3vm8g.supportsInterface.call(interfaceIduFxqoQu, {from: "0x0000000000000000000000000000000000000001"});
	});
})
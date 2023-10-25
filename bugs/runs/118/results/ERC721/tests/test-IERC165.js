const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractQkUmBKT = await IERC165.new({from: accounts[2]});
		const interfaceIdg0LalNw = "0x03000704"
		const interfaceIdA8USlZu = "0x14160b09"
		const interfaceIdxxVHON3 = "0x0516051b"
		const nullVKPONqA = await contractQkUmBKT.supportsInterface.call(interfaceIdg0LalNw, {from: "0x0000000000000000000000000000000000000001"});
		const nullwFWlFNn = await contractQkUmBKT.supportsInterface.call(interfaceIdA8USlZu, {from: accounts[5]});
		const nullEM6Ngyg = await contractQkUmBKT.supportsInterface.call(interfaceIdxxVHON3, {from: accounts[0]});
	});
})
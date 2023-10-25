const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractmjOVTiJ = await IERC165.new({from: accounts[3]});
		const interfaceIdWVba38q = "0x1b011320"
		const interfaceIdaFPUN9d = "0x0a04141f"
		const interfaceIdUKOIy81 = "0x200e100b"
		const nullgX7F5jt = await contractmjOVTiJ.supportsInterface.call(interfaceIdWVba38q, {from: accounts[4]});
		const nulljuedLC1 = await contractmjOVTiJ.supportsInterface.call(interfaceIdaFPUN9d, {from: accounts[1]});
		const nullw8iNvb0 = await contractmjOVTiJ.supportsInterface.call(interfaceIdUKOIy81, {from: accounts[0]});
	});
})
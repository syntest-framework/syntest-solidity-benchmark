const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractTO1r9hC = await IERC165.new({from: accounts[2]});
		const interfaceIdon0mM6y = "0x1a121d0a"
		const interfaceIdvDXgA1 = "0x000b0714"
		const interfaceIdcnDRdNg = "0x1c050713"
		const interfaceIdLh1pVF3 = "0x100d0f1e"
		const interfaceIdVkhR3cm = "0x09161f18"
		const nullQm9kf3d = await contractTO1r9hC.supportsInterface.call(interfaceIdon0mM6y, {from: accounts[3]});
		const null4ac1xF = await contractTO1r9hC.supportsInterface.call(interfaceIdvDXgA1, {from: accounts[3]});
		const nullWNTFIby = await contractTO1r9hC.supportsInterface.call(interfaceIdcnDRdNg, {from: accounts[1]});
		const nullxIv0wJY = await contractTO1r9hC.supportsInterface.call(interfaceIdLh1pVF3, {from: accounts[3]});
		const nullbqnQofY = await contractTO1r9hC.supportsInterface.call(interfaceIdVkhR3cm, {from: accounts[5]});
	});
})
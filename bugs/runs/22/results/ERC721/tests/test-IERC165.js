const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractKZsG3pJ = await IERC165.new({from: accounts[2]});
		const interfaceId9j9CDR = "0x13051008"
		const interfaceIdQSr6rPo = "0x03190e04"
		const interfaceIduvXrDQB = "0x1b0d0901"
		const interfaceIdn6urnfh = "0x1717181d"
		const nullXhykpTR = await contractKZsG3pJ.supportsInterface.call(interfaceId9j9CDR, {from: accounts[0]});
		const nullYXTCWa0 = await contractKZsG3pJ.supportsInterface.call(interfaceIdQSr6rPo, {from: accounts[1]});
		const nullu0LBPxS = await contractKZsG3pJ.supportsInterface.call(interfaceIduvXrDQB, {from: "0x0000000000000000000000000000000000000001"});
		const nullzDm8b5m = await contractKZsG3pJ.supportsInterface.call(interfaceIdn6urnfh, {from: "0x0000000000000000000000000000000000000001"});
	});
})
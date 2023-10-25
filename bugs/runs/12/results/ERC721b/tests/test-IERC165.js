const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractslrWWjL = await IERC165.new({from: accounts[3]});
		const interfaceIdunGMsTt = "0x1e200211"
		const interfaceIde7Q0wsc = "0x07201206"
		const interfaceIdVw9Zrk9 = "0x011b0719"
		const interfaceIdBDnRg7b = "0x06130e0e"
		const interfaceIdUl5yvOu = "0x191c0f08"
		const nullrnIoKxA = await contractslrWWjL.supportsInterface.call(interfaceIdunGMsTt, {from: accounts[4]});
		const nullQlFO9Im = await contractslrWWjL.supportsInterface.call(interfaceIde7Q0wsc, {from: accounts[3]});
		const nullqgm1OIY = await contractslrWWjL.supportsInterface.call(interfaceIdVw9Zrk9, {from: accounts[3]});
		const nulld5CXm5i = await contractslrWWjL.supportsInterface.call(interfaceIdBDnRg7b, {from: "0x0000000000000000000000000000000000000001"});
		const nullvj177RV = await contractslrWWjL.supportsInterface.call(interfaceIdUl5yvOu, {from: accounts[3]});
	});
})
const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractQHmRN41 = await IERC165.new({from: accounts[1]});
		const interfaceIdA4cZ1js = "0x1c1d1b0f"
		const interfaceIdx8Vw5MJ = "0x1f150511"
		const interfaceIdSNS3qTD = "0x1f1f1e1c"
		const interfaceIdtC4CwhV = "0x151f111a"
		const nullxHWzfp6 = await contractQHmRN41.supportsInterface.call(interfaceIdA4cZ1js, {from: accounts[1]});
		const nullBqDcQRS = await contractQHmRN41.supportsInterface.call(interfaceIdx8Vw5MJ, {from: accounts[2]});
		const nullijDywW0 = await contractQHmRN41.supportsInterface.call(interfaceIdSNS3qTD, {from: accounts[2]});
		const nullYMERrRo = await contractQHmRN41.supportsInterface.call(interfaceIdtC4CwhV, {from: accounts[0]});
	});
})
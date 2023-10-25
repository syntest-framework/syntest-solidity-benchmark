const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractEyQx8YS = await IERC165.new({from: accounts[3]});
		const interfaceIdDd22I35 = "0x04060f07"
		const interfaceIdhMtLu1t = "0x0b0f0c1d"
		const nullkNQbw0 = await contractEyQx8YS.supportsInterface.call(interfaceIdDd22I35, {from: "0x0000000000000000000000000000000000000001"});
		const nullE8N6gZO = await contractEyQx8YS.supportsInterface.call(interfaceIdhMtLu1t, {from: "0x0000000000000000000000000000000000000001"});
	});
})
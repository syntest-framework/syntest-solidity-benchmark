const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractrF998PI = await IERC165.new({from: accounts[0]});
		const interfaceIdFcTjYLx = "0x011b1712"
		const interfaceIdEqgKzuP = "0x06180a09"
		const interfaceIdRjxHXNO = "0x20071517"
		const interfaceIdgmWB3Ra = "0x1b13050d"
		const nullwwpF1dB = await contractrF998PI.supportsInterface.call(interfaceIdFcTjYLx, {from: accounts[1]});
		const nullGBhlwZ2 = await contractrF998PI.supportsInterface.call(interfaceIdEqgKzuP, {from: accounts[1]});
		const nullFmhVq69 = await contractrF998PI.supportsInterface.call(interfaceIdRjxHXNO, {from: "0x0000000000000000000000000000000000000001"});
		const nullTv1orY = await contractrF998PI.supportsInterface.call(interfaceIdgmWB3Ra, {from: accounts[2]});
	});
})
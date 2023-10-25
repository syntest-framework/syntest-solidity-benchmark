const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractAkcYiRd = await IERC165.new({from: accounts[0]});
		const interfaceIdY1QGOWq = "0x1b101b0c"
		const interfaceId1DIlYq = "0x141b1e17"
		const interfaceIdK3NeXsO = "0x100b0f17"
		const interfaceIdo51WreD = "0x1a1c100c"
		const interfaceIdaoqQNGi = "0x08111710"
		const nullGVY5Tcj = await contractAkcYiRd.supportsInterface.call(interfaceIdY1QGOWq, {from: accounts[2]});
		const nullDeABfLw = await contractAkcYiRd.supportsInterface.call(interfaceId1DIlYq, {from: accounts[2]});
		const nullMkLx7Db = await contractAkcYiRd.supportsInterface.call(interfaceIdK3NeXsO, {from: accounts[2]});
		const nullYbvMOA = await contractAkcYiRd.supportsInterface.call(interfaceIdo51WreD, {from: accounts[5]});
		const nullgot31e4 = await contractAkcYiRd.supportsInterface.call(interfaceIdaoqQNGi, {from: accounts[2]});
	});
})
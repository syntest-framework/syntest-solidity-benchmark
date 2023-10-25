const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractiFM8cqI = await IERC165.new({from: accounts[3]});
		const interfaceIdZyyeip = "0x10081400"
		const interfaceIdVa5rTvl = "0x0f12071b"
		const interfaceIdlOb1rMz = "0x20191a16"
		const interfaceIdKfvfQc1 = "0x161d010c"
		const interfaceIdRBFeTGA = "0x061a0417"
		const nullC4Mprrk = await contractiFM8cqI.supportsInterface.call(interfaceIdZyyeip, {from: accounts[4]});
		const nullCHMULjB = await contractiFM8cqI.supportsInterface.call(interfaceIdVa5rTvl, {from: accounts[0]});
		const nullWDQDZ6 = await contractiFM8cqI.supportsInterface.call(interfaceIdlOb1rMz, {from: accounts[3]});
		const nullUlhCUJY = await contractiFM8cqI.supportsInterface.call(interfaceIdKfvfQc1, {from: "0x0000000000000000000000000000000000000001"});
		const nullYl2xSz2 = await contractiFM8cqI.supportsInterface.call(interfaceIdRBFeTGA, {from: accounts[4]});
	});
})
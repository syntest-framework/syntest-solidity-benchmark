const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractnAwu5JS = await IERC165.new({from: accounts[5]});
		const interfaceIdQEVrjHv = "0x0c12000b"
		const interfaceIdPIMODgt = "0x1001060c"
		const interfaceIdVU3u6SF = "0x1710031b"
		const interfaceIdHHaLRrq = "0x171a161f"
		const nullN1LYwU = await contractnAwu5JS.supportsInterface.call(interfaceIdQEVrjHv, {from: accounts[4]});
		const nullCTZHGVz = await contractnAwu5JS.supportsInterface.call(interfaceIdPIMODgt, {from: accounts[0]});
		const nullIZwqrc = await contractnAwu5JS.supportsInterface.call(interfaceIdVU3u6SF, {from: accounts[4]});
		const nulluKX1Kni = await contractnAwu5JS.supportsInterface.call(interfaceIdHHaLRrq, {from: accounts[3]});
	});
})
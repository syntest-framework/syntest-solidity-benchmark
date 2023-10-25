const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractNMKFbOb = await IERC165.new({from: accounts[3]});
		const interfaceIdOGgIOTo = "0x0c040d1b"
		const interfaceIds8tLfdB = "0x200b051c"
		const interfaceIdSHI39d9 = "0x2002061e"
		const nullDQ8JwGH = await contractNMKFbOb.supportsInterface.call(interfaceIdOGgIOTo, {from: accounts[0]});
		const nulla1S4IUe = await contractNMKFbOb.supportsInterface.call(interfaceIds8tLfdB, {from: accounts[1]});
		const nullxhW2Ecq = await contractNMKFbOb.supportsInterface.call(interfaceIdSHI39d9, {from: accounts[3]});
	});
})
const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractrGbPnEE = await IERC165.new({from: accounts[5]});
		const interfaceIdWNzNj9P = "0x1d0d021f"
		const interfaceIdZyuOqGE = "0x1e111a0a"
		const interfaceIdFHSbx75 = "0x13080301"
		const interfaceIdh3HKa0a = "0x11130315"
		const interfaceIdCGW0EU5 = "0x101d0015"
		const nullZPiqBed = await contractrGbPnEE.supportsInterface.call(interfaceIdWNzNj9P, {from: accounts[2]});
		const nullrQ38TVK = await contractrGbPnEE.supportsInterface.call(interfaceIdZyuOqGE, {from: accounts[4]});
		const nullEUPQEBH = await contractrGbPnEE.supportsInterface.call(interfaceIdFHSbx75, {from: accounts[0]});
		const nullkzxJ2of = await contractrGbPnEE.supportsInterface.call(interfaceIdh3HKa0a, {from: accounts[4]});
		const nulltV73ry = await contractrGbPnEE.supportsInterface.call(interfaceIdCGW0EU5, {from: accounts[3]});
	});
})
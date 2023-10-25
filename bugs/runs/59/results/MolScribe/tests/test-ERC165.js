const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracty0cquXD = await ERC165.new({from: accounts[3]});
		const interfaceIdhdGjuv = "0x1503120f"
		const interfaceIdpms0VA = "0x140c1209"
		const interfaceIdlohyFO = "0x04081a12"
		const interfaceIdx4msQ5H = "0x0c1f1b1c"
		const interfaceIdS7x1Ijo = "0x1f161a1d"
		const nullxa0svcZ = await contracty0cquXD.supportsInterface.call(interfaceIdhdGjuv, {from: accounts[4]});
		const nullwsTOWV8 = await contracty0cquXD.supportsInterface.call(interfaceIdpms0VA, {from: accounts[0]});
		const nullALv9Dy = await contracty0cquXD.supportsInterface.call(interfaceIdlohyFO, {from: accounts[4]});
		const nullRlFuNSr = await contracty0cquXD.supportsInterface.call(interfaceIdx4msQ5H, {from: accounts[5]});
		const nullx6PAveQ = await contracty0cquXD.supportsInterface.call(interfaceIdS7x1Ijo, {from: accounts[5]});
	});
})
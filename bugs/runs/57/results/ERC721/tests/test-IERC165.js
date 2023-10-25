const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractsoX6n1Z = await IERC165.new({from: accounts[2]});
		const interfaceIdcJjSOd = "0x081b1503"
		const interfaceIduwYESI = "0x0209060d"
		const interfaceIdmIQOPU6 = "0x1b1f0a12"
		const interfaceIdSx631Lj = "0x12060218"
		const interfaceIdMzsW3dj = "0x0a091907"
		const nulluSDAECW = await contractsoX6n1Z.supportsInterface.call(interfaceIdcJjSOd, {from: accounts[0]});
		const nulliTdbGAk = await contractsoX6n1Z.supportsInterface.call(interfaceIduwYESI, {from: accounts[2]});
		const nullwePMw7S = await contractsoX6n1Z.supportsInterface.call(interfaceIdmIQOPU6, {from: accounts[1]});
		const nullGG2Nxq0 = await contractsoX6n1Z.supportsInterface.call(interfaceIdSx631Lj, {from: accounts[1]});
		const nullRt0z9Ur = await contractsoX6n1Z.supportsInterface.call(interfaceIdMzsW3dj, {from: accounts[3]});
	});
})
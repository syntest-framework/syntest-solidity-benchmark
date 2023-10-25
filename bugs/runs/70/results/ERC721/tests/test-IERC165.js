const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractEzazuwy = await IERC165.new({from: accounts[1]});
		const interfaceIdnUvGeVO = "0x1f1d0917"
		const interfaceIdzSNavQb = "0x1a050d1d"
		const interfaceIdieV7QDB = "0x0f141914"
		const nullUpAIpX3 = await contractEzazuwy.supportsInterface.call(interfaceIdnUvGeVO, {from: accounts[0]});
		const nullVklK1mN = await contractEzazuwy.supportsInterface.call(interfaceIdzSNavQb, {from: accounts[5]});
		const nullJKVoHhc = await contractEzazuwy.supportsInterface.call(interfaceIdieV7QDB, {from: accounts[1]});
	});
})
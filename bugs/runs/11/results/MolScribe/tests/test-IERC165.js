const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractWuvVLC = await IERC165.new({from: accounts[1]});
		const interfaceIdHpN3OKI = "0x14120a09"
		const interfaceIdCCa607 = "0x02091606"
		const interfaceIdwSoIa4n = "0x0e1b1e1e"
		const interfaceIdfx4GgfX = "0x070e180d"
		const nullmEFBP2l = await contractWuvVLC.supportsInterface.call(interfaceIdHpN3OKI, {from: accounts[4]});
		const nullOnj18ww = await contractWuvVLC.supportsInterface.call(interfaceIdCCa607, {from: accounts[2]});
		const nulliMnQ87s = await contractWuvVLC.supportsInterface.call(interfaceIdwSoIa4n, {from: accounts[0]});
		const nullOJrTGBR = await contractWuvVLC.supportsInterface.call(interfaceIdfx4GgfX, {from: accounts[4]});
	});
})
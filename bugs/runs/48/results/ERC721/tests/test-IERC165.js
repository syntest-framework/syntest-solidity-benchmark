const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractHozeWtr = await IERC165.new({from: accounts[3]});
		const interfaceIdnqgH5Gv = "0x0e011a08"
		const interfaceIdJjPaOR5 = "0x07090e0d"
		const interfaceIdIIeU3ai = "0x0d040109"
		const interfaceIdhiULst = "0x1f171b19"
		const nullHTn9Uv3 = await contractHozeWtr.supportsInterface.call(interfaceIdnqgH5Gv, {from: accounts[2]});
		const nullAMFY9T = await contractHozeWtr.supportsInterface.call(interfaceIdJjPaOR5, {from: accounts[5]});
		const nullW3z4DxG = await contractHozeWtr.supportsInterface.call(interfaceIdIIeU3ai, {from: accounts[2]});
		const nullDCelBBn = await contractHozeWtr.supportsInterface.call(interfaceIdhiULst, {from: accounts[2]});
	});
})
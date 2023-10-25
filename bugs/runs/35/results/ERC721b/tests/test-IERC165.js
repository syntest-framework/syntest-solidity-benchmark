const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractjotPrRG = await IERC165.new({from: accounts[0]});
		const interfaceIdwQJHnlz = "0x0b130d17"
		const interfaceId5JxhPF = "0x1c170b00"
		const interfaceIdc6I21T = "0x170f0b11"
		const interfaceIdyrAvBVO = "0x1405110b"
		const nullLeYDfl6 = await contractjotPrRG.supportsInterface.call(interfaceIdwQJHnlz, {from: accounts[2]});
		const nullFr6LT9t = await contractjotPrRG.supportsInterface.call(interfaceId5JxhPF, {from: accounts[0]});
		const nulldLzH0I1 = await contractjotPrRG.supportsInterface.call(interfaceIdc6I21T, {from: accounts[4]});
		const nulldK1o8po = await contractjotPrRG.supportsInterface.call(interfaceIdyrAvBVO, {from: accounts[1]});
	});
})
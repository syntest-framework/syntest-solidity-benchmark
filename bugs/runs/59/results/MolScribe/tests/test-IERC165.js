const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractyNakzPq = await IERC165.new({from: accounts[0]});
		const interfaceIdDwSzGOE = "0x03190314"
		const interfaceIdf0uBeEn = "0x171d1f16"
		const interfaceIdjyiK4ez = "0x1d141e01"
		const nullwHNez5m = await contractyNakzPq.supportsInterface.call(interfaceIdDwSzGOE, {from: accounts[5]});
		const nullEVdAz5 = await contractyNakzPq.supportsInterface.call(interfaceIdf0uBeEn, {from: accounts[1]});
		const nullEs83GSi = await contractyNakzPq.supportsInterface.call(interfaceIdjyiK4ez, {from: accounts[0]});
	});
})
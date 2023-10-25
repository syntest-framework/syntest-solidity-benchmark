const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractne6XUgO = await IERC721.new({from: accounts[2]});
		const tokenIdqSaMCUV = BigInt("1957")
		const toESdzsJH = accounts[2]
		const tokenIdw3Y0uGj = BigInt("347")
		const tooMh6dbN = accounts[3]
		const fromGj5PPTk = accounts[3]
		await contractne6XUgO.approve.call(toESdzsJH, tokenIdqSaMCUV, {from: accounts[2]});
		await contractne6XUgO.transferFrom.call(fromGj5PPTk, tooMh6dbN, tokenIdw3Y0uGj, {from: accounts[1]});
	});
})
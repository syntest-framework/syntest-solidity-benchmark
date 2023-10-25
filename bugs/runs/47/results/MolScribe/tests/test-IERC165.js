const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractcG1HWTQ = await IERC165.new({from: accounts[2]});
		const interfaceIdD5oTOqH = "0x13111507"
		const interfaceIdtxkmnu = "0x141a0511"
		const interfaceIdenTvqzf = "0x14031c1d"
		const nullBeFHe1 = await contractcG1HWTQ.supportsInterface.call(interfaceIdD5oTOqH, {from: accounts[0]});
		const nullivtpIk = await contractcG1HWTQ.supportsInterface.call(interfaceIdtxkmnu, {from: accounts[1]});
		const nullA5NPjfA = await contractcG1HWTQ.supportsInterface.call(interfaceIdenTvqzf, {from: accounts[3]});
	});
})
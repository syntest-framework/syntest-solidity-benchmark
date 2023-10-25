const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractjq1wn1s = await IERC721.new({from: accounts[3]});
		const tokenIdrYjEnRw = BigInt("489")
		const operatorJmyjyck = accounts[2]
		const ownerbp8Vg4A = accounts[2]
		const tokenIdH6GyMhi = BigInt("451")
		const torMkPQr0 = accounts[2]
		const fromjRmyx0N = accounts[1]
		const operatorYhthsin = await contractjq1wn1s.getApproved.call(tokenIdrYjEnRw, {from: accounts[3]});
		const nullJizFpnW = await contractjq1wn1s.isApprovedForAll.call(ownerbp8Vg4A, operatorJmyjyck, {from: accounts[0]});
		await contractjq1wn1s.transferFrom.call(fromjRmyx0N, torMkPQr0, tokenIdH6GyMhi, {from: accounts[5]});
	});
})
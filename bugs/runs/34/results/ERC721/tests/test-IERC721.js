const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractovzh7M0 = await IERC721.new({from: accounts[0]});
		const tokenIdvUM6CNo = BigInt("21")
		const towFlir4o = accounts[2]
		const operatori8FI9Nt = accounts[2]
		const ownerdUaIhg2 = accounts[3]
		const tokenIdeDMHKYE = BigInt("1243")
		const to7Fm8Of = accounts[1]
		const fromeQC82rx = accounts[3]
		await contractovzh7M0.approve.call(towFlir4o, tokenIdvUM6CNo, {from: accounts[3]});
		const nullWrE0TZ5 = await contractovzh7M0.isApprovedForAll.call(ownerdUaIhg2, operatori8FI9Nt, {from: accounts[2]});
		await contractovzh7M0.transferFrom.call(fromeQC82rx, to7Fm8Of, tokenIdeDMHKYE, {from: accounts[4]});
	});
})
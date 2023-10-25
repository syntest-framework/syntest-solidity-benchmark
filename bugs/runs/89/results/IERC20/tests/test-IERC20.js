const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contract1xcgWN = await IERC20.new({from: accounts[5]});
		const whoFCWIfPt = accounts[0]
		const spenderzUbwf4S = accounts[5]
		const ownerkS46n2a = accounts[2]
		const valuezI0eOiK = BigInt("1384")
		const to4gAiiN = accounts[1]
		const spenderiTJA5OF = "0x0000000000000000000000000000000000000001"
		const ownermxcWXUK = accounts[1]
		const nullq0l1JlM = await contract1xcgWN.balanceOf.call(whoFCWIfPt, {from: accounts[4]});
		const nullAkk8Jug = await contract1xcgWN.allowance.call(ownerkS46n2a, spenderzUbwf4S, {from: accounts[3]});
		const nullUvnfARC = await contract1xcgWN.transfer.call(to4gAiiN, valuezI0eOiK, {from: accounts[5]});
		const nullYLQtlxZ = await contract1xcgWN.allowance.call(ownermxcWXUK, spenderiTJA5OF, {from: accounts[0]});
	});
})
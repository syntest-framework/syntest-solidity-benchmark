const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractaxFlmlk = await IERC20.new({from: accounts[2]});
		const spenderJVD7V3U = accounts[5]
		const ownerCpDcVG = accounts[4]
		const spenderpGyjYhp = accounts[4]
		const ownerznVsn9B = accounts[5]
		const whofmzpgIi = "0x0000000000000000000000000000000000000001"
		const valueCzxOl6u = BigInt("1691")
		const toaVPVWSO = accounts[3]
		const fromtBTvi22 = accounts[1]
		const valuepoE4I79 = BigInt("1897")
		const toAhPQB8b = accounts[4]
		const nullB3Z3vHd = await contractaxFlmlk.allowance.call(ownerCpDcVG, spenderJVD7V3U, {from: accounts[3]});
		const nullBp11pUE = await contractaxFlmlk.allowance.call(ownerznVsn9B, spenderpGyjYhp, {from: accounts[0]});
		const nullYhSoy9Q = await contractaxFlmlk.balanceOf.call(whofmzpgIi, {from: accounts[3]});
		const nulls0v5UJU = await contractaxFlmlk.transferFrom.call(fromtBTvi22, toaVPVWSO, valueCzxOl6u, {from: accounts[3]});
		const nulluHIKM5 = await contractaxFlmlk.transfer.call(toAhPQB8b, valuepoE4I79, {from: accounts[4]});
	});
})
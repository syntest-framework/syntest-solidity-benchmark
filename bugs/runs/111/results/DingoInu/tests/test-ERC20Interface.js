const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contracthjoIbZz = await ERC20Interface.new({from: accounts[3]});
		const tokenOwnerr5tFWjL = accounts[5]
		const tokensdD0FmIa = BigInt("550")
		const spenderZm5N1Lf = accounts[1]
		const tokenOwnerXt8Cfqx = accounts[3]
		const tokensvEDMjP = BigInt("2018")
		const toVWHdxo2 = "0x0000000000000000000000000000000000000001"
		const fromvBevq0P = accounts[4]
		const tokensj3IQO0F = BigInt("1411")
		const spenderXtMPYa = accounts[0]
		const balanceGHKU1IZ = await contracthjoIbZz.balanceOf.call(tokenOwnerr5tFWjL, {from: accounts[3]});
		const successCXgc53O = await contracthjoIbZz.approve.call(spenderZm5N1Lf, tokensdD0FmIa, {from: accounts[1]});
		const balanceFKZLCAa = await contracthjoIbZz.balanceOf.call(tokenOwnerXt8Cfqx, {from: "0x0000000000000000000000000000000000000001"});
		const nullsWTGQkE = await contracthjoIbZz.totalSupply.call({from: accounts[2]});
		const successPmVWcPM = await contracthjoIbZz.transferFrom.call(fromvBevq0P, toVWHdxo2, tokensvEDMjP, {from: accounts[3]});
		const successPxP9ix0 = await contracthjoIbZz.approve.call(spenderXtMPYa, tokensj3IQO0F, {from: accounts[4]});
	});
})
const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractMvgkzjW = await ERC20Interface.new({from: accounts[1]});
		const tokenOwnerb0BJGL = "0x0000000000000000000000000000000000000001"
		const tokenOwnerrlEjpjW = accounts[4]
		const tokenOwnerjrXOPvT = accounts[1]
		const spenderDvoNRlU = accounts[3]
		const tokenOwnerWjgvrEY = accounts[3]
		const tokenOwnerM7hemBf = accounts[0]
		const balanceiK0awcJ = await contractMvgkzjW.balanceOf.call(tokenOwnerb0BJGL, {from: accounts[3]});
		const balanceJWa1VBM = await contractMvgkzjW.balanceOf.call(tokenOwnerrlEjpjW, {from: accounts[1]});
		const balanceZocvTLd = await contractMvgkzjW.balanceOf.call(tokenOwnerjrXOPvT, {from: accounts[0]});
		const remainingsRADpm = await contractMvgkzjW.allowance.call(tokenOwnerWjgvrEY, spenderDvoNRlU, {from: accounts[5]});
		const balancebah2vm = await contractMvgkzjW.balanceOf.call(tokenOwnerM7hemBf, {from: accounts[4]});
	});
})
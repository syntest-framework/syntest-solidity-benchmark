const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contracthUdJUzJ = await ERC20Interface.new({from: accounts[4]});
		const tokensnnLAGnS = BigInt("1836")
		const spenderc2QOhU = accounts[1]
		const tokensEg2T2b = BigInt("1575")
		const spenderurztChU = accounts[4]
		const tokenOwnerbGYY1Ry = accounts[1]
		const successLyMwiGE = await contracthUdJUzJ.approve.call(spenderc2QOhU, tokensnnLAGnS, {from: accounts[3]});
		const successLRXKgLc = await contracthUdJUzJ.approve.call(spenderurztChU, tokensEg2T2b, {from: accounts[2]});
		const balanceMU63uO6 = await contracthUdJUzJ.balanceOf.call(tokenOwnerbGYY1Ry, {from: "0x0000000000000000000000000000000000000001"});
	});
})
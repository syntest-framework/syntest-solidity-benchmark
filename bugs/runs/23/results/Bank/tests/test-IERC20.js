const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractGm25MOe = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuesUOHBhI = BigInt("958")
		const toP5xjY7A = "0x0000000000000000000000000000000000000001"
		const fromn1sw5dr = "0x0000000000000000000000000000000000000001"
		const valueddiYV4 = BigInt("29")
		const toPRaJeis = accounts[3]
		const spenderGHua7bl = accounts[3]
		const ownerKjfdW72 = accounts[0]
		const valuevnmKtHk = BigInt("760")
		const toImCDfyw = accounts[0]
		const nullCeCX08P = await contractGm25MOe.transferFrom.call(fromn1sw5dr, toP5xjY7A, valuesUOHBhI, {from: "0x0000000000000000000000000000000000000001"});
		const nullN8Dufkm = await contractGm25MOe.totalSupply.call({from: accounts[2]});
		const nullHP4FiD7 = await contractGm25MOe.transfer.call(toPRaJeis, valueddiYV4, {from: accounts[4]});
		const nulljMPVd9o = await contractGm25MOe.allowance.call(ownerKjfdW72, spenderGHua7bl, {from: accounts[0]});
		const nullP2io5t4 = await contractGm25MOe.transfer.call(toImCDfyw, valuevnmKtHk, {from: "0x0000000000000000000000000000000000000001"});
	});
})
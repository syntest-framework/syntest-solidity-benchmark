const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractJ9sk8Dw = await SafeMath.new({from: accounts[2]});
		const bu8SXDF = BigInt("762")
		const agfMcWYk = BigInt("71")
		const bfzIHSi = BigInt("1566")
		const aEwiEQk = BigInt("1414")
		const bW82GdbW = BigInt("1648")
		const amw9zujw = BigInt("148")
		const bZWyvQC = BigInt("1683")
		const aYXYup55 = BigInt("990")
		const cFO77qQE = await contractJ9sk8Dw.safeAdd.call(agfMcWYk, bu8SXDF, {from: accounts[3]});
		const crgwpEER = await contractJ9sk8Dw.safeSub.call(aEwiEQk, bfzIHSi, {from: accounts[4]});
		const cSjAdh6 = await contractJ9sk8Dw.safeSub.call(amw9zujw, bW82GdbW, {from: accounts[2]});
		const cne564W = await contractJ9sk8Dw.safeSub.call(aYXYup55, bZWyvQC, {from: accounts[1]});

		assert.equal(cFO77qQE, 833)
		await expect(contractJ9sk8Dw.safeSub.call(aEwiEQk, bfzIHSi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractMsHIKUH = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bhZ0VxkI = BigInt("85")
		const awPJZbu5 = BigInt("211")
		const bIL5W7zV = BigInt("584")
		const aM5iTo3A = BigInt("2012")
		const bUbHQP2C = BigInt("1623")
		const aPVrerni = BigInt("852")
		const cZlcuKn2 = await contractMsHIKUH.safeMul.call(awPJZbu5, bhZ0VxkI, {from: accounts[3]});
		const cavsEZlg = await contractMsHIKUH.safeMul.call(aM5iTo3A, bIL5W7zV, {from: accounts[2]});
		const cskS67J = await contractMsHIKUH.safeAdd.call(aPVrerni, bUbHQP2C, {from: accounts[1]});
	});
})
const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractbwbgNPJ = await SafeMath.new({from: accounts[4]});
		const bHLpg3cR = BigInt("1657")
		const aOblBWqY = BigInt("1204")
		const bnoxmcld = BigInt("1023")
		const ae22tywe = BigInt("2035")
		const bUzWKUFQ = BigInt("10")
		const aKQDrHnc = BigInt("328")
		const bMmfjtb = BigInt("1538")
		const aZXRPN7 = BigInt("967")
		const cCNeXQRk = await contractbwbgNPJ.safeSub.call(aOblBWqY, bHLpg3cR, {from: accounts[0]});
		const cYn7aNnD = await contractbwbgNPJ.safeAdd.call(ae22tywe, bnoxmcld, {from: accounts[0]});
		const cTzUjHL = await contractbwbgNPJ.safeAdd.call(aKQDrHnc, bUzWKUFQ, {from: accounts[3]});
		const coHSOcy8 = await contractbwbgNPJ.safeSub.call(aZXRPN7, bMmfjtb, {from: accounts[4]});

		await expect(contractbwbgNPJ.safeSub.call(aOblBWqY, bHLpg3cR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractLcpGHFU = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bc25afUG = BigInt("604")
		const aFm9ohE = BigInt("271")
		const bJla40xG = BigInt("1988")
		const ay1YK6yC = BigInt("1204")
		const cMyOY0sd = await contractLcpGHFU.safeAdd.call(aFm9ohE, bc25afUG, {from: accounts[3]});
		const cTcq4ec5 = await contractLcpGHFU.safeSub.call(ay1YK6yC, bJla40xG, {from: "0x0000000000000000000000000000000000000001"});
	});
})
const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinNnjFVel = await MetaCoin.new({from: accounts[0]});
		const uintwm5Ypa = BigInt("1202")
		const addressV07WqI1 = accounts[1]
		const uintS1Vp5Zp = BigInt("867")
		const addressKBY3TPp = accounts[4]
		const uintbPu80cO = BigInt("490")
		const addressuVRXdCR = accounts[2]
		const uintS7j3ZiK = BigInt("120")
		const addressfwurGcP = accounts[3]
		const uintgVW3mso = BigInt("125")
		const addresskIioOET = accounts[0]
		const boolqXbjgAy = await MetaCoinNnjFVel.sendCoin.call(addressV07WqI1, uintwm5Ypa, {from: accounts[4]});
		const booldZQz6kw = await MetaCoinNnjFVel.sendCoin.call(addressKBY3TPp, uintS1Vp5Zp, {from: accounts[0]});
		const boolcb8sRjC = await MetaCoinNnjFVel.sendCoin.call(addressuVRXdCR, uintbPu80cO, {from: accounts[1]});
		const boolXuVm1ah = await MetaCoinNnjFVel.sendCoin.call(addressfwurGcP, uintS7j3ZiK, {from: accounts[0]});
		const boolLKKI5ff = await MetaCoinNnjFVel.sendCoin.call(addresskIioOET, uintgVW3mso, {from: accounts[1]});

		assert.equal(boolLKKI5ff, false)
		assert.equal(boolXuVm1ah, true)
		assert.equal(boolcb8sRjC, false)
		assert.equal(booldZQz6kw, true)
		assert.equal(boolqXbjgAy, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinHElS5Jz = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUnb07EB = BigInt("1580")
		const addresso4WNw6D = accounts[5]
		const uintzuF6v7 = BigInt("1842")
		const addressKJUzI6v = accounts[4]
		const uintMXLZrd2 = BigInt("1133")
		const addressHnm35uN = accounts[3]
		const uintCGXvgi = BigInt("1585")
		const address6JmhAI = accounts[2]
		const uint8Wnmlm = BigInt("781")
		const addressVugEq3c = "0x0000000000000000000000000000000000000001"
		const boolHKNOtMo = await MetaCoinHElS5Jz.sendCoin.call(addresso4WNw6D, uintUnb07EB, {from: accounts[1]});
		const boolLrIfyMm = await MetaCoinHElS5Jz.sendCoin.call(addressKJUzI6v, uintzuF6v7, {from: accounts[2]});
		const booluObO4Xv = await MetaCoinHElS5Jz.sendCoin.call(addressHnm35uN, uintMXLZrd2, {from: accounts[1]});
		const boolscMx2F3 = await MetaCoinHElS5Jz.sendCoin.call(address6JmhAI, uintCGXvgi, {from: accounts[1]});
		const boolqkh8sJ6 = await MetaCoinHElS5Jz.sendCoin.call(addressVugEq3c, uint8Wnmlm, {from: accounts[0]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinRYNKGk = await MetaCoin.new({from: accounts[2]});
		const uintHJpRcG2 = BigInt("204")
		const addressCe2hDlq = accounts[1]
		const uinteIUOOlQ = BigInt("0")
		const addressUCr42WN = accounts[4]
		const boolLtDLJnk = await MetaCoinRYNKGk.sendCoin.call(addressCe2hDlq, uintHJpRcG2, {from: accounts[3]});
		const boolzgE3q1S = await MetaCoinRYNKGk.sendCoin.call(addressUCr42WN, uinteIUOOlQ, {from: accounts[2]});

		assert.equal(boolLtDLJnk, false)
		assert.equal(boolzgE3q1S, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinRYNKGk = await MetaCoin.new({from: accounts[2]});
		const uintf7z1q2S = BigInt("3919")
		const addressgdPNscU = accounts[10]
		const boolulP9yQ6 = await MetaCoinRYNKGk.sendCoin.call(addressgdPNscU, uintf7z1q2S, {from: accounts[2]});

		await expect(MetaCoinRYNKGk.sendCoin.call(addressgdPNscU, uintf7z1q2S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
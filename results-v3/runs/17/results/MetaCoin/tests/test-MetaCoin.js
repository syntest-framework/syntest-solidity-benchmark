const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinc1S5tfz = await MetaCoin.new({from: accounts[0]});
		const uintXFcnk5L = BigInt("445")
		const addressxkappvV = accounts[1]
		const uintkOxaXbZ = BigInt("560")
		const addressKgoHcBe = accounts[5]
		const uintWYpFHrw = BigInt("1919")
		const addressAmBIkHr = accounts[4]
		const uintGCQHf0m = BigInt("1523")
		const addresspOljtZp = accounts[1]
		const uintvylKeyb = BigInt("1580")
		const addresss7n7Fgu = accounts[2]
		const boolycaIuqB = await MetaCoinc1S5tfz.sendCoin.call(addressxkappvV, uintXFcnk5L, {from: accounts[3]});
		const boolgyXxQ1 = await MetaCoinc1S5tfz.sendCoin.call(addressKgoHcBe, uintkOxaXbZ, {from: accounts[0]});
		const boolnsvWe6g = await MetaCoinc1S5tfz.sendCoin.call(addressAmBIkHr, uintWYpFHrw, {from: accounts[0]});
		const boolIetjgQz = await MetaCoinc1S5tfz.sendCoin.call(addresspOljtZp, uintGCQHf0m, {from: accounts[4]});
		const boolJMiOrCP = await MetaCoinc1S5tfz.sendCoin.call(addresss7n7Fgu, uintvylKeyb, {from: accounts[4]});

		assert.equal(boolIetjgQz, false)
		assert.equal(boolJMiOrCP, false)
		assert.equal(boolgyXxQ1, true)
		assert.equal(boolnsvWe6g, true)
		assert.equal(boolycaIuqB, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinXRTxT6 = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDk9nzwZ = BigInt("1678")
		const addressvq4jsFv = accounts[5]
		const uintPu209YP = BigInt("1038")
		const addressg9DWMy = accounts[5]
		const boolyQjAnKc = await MetaCoinXRTxT6.sendCoin.call(addressvq4jsFv, uintDk9nzwZ, {from: accounts[4]});
		const boolLFsuapa = await MetaCoinXRTxT6.sendCoin.call(addressg9DWMy, uintPu209YP, {from: accounts[4]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinc1S5tfz = await MetaCoin.new({from: accounts[0]});
		const uintBqKkvib = BigInt("0")
		const addressTIsiAKm = accounts[2]
		const uintejKjpu = BigInt("75")
		const addressKXmxXds = accounts[3]
		const uintIfdQ5sD = BigInt("1932")
		const addresskEtl2zp = accounts[3]
		const uint0EglgW = BigInt("286")
		const addressLIGssuh = accounts[1]
		const uintwrFj35w = BigInt("383")
		const addressWvIBiiJ = accounts[4]
		const uintcDCqQF7 = BigInt("1249")
		const addressl49SMg3 = accounts[0]
		const boolhbY2SDR = await MetaCoinc1S5tfz.sendCoin.call(addressTIsiAKm, uintBqKkvib, {from: accounts[0]});
		const booluXhi2o = await MetaCoinc1S5tfz.sendCoin.call(addressKXmxXds, uintejKjpu, {from: accounts[4]});
		const boolZ22KwG = await MetaCoinc1S5tfz.sendCoin.call(addresskEtl2zp, uintIfdQ5sD, {from: accounts[2]});
		const boolNYjNkqY = await MetaCoinc1S5tfz.sendCoin.call(addressLIGssuh, uint0EglgW, {from: accounts[1]});
		const bool8rJP7U = await MetaCoinc1S5tfz.sendCoin.call(addressWvIBiiJ, uintwrFj35w, {from: accounts[3]});
		const boolzwoODtv = await MetaCoinc1S5tfz.sendCoin.call(addressl49SMg3, uintcDCqQF7, {from: accounts[0]});

		assert.equal(bool8rJP7U, false)
		assert.equal(boolNYjNkqY, false)
		assert.equal(boolZ22KwG, false)
		assert.equal(boolhbY2SDR, true)
		assert.equal(booluXhi2o, false)
		assert.equal(boolzwoODtv, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinc1S5tfz = await MetaCoin.new({from: accounts[0]});
		const uintq2MualH = BigInt("2771")
		const addressy0E2M0o = accounts[10]
		const boolFNJ8fb1 = await MetaCoinc1S5tfz.sendCoin.call(addressy0E2M0o, uintq2MualH, {from: accounts[0]});

		await expect(MetaCoinc1S5tfz.sendCoin.call(addressy0E2M0o, uintq2MualH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MetaCoin', async () => {
		const MetaCoinc1S5tfz = await MetaCoin.new({from: accounts[0]});
		const uintjlLiYQY = BigInt("2945")
		const address3nSXxp = accounts[9]
		const uintASyJLFA = BigInt("723")
		const addressv0jUc4T = accounts[1]
		const uintHA4cP8r = BigInt("467")
		const addressOGir2GC = accounts[2]
		const uinty2vAInQ = BigInt("794")
		const addresss87hUG2 = accounts[0]
		const uintQufRKal = BigInt("180")
		const addressWXfGQx2 = "0x00000000000000000000000000000000000000-1"
		const boolFNJ8fb1 = await MetaCoinc1S5tfz.sendCoin.call(address3nSXxp, uintjlLiYQY, {from: accounts[0]});
		const boolzMyF7Qa = await MetaCoinc1S5tfz.sendCoin.call(addressv0jUc4T, uintASyJLFA, {from: accounts[2]});
		const boolPvaTyA1 = await MetaCoinc1S5tfz.sendCoin.call(addressOGir2GC, uintHA4cP8r, {from: accounts[3]});
		const boolUSmmIXJ = await MetaCoinc1S5tfz.sendCoin.call(addresss87hUG2, uinty2vAInQ, {from: accounts[2]});
		const boolZdbEPUA = await MetaCoinc1S5tfz.sendCoin.call(addressWXfGQx2, uintQufRKal, {from: accounts[1]});

		assert.equal(boolFNJ8fb1, true)
		assert.equal(boolPvaTyA1, false)
		assert.equal(boolUSmmIXJ, false)
		assert.equal(boolzMyF7Qa, false)
		await expect(MetaCoinc1S5tfz.sendCoin.call(addressWXfGQx2, uintQufRKal, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
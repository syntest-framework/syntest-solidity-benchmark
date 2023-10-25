const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3LkFAz2c = await Core_Fi_V3.new({from: accounts[4]});
		const uintSuLQjZl = BigInt("1337")
		const addressLg7fjZX = accounts[2]
		const uinttGadJba = BigInt("1637")
		const addressomTYwag = accounts[4]
		const addressmkQzVk = accounts[4]
		const uintmSRvtCR = BigInt("1579")
		const addressFOCHRJ5 = accounts[4]
		const uintYjtjPoL = BigInt("1000")
		const address8d1BEs = accounts[3]
		const addressXVqrz6n = accounts[1]
		const uintPeUPIx = BigInt("1335")
		const addressQZGH9Mx = accounts[0]
		const addressohJzS38 = "0x0000000000000000000000000000000000000001"
		const addresssA0RssS = accounts[3]
		const boolv5ZTWoN = await Core_Fi_V3LkFAz2c.transfer.call(addressLg7fjZX, uintSuLQjZl, {from: accounts[4]});
		const boolLle5pwv = await Core_Fi_V3LkFAz2c.transferFrom.call(addressmkQzVk, addressomTYwag, uinttGadJba, {from: accounts[4]});
		const boolam3TIhl = await Core_Fi_V3LkFAz2c.approve.call(addressFOCHRJ5, uintmSRvtCR, {from: accounts[4]});
		const boolK8MeXOu = await Core_Fi_V3LkFAz2c.transferFrom.call(addressXVqrz6n, address8d1BEs, uintYjtjPoL, {from: accounts[2]});
		const boolBHLZr7F = await Core_Fi_V3LkFAz2c.approve.call(addressQZGH9Mx, uintPeUPIx, {from: accounts[4]});
		const uintXbjIKlj = await Core_Fi_V3LkFAz2c.allowance.call(addresssA0RssS, addressohJzS38, {from: accounts[1]});

		assert.equal(boolBHLZr7F, true)
		assert.equal(boolK8MeXOu, false)
		assert.equal(boolLle5pwv, false)
		assert.equal(boolam3TIhl, true)
		assert.equal(boolv5ZTWoN, true)
		assert.equal(uintXbjIKlj, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3rA0gjru = await Core_Fi_V3.new({from: accounts[2]});
		const addresseUWljaM = accounts[0]
		const uintMk50UYB = BigInt("140")
		const addresspWzzIw = accounts[4]
		const addressgDNPxU = accounts[4]
		const addresskFDhqap = accounts[2]
		const uintmVOzAER = BigInt("2037")
		const addressMVCURWd = accounts[0]
		const addressSHc3p0C = accounts[3]
		const uint256MNAoy0q = await Core_Fi_V3rA0gjru.balanceOf.call(addresseUWljaM, {from: accounts[2]});
		const boolTzg7jcf = await Core_Fi_V3rA0gjru.transferFrom.call(addressgDNPxU, addresspWzzIw, uintMk50UYB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xSBEtg3 = await Core_Fi_V3rA0gjru.balanceOf.call(addresskFDhqap, {from: accounts[5]});
		const boolRxAfHY7 = await Core_Fi_V3rA0gjru.transfer.call(addressMVCURWd, uintmVOzAER, {from: accounts[4]});
		const uint256RtQprWA = await Core_Fi_V3rA0gjru.balanceOf.call(addressSHc3p0C, {from: accounts[2]});

		assert.equal(boolRxAfHY7, false)
		assert.equal(boolTzg7jcf, false)
		assert.equal(uint256MNAoy0q, BigInt("0"))
		assert.equal(uint256RtQprWA, BigInt("0"))
		assert.equal(uint256xSBEtg3, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3sFRg3bz = await Core_Fi_V3.new({from: accounts[4]});
		const uintr15MfT = BigInt("1031")
		const addressR0KtJcj = accounts[4]
		const uintbpnR9wu = BigInt("1520")
		const addressi74yVb = accounts[4]
		const uintAwBUwvy = BigInt("620")
		const addressGBe9WDn = accounts[5]
		const boolAOlAlIa = await Core_Fi_V3sFRg3bz.approve.call(addressR0KtJcj, uintr15MfT, {from: accounts[4]});
		const uint256tPBiBb = await Core_Fi_V3sFRg3bz.totalSupply.call({from: accounts[2]});
		const booloynStM0 = await Core_Fi_V3sFRg3bz.transfer.call(addressi74yVb, uintbpnR9wu, {from: accounts[3]});
		const bool7k1aR1 = await Core_Fi_V3sFRg3bz.transfer.call(addressGBe9WDn, uintAwBUwvy, {from: accounts[1]});

		assert.equal(bool7k1aR1, false)
		assert.equal(boolAOlAlIa, true)
		assert.equal(booloynStM0, false)
		assert.equal(uint256tPBiBb, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3ady4OC = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseT5xA3 = accounts[1]
		const addressx5qycAC = accounts[3]
		const addresswxLH9d = accounts[3]
		const addressaUibuT = accounts[0]
		const addressrSCz8If = accounts[5]
		const uintiegf6Tk = BigInt("1391")
		const addresswXw0853 = accounts[2]
		const addressOVqkoWA = accounts[1]
		const addresskO2KQf2 = accounts[3]
		const uint256RxodihS = await Core_Fi_V3ady4OC.balanceOf.call(addresseT5xA3, {from: accounts[3]});
		const uintXZsyFFz = await Core_Fi_V3ady4OC.allowance.call(addresswxLH9d, addressx5qycAC, {from: accounts[4]});
		const uintUmXNfaU = await Core_Fi_V3ady4OC.allowance.call(addressrSCz8If, addressaUibuT, {from: accounts[2]});
		const boolyX5yt0I = await Core_Fi_V3ady4OC.approve.call(addresswXw0853, uintiegf6Tk, {from: accounts[3]});
		const uintqyTSvod = await Core_Fi_V3ady4OC.allowance.call(addresskO2KQf2, addressOVqkoWA, {from: accounts[5]});
	});
})
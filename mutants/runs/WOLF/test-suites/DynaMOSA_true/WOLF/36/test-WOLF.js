const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringqqXp4av = "W7CoDbwxfxGnDbLanxlxO43w8vaRfLXLX0WQJC4hgVHBRuExkubwpCj16hbLYdA5Vd0F"
		const stringKXXZJ5h = "NMCjIzSl70KC7WWsn1jhEiXGWo4ealxb4JS8p7qmtsQ"
		const uintUc7HYWT = BigInt("162")
		const WOLFSRGkBzf = await WOLF.new(stringqqXp4av, stringKXXZJ5h, uintUc7HYWT, {from: accounts[0]});
		const uintzx631w8 = BigInt("1987")
		const addressMCjncG0 = accounts[4]
		const address2N9JGD = accounts[5]
		const uinttuM1I3D = BigInt("537")
		const addresskdUkPvn = accounts[4]
		const uintTLdhAF = BigInt("1946")
		const addressNgOqBTT = accounts[2]
		const addressrEkjRNQ = accounts[4]
		const boolLXXVxZx = await WOLFSRGkBzf.transferFrom.call(address2N9JGD, addressMCjncG0, uintzx631w8, {from: accounts[3]});
		const boolviQLezD = await WOLFSRGkBzf.approve.call(addresskdUkPvn, uinttuM1I3D, {from: accounts[4]});
		const boolYSgYFg = await WOLFSRGkBzf.transferFrom.call(addressrEkjRNQ, addressNgOqBTT, uintTLdhAF, {from: accounts[2]});

		await expect(WOLFSRGkBzf.transferFrom.call(address2N9JGD, addressMCjncG0, uintzx631w8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringeF6byuT = "kw7QU3g9khfVeVqdrIjMDSNWHUbfqbffnIJsc62FqCDf2nKOO1hIshrUhJLz"
		const stringy9SqoT9 = "vm1gaXyPtcIuJQK13uXYrwQArF381ONrzgFzhusQ1r8Sm1Dv08blAM"
		const uintrfu44HR = BigInt("381")
		const WOLFPpnMqY3 = await WOLF.new(stringeF6byuT, stringy9SqoT9, uintrfu44HR, {from: "0x0000000000000000000000000000000000000001"});
		const uintHnMc8Lu = BigInt("1371")
		const addressCACQ3Q4 = accounts[0]
		const uintEdXZDv = BigInt("1965")
		const addressEV1zkK = accounts[2]
		const uintNguearc = BigInt("1532")
		const addressJC82n6 = accounts[5]
		const uintNqGbrQm = BigInt("1020")
		const addresswhdCYb = accounts[0]
		const addressyoiS4e = accounts[2]
		const boolpX7iAe = await WOLFPpnMqY3.approve.call(addressCACQ3Q4, uintHnMc8Lu, {from: accounts[2]});
		const boolfZEu8x = await WOLFPpnMqY3.approveAndCall.call(addressEV1zkK, uintEdXZDv, {from: accounts[0]});
		const boolro7st2S = await WOLFPpnMqY3.approveAndCall.call(addressJC82n6, uintNguearc, {from: accounts[1]});
		const boolAKiu3I = await WOLFPpnMqY3.transferFrom.call(addressyoiS4e, addresswhdCYb, uintNqGbrQm, {from: accounts[0]});
	});

	it('test for WOLF', async () => {
		const stringfwEKE1E = "9tOAXYSlX79qCPcqJeokgIGsBtbLYP749Dj"
		const stringAP7n0Be = "qwa1UgpXRUXISIsPOX6YnwEQLFQcPE1mPKShlRhRBPhfXhVHvTOl6RaTzTC2pmSbSP2BJkc4ed8mUD"
		const uintIxAs133 = BigInt("1158")
		const WOLFc6tlGEb = await WOLF.new(stringfwEKE1E, stringAP7n0Be, uintIxAs133, {from: accounts[4]});
		const uintgVHnRTC = BigInt("1444")
		const addressvFdFABk = accounts[2]
		const addressmVqgqQ = accounts[1]
		const uintTCq2J8N = BigInt("803")
		const addressEzrBGAf = "0x0000000000000000000000000000000000000001"
		const uinttRXC68W = BigInt("1231")
		const addressZZh75C = accounts[2]
		const boolAh0ovC0 = await WOLFc6tlGEb.approve.call(addressvFdFABk, uintgVHnRTC, {from: accounts[5]});
		const boolAmiRn8J = await WOLFc6tlGEb.transferownership.call(addressmVqgqQ, {from: accounts[1]});
		const boolvmlWuHK = await WOLFc6tlGEb.approve.call(addressEzrBGAf, uintTCq2J8N, {from: accounts[4]});
		const boolSEJ3UI = await WOLFc6tlGEb.approve.call(addressZZh75C, uinttRXC68W, {from: accounts[0]});

		assert.equal(boolAh0ovC0, true)
		await expect(WOLFc6tlGEb.transferownership.call(addressmVqgqQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringnlsvOK = "wNLa6fkkclrSCDnboTERBYf84IED3jvJiVCVTqxBYcwc6t641O"
		const stringAfHxewJ = "6tJC6651m2pNtA3pxVn6pXQ0dIC7BZDk57YURqiEZW7f4kgP7MuAA46xXr6Ve07cM2Vg8975"
		const uintSB1YcZJ = BigInt("1120")
		const WOLFvWtLo0l = await WOLF.new(stringnlsvOK, stringAfHxewJ, uintSB1YcZJ, {from: accounts[1]});
		const uintSXZhk6 = BigInt("1248")
		const addressRUgXF5N = accounts[3]
		const addresseeG6BjC = accounts[3]
		const uintMTWrpat = BigInt("182")
		const addressGJJuuh = accounts[0]
		const boolonWebu = await WOLFvWtLo0l.transferFrom.call(addresseeG6BjC, addressRUgXF5N, uintSXZhk6, {from: accounts[3]});
		const boolilYY4x5 = await WOLFvWtLo0l.transfer.call(addressGJJuuh, uintMTWrpat, {from: accounts[4]});

		await expect(WOLFvWtLo0l.transferFrom.call(addresseeG6BjC, addressRUgXF5N, uintSXZhk6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringwoxjeCL = "sxlS3lyTcRllFY"
		const stringCFAc4iL = "vX8SiQdFUSKXJyNndRtrjss"
		const uintfK4TUUw = BigInt("1016")
		const WOLFFIueH4e = await WOLF.new(stringwoxjeCL, stringCFAc4iL, uintfK4TUUw, {from: accounts[5]});
		const uintEZNqkoh = BigInt("1111")
		const addresstHolFx = accounts[0]
		const uintR1yFB06 = BigInt("543")
		const addressEABewWb = accounts[5]
		const addressICx8E7 = accounts[2]
		const uintu18kQ7G = BigInt("2045")
		const addressIqyzNJD = accounts[4]
		const addressuGnLFYz = accounts[0]
		const boolluPsbO9 = await WOLFFIueH4e.transfer.call(addresstHolFx, uintEZNqkoh, {from: accounts[1]});
		const boolHtR4YNO = await WOLFFIueH4e.transferFrom.call(addressICx8E7, addressEABewWb, uintR1yFB06, {from: accounts[2]});
		const boola5syMyx = await WOLFFIueH4e.transferFrom.call(addressuGnLFYz, addressIqyzNJD, uintu18kQ7G, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFFIueH4e.transfer.call(addresstHolFx, uintEZNqkoh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringnlsvOK = "wNLa6fkkclrSCDnboTERBYf84IED3jvJiVCVTqxBYcwc6t641O"
		const stringAfHxewJ = "6tJC6651m2pNtA3pxVn6pXQ0dIC7BZDk57YURqiEZW7f4kgP7MuAA46xXr6Ve07cM2Vg8975"
		const uintRygmWN9 = BigInt("1120")
		const WOLFvWtLo0l = await WOLF.new(stringnlsvOK, stringAfHxewJ, uintRygmWN9, {from: accounts[1]});
		const uintSnOSmaC = BigInt("121")
		const addressx7ItzQB = accounts[2]
		const uintdOuMgg5 = BigInt("1248")
		const addressly4S625 = accounts[3]
		const addressuqjJ5pz = accounts[3]
		const uintO94shc = BigInt("182")
		const addressWAIAna6 = accounts[1]
		const booljB9Llx = await WOLFvWtLo0l.approveAndCall.call(addressx7ItzQB, uintSnOSmaC, {from: accounts[0]});
		const boolonWebu = await WOLFvWtLo0l.transferFrom.call(addressuqjJ5pz, addressly4S625, uintdOuMgg5, {from: accounts[3]});
		const boolilYY4x5 = await WOLFvWtLo0l.transfer.call(addressWAIAna6, uintO94shc, {from: accounts[4]});

		await expect(WOLFvWtLo0l.approveAndCall.call(addressx7ItzQB, uintSnOSmaC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringfwEKE1E = "9tOAXYSlX79qCPcqJeokgIGsBtbLYP749Dj"
		const stringAP7n0Be = "qwa1UgpXRUXISIsPOX6YnwEQLFQcPE1mPKShlRhRBPhfXhVHvTOl6RaTzTC2pmSbSP2BJkc4ed8mUD"
		const uinttYpBTn5 = BigInt("1158")
		const WOLFc6tlGEb = await WOLF.new(stringfwEKE1E, stringAP7n0Be, uinttYpBTn5, {from: accounts[4]});
		const uintBhZkMDb = BigInt("1444")
		const addressrMIG48w = accounts[3]
		const uintU6CdEb9 = BigInt("1858")
		const addressyJTUuae = accounts[1]
		const uint4qTMhh = BigInt("43")
		const addresso73LTlh = accounts[4]
		const addressI4hGMuQ = accounts[1]
		const uintJTgCyna = BigInt("1720")
		const addressOhZTQSE = "0x0000000000000000000000000000000000000001"
		const uinth3eJIqg = BigInt("1231")
		const addressiBYksq5 = accounts[2]
		const boolAh0ovC0 = await WOLFc6tlGEb.approve.call(addressrMIG48w, uintBhZkMDb, {from: accounts[5]});
		const boolpwY4Bx6 = await WOLFc6tlGEb.approve.call(addressyJTUuae, uintU6CdEb9, {from: accounts[4]});
		const boolfjevjTO = await WOLFc6tlGEb.transfer.call(addresso73LTlh, uint4qTMhh, {from: "0x0000000000000000000000000000000000000001"});
		const boolAmiRn8J = await WOLFc6tlGEb.transferownership.call(addressI4hGMuQ, {from: accounts[1]});
		const bool2vZ5uo = await WOLFc6tlGEb.transfer.call(addressOhZTQSE, uintJTgCyna, {from: accounts[0]});
		const boolSEJ3UI = await WOLFc6tlGEb.approve.call(addressiBYksq5, uinth3eJIqg, {from: accounts[0]});

		assert.equal(boolAh0ovC0, true)
		assert.equal(boolpwY4Bx6, true)
		await expect(WOLFc6tlGEb.transfer.call(addresso73LTlh, uint4qTMhh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringnlsvOK = "wNLa6fkkclrSCDnboTERBYf84IED3jvJiVCVTqxBYcwc6t641O"
		const stringAfHxewJ = "6tJC6651m2pNtA3pxVn6pXQ0dIC7BZDk57YURqiEZW7f4kgP7MuAA46xXr6Ve07cM2Vg8975"
		const uinte5tvFJK = BigInt("1120")
		const WOLFvWtLo0l = await WOLF.new(stringnlsvOK, stringAfHxewJ, uinte5tvFJK, {from: accounts[1]});
		const uinttXjyquc = BigInt("389")
		const addressv7WY4cf = accounts[4]
		const uintttuMgp0 = BigInt("387")
		const addresslgW0pqq = accounts[2]
		const uintmDvVVkU = BigInt("1248")
		const addressaqSy8y = accounts[3]
		const addressn2QwFqJ = accounts[3]
		const uintfqHRR1a = BigInt("182")
		const addressozr2dC3 = accounts[0]
		const boolLxqxK4h = await WOLFvWtLo0l.approveAndCall.call(addressv7WY4cf, uinttXjyquc, {from: accounts[1]});
		const boolmpMUljO = await WOLFvWtLo0l.approve.call(addresslgW0pqq, uintttuMgp0, {from: accounts[5]});
		const boolonWebu = await WOLFvWtLo0l.transferFrom.call(addressn2QwFqJ, addressaqSy8y, uintmDvVVkU, {from: accounts[3]});
		const boolilYY4x5 = await WOLFvWtLo0l.transfer.call(addressozr2dC3, uintfqHRR1a, {from: accounts[4]});

		assert.equal(boolLxqxK4h, true)
		assert.equal(boolmpMUljO, true)
		await expect(WOLFvWtLo0l.transferFrom.call(addressn2QwFqJ, addressaqSy8y, uintmDvVVkU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringfwEKE1E = "9tOAXYSlX79qCPcqJeokgIGsBtbLYP749Dj"
		const stringAP7n0Be = "qwa1UgpXRUXISIsPOX6YnwEQLFQcPE1mPKShlRhRBPhfXhVHvTOl6RaTzTC2pmSbSP2BJkc4ed8mUD"
		const uinthXuxW5C = BigInt("1158")
		const WOLFc6tlGEb = await WOLF.new(stringfwEKE1E, stringAP7n0Be, uinthXuxW5C, {from: accounts[4]});
		const addressHtldZI3 = accounts[4]
		const uintUN7USXf = BigInt("1444")
		const addresso2pumhU = accounts[2]
		const uintozG5RbZ = BigInt("621")
		const addressNf2o6Jn = accounts[3]
		const addressuOara11 = accounts[1]
		const boolfRPs4YV = await WOLFc6tlGEb.transferownership.call(addressHtldZI3, {from: accounts[4]});
		const boolAh0ovC0 = await WOLFc6tlGEb.approve.call(addresso2pumhU, uintUN7USXf, {from: accounts[5]});
		const boolehlmusX = await WOLFc6tlGEb.approve.call(addressNf2o6Jn, uintozG5RbZ, {from: accounts[0]});
		const boolAmiRn8J = await WOLFc6tlGEb.transferownership.call(addressuOara11, {from: accounts[1]});

		assert.equal(boolAh0ovC0, true)
		assert.equal(boolehlmusX, true)
		assert.equal(boolfRPs4YV, true)
		await expect(WOLFc6tlGEb.transferownership.call(addressuOara11, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringfwEKE1E = "9tOAXYSlX79qCPcqJeokgIGsBtbLYP749Dj"
		const stringAP7n0Be = "qwa1UgpXRUXISIsPOX6YnwEQLFQcPE1mPKShlRhRBPhfXhVHvTOl6RaTzTC2pmSbSP2BJkc4ed8mUD"
		const uintO0iuVE = BigInt("1158")
		const WOLFc6tlGEb = await WOLF.new(stringfwEKE1E, stringAP7n0Be, uintO0iuVE, {from: accounts[4]});
		const uintwZjDeLf = BigInt("457")
		const addresstx49J9u = accounts[4]
		const uintLH5kdDg = BigInt("1023")
		const addressNhcQCCO = accounts[2]
		const uintrHKegwq = BigInt("0")
		const addressckbxEx = accounts[5]
		const boolbkVTk15 = await WOLFc6tlGEb.approveAndCall.call(addresstx49J9u, uintwZjDeLf, {from: accounts[4]});
		const boolFielZjZ = await WOLFc6tlGEb.approve.call(addressNhcQCCO, uintLH5kdDg, {from: accounts[1]});
		const boolfjevjTO = await WOLFc6tlGEb.transfer.call(addressckbxEx, uintrHKegwq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFielZjZ, true)
		assert.equal(boolbkVTk15, true)
		assert.equal(boolfjevjTO, true)
	});

	it('test for WOLF', async () => {
		const stringnlsvOK = "wNLa6fkkclrSCDnboTERBYf84IED3jvJiVCVTqxBYcwc6t641O"
		const stringAfHxewJ = "6tJC6651m2pNtA3pxVn6pXQ0dIC7BZDk57YURqiEZW7f4kgP7MuAA46xXr6Ve07cM2Vg8975"
		const uintSeZkEXf = BigInt("1120")
		const WOLFvWtLo0l = await WOLF.new(stringnlsvOK, stringAfHxewJ, uintSeZkEXf, {from: accounts[1]});
		const uintci4Qbfr = BigInt("107")
		const addressBLPYoqV = accounts[3]
		const uintsdtcuvs = BigInt("0")
		const addressZrHkAXn = accounts[2]
		const uinttiFfNDj = BigInt("560")
		const addressOiL8JwT = accounts[0]
		const uintZ4mW4b = BigInt("131")
		const addressYti3e2U = accounts[2]
		const addressakHbSvR = accounts[4]
		const uintsgv9QUe = BigInt("1700")
		const addressIEtDkZm = "0x0000000000000000000000000000000000000001"
		const uintGbOKqzL = BigInt("823")
		const addressckphw0L = accounts[0]
		const uintfQezr54 = BigInt("1537")
		const addressFqMVyD2 = accounts[4]
		const uintwZNkAe2 = BigInt("1141")
		const addressWkBXVWE = accounts[5]
		const uinti0Jx9z = BigInt("431")
		const addressIVuA4Lm = accounts[4]
		const addressVJdFGU = accounts[4]
		const uinttoo0WuF = BigInt("916")
		const addressL1DSpub = "0x0000000000000000000000000000000000000002"
		const addressiRgmVr7 = accounts[2]
		const uinttgl1MwO = BigInt("153")
		const addressiAGrv5 = accounts[6]
		const addressz2enElS = accounts[4]
		const uintEmvPIXu = BigInt("551")
		const addressCv3AddB = accounts[1]
		const boolvUUVzjl = await WOLFvWtLo0l.approveAndCall.call(addressBLPYoqV, uintci4Qbfr, {from: accounts[1]});
		const boolwZ8ZUhH = await WOLFvWtLo0l.approveAndCall.call(addressZrHkAXn, uintsdtcuvs, {from: accounts[1]});
		const booluGJ7mdS = await WOLFvWtLo0l.approve.call(addressOiL8JwT, uinttiFfNDj, {from: accounts[1]});
		const booljVGxRci = await WOLFvWtLo0l.transferFrom.call(addressakHbSvR, addressYti3e2U, uintZ4mW4b, {from: accounts[3]});
		const boolQ70ufsP = await WOLFvWtLo0l.transfer.call(addressIEtDkZm, uintsgv9QUe, {from: accounts[1]});
		const boolRDvP55R = await WOLFvWtLo0l.approve.call(addressckphw0L, uintGbOKqzL, {from: accounts[1]});
		const boolkZYO8M = await WOLFvWtLo0l.approve.call(addressFqMVyD2, uintfQezr54, {from: accounts[1]});
		const bool9Rvfb5 = await WOLFvWtLo0l.approveAndCall.call(addressWkBXVWE, uintwZNkAe2, {from: accounts[1]});
		const boolyIVaCjl = await WOLFvWtLo0l.transferFrom.call(addressVJdFGU, addressIVuA4Lm, uinti0Jx9z, {from: accounts[3]});
		const boole89SzZ8 = await WOLFvWtLo0l.transferFrom.call(addressiRgmVr7, addressL1DSpub, uinttoo0WuF, {from: accounts[3]});
		const boolgubTYZk = await WOLFvWtLo0l.transferFrom.call(addressz2enElS, addressiAGrv5, uinttgl1MwO, {from: accounts[1]});
		const boolilYY4x5 = await WOLFvWtLo0l.transfer.call(addressCv3AddB, uintEmvPIXu, {from: accounts[4]});

		assert.equal(booluGJ7mdS, true)
		assert.equal(boolvUUVzjl, true)
		assert.equal(boolwZ8ZUhH, true)
		await expect(WOLFvWtLo0l.transferFrom.call(addressakHbSvR, addressYti3e2U, uintZ4mW4b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
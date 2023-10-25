const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYimcS1Qo = await KPLAY.new({from: accounts[4]});
		const uintgpHjK4K = BigInt("1789")
		const uintWux33VD = BigInt("709")
		const addressiTgFOL = accounts[0]
		const addressev9BkhF = "0x0000000000000000000000000000000000000001"
		const addresszkACrg5 = await KPLAYimcS1Qo.lock.call(addressiTgFOL, uintWux33VD, uintgpHjK4K, {from: accounts[4]});
		await KPLAYimcS1Qo.pause.call({from: accounts[3]});
		const uint256C1I95KF = await KPLAYimcS1Qo.balanceOf.call(addressev9BkhF, {from: accounts[1]});

		await expect(KPLAYimcS1Qo.lock.call(addressiTgFOL, uintWux33VD, uintgpHjK4K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYqygoEUt = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintK4P0OjW = BigInt("1182")
		const addressC55ITCX = accounts[5]
		const addressVsMuo9v = accounts[1]
		await KPLAYqygoEUt.lockState.call(addressC55ITCX, uintK4P0OjW, {from: accounts[3]});
		const boolWvsXTGg = await KPLAYqygoEUt.isFrozen.call(addressVsMuo9v, {from: accounts[1]});
		await KPLAYqygoEUt.whenNotPaused.call({from: accounts[0]});
		await KPLAYqygoEUt.unpause.call({from: accounts[5]});
		await KPLAYqygoEUt.pause.call({from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYFicScP = await KPLAY.new({from: accounts[4]});
		const uintKsm2cP0 = BigInt("866")
		const addressxbobAIB = accounts[0]
		const addresseXKFGv = accounts[2]
		const uintpuHwJMj = BigInt("1382")
		const addressbe6VhzS = accounts[2]
		const addressiGqghBw = await KPLAYFicScP.burn.call(addressxbobAIB, uintKsm2cP0, {from: accounts[2]});
		await KPLAYFicScP.whenNotFrozen.call({from: accounts[2]});
		const uint256yDgxTJR = await KPLAYFicScP.balanceOf.call(addresseXKFGv, {from: accounts[2]});
		const boolxA46myB = await KPLAYFicScP.increaseAllowance.call(addressbe6VhzS, uintpuHwJMj, {from: accounts[3]});
		await KPLAYFicScP.unpause.call({from: accounts[5]});
		await KPLAYFicScP.pause.call({from: accounts[0]});

		await expect(KPLAYFicScP.burn.call(addressxbobAIB, uintKsm2cP0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJ5eoXkQ = await KPLAY.new({from: accounts[3]});
		const uintmtPM4ez = BigInt("2044")
		const uintGLUDI5G = BigInt("360")
		const addressj2kY6dU = "0x0000000000000000000000000000000000000001"
		const addressqZfVgaZ = accounts[3]
		const uint256MmniIRZ = await KPLAYJ5eoXkQ.afterTime.call(uintmtPM4ez, {from: accounts[2]});
		await KPLAYJ5eoXkQ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolErFZsH = await KPLAYJ5eoXkQ.transfer.call(addressj2kY6dU, uintGLUDI5G, {from: accounts[3]});
		const uint256wWVOfF1 = await KPLAYJ5eoXkQ.balanceOf.call(addressqZfVgaZ, {from: accounts[3]});

		assert.equal(uint256MmniIRZ, BigInt("1630230256"))
		await expect(KPLAYJ5eoXkQ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const uintegqeUZL = BigInt("1338")
		const addressLIjRDqB = accounts[4]
		const uintWJ3wOOr = BigInt("1603")
		const uintjZm9VSt = BigInt("1382")
		const addressMIP1cI5 = accounts[1]
		const uintDPa8fTz = BigInt("1271")
		const addressFr7q4YU = accounts[0]
		const boolhgWOz0K = await KPLAYNyv4MWw.transfer.call(addressLIjRDqB, uintegqeUZL, {from: accounts[3]});
		await KPLAYNyv4MWw.renounceOwnership.call({from: accounts[2]});
		const addressiFqiz3W = await KPLAYNyv4MWw.lockAfter.call(addressMIP1cI5, uintjZm9VSt, uintWJ3wOOr, {from: accounts[4]});
		const boolTkp07Yv = await KPLAYNyv4MWw.decreaseAllowance.call(addressFr7q4YU, uintDPa8fTz, {from: accounts[0]});

		await expect(KPLAYNyv4MWw.transfer.call(addressLIjRDqB, uintegqeUZL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKE6Gbs9 = await KPLAY.new({from: accounts[3]});
		const uintILEMBT = BigInt("385")
		const addressyYscyi = accounts[0]
		const uint1IWV6h = BigInt("193")
		const addressr02oE78 = accounts[2]
		const uintM25GWss = BigInt("97")
		const addresshWVXO7N = "0x0000000000000000000000000000000000000001"
		const uintehprhyq = BigInt("894")
		const addressWTHdUd = accounts[0]
		const uintAXsnWpZ = BigInt("716")
		const addressAuzldqN = accounts[5]
		const boolDqMm7lj = await KPLAYKE6Gbs9.approve.call(addressyYscyi, uintILEMBT, {from: accounts[2]});
		await KPLAYKE6Gbs9.lockState.call(addressr02oE78, uint1IWV6h, {from: accounts[0]});
		const uint256WHzxQR6 = await KPLAYKE6Gbs9.currentTime.call({from: accounts[2]});
		const boolBQAWijG = await KPLAYKE6Gbs9.decreaseAllowance.call(addresshWVXO7N, uintM25GWss, {from: accounts[1]});
		const boolSlfnow = await KPLAYKE6Gbs9.increaseAllowance.call(addressWTHdUd, uintehprhyq, {from: accounts[2]});
		const addressuR663ZL = await KPLAYKE6Gbs9.unlock.call(addressAuzldqN, uintAXsnWpZ, {from: accounts[4]});

		assert.equal(boolDqMm7lj, true)
		await expect(KPLAYKE6Gbs9.lockState.call(addressr02oE78, uint1IWV6h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYtjlKzQ0 = await KPLAY.new({from: accounts[4]});
		const addressA0FGNEw = accounts[2]
		await KPLAYtjlKzQ0.renounceOwnership.call({from: accounts[4]});
		await KPLAYtjlKzQ0.whenNotPaused.call({from: accounts[2]});
		const uint256OBCMZzN = await KPLAYtjlKzQ0.balanceOf.call(addressA0FGNEw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYtjlKzQ0.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYz3vWe1Z = await KPLAY.new({from: accounts[0]});
		const addressjtDb2gZ = accounts[3]
		const addresskkR417e = accounts[2]
		const addressVSCsCA6 = accounts[1]
		const addressgQPZJX3 = accounts[0]
		const uint256huAfeUA = await KPLAYz3vWe1Z.currentTime.call({from: accounts[0]});
		const addresstEVPzIy = await KPLAYz3vWe1Z.unfreeze.call(addressjtDb2gZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PmXbA8d = await KPLAYz3vWe1Z.allowance.call(addressVSCsCA6, addresskkR417e, {from: accounts[4]});
		await KPLAYz3vWe1Z.whenPaused.call({from: accounts[3]});
		const addresswJ7M695 = await KPLAYz3vWe1Z.transferOwnership.call(addressgQPZJX3, {from: accounts[3]});

		assert.equal(uint256huAfeUA, BigInt("1630228212"))
		await expect(KPLAYz3vWe1Z.unfreeze.call(addressjtDb2gZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const uintmKRB7rQ = BigInt("1137")
		const addresshP0jmpE = "0x0000000000000000000000000000000000000001"
		const addresstbG8xu7 = accounts[4]
		const uintU6HlPJ = BigInt("980")
		const addressGLijJAh = accounts[2]
		const uintwUrrAA3 = BigInt("1338")
		const addressag7WYZJ = accounts[4]
		const uintyNwrtHy = BigInt("1603")
		const uintkDpuAfY = BigInt("1382")
		const addressHHwtDRy = accounts[1]
		const uintQdLepcf = BigInt("1271")
		const addressTWEp2Rs = accounts[0]
		const boolP39IPcF = await KPLAYNyv4MWw.transferFrom.call(addresstbG8xu7, addresshP0jmpE, uintmKRB7rQ, {from: accounts[1]});
		const addressbNkgykl = await KPLAYNyv4MWw.burn.call(addressGLijJAh, uintU6HlPJ, {from: accounts[0]});
		const boolhgWOz0K = await KPLAYNyv4MWw.transfer.call(addressag7WYZJ, uintwUrrAA3, {from: accounts[3]});
		await KPLAYNyv4MWw.renounceOwnership.call({from: accounts[2]});
		const addressiFqiz3W = await KPLAYNyv4MWw.lockAfter.call(addressHHwtDRy, uintkDpuAfY, uintyNwrtHy, {from: accounts[4]});
		const boolTkp07Yv = await KPLAYNyv4MWw.decreaseAllowance.call(addressTWEp2Rs, uintQdLepcf, {from: accounts[0]});

		await expect(KPLAYNyv4MWw.transferFrom.call(addresstbG8xu7, addresshP0jmpE, uintmKRB7rQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const addressduPoZ5r = accounts[4]
		const uintIks6SWd = BigInt("1338")
		const address6moeL2 = accounts[4]
		const uintyZdwSrY = BigInt("1603")
		const uintxy8DK86 = BigInt("1382")
		const addressIY3rPQm = accounts[1]
		const uintpKf115 = BigInt("1271")
		const addresstLrHLXS = accounts[0]
		const uint256wBV7Ks2 = await KPLAYNyv4MWw.balanceOf.call(addressduPoZ5r, {from: "0x0000000000000000000000000000000000000001"});
		const boolhgWOz0K = await KPLAYNyv4MWw.transfer.call(address6moeL2, uintIks6SWd, {from: accounts[3]});
		await KPLAYNyv4MWw.renounceOwnership.call({from: accounts[2]});
		const addressiFqiz3W = await KPLAYNyv4MWw.lockAfter.call(addressIY3rPQm, uintxy8DK86, uintyZdwSrY, {from: accounts[4]});
		const boolTkp07Yv = await KPLAYNyv4MWw.decreaseAllowance.call(addresstLrHLXS, uintpKf115, {from: accounts[0]});

		assert.equal(uint256wBV7Ks2, BigInt("10000000000000000"))
		await expect(KPLAYNyv4MWw.transfer.call(address6moeL2, uintIks6SWd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYo9Ng4eS = await KPLAY.new({from: accounts[5]});
		const addressaVzz2nO = accounts[2]
		const uinteLukqUT = BigInt("1291")
		const addressPYar0s = accounts[0]
		const uinttLPkyDI = BigInt("288")
		const addresswzpv5H4 = accounts[3]
		const addressOEZ2lhg = accounts[3]
		const addressoqWBeeF = accounts[2]
		const uint256HXGl20g = await KPLAYo9Ng4eS.balanceOf.call(addressaVzz2nO, {from: accounts[0]});
		const boolADMJmAD = await KPLAYo9Ng4eS.decreaseAllowance.call(addressPYar0s, uinteLukqUT, {from: accounts[3]});
		await KPLAYo9Ng4eS.unpause.call({from: accounts[0]});
		const boolRrhKaGn = await KPLAYo9Ng4eS.transferFrom.call(addressOEZ2lhg, addresswzpv5H4, uinttLPkyDI, {from: accounts[2]});
		const uint256Wd4PWm = await KPLAYo9Ng4eS.balanceOf.call(addressoqWBeeF, {from: accounts[4]});

		assert.equal(uint256HXGl20g, BigInt("0"))
		await expect(KPLAYo9Ng4eS.decreaseAllowance.call(addressPYar0s, uinteLukqUT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const addressykneGhC = accounts[4]
		const uintL5ifm4y = BigInt("1338")
		const addressUyucWY8 = accounts[4]
		const uintRwD3T6 = BigInt("1603")
		const uintLkvXHuG = BigInt("1382")
		const addressp0OhnFH = accounts[1]
		const uintIIyPDwA = BigInt("1271")
		const addresscxzSVDB = accounts[1]
		const boolwf0uxEO = await KPLAYNyv4MWw.isFrozen.call(addressykneGhC, {from: accounts[2]});
		const boolhgWOz0K = await KPLAYNyv4MWw.transfer.call(addressUyucWY8, uintL5ifm4y, {from: accounts[3]});
		await KPLAYNyv4MWw.renounceOwnership.call({from: accounts[2]});
		const addressiFqiz3W = await KPLAYNyv4MWw.lockAfter.call(addressp0OhnFH, uintLkvXHuG, uintRwD3T6, {from: accounts[4]});
		const boolTkp07Yv = await KPLAYNyv4MWw.decreaseAllowance.call(addresscxzSVDB, uintIIyPDwA, {from: accounts[0]});

		assert.equal(boolwf0uxEO, false)
		await expect(KPLAYNyv4MWw.transfer.call(addressUyucWY8, uintL5ifm4y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const addresssImMfYk = accounts[4]
		const uintr6kybHZ = BigInt("1603")
		const uinteA4Bs2p = BigInt("1366")
		const addressr7OHYn1 = accounts[1]
		const uintu9eYj7S = BigInt("1271")
		const addressukbFKU3 = accounts[0]
		const uint256wBV7Ks2 = await KPLAYNyv4MWw.balanceOf.call(addresssImMfYk, {from: "0x0000000000000000000000000000000000000001"});
		const addressiFqiz3W = await KPLAYNyv4MWw.lockAfter.call(addressr7OHYn1, uinteA4Bs2p, uintr6kybHZ, {from: accounts[4]});
		const boolTkp07Yv = await KPLAYNyv4MWw.decreaseAllowance.call(addressukbFKU3, uintu9eYj7S, {from: accounts[0]});

		assert.equal(uint256wBV7Ks2, BigInt("10000000000000000"))
		await expect(KPLAYNyv4MWw.lockAfter.call(addressr7OHYn1, uinteA4Bs2p, uintr6kybHZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYq1oruBD = await KPLAY.new({from: accounts[0]});
		const addressXRj6kRI = "0x0000000000000000000000000000000000000001"
		const addressPTJCl4V = accounts[0]
		const uint256CPnZu6U = await KPLAYq1oruBD.currentTime.call({from: accounts[3]});
		const uint256YvNl9T = await KPLAYq1oruBD.allowance.call(addressPTJCl4V, addressXRj6kRI, {from: accounts[3]});
		await KPLAYq1oruBD.unpause.call({from: accounts[4]});
		const uint256eKQb3Z = await KPLAYq1oruBD.currentTime.call({from: accounts[5]});

		assert.equal(uint256CPnZu6U, BigInt("1630228222"))
		assert.equal(uint256YvNl9T, BigInt("0"))
		await expect(KPLAYq1oruBD.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwzXVTCU = await KPLAY.new({from: accounts[3]});
		const uintoHJF3Eq = BigInt("1891")
		const addressMKF4JV7 = accounts[1]
		const uintE95JPyc = BigInt("1582")
		const addresszFgFeLu = accounts[1]
		const addressHMES2jP = accounts[1]
		await KPLAYwzXVTCU.pause.call({from: accounts[3]});
		const boolRQqSmWX = await KPLAYwzXVTCU.decreaseAllowance.call(addressMKF4JV7, uintoHJF3Eq, {from: accounts[4]});
		const boolxmeNt1Q = await KPLAYwzXVTCU.transferFrom.call(addressHMES2jP, addresszFgFeLu, uintE95JPyc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYwzXVTCU.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwzXVTCU = await KPLAY.new({from: accounts[3]});
		const uintnIjfnmW = BigInt("844")
		const uintF5EtDRt = BigInt("1647")
		const addresstsi5RRX = accounts[2]
		const uintPcsmeWS = BigInt("1505")
		const addressN08Wsf3 = accounts[0]
		const uinte2CtHK = BigInt("1582")
		const addressgUirS5P = accounts[2]
		const addressZJQKdPT = accounts[1]
		const addressldEbH46 = accounts[0]
		const uintio4w2ea = BigInt("1337")
		const addresswoHkbPX = accounts[4]
		const address5Vtd6X = accounts[1]
		const boolzKbHb3y = await KPLAYwzXVTCU.transferWithLock.call(addresstsi5RRX, uintF5EtDRt, uintnIjfnmW, {from: accounts[3]});
		const boolCgUlV6E = await KPLAYwzXVTCU.approve.call(addressN08Wsf3, uintPcsmeWS, {from: accounts[2]});
		const boolxmeNt1Q = await KPLAYwzXVTCU.transferFrom.call(addressZJQKdPT, addressgUirS5P, uinte2CtHK, {from: "0x0000000000000000000000000000000000000001"});
		const boolZb7HV9X = await KPLAYwzXVTCU.isFrozen.call(addressldEbH46, {from: accounts[1]});
		const boolTKVxy2F = await KPLAYwzXVTCU.transferFrom.call(address5Vtd6X, addresswoHkbPX, uintio4w2ea, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCgUlV6E, true)
		assert.equal(boolzKbHb3y, true)
		await expect(KPLAYwzXVTCU.transferFrom.call(addressZJQKdPT, addressgUirS5P, uinte2CtHK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwzXVTCU = await KPLAY.new({from: accounts[3]});
		const uintSaVLEui = BigInt("1296")
		const addressctAi87s = accounts[5]
		const uintONisS9L = BigInt("1582")
		const addressIlKgTq1 = accounts[1]
		const addressFZw2Nk8 = accounts[2]
		const addressg3Rt5jR = accounts[4]
		const uintkaadWqA = BigInt("1136")
		const addressl4fdbZ = accounts[0]
		const uint256Z4ccIQC = await KPLAYwzXVTCU.totalSupply.call({from: accounts[1]});
		const boolb7rTzD = await KPLAYwzXVTCU.transfer.call(addressctAi87s, uintSaVLEui, {from: accounts[1]});
		const boolxmeNt1Q = await KPLAYwzXVTCU.transferFrom.call(addressFZw2Nk8, addressIlKgTq1, uintONisS9L, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zHRDTRo = await KPLAYwzXVTCU.balanceOf.call(addressg3Rt5jR, {from: accounts[4]});
		const boollvgoAwq = await KPLAYwzXVTCU.approve.call(addressl4fdbZ, uintkaadWqA, {from: accounts[3]});

		assert.equal(uint256Z4ccIQC, BigInt("10000000000000000"))
		await expect(KPLAYwzXVTCU.transfer.call(addressctAi87s, uintSaVLEui, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwzXVTCU = await KPLAY.new({from: accounts[3]});
		const uintwywJLSM = BigInt("1150")
		const uintef57uV = BigInt("534")
		const addressug4Umey = accounts[5]
		const uintL1zqoi9 = BigInt("1682")
		const uintHlE8Mkv = BigInt("1582")
		const addressIUlUZ59 = accounts[2]
		const addressjqM8v0I = accounts[1]
		const boolZdmP4xb = await KPLAYwzXVTCU.transferWithLockAfter.call(addressug4Umey, uintef57uV, uintwywJLSM, {from: accounts[3]});
		const uint256alK2WC5 = await KPLAYwzXVTCU.afterTime.call(uintL1zqoi9, {from: accounts[2]});
		const boolxmeNt1Q = await KPLAYwzXVTCU.transferFrom.call(addressjqM8v0I, addressIUlUZ59, uintHlE8Mkv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZdmP4xb, true)
		assert.equal(uint256alK2WC5, BigInt("1630229909"))
		await expect(KPLAYwzXVTCU.transferFrom.call(addressjqM8v0I, addressIUlUZ59, uintHlE8Mkv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const addresskBLf6LS = accounts[2]
		const addressw0DMDV = accounts[7]
		const addressv9ZGzZT = await KPLAYNyv4MWw.freeze.call(addresskBLf6LS, {from: accounts[4]});
		const uint256wBV7Ks2 = await KPLAYNyv4MWw.balanceOf.call(addressw0DMDV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256wBV7Ks2, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const addressEY9O0yK = accounts[0]
		const addressDAh6Wsq = accounts[6]
		const addresslz9zsyN = await KPLAYNyv4MWw.unfreeze.call(addressEY9O0yK, {from: accounts[4]});
		const uint256wBV7Ks2 = await KPLAYNyv4MWw.balanceOf.call(addressDAh6Wsq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256wBV7Ks2, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYwzXVTCU = await KPLAY.new({from: accounts[3]});
		const uintYNEYREe = BigInt("1169")
		const addressjhf5Zuq = accounts[1]
		const uintKf0AVgm = BigInt("1582")
		const addressbgzJrGH = accounts[2]
		const addressF8c4W9A = accounts[1]
		const addressPShhUpX = await KPLAYwzXVTCU.burn.call(addressjhf5Zuq, uintYNEYREe, {from: accounts[3]});
		const boolxmeNt1Q = await KPLAYwzXVTCU.transferFrom.call(addressF8c4W9A, addressbgzJrGH, uintKf0AVgm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYwzXVTCU.burn.call(addressjhf5Zuq, uintYNEYREe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAw0keyk = await KPLAY.new({from: accounts[2]});
		const uintoC75b4y = BigInt("981")
		const addresszuEEpcO = accounts[0]
		const addressvx45ul7 = "0x0000000000000000000000000000000000000001"
		const addressQKNb28l = accounts[5]
		const addressU0L7vX = await KPLAYAw0keyk.unlock.call(addresszuEEpcO, uintoC75b4y, {from: accounts[2]});
		const uint256zQZtyHz = await KPLAYAw0keyk.allowance.call(addressQKNb28l, addressvx45ul7, {from: accounts[0]});

		await expect(KPLAYAw0keyk.unlock.call(addresszuEEpcO, uintoC75b4y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYimcS1Qo = await KPLAY.new({from: accounts[4]});
		const addressz6JECTI = accounts[1]
		const uint256XvsPPxd = await KPLAYimcS1Qo.lockCount.call(addressz6JECTI, {from: accounts[1]});
		await KPLAYimcS1Qo.pause.call({from: accounts[3]});

		assert.equal(uint256XvsPPxd, BigInt("0"))
		await expect(KPLAYimcS1Qo.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwzXVTCU = await KPLAY.new({from: accounts[3]});
		const addressBPBgY42 = accounts[3]
		const uintjI8mZkW = BigInt("336")
		const addresstaTIBun = accounts[1]
		const addressImPPtGs = accounts[1]
		const uintFAOJcSE = BigInt("1582")
		const addresszgiD8ug = accounts[1]
		const addressuFvSq4c = accounts[3]
		const addressV03mZpe = await KPLAYwzXVTCU.transferOwnership.call(addressBPBgY42, {from: accounts[3]});
		const boolIXgAR9y = await KPLAYwzXVTCU.transferFrom.call(addressImPPtGs, addresstaTIBun, uintjI8mZkW, {from: accounts[4]});
		const boolxmeNt1Q = await KPLAYwzXVTCU.transferFrom.call(addressuFvSq4c, addresszgiD8ug, uintFAOJcSE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYwzXVTCU.transferFrom.call(addressImPPtGs, addresstaTIBun, uintjI8mZkW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const addressWzyFE3t = accounts[7]
		const uintvxRvlkg = BigInt("1509")
		const addresskGrzCFy = accounts[1]
		const uintth31aZC = BigInt("1159")
		const addressUZ7qa5F = accounts[0]
		const uintAxNvdBj = BigInt("782")
		const addressLTVXx0G = accounts[1]
		const addressG7gzb4H = accounts[5]
		const uint256wBV7Ks2 = await KPLAYNyv4MWw.balanceOf.call(addressWzyFE3t, {from: "0x0000000000000000000000000000000000000001"});
		const boolpG9yeTL = await KPLAYNyv4MWw.mint.call(addresskGrzCFy, uintvxRvlkg, {from: accounts[4]});
		const bool8SnBKI = await KPLAYNyv4MWw.transfer.call(addressUZ7qa5F, uintth31aZC, {from: accounts[1]});
		const booltEGLBNw = await KPLAYNyv4MWw.transferFrom.call(addressG7gzb4H, addressLTVXx0G, uintAxNvdBj, {from: accounts[0]});

		assert.equal(boolpG9yeTL, true)
		assert.equal(uint256wBV7Ks2, BigInt("0"))
		await expect(KPLAYNyv4MWw.transfer.call(addressUZ7qa5F, uintth31aZC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const addressRYaW9Mz = accounts[6]
		const uintcdejoaE = BigInt("268")
		const addressgWoEK1X = accounts[4]
		const uint256wBV7Ks2 = await KPLAYNyv4MWw.balanceOf.call(addressRYaW9Mz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oALnWlP = await KPLAYNyv4MWw.currentTime.call({from: accounts[2]});
		const boolh2Rbb1s = await KPLAYNyv4MWw.increaseAllowance.call(addressgWoEK1X, uintcdejoaE, {from: accounts[3]});

		assert.equal(boolh2Rbb1s, true)
		assert.equal(uint256oALnWlP, BigInt("1630228208"))
		assert.equal(uint256wBV7Ks2, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYNyv4MWw = await KPLAY.new({from: accounts[4]});
		const addressa1hEHrP = accounts[7]
		const uint256wBV7Ks2 = await KPLAYNyv4MWw.balanceOf.call(addressa1hEHrP, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYNyv4MWw.unpause.call({from: accounts[4]});

		assert.equal(uint256wBV7Ks2, BigInt("0"))
		await expect(KPLAYNyv4MWw.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
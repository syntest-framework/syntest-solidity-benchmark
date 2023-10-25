const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOZBEyfRo = await FrogDAO.new({from: accounts[4]});
		const uintTUYHqwR = BigInt("1316")
		const uintvaNDLRN = BigInt("706")
		const uintnFb2H58 = BigInt("271")
		const uintJeB4FKF = BigInt("1981")
		const uintpnMAlAa = BigInt("1896")
		const uintb0sL07N = BigInt("2038")
		const uintdNayItQ = await FrogDAOZBEyfRo.safeDiv.call(uintvaNDLRN, uintTUYHqwR, {from: accounts[2]});
		const uinttwm12qW = await FrogDAOZBEyfRo.safeMul.call(uintJeB4FKF, uintnFb2H58, {from: accounts[3]});
		const uintuJzTEvs = await FrogDAOZBEyfRo.safeDiv.call(uintb0sL07N, uintpnMAlAa, {from: accounts[2]});

		assert.equal(uintdNayItQ, BigInt("0"))
		assert.equal(uinttwm12qW, BigInt("536851"))
		assert.equal(uintuJzTEvs, BigInt("1"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOy0eMMhN = await FrogDAO.new({from: accounts[3]});
		const address3aKxi2 = accounts[4]
		const addressVmkxVGJ = accounts[2]
		const uintzSK4erI = BigInt("372")
		const uintAmp6FHr = BigInt("894")
		const uint7iMTUt = BigInt("1852")
		const addressL5uRs8l = "0x0000000000000000000000000000000000000001"
		const uintHCThXg = await FrogDAOy0eMMhN.balanceOf.call(address3aKxi2, {from: accounts[3]});
		const uintFxxfth = await FrogDAOy0eMMhN.balanceOf.call(addressVmkxVGJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintsrTawLk = await FrogDAOy0eMMhN.totalSupply.call({from: accounts[2]});
		const uintGaequIP = await FrogDAOy0eMMhN.safeSub.call(uintAmp6FHr, uintzSK4erI, {from: accounts[1]});
//		const booltFYESbw = await FrogDAOy0eMMhN.transfer.call(addressL5uRs8l, uint7iMTUt, {from: accounts[0]});

		assert.equal(uintFxxfth, BigInt("0"))
		assert.equal(uintGaequIP, BigInt("522"))
		assert.equal(uintHCThXg, BigInt("0"))
		assert.equal(uintsrTawLk, BigInt("1000000000000000000000000"))
		await expect(FrogDAOy0eMMhN.transfer.call(addressL5uRs8l, uint7iMTUt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOvAvI1Wl = await FrogDAO.new({from: accounts[2]});
		const addressJMyRxS = accounts[3]
		const uintwrtPFY4 = BigInt("1464")
		const uinttwNXs9B = BigInt("1236")
		const uintCL9vGF = await FrogDAOvAvI1Wl.totalSupply.call({from: accounts[0]});
		const uintmX4VuFE = await FrogDAOvAvI1Wl.balanceOf.call(addressJMyRxS, {from: accounts[5]});
		const uintoQ9HiCV = await FrogDAOvAvI1Wl.safeDiv.call(uinttwNXs9B, uintwrtPFY4, {from: accounts[1]});

		assert.equal(uintCL9vGF, BigInt("1000000000000000000000000"))
		assert.equal(uintmX4VuFE, BigInt("0"))
		assert.equal(uintoQ9HiCV, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOYXoRl44 = await FrogDAO.new({from: accounts[4]});
		const addressYbwZ3Eb = accounts[3]
		const uintfe5OHnR = BigInt("1221")
		const uintK98RxqL = BigInt("1401")
		const uintU1WcXX8 = BigInt("1272")
		const addressJ10z3c = accounts[0]
		const addressTbfRn7E = accounts[0]
		const uintDdf4ZH6 = BigInt("1548")
		const uintNgcgKMG = BigInt("1649")
		const uintrtLDjsF = await FrogDAOYXoRl44.balanceOf.call(addressYbwZ3Eb, {from: accounts[0]});
		const uinthdor4Qh = await FrogDAOYXoRl44.safeMul.call(uintK98RxqL, uintfe5OHnR, {from: accounts[4]});
//		const boolHVJ4DAS = await FrogDAOYXoRl44.transferFrom.call(addressTbfRn7E, addressJ10z3c, uintU1WcXX8, {from: accounts[3]});
//		const uinttxphHn = await FrogDAOYXoRl44.safeDiv.call(uintNgcgKMG, uintDdf4ZH6, {from: accounts[5]});
//		const uintWnl1zxI = await FrogDAOYXoRl44.totalSupply.call({from: accounts[1]});

		assert.equal(uinthdor4Qh, BigInt("1710621"))
		assert.equal(uintrtLDjsF, BigInt("0"))
		await expect(FrogDAOYXoRl44.transferFrom.call(addressTbfRn7E, addressJ10z3c, uintU1WcXX8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOxeXDjjn = await FrogDAO.new({from: accounts[1]});
		const addressCmVTQDF = "0x0000000000000000000000000000000000000001"
		const addressFU9mvdc = accounts[3]
		const addressgfRd0K = accounts[0]
		const addressjSLCFuQ = accounts[5]
		const addressMItcIRw = accounts[4]
		const addresspf4LIB5 = accounts[2]
		const uinttlIzMAM = BigInt("1284")
		const addressL9jO8YM = accounts[4]
		const uintR7CNQfn = BigInt("450")
		const uintO1zQW4o = BigInt("1400")
		const uintDyqBR58 = await FrogDAOxeXDjjn.allowance.call(addressFU9mvdc, addressCmVTQDF, {from: accounts[0]});
		const uintGJaeaJK = await FrogDAOxeXDjjn.allowance.call(addressjSLCFuQ, addressgfRd0K, {from: accounts[4]});
		const uintllsupp7 = await FrogDAOxeXDjjn.allowance.call(addresspf4LIB5, addressMItcIRw, {from: accounts[5]});
//		const boolnc6ieHC = await FrogDAOxeXDjjn.transfer.call(addressL9jO8YM, uinttlIzMAM, {from: accounts[4]});
//		const uintuEjG5m = await FrogDAOxeXDjjn.safeSub.call(uintO1zQW4o, uintR7CNQfn, {from: accounts[1]});
//		const uintpCYtrVM = await FrogDAOxeXDjjn.totalSupply.call({from: accounts[2]});

		assert.equal(uintDyqBR58, BigInt("0"))
		assert.equal(uintGJaeaJK, BigInt("0"))
		assert.equal(uintllsupp7, BigInt("0"))
		await expect(FrogDAOxeXDjjn.transfer.call(addressL9jO8YM, uinttlIzMAM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOr40Oghm = await FrogDAO.new({from: accounts[1]});
		const addresszocyUQ5 = accounts[5]
		const uintvrb5UhQ = BigInt("176")
		const uintOt7cQB = BigInt("1037")
		const uintqJf8hrP = BigInt("1501")
		const addressgDO1JXT = accounts[3]
		const uintzgUTyZ = BigInt("1729")
		const uintjCROKUK = BigInt("1081")
		const uintAaIGeYS = BigInt("1098")
		const addresszOjqp0 = accounts[1]
		const uintOV3BcYz = BigInt("1513")
		const uintNSPkdD9 = BigInt("1149")
		const uintNO2Xzz = BigInt("636")
		const uintqNnLWmA = BigInt("196")
		const uintG8JNdki = await FrogDAOr40Oghm.totalSupply.call({from: accounts[2]});
		const uintg10lqO = await FrogDAOr40Oghm.balanceOf.call(addresszocyUQ5, {from: accounts[5]});
		const uintBsS8euo = await FrogDAOr40Oghm.safeMul.call(uintOt7cQB, uintvrb5UhQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolh9lSJa = await FrogDAOr40Oghm.approve.call(addressgDO1JXT, uintqJf8hrP, {from: accounts[3]});
		const uintqyT0Teb = await FrogDAOr40Oghm.safeDiv.call(uintjCROKUK, uintzgUTyZ, {from: accounts[0]});
//		const boolZkhtavV = await FrogDAOr40Oghm.transfer.call(addresszOjqp0, uintAaIGeYS, {from: accounts[2]});
//		const uintVVtoZw6 = await FrogDAOr40Oghm.safeMul.call(uintNSPkdD9, uintOV3BcYz, {from: accounts[0]});
//		const uintLjUYM4e = await FrogDAOr40Oghm.safeSub.call(uintqNnLWmA, uintNO2Xzz, {from: accounts[1]});

		assert.equal(boolh9lSJa, true)
		assert.equal(uintBsS8euo, BigInt("182512"))
		assert.equal(uintG8JNdki, BigInt("1000000000000000000000000"))
		assert.equal(uintg10lqO, BigInt("0"))
		assert.equal(uintqyT0Teb, BigInt("0"))
		await expect(FrogDAOr40Oghm.transfer.call(addresszOjqp0, uintAaIGeYS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOYXoRl44 = await FrogDAO.new({from: accounts[4]});
		const addresshCxXjrC = accounts[3]
		const uint4Sb6BP = BigInt("1221")
		const uintvDLuNP0 = BigInt("1312")
		const uintCOLnL4u = BigInt("1976")
		const uintxeuyV1 = BigInt("1130")
		const uintj2REJYM = BigInt("1272")
		const addressIRAfFR = accounts[0]
		const addressCHMi6Fr = accounts[0]
		const uintKg5EQN = BigInt("71")
		const uintdamHIYD = BigInt("61")
		const uintrtLDjsF = await FrogDAOYXoRl44.balanceOf.call(addresshCxXjrC, {from: accounts[0]});
		const uinthdor4Qh = await FrogDAOYXoRl44.safeMul.call(uintvDLuNP0, uint4Sb6BP, {from: accounts[4]});
		const uintp9YW9Z = await FrogDAOYXoRl44.safeAdd.call(uintxeuyV1, uintCOLnL4u, {from: accounts[3]});
//		const boolHVJ4DAS = await FrogDAOYXoRl44.transferFrom.call(addressCHMi6Fr, addressIRAfFR, uintj2REJYM, {from: accounts[3]});
//		const uintt8cQJUu = await FrogDAOYXoRl44.safeMul.call(uintdamHIYD, uintKg5EQN, {from: accounts[0]});
//		const uintWnl1zxI = await FrogDAOYXoRl44.totalSupply.call({from: accounts[1]});

		assert.equal(uinthdor4Qh, BigInt("1601952"))
		assert.equal(uintp9YW9Z, BigInt("3106"))
		assert.equal(uintrtLDjsF, BigInt("0"))
		await expect(FrogDAOYXoRl44.transferFrom.call(addressCHMi6Fr, addressIRAfFR, uintj2REJYM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOiCQjCTg = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAyzelY = BigInt("985")
		const uintAm2gJT = BigInt("645")
		const uintpFETKNg = BigInt("304")
		const addresst3oArsa = accounts[1]
		const uintw9roXYT = await FrogDAOiCQjCTg.safeMul.call(uintAm2gJT, uintAyzelY, {from: accounts[5]});
		const uintrDkszY5 = await FrogDAOiCQjCTg.totalSupply.call({from: accounts[2]});
		const boolsCBXXK = await FrogDAOiCQjCTg.approve.call(addresst3oArsa, uintpFETKNg, {from: accounts[4]});
	});
})
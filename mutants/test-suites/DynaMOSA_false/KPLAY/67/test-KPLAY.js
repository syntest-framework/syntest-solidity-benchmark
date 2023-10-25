const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYMonkBMd = await KPLAY.new({from: accounts[3]});
		const uintm4tVE4K = BigInt("1180")
		const addressTkezD5H = accounts[3]
		const addressMjetgu = accounts[1]
		const uinthgd8z5V = BigInt("681")
		const addressY2gMrfa = accounts[3]
		const uintCeVwvxh = BigInt("1495")
		const addressLuifugh = accounts[1]
		const addressntLwf4t = "0x0000000000000000000000000000000000000001"
		const uintSv71sx = BigInt("1503")
		const addresspSFrxMK = accounts[0]
//		const boolitK7qAl = await KPLAYMonkBMd.decreaseAllowance.call(addressTkezD5H, uintm4tVE4K, {from: accounts[2]});
//		const uint256WUMuN3S = await KPLAYMonkBMd.lockCount.call(addressMjetgu, {from: accounts[1]});
//		await KPLAYMonkBMd.whenNotPaused.call({from: accounts[3]});
//		const booluGg88xZ = await KPLAYMonkBMd.mint.call(addressY2gMrfa, uinthgd8z5V, {from: accounts[4]});
//		const boolfdPOg3A = await KPLAYMonkBMd.transferFrom.call(addressntLwf4t, addressLuifugh, uintCeVwvxh, {from: accounts[3]});
//		const addressBx8Px0j = await KPLAYMonkBMd.burn.call(addresspSFrxMK, uintSv71sx, {from: accounts[4]});

		await expect(KPLAYMonkBMd.decreaseAllowance.call(addressTkezD5H, uintm4tVE4K, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY0e8WdC = await KPLAY.new({from: accounts[1]});
//		await KPLAY0e8WdC.whenNotPaused.call({from: accounts[1]});
//		await KPLAY0e8WdC.renounceOwnership.call({from: accounts[2]});
//		await KPLAY0e8WdC.onlyOwner.call({from: accounts[4]});
//		await KPLAY0e8WdC.renounceOwnership.call({from: accounts[0]});

		await expect(KPLAY0e8WdC.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addressGn40rsi = accounts[1]
		const uintoRRVBUH = BigInt("29")
		const addressRIYRkqL = accounts[3]
		const uintuXcr7vm = BigInt("326")
		const addressjGJbklL = accounts[4]
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressGn40rsi, {from: accounts[4]});
//		const boolBeLCOU9 = await KPLAYjgrUKs.transfer.call(addressRIYRkqL, uintoRRVBUH, {from: accounts[4]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(addressjGJbklL, uintuXcr7vm, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(uint256NXw0X6z, BigInt("0"))
		await expect(KPLAYjgrUKs.transfer.call(addressRIYRkqL, uintoRRVBUH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLsi3Gea = await KPLAY.new({from: accounts[2]});
		const addresstCYbheb = accounts[3]
		const addressJ0If7rY = accounts[0]
//		await KPLAYLsi3Gea.renounceOwnership.call({from: accounts[0]});
//		await KPLAYLsi3Gea.whenPaused.call({from: accounts[0]});
//		const addresswApWkvM = await KPLAYLsi3Gea.transferOwnership.call(addresstCYbheb, {from: accounts[4]});
//		const uint256Wwpq9tO = await KPLAYLsi3Gea.lockCount.call(addressJ0If7rY, {from: accounts[3]});

		await expect(KPLAYLsi3Gea.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaNLXiUk = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDr3ArXr = BigInt("1255")
		const addressteOwfnd = "0x0000000000000000000000000000000000000001"
		const uintjdelSNG = BigInt("1756")
		const uintDXo2LW6 = BigInt("1119")
		const addresssBals1u = accounts[1]
		const addressXNd0fuL = await KPLAYaNLXiUk.burn.call(addressteOwfnd, uintDr3ArXr, {from: accounts[0]});
		const addresszu9aSLU = await KPLAYaNLXiUk.lockAfter.call(addresssBals1u, uintDXo2LW6, uintjdelSNG, {from: accounts[2]});
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const uintdlfZt4A = BigInt("232")
		const addressnKO78qq = accounts[1]
		const addressOAigN6Z = accounts[1]
		const uintiCst49s = BigInt("29")
		const addressbTTWGoK = accounts[3]
		const uintzDKefYe = BigInt("326")
		const addressrUq3PkN = accounts[5]
//		await KPLAYjgrUKs.lockState.call(addressnKO78qq, uintdlfZt4A, {from: accounts[3]});
//		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressOAigN6Z, {from: accounts[4]});
//		const boolBeLCOU9 = await KPLAYjgrUKs.transfer.call(addressbTTWGoK, uintiCst49s, {from: accounts[4]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(addressrUq3PkN, uintzDKefYe, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		await expect(KPLAYjgrUKs.lockState.call(addressnKO78qq, uintdlfZt4A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvLsqvTg = await KPLAY.new({from: accounts[3]});
		const uintkrkCyo = BigInt("674")
		const uintLlkRzWI = BigInt("1862")
		const addressjRvZjIV = accounts[0]
		const uintN6T0BUx = BigInt("13")
		const addressAUDIz89 = accounts[1]
		const addresskd4LrpC = accounts[1]
		const uintmOFA2KT = BigInt("1239")
		const addresss8KJFSY = accounts[1]
		const boolx5ymS1k = await KPLAYvLsqvTg.transferWithLockAfter.call(addressjRvZjIV, uintLlkRzWI, uintkrkCyo, {from: accounts[3]});
//		const boolv3gHjuD = await KPLAYvLsqvTg.decreaseAllowance.call(addressAUDIz89, uintN6T0BUx, {from: accounts[3]});
//		const addressdjXjfcN = await KPLAYvLsqvTg.unfreeze.call(addresskd4LrpC, {from: accounts[3]});
//		const boolhRx4E8 = await KPLAYvLsqvTg.increaseAllowance.call(addresss8KJFSY, uintmOFA2KT, {from: accounts[3]});

		assert.equal(boolx5ymS1k, true)
		await expect(KPLAYvLsqvTg.decreaseAllowance.call(addressAUDIz89, uintN6T0BUx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHcnMn3h = await KPLAY.new({from: accounts[1]});
		const uintJMBG0LS = BigInt("1211")
		const uintm1POfc2 = BigInt("151")
		const addressBIDt38 = accounts[0]
		const uintQm8U76u = BigInt("1580")
		const addressCbngQGN = accounts[2]
		const uintJWuDGc = BigInt("530")
		const uintoaUxBtF = BigInt("189")
		const addressN2KgEuE = accounts[3]
		const uintHNbC4H6 = BigInt("218")
		const addressScAsRUN = accounts[3]
		const addressUxlprS7 = accounts[1]
		const uint256Qh8Fuyl = await KPLAYHcnMn3h.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolMjwtdGb = await KPLAYHcnMn3h.transferWithLock.call(addressBIDt38, uintm1POfc2, uintJMBG0LS, {from: accounts[5]});
//		const boolCx80YgC = await KPLAYHcnMn3h.transfer.call(addressCbngQGN, uintQm8U76u, {from: accounts[3]});
//		const addressn1kQMLI = await KPLAYHcnMn3h.lockAfter.call(addressN2KgEuE, uintoaUxBtF, uintJWuDGc, {from: accounts[4]});
//		const booljA2fvCn = await KPLAYHcnMn3h.transfer.call(addressScAsRUN, uintHNbC4H6, {from: accounts[1]});
//		const uint256dmD2JW = await KPLAYHcnMn3h.lockCount.call(addressUxlprS7, {from: accounts[2]});
//		await KPLAYHcnMn3h.unpause.call({from: accounts[2]});

		assert.equal(uint256Qh8Fuyl, BigInt("1630227623"))
		await expect(KPLAYHcnMn3h.transferWithLock.call(addressBIDt38, uintm1POfc2, uintJMBG0LS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYszLWald = await KPLAY.new({from: accounts[4]});
		const uintVAryqM = BigInt("1628")
		const uintneDrEMn = BigInt("308")
		const addressLi4eEy = "0x0000000000000000000000000000000000000001"
		const addressKwkVwRo = accounts[0]
//		const addressC44DaF6 = await KPLAYszLWald.lock.call(addressLi4eEy, uintneDrEMn, uintVAryqM, {from: accounts[4]});
//		const addressAHH7E1x = await KPLAYszLWald.unfreeze.call(addressKwkVwRo, {from: accounts[5]});

		await expect(KPLAYszLWald.lock.call(addressLi4eEy, uintneDrEMn, uintVAryqM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addressIPRejjH = accounts[1]
		const uintPkWFOH = BigInt("472")
		const addressh4RJDY = accounts[0]
		const addressxiTU3P7 = accounts[3]
		const uintRYe4Xo = BigInt("29")
		const addresssQ0G3cr = accounts[3]
		const uintW5gAktk = BigInt("326")
		const addressL3LEc0y = accounts[5]
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressIPRejjH, {from: accounts[4]});
//		const boolorcwzId = await KPLAYjgrUKs.transferFrom.call(addressxiTU3P7, addressh4RJDY, uintPkWFOH, {from: accounts[2]});
//		const boolBeLCOU9 = await KPLAYjgrUKs.transfer.call(addresssQ0G3cr, uintRYe4Xo, {from: accounts[4]});
//		const uint256XvNOSg8 = await KPLAYjgrUKs.totalSupply.call({from: accounts[1]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(addressL3LEc0y, uintW5gAktk, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(uint256NXw0X6z, BigInt("0"))
		await expect(KPLAYjgrUKs.transferFrom.call(addressxiTU3P7, addressh4RJDY, uintPkWFOH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhcvjge = await KPLAY.new({from: accounts[3]});
		const uintOtVJRsx = BigInt("734")
		const addresskB5lir = accounts[2]
		const uintnKXGyEX = BigInt("872")
		const addressnZb19m1 = accounts[2]
		const addresskuPsD9q = accounts[4]
		const uintjW3LHfy = BigInt("684")
		const addressB9SDBt = accounts[1]
//		await KPLAYhcvjge.pause.call({from: accounts[3]});
//		const boolMqE89sJ = await KPLAYhcvjge.transfer.call(addresskB5lir, uintOtVJRsx, {from: "0x0000000000000000000000000000000000000001"});
//		const boolR1xdxrC = await KPLAYhcvjge.transferFrom.call(addresskuPsD9q, addressnZb19m1, uintnKXGyEX, {from: accounts[4]});
//		const addressitrhzmb = await KPLAYhcvjge.burn.call(addressB9SDBt, uintjW3LHfy, {from: accounts[4]});

		await expect(KPLAYhcvjge.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAr3LtDK = await KPLAY.new({from: accounts[4]});
		const uintUY4TGyT = BigInt("1552")
		const addressnnC3CNR = accounts[4]
		const addressWVheBkc = accounts[4]
		const uintfBISVtY = BigInt("1155")
		const uintAHTscXn = BigInt("1077")
		const addressPg6WgQO = accounts[3]
		const boolpEYZIw2 = await KPLAYAr3LtDK.increaseAllowance.call(addressnnC3CNR, uintUY4TGyT, {from: accounts[3]});
		const uint256F7glPuz = await KPLAYAr3LtDK.balanceOf.call(addressWVheBkc, {from: accounts[3]});
//		await KPLAYAr3LtDK.unpause.call({from: accounts[3]});
//		const boolecbTNy4 = await KPLAYAr3LtDK.transferWithLock.call(addressPg6WgQO, uintAHTscXn, uintfBISVtY, {from: accounts[2]});

		assert.equal(boolpEYZIw2, true)
		assert.equal(uint256F7glPuz, BigInt("10000000000000000"))
		await expect(KPLAYAr3LtDK.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addresscrO3oi = accounts[1]
		const addresstTNsEE = accounts[2]
		const uintuE3Lp5S = BigInt("326")
		const addresswZ70ij = accounts[5]
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addresscrO3oi, {from: accounts[4]});
		const booltr5v9Gt = await KPLAYjgrUKs.isFrozen.call(addresstTNsEE, {from: accounts[0]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(addresswZ70ij, uintuE3Lp5S, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[2]});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(booltr5v9Gt, false)
		assert.equal(uint256NXw0X6z, BigInt("0"))
		await expect(KPLAYjgrUKs.burn.call(addresswZ70ij, uintuE3Lp5S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addressccz1vio = "0x0000000000000000000000000000000000000001"
		const addressdL0A1Lf = accounts[1]
		const uintjAwPlKC = BigInt("472")
		const addressC0thE2j = accounts[0]
		const addressvmUgof = accounts[3]
		const uintdSJehQa = BigInt("29")
		const addresspkb7XDh = accounts[3]
		const uintiCuqE3h = BigInt("326")
		const addressAicZ02 = accounts[5]
		const uint256TIaHWnr = await KPLAYjgrUKs.lockCount.call(addressccz1vio, {from: accounts[0]});
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressdL0A1Lf, {from: accounts[4]});
//		const boolorcwzId = await KPLAYjgrUKs.transferFrom.call(addressvmUgof, addressC0thE2j, uintjAwPlKC, {from: accounts[2]});
//		const boolBeLCOU9 = await KPLAYjgrUKs.transfer.call(addresspkb7XDh, uintdSJehQa, {from: accounts[4]});
//		const uint256XvNOSg8 = await KPLAYjgrUKs.totalSupply.call({from: accounts[1]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(addressAicZ02, uintiCuqE3h, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(uint256NXw0X6z, BigInt("0"))
		assert.equal(uint256TIaHWnr, BigInt("0"))
		await expect(KPLAYjgrUKs.transferFrom.call(addressvmUgof, addressC0thE2j, uintjAwPlKC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyVw8RaH = await KPLAY.new({from: accounts[3]});
		const uintfDucapN = BigInt("1564")
		const addressCVfwvl = accounts[4]
		const uintyt9sPIb = BigInt("1867")
		const addressCLXFr4x = accounts[4]
		const addressI4XWAko = accounts[5]
		const addressUgNBFAo = accounts[2]
		const boolBjjBn73 = await KPLAYyVw8RaH.approve.call(addressCVfwvl, uintfDucapN, {from: accounts[4]});
//		await KPLAYyVw8RaH.whenNotFrozen.call({from: accounts[3]});
//		const addressby4ieO = await KPLAYyVw8RaH.burn.call(addressCLXFr4x, uintyt9sPIb, {from: accounts[4]});
//		const addressGLoM8iT = await KPLAYyVw8RaH.transferOwnership.call(addressI4XWAko, {from: accounts[3]});
//		const uint256C8ALkjY = await KPLAYyVw8RaH.lockCount.call(addressUgNBFAo, {from: accounts[4]});
//		const uint256DUmnLrM = await KPLAYyVw8RaH.currentTime.call({from: accounts[0]});

		assert.equal(boolBjjBn73, true)
		await expect(KPLAYyVw8RaH.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addressexnGpmK = accounts[1]
		const addressjj3tEVd = accounts[2]
		const uintTb8P1du = BigInt("326")
		const addressSZjp2Na = accounts[5]
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressexnGpmK, {from: accounts[4]});
		const addressQepNpfJ = await KPLAYjgrUKs.transferOwnership.call(addressjj3tEVd, {from: accounts[3]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(addressSZjp2Na, uintTb8P1du, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(uint256NXw0X6z, BigInt("0"))
		await expect(KPLAYjgrUKs.burn.call(addressSZjp2Na, uintTb8P1du, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addresszLqXS1E = accounts[1]
		const addressurbub6 = "0x0000000000000000000000000000000000000001"
		const uintfJfdT1V = BigInt("472")
		const addresshcVL1d = accounts[0]
		const addressWCykffq = accounts[3]
		const uintXavs9dp = BigInt("29")
		const addresscpmQe6u = accounts[3]
		const uintYvV6C1k = BigInt("328")
		const address0D7x1Z = accounts[5]
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addresszLqXS1E, {from: accounts[4]});
		const addressYfjAx4j = await KPLAYjgrUKs.unfreeze.call(addressurbub6, {from: accounts[3]});
//		await KPLAYjgrUKs.renounceOwnership.call({from: accounts[0]});
//		const boolorcwzId = await KPLAYjgrUKs.transferFrom.call(addressWCykffq, addresshcVL1d, uintfJfdT1V, {from: accounts[2]});
//		const boolBeLCOU9 = await KPLAYjgrUKs.transfer.call(addresscpmQe6u, uintXavs9dp, {from: accounts[4]});
//		const uint256XvNOSg8 = await KPLAYjgrUKs.totalSupply.call({from: accounts[1]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(address0D7x1Z, uintYvV6C1k, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(uint256NXw0X6z, BigInt("0"))
		await expect(KPLAYjgrUKs.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYPGvx6wJ = await KPLAY.new({from: accounts[0]});
		const addressPROHI8N = accounts[3]
		const addressv3kzpl1 = accounts[4]
		const addressBtBRfuA = accounts[4]
		const uint256mBNMNmT = await KPLAYPGvx6wJ.allowance.call(addressv3kzpl1, addressPROHI8N, {from: accounts[0]});
//		const addressyVchipb = await KPLAYPGvx6wJ.transferOwnership.call(addressBtBRfuA, {from: accounts[2]});
//		await KPLAYPGvx6wJ.whenPaused.call({from: accounts[1]});

		assert.equal(uint256mBNMNmT, BigInt("0"))
		await expect(KPLAYPGvx6wJ.transferOwnership.call(addressBtBRfuA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addressmq7dtby = accounts[2]
		const uintERoAgdt = BigInt("316")
		const addressCb7WTgJ = accounts[4]
		const uintqyWO5Ze = BigInt("29")
		const addressugxV6ha = accounts[3]
		const uintUR4V2m = BigInt("326")
		const addresssbOmdi = accounts[4]
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressmq7dtby, {from: accounts[4]});
		const boolRgQosOs = await KPLAYjgrUKs.mint.call(addressCb7WTgJ, uintERoAgdt, {from: accounts[3]});
//		const boolBeLCOU9 = await KPLAYjgrUKs.transfer.call(addressugxV6ha, uintqyWO5Ze, {from: accounts[4]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(addresssbOmdi, uintUR4V2m, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(boolRgQosOs, true)
		assert.equal(uint256NXw0X6z, BigInt("0"))
		await expect(KPLAYjgrUKs.transfer.call(addressugxV6ha, uintqyWO5Ze, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYnfjv7u = await KPLAY.new({from: accounts[3]});
		const addressjQUZYOk = accounts[5]
		const uintljUXL9R = BigInt("1757")
		const addressszExczH = accounts[2]
		const addressgxjFNca = accounts[0]
		const uintf9ZWG5 = BigInt("1475")
		const uintXmQXco5 = BigInt("124")
		const addresszQEAC6i = accounts[4]
		const addressmqQonD = accounts[1]
		const addressAr7P6YS = accounts[1]
		const addressXeZcoH8 = await KPLAYnfjv7u.freeze.call(addressjQUZYOk, {from: accounts[3]});
//		const boolp7T0pE0 = await KPLAYnfjv7u.transferFrom.call(addressgxjFNca, addressszExczH, uintljUXL9R, {from: accounts[4]});
//		const boolVstohM8 = await KPLAYnfjv7u.transferWithLock.call(addresszQEAC6i, uintXmQXco5, uintf9ZWG5, {from: accounts[4]});
//		await KPLAYnfjv7u.onlyOwner.call({from: accounts[3]});
//		const uint256Z23XDK = await KPLAYnfjv7u.allowance.call(addressAr7P6YS, addressmqQonD, {from: accounts[4]});

		await expect(KPLAYnfjv7u.transferFrom.call(addressgxjFNca, addressszExczH, uintljUXL9R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLFhIO29 = await KPLAY.new({from: accounts[4]});
		const addressPXjWSZq = accounts[0]
		const uintqXjIK7o = BigInt("1233")
		const uintNdYTrdg = BigInt("557")
		const addresswZLJDW3 = accounts[4]
		const addressecpxwRq = accounts[1]
		const uintyHWoT8H = BigInt("99")
		const addressQC1XlXN = accounts[1]
		const uint256SwRK7RF = await KPLAYLFhIO29.balanceOf.call(addressPXjWSZq, {from: accounts[4]});
		const uint2565kAHoD = await KPLAYLFhIO29.afterTime.call(uintqXjIK7o, {from: accounts[4]});
//		await KPLAYLFhIO29.renounceOwnership.call({from: accounts[5]});
//		const booldOneEwA = await KPLAYLFhIO29.transferFrom.call(addressecpxwRq, addresswZLJDW3, uintNdYTrdg, {from: accounts[4]});
//		await KPLAYLFhIO29.lockState.call(addressQC1XlXN, uintyHWoT8H, {from: accounts[2]});

		assert.equal(uint2565kAHoD, BigInt("1630228862"))
		assert.equal(uint256SwRK7RF, BigInt("0"))
		await expect(KPLAYLFhIO29.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const uintnmW5HIf = BigInt("1568")
		const addressMY3o3EL = accounts[1]
		const addressS1LEy1a = accounts[2]
		const uintPlaXIhO = BigInt("1420")
		const addressFjYwSoh = "0x0000000000000000000000000000000000000001"
		const uintEowCJzM = BigInt("326")
		const addresscw2yHNd = accounts[4]
		const uintWb0KINi = BigInt("625")
		const addressCqtuf3l = accounts[2]
		const addressgThdU2T = accounts[0]
		const boolrVZMlT9 = await KPLAYjgrUKs.approve.call(addressMY3o3EL, uintnmW5HIf, {from: accounts[0]});
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressS1LEy1a, {from: accounts[4]});
//		await KPLAYjgrUKs.renounceOwnership.call({from: accounts[3]});
//		const boolJue0tHB = await KPLAYjgrUKs.mint.call(addressFjYwSoh, uintPlaXIhO, {from: accounts[1]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(addresscw2yHNd, uintEowCJzM, {from: "0x0000000000000000000000000000000000000001"});
//		const boolXrmorkK = await KPLAYjgrUKs.transferFrom.call(addressgThdU2T, addressCqtuf3l, uintWb0KINi, {from: accounts[5]});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(boolrVZMlT9, true)
		assert.equal(uint256NXw0X6z, BigInt("0"))
		await expect(KPLAYjgrUKs.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addresssJ9lIie = accounts[5]
		const uintJ8iMo3e = BigInt("175")
		const address3sapvr = accounts[2]
		const addressp4sM9hA = accounts[1]
		const uintbbIAdMa = BigInt("63")
		const addresslxQAwzf = accounts[3]
		const uintCuxfbXU = BigInt("326")
		const addresss21tbFz = accounts[5]
		const uint256QUk8oT2 = await KPLAYjgrUKs.lockCount.call(addresssJ9lIie, {from: accounts[0]});
//		const addressqLBJzY5 = await KPLAYjgrUKs.unlock.call(address3sapvr, uintJ8iMo3e, {from: accounts[3]});
//		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressp4sM9hA, {from: accounts[4]});
//		const boolBeLCOU9 = await KPLAYjgrUKs.transfer.call(addresslxQAwzf, uintbbIAdMa, {from: accounts[4]});
//		const addressDFMDF9j = await KPLAYjgrUKs.burn.call(addresss21tbFz, uintCuxfbXU, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(uint256QUk8oT2, BigInt("0"))
		await expect(KPLAYjgrUKs.unlock.call(address3sapvr, uintJ8iMo3e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addressqTVoX7q = accounts[3]
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressqTVoX7q, {from: accounts[4]});
		const uint256ISjbwo2 = await KPLAYjgrUKs.totalSupply.call({from: accounts[4]});

		assert.equal(uint256ISjbwo2, BigInt("10000000000000000"))
		assert.equal(uint256NXw0X6z, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYuNzEjNl = await KPLAY.new({from: accounts[3]});
		const uintU5mUFTU = BigInt("426")
		const addressmJHsZpW = accounts[1]
		const addressuPhHddK = accounts[5]
		const uint8TAzkw = BigInt("287")
		const addressjMTvylu = accounts[3]
		const uintDNb4KTW = BigInt("22")
		const addresskb71wES = accounts[5]
		const addressyQwAy1 = accounts[3]
		const booltabQHEw = await KPLAYuNzEjNl.approve.call(addressmJHsZpW, uintU5mUFTU, {from: accounts[3]});
		const uint2567GCwnk = await KPLAYuNzEjNl.balanceOf.call(addressuPhHddK, {from: accounts[4]});
		const addressx9L4K8j = await KPLAYuNzEjNl.burn.call(addressjMTvylu, uint8TAzkw, {from: accounts[3]});
//		const boolOTFiF9k = await KPLAYuNzEjNl.transferFrom.call(addressyQwAy1, addresskb71wES, uintDNb4KTW, {from: accounts[2]});

		assert.equal(booltabQHEw, true)
		assert.equal(uint2567GCwnk, BigInt("0"))
		await expect(KPLAYuNzEjNl.transferFrom.call(addressyQwAy1, addresskb71wES, uintDNb4KTW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const uintpmkGkAv = BigInt("528")
		const uintcGU3ux9 = BigInt("1202")
		const addressMRplHa = accounts[2]
		const addressHYy3bgN = accounts[3]
//		const addressLC4Cyqi = await KPLAYjgrUKs.lockAfter.call(addressMRplHa, uintcGU3ux9, uintpmkGkAv, {from: accounts[3]});
//		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressHYy3bgN, {from: accounts[4]});

		await expect(KPLAYjgrUKs.lockAfter.call(addressMRplHa, uintcGU3ux9, uintpmkGkAv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const uintS6cSJyL = BigInt("418")
		const uintsL88AWa = BigInt("1136")
		const addressrPRjU2J = accounts[1]
		const uintRb3HZP = BigInt("1651")
		const addresslqpFiJh = accounts[1]
		const addressOfwy2jY = accounts[3]
		const boolpW3c3hq = await KPLAYjgrUKs.transferWithLock.call(addressrPRjU2J, uintsL88AWa, uintS6cSJyL, {from: accounts[3]});
		const boolju7i07K = await KPLAYjgrUKs.approve.call(addresslqpFiJh, uintRb3HZP, {from: accounts[2]});
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressOfwy2jY, {from: accounts[4]});
//		await KPLAYjgrUKs.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolju7i07K, true)
		assert.equal(boolpW3c3hq, true)
		assert.equal(uint256NXw0X6z, BigInt("10000000000000000"))
		await expect(KPLAYjgrUKs.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addressCSP9sP4 = accounts[0]
		const addressuNRcf9n = accounts[3]
		const uintb0G0mjg = BigInt("188")
		const uintRwx7ER1 = BigInt("895")
		const addresstHelyj7 = accounts[1]
		const uint256DUrNt9l = await KPLAYjgrUKs.lockCount.call(addressCSP9sP4, {from: accounts[1]});
		const uint256NXw0X6z = await KPLAYjgrUKs.balanceOf.call(addressuNRcf9n, {from: accounts[4]});
//		await KPLAYjgrUKs.unpause.call({from: accounts[3]});
//		const addressCsSzdNB = await KPLAYjgrUKs.lockAfter.call(addresstHelyj7, uintRwx7ER1, uintb0G0mjg, {from: accounts[5]});

		assert.equal(uint256DUrNt9l, BigInt("0"))
		assert.equal(uint256NXw0X6z, BigInt("10000000000000000"))
		await expect(KPLAYjgrUKs.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjgrUKs = await KPLAY.new({from: accounts[3]});
		const addressku4hZwW = accounts[6]
		const addressts3M3wV = accounts[0]
		const addresshKNu3Jw = accounts[4]
		const addressSZVbliI = accounts[5]
		const uinthTJwpfp = BigInt("1899")
		const addressQPd6SK5 = "0x0000000000000000000000000000000000000000"
		const uintJA9SrO = BigInt("175")
		const addressIy4aAqk = accounts[3]
		const uint256QUk8oT2 = await KPLAYjgrUKs.lockCount.call(addressku4hZwW, {from: accounts[0]});
		const uint256oq9lGIN = await KPLAYjgrUKs.lockCount.call(addressts3M3wV, {from: accounts[1]});
		const boolColYHZL = await KPLAYjgrUKs.isFrozen.call(addresshKNu3Jw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UaxOU7V = await KPLAYjgrUKs.balanceOf.call(addressSZVbliI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzbTRl9h = await KPLAYjgrUKs.transfer.call(addressQPd6SK5, uinthTJwpfp, {from: accounts[3]});
//		const addressqLBJzY5 = await KPLAYjgrUKs.unlock.call(addressIy4aAqk, uintJA9SrO, {from: accounts[3]});
//		await KPLAYjgrUKs.whenPaused.call({from: accounts[3]});

		assert.equal(boolColYHZL, false)
		assert.equal(uint256QUk8oT2, BigInt("0"))
		assert.equal(uint256UaxOU7V, BigInt("0"))
		assert.equal(uint256oq9lGIN, BigInt("0"))
		await expect(KPLAYjgrUKs.transfer.call(addressQPd6SK5, uinthTJwpfp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
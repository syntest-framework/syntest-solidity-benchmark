const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const uintKWu4n6 = BigInt("809")
		const uintzFvbujT = BigInt("612")
		const byteWnSUQGw = "0x07151a1a171a19151f020d1806161a1b0401160b1e030c05041a010c11011f13"
		const uintTPbUX70 = BigInt("1578")
		const addressmd3pjfB = accounts[1]
//		const boolb8gCnu = await ReviveeCfiVue.lock.call(byteWnSUQGw, uintzFvbujT, uintKWu4n6, {from: accounts[3]});
//		const boolWIdbhJQ = await ReviveeCfiVue.approve.call(addressmd3pjfB, uintTPbUX70, {from: accounts[4]});
//		const addressk7hvT9o = await ReviveeCfiVue.owner.call({from: accounts[1]});

		await expect(ReviveeCfiVue.lock.call(byteWnSUQGw, uintzFvbujT, uintKWu4n6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivelXKPqR = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIJ84hbF = BigInt("596")
		const byteXLDQEuB = "0x081b14121620100b0f1f2013190a19010d13101c07121a0a1c08140d19031214"
		const addressosNjZNM = accounts[4]
		const uintyB7pxAJ = BigInt("837")
		const addressmHH6sJ = accounts[4]
		const byteMKPEScP = "0x14101d1b190b180e0b0402071d0e1b02130c08040b0f160b121708111b0b1201"
		const addresssaiHCaV = accounts[0]
		const uint256QahLQC3 = await RevivelXKPqR.tokensLockedAtTime.call(addressosNjZNM, byteXLDQEuB, uintIJ84hbF, {from: "0x0000000000000000000000000000000000000001"});
		await RevivelXKPqR.renounceOwnership.call({from: accounts[0]});
		const boolH7FA3I = await RevivelXKPqR.approve.call(addressmHH6sJ, uintyB7pxAJ, {from: accounts[3]});
		const uint256ZIDukzJ = await RevivelXKPqR.tokensUnlockable.call(addresssaiHCaV, byteMKPEScP, {from: accounts[1]});
		const boolRJ5egM = await RevivelXKPqR.isOwner.call({from: accounts[3]});
	});

	it('test for Revive', async () => {
		const RevivedaKzDk4 = await Revive.new({from: accounts[4]});
		const uintDjsI28n = BigInt("1913")
		const bytejDyYDsB = "0x15180b0e191c1c1b060c151a201a1913160313091f16040d18191b0809100f05"
		const uintMYhOX25 = BigInt("791")
		const bytePAAIL0W = "0x100f02111d0c1e140a011a20170407011e1d081f0102111b0c1a1c081212050d"
		const uintoe58GTD = BigInt("1430")
		const bytee3ov69L = "0x030202000e071f081217021e0b161b1711161e06040a0e08040d0b021610061c"
		const addressCzcy6YD = accounts[1]
		const addressSgcRPZj = accounts[0]
		const addressg0iSWm5 = "0x0000000000000000000000000000000000000001"
		const uintt1Z6sTO = BigInt("1476")
		const uintnPCh1nx = BigInt("416")
		const byteziko0dR = "0x121c1004010a0620021f07031a14190b1c15031306101c100e0a08170a0f151b"
//		const boolnWOXcXu = await RevivedaKzDk4.extendLock.call(bytejDyYDsB, uintDjsI28n, {from: accounts[4]});
//		const boolARDcKat = await RevivedaKzDk4.extendLock.call(bytePAAIL0W, uintMYhOX25, {from: accounts[2]});
//		const uint256ptlfaFJ = await RevivedaKzDk4.tokensLockedAtTime.call(addressCzcy6YD, bytee3ov69L, uintoe58GTD, {from: accounts[0]});
//		const addressCqW5HTR = await RevivedaKzDk4.transferOwnership.call(addressSgcRPZj, {from: accounts[0]});
//		const uint256XDJDuba = await RevivedaKzDk4.unlock.call(addressg0iSWm5, {from: accounts[2]});
//		const boolCcd2YlW = await RevivedaKzDk4.lock.call(byteziko0dR, uintnPCh1nx, uintt1Z6sTO, {from: accounts[4]});

		await expect(RevivedaKzDk4.extendLock.call(bytejDyYDsB, uintDjsI28n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRhd1egB = await Revive.new({from: accounts[0]});
		const bytelMaskH9 = "0x13041a121606180401160806171d060e201c1d13081c2002180f1c13171f1d18"
		const addressbgNKwFV = accounts[3]
		const uintDIlMKg = BigInt("1558")
		const addressgx6UX4Z = "0x0000000000000000000000000000000000000001"
		const addresskglV0Nd = await ReviveRhd1egB.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PZrtPyl = await ReviveRhd1egB.tokensUnlockable.call(addressbgNKwFV, bytelMaskH9, {from: accounts[4]});
//		const addressKh351tZ = await ReviveRhd1egB.recoverERC20.call(addressgx6UX4Z, uintDIlMKg, {from: accounts[2]});

		assert.equal(addresskglV0Nd, 0x48F7FCF410a76c1f0004FC46459e4F86C60A4e09)
		assert.equal(uint256PZrtPyl, BigInt("0"))
		await expect(ReviveRhd1egB.recoverERC20.call(addressgx6UX4Z, uintDIlMKg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const uintZaIzksJ = BigInt("1578")
		const addressSZ2wPP6 = accounts[1]
		const boolWIdbhJQ = await ReviveeCfiVue.approve.call(addressSZ2wPP6, uintZaIzksJ, {from: accounts[4]});
		const addressk7hvT9o = await ReviveeCfiVue.owner.call({from: accounts[1]});

		assert.equal(addressk7hvT9o, 0x75e3bcDa831cc8643353d2dc9afFEFF42EE540b2)
		assert.equal(boolWIdbhJQ, true)
	});

	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const addressIf33k9p = accounts[5]
		const uintVeR6fcO = BigInt("1882")
		const addressfBAro26 = accounts[3]
		const uintr6Ilcw9 = BigInt("809")
		const uintevjcOI = BigInt("612")
		const bytejZbcXNl = "0x07151a1a171a19151f020d1806161a1b0401160b1e030c05041a010c11011f13"
		const uintJehFGEN = BigInt("1578")
		const addressACoyuFr = accounts[2]
		const addresshd7g407 = await ReviveeCfiVue.transferOwnership.call(addressIf33k9p, {from: accounts[4]});
		const boolCIompz1 = await ReviveeCfiVue.transfer.call(addressfBAro26, uintVeR6fcO, {from: accounts[4]});
//		const boolb8gCnu = await ReviveeCfiVue.lock.call(bytejZbcXNl, uintevjcOI, uintr6Ilcw9, {from: accounts[3]});
//		const boolWIdbhJQ = await ReviveeCfiVue.approve.call(addressACoyuFr, uintJehFGEN, {from: accounts[4]});
//		const addressk7hvT9o = await ReviveeCfiVue.owner.call({from: accounts[1]});

		assert.equal(boolCIompz1, true)
		await expect(ReviveeCfiVue.lock.call(bytejZbcXNl, uintevjcOI, uintr6Ilcw9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNFDstIT = await Revive.new({from: accounts[4]});
		const uintaHcPoYa = BigInt("158")
		const addressgWvO1Wm = accounts[4]
		const addressWMJ2VCG = accounts[0]
		const addressncQU7pZ = accounts[4]
		const addressObzC2X3 = "0x0000000000000000000000000000000000000001"
		const addressOtEYFy = accounts[4]
		const uintPJlYyce = BigInt("218")
		const uintGXNVflF = BigInt("1653")
		const addressQ7rLIim = accounts[1]
//		const boolycEwXcg = await ReviveNFDstIT.transferFrom.call(addressWMJ2VCG, addressgWvO1Wm, uintaHcPoYa, {from: accounts[3]});
//		const uint256COQUMPX = await ReviveNFDstIT.allowance.call(addressObzC2X3, addressncQU7pZ, {from: accounts[0]});
//		const uint256Zyt1LXa = await ReviveNFDstIT.balanceOf.call(addressOtEYFy, {from: accounts[5]});
//		const addressR6cVxRb = await ReviveNFDstIT.owner.call({from: accounts[2]});
//		const uint256D8HRG8s = await ReviveNFDstIT.recoverERC20.call(uintPJlYyce, {from: accounts[2]});
//		const boolEmhqIzn = await ReviveNFDstIT.increaseAllowance.call(addressQ7rLIim, uintGXNVflF, {from: accounts[4]});

		await expect(ReviveNFDstIT.transferFrom.call(addressWMJ2VCG, addressgWvO1Wm, uintaHcPoYa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const uintWy7KixO = BigInt("836")
		const addressE2j1lrZ = accounts[2]
		const uintag6q1hH = BigInt("806")
		const uintjtZfu7V = BigInt("626")
		const byteV2XN5G = "0x07151a1a171a19151f020d1806161a1b0401160b1e030c05041a010c11011f13"
//		const addressAj9xtqx = await ReviveeCfiVue.recoverERC20.call(addressE2j1lrZ, uintWy7KixO, {from: accounts[4]});
//		const boolb8gCnu = await ReviveeCfiVue.lock.call(byteV2XN5G, uintjtZfu7V, uintag6q1hH, {from: accounts[3]});

		await expect(ReviveeCfiVue.recoverERC20.call(addressE2j1lrZ, uintWy7KixO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQPufjiV = await Revive.new({from: accounts[0]});
		const uintXvqSg4e = BigInt("1701")
		const addressDU5iaA7 = accounts[3]
		const addressH9dSfnu = "0x0000000000000000000000000000000000000001"
//		await ReviveQPufjiV.onlyOwner.call({from: accounts[1]});
//		const addressFreexE8 = await ReviveQPufjiV.recoverERC20.call(addressDU5iaA7, uintXvqSg4e, {from: "0x0000000000000000000000000000000000000001"});
//		const addressIGMjV2a = await ReviveQPufjiV.owner.call({from: accounts[4]});
//		await ReviveQPufjiV.renounceOwnership.call({from: accounts[1]});
//		const uint256XQTRzPG = await ReviveQPufjiV.balanceOf.call(addressH9dSfnu, {from: accounts[4]});

		await expect(ReviveQPufjiV.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const addressej7Rz56 = accounts[3]
		const addressUZR325Z = accounts[4]
		const uintIZ8uo3o = BigInt("809")
		const uintgmNLiFV = BigInt("620")
		const bytew118M0G = "0x07151a1a171a19151f020d1806161a1b0401160b1e030c05041a010c11011f13"
		const uint256HXH4VHz = await ReviveeCfiVue.allowance.call(addressUZR325Z, addressej7Rz56, {from: accounts[2]});
//		const boolb8gCnu = await ReviveeCfiVue.lock.call(bytew118M0G, uintgmNLiFV, uintIZ8uo3o, {from: accounts[3]});

		assert.equal(uint256HXH4VHz, BigInt("0"))
		await expect(ReviveeCfiVue.lock.call(bytew118M0G, uintgmNLiFV, uintIZ8uo3o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const uintRqpJRD3 = BigInt("1776")
		const byteOB5eQUv = "0x0f1a1e091006141d1e16131003091020181f0a16190208091a160e180e04031b"
		const addresseMxC5M = accounts[5]
		const uint931oOg = BigInt("809")
		const uintL61C0cg = BigInt("626")
		const bytePBA8QoI = "0x07151a1a171a19151f020d1806161a1b0401160b1e030c05041a011111011f13"
		const uint256cmVzzE6 = await ReviveeCfiVue.tokensLockedAtTime.call(addresseMxC5M, byteOB5eQUv, uintRqpJRD3, {from: accounts[4]});
//		const boolb8gCnu = await ReviveeCfiVue.lock.call(bytePBA8QoI, uintL61C0cg, uint931oOg, {from: accounts[3]});
//		await ReviveeCfiVue.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256cmVzzE6, BigInt("0"))
		await expect(ReviveeCfiVue.lock.call(bytePBA8QoI, uintL61C0cg, uint931oOg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTqHVW0U = await Revive.new({from: accounts[2]});
		const uintdkicU66 = BigInt("226")
		const addressXboxNp4 = accounts[3]
		const byteDpamT67 = "0x1210010b01161218071a1f1c0c1512090a1d140a0e171610070d06061e140b19"
		const addressxd8kYal = accounts[2]
//		const boolW3kvzMs = await ReviveTqHVW0U.decreaseAllowance.call(addressXboxNp4, uintdkicU66, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256lsPu54w = await ReviveTqHVW0U.tokensLocked.call(addressxd8kYal, byteDpamT67, {from: accounts[4]});
//		const addressmXPKUGC = await ReviveTqHVW0U.owner.call({from: accounts[5]});
//		const uint256lxSGJ0q = await ReviveTqHVW0U.totalSupply.call({from: accounts[2]});

		await expect(ReviveTqHVW0U.decreaseAllowance.call(addressXboxNp4, uintdkicU66, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const uintFvPEYYJ = BigInt("1776")
		const bytectUY6X1 = "0x0f1a1e091006141d1e16131003091020181f0a16190208091a160e180e04031b"
		const addresst2LBXpo = accounts[5]
		const uint256cmVzzE6 = await ReviveeCfiVue.tokensLockedAtTime.call(addresst2LBXpo, bytectUY6X1, uintFvPEYYJ, {from: accounts[4]});
//		await ReviveeCfiVue.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256cmVzzE6, BigInt("0"))
		await expect(ReviveeCfiVue.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const uinttm3Z8eJ = BigInt("691")
		const byteVrSRWI5 = "0x040f120b0a0d06140501091e120113171c18121612101c11090f01181f060413"
		const bytergzvhoo = "0x0c182004120b19181a00081e1c0f1602141508111517071e0213011f08111003"
		const addressmAtSLTm = accounts[4]
		const uintLYzLOn1 = BigInt("809")
		const uintEjl7SFX = BigInt("645")
		const byteo0lNS0A = "0x07151a1a171a19151f020d1806161a1b0401160b1e030c05041a010c11011f13"
//		const boolBpTiYrR = await ReviveeCfiVue.increaseLockAmount.call(byteVrSRWI5, uinttm3Z8eJ, {from: accounts[4]});
//		const uint256ZSGUcnq = await ReviveeCfiVue.tokensLocked.call(addressmAtSLTm, bytergzvhoo, {from: accounts[2]});
//		const boolb8gCnu = await ReviveeCfiVue.lock.call(byteo0lNS0A, uintEjl7SFX, uintLYzLOn1, {from: accounts[3]});

		await expect(ReviveeCfiVue.increaseLockAmount.call(byteVrSRWI5, uinttm3Z8eJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const uintum1uY3f = BigInt("297")
		const addressIrqJdRa = "0x0000000000000000000000000000000000000001"
		const addressYmL6KBX = accounts[0]
		const uintDrPRYtA = BigInt("10")
		const uinttAsHANn = BigInt("526")
		const byteDt5ldr = "0x0a08101e06161d0f1b0c010b1a040119071e180b1c01121b11120c0d1f120f0f"
		const addressU8Oda0S = accounts[1]
		const boolounVbwW = await ReviveilzySUK.increaseAllowance.call(addressIrqJdRa, uintum1uY3f, {from: accounts[2]});
		const uint256kgXmV31 = await ReviveilzySUK.getUnlockableTokens.call(addressYmL6KBX, {from: accounts[3]});
//		const booly7tVnR0 = await ReviveilzySUK.transferWithLock.call(addressU8Oda0S, byteDt5ldr, uinttAsHANn, uintDrPRYtA, {from: accounts[4]});
//		await ReviveilzySUK.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolounVbwW, true)
		assert.equal(uint256kgXmV31, BigInt("0"))
		await expect(ReviveilzySUK.transferWithLock.call(addressU8Oda0S, byteDt5ldr, uinttAsHANn, uintDrPRYtA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const uintR3FRS2 = BigInt("1496")
		const byteYlhHyW = "0x100919090714120b100c1c04040b10120e070c16011511170e030b1a08111901"
		const addresse8zewbg = accounts[4]
		const addressOpBE1X = accounts[2]
		const addresss5IMQaY = accounts[0]
		const addressNOmzK6N = accounts[0]
		const uintlZwUU7I = BigInt("279")
		const addressEv7NL1Q = accounts[1]
		const uintMkSL8J4 = BigInt("809")
		const uintmfTIIq = BigInt("626")
		const bytePQQfM29 = "0x07151a1a171a19151f020d1806161a1b0401160b1e030c05041a010c11011f13"
		const uint256Ki6Izm3 = await ReviveeCfiVue.tokensLockedAtTime.call(addresse8zewbg, byteYlhHyW, uintR3FRS2, {from: accounts[1]});
		const uint256mRFRZ4T = await ReviveeCfiVue.allowance.call(addresss5IMQaY, addressOpBE1X, {from: accounts[5]});
		const uint256HkyAbTc = await ReviveeCfiVue.balanceOf.call(addressNOmzK6N, {from: accounts[5]});
//		const boolXoAlsJl = await ReviveeCfiVue.decreaseAllowance.call(addressEv7NL1Q, uintlZwUU7I, {from: accounts[4]});
//		const boolb8gCnu = await ReviveeCfiVue.lock.call(bytePQQfM29, uintmfTIIq, uintMkSL8J4, {from: accounts[3]});

		assert.equal(uint256HkyAbTc, BigInt("0"))
		assert.equal(uint256Ki6Izm3, BigInt("0"))
		assert.equal(uint256mRFRZ4T, BigInt("0"))
		await expect(ReviveeCfiVue.decreaseAllowance.call(addressEv7NL1Q, uintlZwUU7I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveaEN0PZy = await Revive.new({from: accounts[1]});
		const addresssJlG79 = accounts[2]
		const uintnoD9Fx8 = BigInt("394")
		const bytedMfIXWg = "0x0d1314180f090f110117170203120c030b17101a0b06201b171506150c1c0614"
		const uintfOeHpU5 = BigInt("720")
		const addressGMu3Yq0 = accounts[1]
		const uintbVeDJy = BigInt("283")
		const byteWIJi9Op = "0x1f0a0114110a0819080f020c1618160506141a0204090f0c1e14200c011a121e"
		const addressK23xbsi = accounts[3]
		const uint256ltKojeY = await ReviveaEN0PZy.totalBalanceOf.call(addresssJlG79, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrkAECLQ = await ReviveaEN0PZy.extendLock.call(bytedMfIXWg, uintnoD9Fx8, {from: accounts[3]});
//		const uint256fMaw0x = await ReviveaEN0PZy.totalSupply.call({from: accounts[1]});
//		const addressUd74CjF = await ReviveaEN0PZy.recoverERC20.call(addressGMu3Yq0, uintfOeHpU5, {from: accounts[4]});
//		const uint256GCvxxZ = await ReviveaEN0PZy.tokensLockedAtTime.call(addressK23xbsi, byteWIJi9Op, uintbVeDJy, {from: accounts[4]});

		assert.equal(uint256ltKojeY, BigInt("0"))
		await expect(ReviveaEN0PZy.extendLock.call(bytedMfIXWg, uintnoD9Fx8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const addressyXJVVB = accounts[1]
		const uinta0nFW0H = BigInt("10")
		const uintOScK3ah = BigInt("526")
		const byteR1Yf3r0 = "0x1d010a2007010a1a11181d0a0318091514011e100b0e0b0d1d121d05190d0b04"
		const addressy3pva2o = accounts[1]
		const uintFfSgWvj = BigInt("1256")
		const addressOLU2i5w = accounts[3]
		const uint256QgcOMjr = await ReviveilzySUK.totalSupply.call({from: accounts[1]});
		const uint256kgXmV31 = await ReviveilzySUK.getUnlockableTokens.call(addressyXJVVB, {from: accounts[3]});
//		const booly7tVnR0 = await ReviveilzySUK.transferWithLock.call(addressy3pva2o, byteR1Yf3r0, uintOScK3ah, uinta0nFW0H, {from: accounts[4]});
//		const boolA5Rp2fP = await ReviveilzySUK.approve.call(addressOLU2i5w, uintFfSgWvj, {from: accounts[1]});

		assert.equal(uint256QgcOMjr, BigInt("3000000000000000000000000000"))
		assert.equal(uint256kgXmV31, BigInt("0"))
		await expect(ReviveilzySUK.transferWithLock.call(addressy3pva2o, byteR1Yf3r0, uintOScK3ah, uinta0nFW0H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const addresseF3LmeO = accounts[0]
		const addressYDU4VGy = accounts[2]
		const uintL8Dddl = BigInt("975")
		const addresssAY5Odc = accounts[3]
		const uintrsPbiLX = BigInt("10")
		const uintsHuBY6k = BigInt("526")
		const byteOfFtMt = "0x0a08101e06161d0f1b0c010b1a040119071e180b1c01121b11120c0d1f120f0f"
		const addressluzgRMA = accounts[1]
		const uint256NOGU4yk = await ReviveilzySUK.unlock.call(addresseF3LmeO, {from: accounts[4]});
		const uint256kgXmV31 = await ReviveilzySUK.getUnlockableTokens.call(addressYDU4VGy, {from: accounts[3]});
		const boolv0rnym = await ReviveilzySUK.approve.call(addresssAY5Odc, uintL8Dddl, {from: accounts[0]});
//		const booly7tVnR0 = await ReviveilzySUK.transferWithLock.call(addressluzgRMA, byteOfFtMt, uintsHuBY6k, uintrsPbiLX, {from: accounts[4]});

		assert.equal(boolv0rnym, true)
		assert.equal(uint256NOGU4yk, BigInt("0"))
		assert.equal(uint256kgXmV31, BigInt("0"))
		await expect(ReviveilzySUK.transferWithLock.call(addressluzgRMA, byteOfFtMt, uintsHuBY6k, uintrsPbiLX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveopW2VZm = await Revive.new({from: accounts[4]});
		const uintQ9rGV6R = BigInt("1093")
		const addressGgmCMwD = "0x0000000000000000000000000000000000000001"
		const uintpTDuWYp = BigInt("1578")
		const byteBzoqHrY = "0x091e1716020a1b141a080d1a191f020e03171b0218050e1c1806061e00190907"
		const addressfgEFnZ = accounts[1]
		const uintCFNhSUZ = BigInt("1471")
		const uintnh9e1tZ = BigInt("1055")
		const byteAzyQvdt = "0x090e02101b1106081e0c1c1a171f0e1e04120c1e141a10010d13151304151005"
		const addressCjqZX79 = accounts[0]
//		const uint256dnhQOM9 = await ReviveopW2VZm.recoverERC20.call(uintQ9rGV6R, {from: accounts[1]});
//		await ReviveopW2VZm.renounceOwnership.call({from: accounts[1]});
//		const uint256IWLvQKj = await ReviveopW2VZm.getUnlockableTokens.call(addressGgmCMwD, {from: accounts[3]});
//		const uint256vujEHTU = await ReviveopW2VZm.tokensLockedAtTime.call(addressfgEFnZ, byteBzoqHrY, uintpTDuWYp, {from: accounts[2]});
//		const boolQtu14kq = await ReviveopW2VZm.transferWithLock.call(addressCjqZX79, byteAzyQvdt, uintnh9e1tZ, uintCFNhSUZ, {from: accounts[3]});
//		const addressqThoRN = await ReviveopW2VZm.owner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveopW2VZm.recoverERC20.call(uintQ9rGV6R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const uint5O3jy0 = BigInt("10")
		const uintAQd0KV5 = BigInt("526")
		const bytebBSJDfv = "0x0a08101e06161d0f1b0cffffffff0b1a040119071e180b1c01121b11120c0d1f120f0f"
		const addressygrrrrZ = accounts[1]
		const addresskbj0pQ = accounts[4]
//		const booly7tVnR0 = await ReviveilzySUK.transferWithLock.call(addressygrrrrZ, bytebBSJDfv, uintAQd0KV5, uint5O3jy0, {from: accounts[4]});
//		const uint256sqqXmWv = await ReviveilzySUK.totalBalanceOf.call(addresskbj0pQ, {from: accounts[2]});

		await expect(ReviveilzySUK.transferWithLock.call(addressygrrrrZ, bytebBSJDfv, uintAQd0KV5, uint5O3jy0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const addressugZF4q8 = accounts[0]
		const byteN7sRAX = "0x0e051706190e15120f0b1405050d0f1a071a17171f180a040e0a0e1412121711"
		const addressaqUkEKY = "0x0000000000000000000000000000000000000001"
		const uintKGcGYes = BigInt("1745")
		const addresswWwX7EE = accounts[3]
		const uintDnhRNgP = BigInt("1714")
		const uintbgxOnOM = BigInt("10")
		const uintXkv4Qus = BigInt("558")
		const byteabrthKc = "0x0a08101e06161d0f1b0c010b1a040119071e180b1c01121b11120c0d1f120f0f"
		const addressblBk0eO = accounts[1]
		const uint256NOGU4yk = await ReviveilzySUK.unlock.call(addressugZF4q8, {from: accounts[4]});
		const uint256PMtej3O = await ReviveilzySUK.tokensLocked.call(addressaqUkEKY, byteN7sRAX, {from: accounts[2]});
		const boolv0rnym = await ReviveilzySUK.approve.call(addresswWwX7EE, uintKGcGYes, {from: accounts[0]});
//		const uint256v0YNRFv = await ReviveilzySUK.recoverERC20.call(uintDnhRNgP, {from: accounts[3]});
//		const booly7tVnR0 = await ReviveilzySUK.transferWithLock.call(addressblBk0eO, byteabrthKc, uintXkv4Qus, uintbgxOnOM, {from: accounts[4]});

		assert.equal(boolv0rnym, true)
		assert.equal(uint256NOGU4yk, BigInt("0"))
		assert.equal(uint256PMtej3O, BigInt("0"))
		await expect(ReviveilzySUK.recoverERC20.call(uintDnhRNgP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeCfiVue = await Revive.new({from: accounts[4]});
		const uintpjBQkb = BigInt("446")
		const uintBbuW7DA = BigInt("809")
		const uintbYSZkGE = BigInt("626")
		const byteupzzYx = "0x07151a1a171a19151f020d1806161a1b0401160b1e030c05041a010c11011f13"
//		const uint256NkuEICp = await ReviveeCfiVue.recoverERC20.call(uintpjBQkb, {from: accounts[5]});
//		const boolb8gCnu = await ReviveeCfiVue.lock.call(byteupzzYx, uintbYSZkGE, uintBbuW7DA, {from: accounts[3]});

		await expect(ReviveeCfiVue.recoverERC20.call(uintpjBQkb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const addressaCfULnf = accounts[0]
		const uinth4kZnIx = BigInt("1965")
		const addressfMPJ11 = accounts[4]
		const uintQFbAaz3 = BigInt("106")
		const byteZlogkqO = "0x100614160a120e041b19200e07020f071f190313010e0c090c1f0a1e15020f0b"
		const addressGKYa38D = accounts[4]
		const uinthaZf9pc = BigInt("1648")
		const uint256ry0LFYx = await ReviveilzySUK.totalBalanceOf.call(addressaCfULnf, {from: accounts[3]});
		const boolzNJvvEM = await ReviveilzySUK.increaseAllowance.call(addressfMPJ11, uinth4kZnIx, {from: accounts[0]});
		const uint256ETv7WL = await ReviveilzySUK.tokensLockedAtTime.call(addressGKYa38D, byteZlogkqO, uintQFbAaz3, {from: accounts[1]});
//		const uint256gj5xbC3 = await ReviveilzySUK.recoverERC20.call(uinthaZf9pc, {from: accounts[4]});

		assert.equal(boolzNJvvEM, true)
		assert.equal(uint256ETv7WL, BigInt("0"))
		assert.equal(uint256ry0LFYx, BigInt("0"))
		await expect(ReviveilzySUK.recoverERC20.call(uinthaZf9pc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const uintbFLSvZK = BigInt("1623")
		const addressxUgpPLp = accounts[2]
//		const uint256RTtPhP6 = await ReviveilzySUK.recoverERC20.call(uintbFLSvZK, {from: accounts[2]});
//		const uint256ry0LFYx = await ReviveilzySUK.totalBalanceOf.call(addressxUgpPLp, {from: accounts[3]});

		await expect(ReviveilzySUK.recoverERC20.call(uintbFLSvZK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const uintMxudl2Z = BigInt("141")
		const addressMkqhPjr = accounts[1]
		const addressEKN4hib = accounts[4]
		const addressmi3mCBH = accounts[5]
//		const uint256IsXcR9O = await ReviveilzySUK.recoverERC20.call(uintMxudl2Z, {from: accounts[4]});
//		const uint256kgXmV31 = await ReviveilzySUK.getUnlockableTokens.call(addressMkqhPjr, {from: accounts[3]});
//		const uint256oGBlvw = await ReviveilzySUK.allowance.call(addressmi3mCBH, addressEKN4hib, {from: accounts[0]});

		await expect(ReviveilzySUK.recoverERC20.call(uintMxudl2Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const uintphfOYan = BigInt("26")
		const byteDbTIp2E = "0x0a18191e021c1b2019200d0b1f1d0f041f0a11fffffffe14130c031c1d180f1117080c"
		const addressUGLt1zw = accounts[0]
//		const uint256iZZfr3 = await ReviveilzySUK.tokensLockedAtTime.call(addressUGLt1zw, byteDbTIp2E, uintphfOYan, {from: accounts[3]});

		await expect(ReviveilzySUK.tokensLockedAtTime.call(addressUGLt1zw, byteDbTIp2E, uintphfOYan, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const uintsSm085T = BigInt("313")
		const uintKMAx9xW = BigInt("10")
		const uintFyB3SrD = BigInt("526")
		const byteJCReJi = "0x0a08101e06161d0f1b0c010b1a040119071e180b1c01121b11120c0d1f120f0f"
		const addressBpWTiB9 = accounts[2]
		const uintuALDSL9 = BigInt("2033")
//		const uint256tpYsqgl = await ReviveilzySUK.recoverERC20.call(uintsSm085T, {from: accounts[3]});
//		const booly7tVnR0 = await ReviveilzySUK.transferWithLock.call(addressBpWTiB9, byteJCReJi, uintFyB3SrD, uintKMAx9xW, {from: accounts[4]});
//		await ReviveilzySUK.onlyOwner.call({from: accounts[3]});
//		const uint256WXQGLAM = await ReviveilzySUK.recoverERC20.call(uintuALDSL9, {from: accounts[2]});

		await expect(ReviveilzySUK.recoverERC20.call(uintsSm085T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const byteJwdrqKB = "0x171f120108020d0a0f001f201b10021a0e15060013100b081f08050b0100041d"
		const addressRLVz25v = accounts[0]
		const uintxlvTVbT = BigInt("1359")
		const addressIpMugPC = accounts[2]
		const uint256PFy81xk = await ReviveilzySUK.tokensUnlockable.call(addressRLVz25v, byteJwdrqKB, {from: accounts[1]});
//		const uint256RsgXy5j = await ReviveilzySUK.recoverERC20.call(uintxlvTVbT, {from: accounts[4]});
//		const uint256NOGU4yk = await ReviveilzySUK.unlock.call(addressIpMugPC, {from: accounts[4]});

		assert.equal(uint256PFy81xk, BigInt("0"))
		await expect(ReviveilzySUK.recoverERC20.call(uintxlvTVbT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveilzySUK = await Revive.new({from: accounts[1]});
		const bytezuGYQiR = "0x1e15121113101a0c140e1d0707011f140a1e1e16030903201407031302011009"
		const addressliVlNl = accounts[1]
		const uintG4NrxM5 = BigInt("389")
		const uinteagwoaj = BigInt("1528")
		const addresstNeUhdh = accounts[3]
		const uintqf6nUwf = BigInt("225")
		const uinthErdSx = BigInt("526")
		const bytexSdWULO = "0x0a08101e06161d0f1b0c010b1a040119071e180b1c01121b11120c0d1f120f0f"
		const addressPpmCD4T = accounts[1]
		const uint256x1napBD = await ReviveilzySUK.tokensLocked.call(addressliVlNl, bytezuGYQiR, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dDMVcSm = await ReviveilzySUK.recoverERC20.call(uintG4NrxM5, {from: accounts[1]});
//		const boolw3680Dk = await ReviveilzySUK.increaseAllowance.call(addresstNeUhdh, uinteagwoaj, {from: "0x0000000000000000000000000000000000000001"});
//		const booly7tVnR0 = await ReviveilzySUK.transferWithLock.call(addressPpmCD4T, bytexSdWULO, uinthErdSx, uintqf6nUwf, {from: accounts[4]});

		assert.equal(uint256x1napBD, BigInt("0"))
		await expect(ReviveilzySUK.recoverERC20.call(uintG4NrxM5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
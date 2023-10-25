const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveBkqDiK5 = await Revive.new({from: accounts[2]});
		const addressXlexOK4 = accounts[5]
		const uintLO8xsdY = BigInt("1492")
		const byteKoHD2oq = "0x00020815031e1a150e150a06080e0b161018040e160f1a0c030e140506060a16"
		const uintQKS5X1 = BigInt("478")
		const byteLgWvzUP = "0x08071d070e1919010606061d121d1e0a090a101d0d1d07010213151519191519"
		const addressItmJkt8 = accounts[0]
		const boolPJzg47R = await ReviveBkqDiK5.isOwner.call({from: accounts[5]});
		const uint256nJSKdTy = await ReviveBkqDiK5.unlock.call(addressXlexOK4, {from: accounts[2]});
		const boolBDpnXee = await ReviveBkqDiK5.extendLock.call(byteKoHD2oq, uintLO8xsdY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iuQD5f = await ReviveBkqDiK5.tokensLockedAtTime.call(addressItmJkt8, byteLgWvzUP, uintQKS5X1, {from: accounts[4]});

		assert.equal(boolPJzg47R, false)
		assert.equal(uint256nJSKdTy, BigInt("0"))
		await expect(ReviveBkqDiK5.extendLock.call(byteKoHD2oq, uintLO8xsdY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive3tgpnw = await Revive.new({from: accounts[0]});
		const uintW8pYZZs = BigInt("1492")
		const addresshpc3IFQ = accounts[1]
		const uintrSx6Ar = BigInt("184")
		const addressJh0EBD9 = accounts[0]
		const uintou2FrxI = BigInt("1950")
		const bytemuiJ0qW = "0x05011e030d1f160d1f020b0913031e171c02170e0514150b200a13060a091f11"
		const uintYgT0vRz = BigInt("1709")
		const uintzAjDDUz = BigInt("1645")
		const byteP5UwLhO = "0x0c18000b0c201903091a0a131307180918141e0305021708091a0e130d06070e"
		const addressU0ouDtP = accounts[4]
		const boolgfe5elc = await Revive3tgpnw.transfer.call(addresshpc3IFQ, uintW8pYZZs, {from: accounts[2]});
		const boolhlBrErD = await Revive3tgpnw.approve.call(addressJh0EBD9, uintrSx6Ar, {from: accounts[0]});
		const boolg9zRxR7 = await Revive3tgpnw.increaseLockAmount.call(bytemuiJ0qW, uintou2FrxI, {from: accounts[3]});
		const booltPvg7t = await Revive3tgpnw.transferWithLock.call(addressU0ouDtP, byteP5UwLhO, uintzAjDDUz, uintYgT0vRz, {from: accounts[1]});

		await expect(Revive3tgpnw.transfer.call(addresshpc3IFQ, uintW8pYZZs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivecHEhlKM = await Revive.new({from: accounts[0]});
		const uintMV0eob = BigInt("936")
		const address0X7DK0 = accounts[5]
		const uintDCKsUUq = BigInt("1610")
		const addressFfSMshE = accounts[0]
		const byteOKNoG6W = "0x1f1905150a091503190f161415151f1e18041b1012140a12110504091c1e0809"
		const addressikoYI3W = accounts[0]
		const uintXX5hUgA = BigInt("568")
		const addressLnh4PDf = accounts[1]
		const addressU2NIH8 = accounts[4]
		const boolonRw6jn = await RevivecHEhlKM.increaseAllowance.call(address0X7DK0, uintMV0eob, {from: accounts[0]});
		const addressEJ6Qcy = await RevivecHEhlKM.owner.call({from: accounts[0]});
		const addressfet4sxa = await RevivecHEhlKM.recoverERC20.call(addressFfSMshE, uintDCKsUUq, {from: accounts[0]});
		const uint256KwiQ3vB = await RevivecHEhlKM.tokensUnlockable.call(addressikoYI3W, byteOKNoG6W, {from: accounts[2]});
		const boolTQJs5dU = await RevivecHEhlKM.transferFrom.call(addressU2NIH8, addressLnh4PDf, uintXX5hUgA, {from: accounts[1]});

		assert.equal(addressEJ6Qcy, 0xaa8c9373Ced4576a6708673B7d1860806017aA70)
		assert.equal(boolonRw6jn, true)
		await expect(RevivecHEhlKM.recoverERC20.call(addressFfSMshE, uintDCKsUUq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUrbWhOB = await Revive.new({from: accounts[1]});
		const byteKsadQq = "0x061f031d0310150d061016101e111b12151e0a14081c041f0e070f051a02011d"
		const addressPvAW3Pz = accounts[3]
		const uinteG4k86T = BigInt("335")
		const addressUNzig0t = "0x0000000000000000000000000000000000000001"
		const byteCimywnQ = "0x0f1316171007101f0e200f12051d1e12121d18101708040605181f14081a1e07"
		const addressvWEMec = accounts[3]
		const uint256Mpb90B3 = await ReviveUrbWhOB.tokensLocked.call(addressPvAW3Pz, byteKsadQq, {from: "0x0000000000000000000000000000000000000001"});
		const boolXArRc93 = await ReviveUrbWhOB.increaseAllowance.call(addressUNzig0t, uinteG4k86T, {from: accounts[4]});
		const uint256tglKoE1 = await ReviveUrbWhOB.tokensUnlockable.call(addressvWEMec, byteCimywnQ, {from: accounts[3]});
		await ReviveUrbWhOB.onlyOwner.call({from: accounts[3]});

		assert.equal(boolXArRc93, true)
		assert.equal(uint256Mpb90B3, BigInt("0"))
		assert.equal(uint256tglKoE1, BigInt("0"))
		await expect(ReviveUrbWhOB.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN6BRCLt = await Revive.new({from: accounts[2]});
		const uintwknwfDw = BigInt("998")
		const bytehxivqqL = "0x00141e0c0a050e1b0d13150801101010031707151720090f1a061d0c061b1a00"
		const addressUa5B7oN = accounts[4]
		const byteJzpgnKG = "0x0316171a06051812080f18060c1d1e160413001b10060504051c1e1e190b1f07"
		const addressTviH3QX = accounts[3]
		const addressKWJulTF = accounts[2]
		const addressYJSCNg5 = "0x0000000000000000000000000000000000000001"
		const uint256r2slG8F = await ReviveN6BRCLt.tokensLockedAtTime.call(addressUa5B7oN, bytehxivqqL, uintwknwfDw, {from: accounts[0]});
		const uint256j99fmya = await ReviveN6BRCLt.tokensLocked.call(addressTviH3QX, byteJzpgnKG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256i08aUya = await ReviveN6BRCLt.allowance.call(addressYJSCNg5, addressKWJulTF, {from: accounts[1]});

		assert.equal(uint256i08aUya, BigInt("0"))
		assert.equal(uint256j99fmya, BigInt("0"))
		assert.equal(uint256r2slG8F, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivewAv9W4J = await Revive.new({from: accounts[5]});
		const addressKILjlf = accounts[1]
		const byteXG8sCN = "0x201a140301121b02170a14080d0419031b0e131a0a1c0d040e181b191f081002"
		const addressAc49w4S = accounts[0]
		const bytesMAohUT = "0x1c1406190f080e1a03091210151707150c0712081517050817181b1c09071316"
		const addressqIo3s2 = accounts[5]
		const addressEKptiza = accounts[1]
		const uint256peKD6Kc = await RevivewAv9W4J.balanceOf.call(addressKILjlf, {from: accounts[2]});
		const uint256VJAhwzI = await RevivewAv9W4J.tokensLocked.call(addressAc49w4S, byteXG8sCN, {from: accounts[3]});
		const uint256S6vVpCP = await RevivewAv9W4J.tokensLocked.call(addressqIo3s2, bytesMAohUT, {from: accounts[4]});
		const uint256mnSDaZy = await RevivewAv9W4J.totalBalanceOf.call(addressEKptiza, {from: accounts[1]});

		assert.equal(uint256S6vVpCP, BigInt("0"))
		assert.equal(uint256VJAhwzI, BigInt("0"))
		assert.equal(uint256mnSDaZy, BigInt("0"))
		assert.equal(uint256peKD6Kc, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivePCQGBg = await Revive.new({from: accounts[4]});
		const byte2H17Dx = "0x021f151c031d0d131f1a1e1f1007171c15130a1006101c1f19091c0e1d181109"
		const addressMyVEfge = accounts[5]
		const uintdicUIu = BigInt("148")
		const uintdmS8AWY = BigInt("251")
		const bytesSUgd7S = "0x1d181c0c1516071116001b01070912060a051d050b0e130d031b1e1506191801"
		const addressyGOxTjY = "0x0000000000000000000000000000000000000001"
		const uint256B6Pblcz = await RevivePCQGBg.tokensUnlockable.call(addressMyVEfge, byte2H17Dx, {from: accounts[4]});
		const boolLvDGmbj = await RevivePCQGBg.lock.call(bytesSUgd7S, uintdmS8AWY, uintdicUIu, {from: accounts[4]});
		const addressPQkbaxP = await RevivePCQGBg.transferOwnership.call(addressyGOxTjY, {from: accounts[5]});

		assert.equal(boolLvDGmbj, true)
		assert.equal(uint256B6Pblcz, BigInt("0"))
		await expect(RevivePCQGBg.transferOwnership.call(addressyGOxTjY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveINLceKm = await Revive.new({from: accounts[1]});
		const uintryEUAlD = BigInt("848")
		const bytedPllqqc = "0x1620000111090d180109020e110e07160a151307160c0b031c1b040c10191d0e"
		const addressoMI7kzb = accounts[2]
		const uintQbC18M8 = BigInt("1043")
		const addressMKWD6ny = accounts[4]
		const uintpAu1m8E = BigInt("272")
		const addressZEmFdCP = accounts[3]
		const byteufiDgxS = "0x07090c020f1e1b1f1803030d0a16102020111a10140119050514162017200205"
		const addressCnCiccY = accounts[2]
		const uintAV7gFMa = BigInt("645")
		const addressVpapZN = accounts[1]
		const uint256f10P8JB = await ReviveINLceKm.tokensLockedAtTime.call(addressoMI7kzb, bytedPllqqc, uintryEUAlD, {from: accounts[2]});
		const boolvHiK3Av = await ReviveINLceKm.transfer.call(addressMKWD6ny, uintQbC18M8, {from: accounts[1]});
		const boolrH0qhJV = await ReviveINLceKm.approve.call(addressZEmFdCP, uintpAu1m8E, {from: accounts[4]});
		const uint256J9l1Nq = await ReviveINLceKm.tokensLocked.call(addressCnCiccY, byteufiDgxS, {from: accounts[0]});
		const boolsXdjgb2 = await ReviveINLceKm.approve.call(addressVpapZN, uintAV7gFMa, {from: accounts[3]});

		assert.equal(boolrH0qhJV, true)
		assert.equal(boolsXdjgb2, true)
		assert.equal(boolvHiK3Av, true)
		assert.equal(uint256J9l1Nq, BigInt("0"))
		assert.equal(uint256f10P8JB, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveN6BRCLt = await Revive.new({from: accounts[2]});
		const addressYxYgqu2 = "0x0000000000000000000000000000000000000001"
		const bytevOZHlAe = "0x0316171a06051812080f18060c1d1e160413001b10060504051c1e1e190b1f07"
		const addressNU4beMs = accounts[4]
		const uintarT6P8 = BigInt("1875")
		const addressXV0QQzs = accounts[0]
		const addressOyf6Rhf = accounts[2]
		const addresstoa4xs = "0x0000000000000000000000000000000000000001"
		const uintevzejj = BigInt("900")
		const addressF2WR8J9 = accounts[2]
		const uint256dn0LqxL = await ReviveN6BRCLt.balanceOf.call(addressYxYgqu2, {from: accounts[4]});
		const uint256j99fmya = await ReviveN6BRCLt.tokensLocked.call(addressNU4beMs, bytevOZHlAe, {from: "0x0000000000000000000000000000000000000001"});
		const boolyUpfzwF = await ReviveN6BRCLt.approve.call(addressXV0QQzs, uintarT6P8, {from: accounts[4]});
		const uint256i08aUya = await ReviveN6BRCLt.allowance.call(addresstoa4xs, addressOyf6Rhf, {from: accounts[1]});
		const boolA1KK2C0 = await ReviveN6BRCLt.decreaseAllowance.call(addressF2WR8J9, uintevzejj, {from: accounts[2]});

		assert.equal(boolyUpfzwF, true)
		assert.equal(uint256dn0LqxL, BigInt("0"))
		assert.equal(uint256i08aUya, BigInt("0"))
		assert.equal(uint256j99fmya, BigInt("0"))
		await expect(ReviveN6BRCLt.decreaseAllowance.call(addressF2WR8J9, uintevzejj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive3tgpnw = await Revive.new({from: accounts[0]});
		const uintXk9qCmj = BigInt("1347")
		const byteEmsk8X4 = "0x05160f01131507141d010a110517081e0d13140b1b000812010e020f0d1b1914"
		const uintn2DaAdX = BigInt("1492")
		const address2eIqvu = accounts[1]
		const uintc4j20oO = BigInt("184")
		const addressnteXMnw = accounts[0]
		const uintHkpT4xU = BigInt("1950")
		const byteDI8kQei = "0x05011e030d1f160d1f020b0913031e171c02170e0514150b200a13060a091f0f"
		const uintWFVifSM = BigInt("1709")
		const uintA1qVbU4 = BigInt("1645")
		const byteBXfAaGq = "0x0c18000b0c201903091a0a131307180918141e0305021708091a0e130d06070e"
		const addressqGFq8Yt = accounts[4]
		const uintLtPgw6M = BigInt("150")
		const addressxmTb12V = accounts[3]
		const booltNZkY0 = await Revive3tgpnw.increaseLockAmount.call(byteEmsk8X4, uintXk9qCmj, {from: accounts[4]});
		const boolgfe5elc = await Revive3tgpnw.transfer.call(address2eIqvu, uintn2DaAdX, {from: accounts[2]});
		const boolhlBrErD = await Revive3tgpnw.approve.call(addressnteXMnw, uintc4j20oO, {from: accounts[0]});
		const boolg9zRxR7 = await Revive3tgpnw.increaseLockAmount.call(byteDI8kQei, uintHkpT4xU, {from: accounts[3]});
		const booltPvg7t = await Revive3tgpnw.transferWithLock.call(addressqGFq8Yt, byteBXfAaGq, uintA1qVbU4, uintWFVifSM, {from: accounts[1]});
		const boolsvLArgv = await Revive3tgpnw.approve.call(addressxmTb12V, uintLtPgw6M, {from: accounts[1]});

		await expect(Revive3tgpnw.increaseLockAmount.call(byteEmsk8X4, uintXk9qCmj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBkqDiK5 = await Revive.new({from: accounts[2]});
		const addresstfsudEg = accounts[5]
		const addressQ2Hc4PJ = accounts[2]
		const uintW7fOQB6 = BigInt("1492")
		const byteXyo3cqs = "0x00020815031e1a150e150a06080e0b161018040e160f1a0c030e140506060a16"
		const uintcSG2V6a = BigInt("772")
		const addressk9nB5ar = accounts[3]
		const uintouWoL0s = BigInt("478")
		const byteH5KNkm8 = "0x08071d070e1919010606061d121d1e0a090a101d0d1d07010213151519191519"
		const address7ieSUd = accounts[0]
		const boolPJzg47R = await ReviveBkqDiK5.isOwner.call({from: accounts[5]});
		const boolV108MkR = await ReviveBkqDiK5.isOwner.call({from: accounts[5]});
		const uint256nJSKdTy = await ReviveBkqDiK5.unlock.call(addresstfsudEg, {from: accounts[2]});
		const uint256qSoLSY = await ReviveBkqDiK5.getUnlockableTokens.call(addressQ2Hc4PJ, {from: accounts[4]});
		const boolBDpnXee = await ReviveBkqDiK5.extendLock.call(byteXyo3cqs, uintW7fOQB6, {from: "0x0000000000000000000000000000000000000001"});
		const boolN3K7C7P = await ReviveBkqDiK5.increaseAllowance.call(addressk9nB5ar, uintcSG2V6a, {from: accounts[5]});
		const uint256iuQD5f = await ReviveBkqDiK5.tokensLockedAtTime.call(address7ieSUd, byteH5KNkm8, uintouWoL0s, {from: accounts[4]});

		assert.equal(boolPJzg47R, false)
		assert.equal(boolV108MkR, false)
		assert.equal(uint256nJSKdTy, BigInt("0"))
		assert.equal(uint256qSoLSY, BigInt("0"))
		await expect(ReviveBkqDiK5.extendLock.call(byteXyo3cqs, uintW7fOQB6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBkqDiK5 = await Revive.new({from: accounts[2]});
		const addressZmBDGQ9 = accounts[6]
		const addressj0xZrRv = accounts[2]
		const addressJhoQfDY = accounts[4]
		const uintVELp8Qu = BigInt("444")
		const uinthmacfb8 = BigInt("1492")
		const byteyhEQ9Va = "0x00020815031e1a150e150a06080e0b161018040e160f1a0c030e140506060a16"
		const addressLkaWhwX = accounts[5]
		const boolPJzg47R = await ReviveBkqDiK5.isOwner.call({from: accounts[5]});
		const uint256nJSKdTy = await ReviveBkqDiK5.unlock.call(addressZmBDGQ9, {from: accounts[2]});
		const uint256GmSebUF = await ReviveBkqDiK5.allowance.call(addressJhoQfDY, addressj0xZrRv, {from: accounts[2]});
		const uint256vJzW5yj = await ReviveBkqDiK5.recoverERC20.call(uintVELp8Qu, {from: accounts[4]});
		const boolBDpnXee = await ReviveBkqDiK5.extendLock.call(byteyhEQ9Va, uinthmacfb8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TLrQBpZ = await ReviveBkqDiK5.balanceOf.call(addressLkaWhwX, {from: accounts[3]});

		assert.equal(boolPJzg47R, false)
		assert.equal(uint256GmSebUF, BigInt("0"))
		assert.equal(uint256nJSKdTy, BigInt("0"))
		await expect(ReviveBkqDiK5.recoverERC20.call(uintVELp8Qu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBkqDiK5 = await Revive.new({from: accounts[2]});
		const addressI76dQ9 = accounts[5]
		const address177l04 = accounts[4]
		const addresskhkLLQn = accounts[5]
		const addressKGODMfG = accounts[2]
		const uinthyfXrrK = BigInt("1492")
		const byteLLeMPYE = "0x00020815031e1a150e150a06080e0b161018040e160f1a0c030e140506060a16"
		const uint256nJSKdTy = await ReviveBkqDiK5.unlock.call(addressI76dQ9, {from: accounts[2]});
		const addressIVDJaGK = await ReviveBkqDiK5.transferOwnership.call(address177l04, {from: accounts[2]});
		const uint256H8ZK5Z = await ReviveBkqDiK5.allowance.call(addressKGODMfG, addresskhkLLQn, {from: accounts[5]});
		const boolBDpnXee = await ReviveBkqDiK5.extendLock.call(byteLLeMPYE, uinthyfXrrK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256H8ZK5Z, BigInt("0"))
		assert.equal(uint256nJSKdTy, BigInt("0"))
		await expect(ReviveBkqDiK5.extendLock.call(byteLLeMPYE, uinthyfXrrK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekJrxasn = await Revive.new({from: accounts[2]});
		const uintwOuS6fL = BigInt("74")
		const byteMbCNtbG = "0x0c0c1f1e02121001161c0e1f0507060819170b0a171c0f04191409121903170d"
		const addressoWLQt6I = "0x0000000000000000000000000000000000000001"
		const uintvoCtjvt = BigInt("301")
		const addressEHgQKM1 = accounts[4]
		const uintlf0AyH9 = BigInt("1010")
		const uintruZGl0r = BigInt("1139")
		const byteFMKdI8p = "0x0a141b13131c0909090e15101d071817100c04051a020501141f111816150c16"
		const uint256A8TImJb = await RevivekJrxasn.tokensLockedAtTime.call(addressoWLQt6I, byteMbCNtbG, uintwOuS6fL, {from: accounts[3]});
		const uint256NEAwqz0 = await RevivekJrxasn.recoverERC20.call(uintvoCtjvt, {from: accounts[3]});
		const uint256wjRTIWL = await RevivekJrxasn.totalBalanceOf.call(addressEHgQKM1, {from: accounts[3]});
		const boolTQBc1tY = await RevivekJrxasn.lock.call(byteFMKdI8p, uintruZGl0r, uintlf0AyH9, {from: accounts[3]});

		assert.equal(uint256A8TImJb, BigInt("0"))
		await expect(RevivekJrxasn.recoverERC20.call(uintvoCtjvt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewAv9W4J = await Revive.new({from: accounts[5]});
		const addressdg56z5E = accounts[1]
		const uintA2nPOis = BigInt("982")
		const uint256mnSDaZy = await RevivewAv9W4J.totalBalanceOf.call(addressdg56z5E, {from: accounts[1]});
		const uint256Pt6Ys89 = await RevivewAv9W4J.recoverERC20.call(uintA2nPOis, {from: accounts[2]});

		assert.equal(uint256mnSDaZy, BigInt("0"))
		await expect(RevivewAv9W4J.recoverERC20.call(uintA2nPOis, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTzDDqFq = await Revive.new({from: accounts[0]});
		const uintZyMFqws = BigInt("1387")
		const addressfN0Yztb = "0x0000000000000000000000000000000000000001"
		const uint256giWITni = await ReviveTzDDqFq.recoverERC20.call(uintZyMFqws, {from: accounts[4]});
		const addresskuVNADm = await ReviveTzDDqFq.transferOwnership.call(addressfN0Yztb, {from: accounts[3]});

		await expect(ReviveTzDDqFq.recoverERC20.call(uintZyMFqws, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekJrxasn = await Revive.new({from: accounts[2]});
		const uint6GwGY9 = BigInt("1783")
		const uintS83WQcf = BigInt("32")
		const byteZjU05Gj = "0x0c0c1f1e02121001161c0e1f0507060819170b0a171c0f04191409121903170d"
		const addresselFQD1L = "0x0000000000000000000000000000000000000001"
		const uintXKGgnql = BigInt("1085")
		const byteAoyTW58 = "0x1c1d12020e0f00181f051e1e0d081708040214040c0e1b1115120512090c0f1e"
		const addressZIWp1q7 = accounts[4]
		const addressVpBJfD6 = accounts[3]
		const uintcWlZs4m = BigInt("1011")
		const uintkzdkf9e = BigInt("1160")
		const byteqzUoTpr = "0x0a141b13131c0909090e15101d071817100c04051a020501141f111816150c16"
		const bytelwiC5B = "0x04080a0e0508040c1f0b14020f13131f1d1c08160f180e17081b1d0b1b090a05"
		const address6yyHBN = accounts[5]
		const uint256HGPukTl = await RevivekJrxasn.recoverERC20.call(uint6GwGY9, {from: accounts[0]});
		const uint256A8TImJb = await RevivekJrxasn.tokensLockedAtTime.call(addresselFQD1L, byteZjU05Gj, uintS83WQcf, {from: accounts[3]});
		const uint256n5wyBEn = await RevivekJrxasn.tokensLockedAtTime.call(addressZIWp1q7, byteAoyTW58, uintXKGgnql, {from: accounts[1]});
		const uint256YaQWzio = await RevivekJrxasn.getUnlockableTokens.call(addressVpBJfD6, {from: accounts[1]});
		const boolTQBc1tY = await RevivekJrxasn.lock.call(byteqzUoTpr, uintkzdkf9e, uintcWlZs4m, {from: accounts[3]});
		const uint256P9lmZLT = await RevivekJrxasn.tokensLocked.call(address6yyHBN, bytelwiC5B, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivekJrxasn.recoverERC20.call(uint6GwGY9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewAv9W4J = await Revive.new({from: accounts[5]});
		const addressmDQiuk = accounts[1]
		const addressWcUT3b8 = accounts[0]
		const bytevdq4k97 = "0x201a140301121b02170a14080d0419031b0e131a0a1c0d040e181b191f081002"
		const addresszIqvoyJ = accounts[0]
		const addressC7Tv6x1 = "0x0000000000000000000000000000000000000001"
		const addressqKn9YGo = accounts[2]
		const uint256peKD6Kc = await RevivewAv9W4J.balanceOf.call(addressmDQiuk, {from: accounts[2]});
		await RevivewAv9W4J.renounceOwnership.call({from: accounts[5]});
		const uint256ZrI1lg = await RevivewAv9W4J.getUnlockableTokens.call(addressWcUT3b8, {from: accounts[1]});
		const uint256VJAhwzI = await RevivewAv9W4J.tokensLocked.call(addresszIqvoyJ, bytevdq4k97, {from: accounts[3]});
		const uint256FWAhlx8 = await RevivewAv9W4J.getUnlockableTokens.call(addressC7Tv6x1, {from: accounts[5]});
		const uint256mnSDaZy = await RevivewAv9W4J.totalBalanceOf.call(addressqKn9YGo, {from: accounts[1]});

		assert.equal(uint256peKD6Kc, BigInt("0"))
		await expect(RevivewAv9W4J.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFQRT4g = await Revive.new({from: accounts[3]});
		const uintvFaSGrE = BigInt("1212")
		const addressQnO463M = accounts[5]
		const addressLzEKu9R = accounts[4]
		const addresstFqCwqp = accounts[3]
		const addressgt24Mch = accounts[3]
		const boolHQ5VOFk = await ReviveFQRT4g.transferFrom.call(addressLzEKu9R, addressQnO463M, uintvFaSGrE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256B21iqN7 = await ReviveFQRT4g.allowance.call(addressgt24Mch, addresstFqCwqp, {from: accounts[4]});
		await ReviveFQRT4g.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveFQRT4g.transferFrom.call(addressLzEKu9R, addressQnO463M, uintvFaSGrE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekJrxasn = await Revive.new({from: accounts[2]});
		const uintXL5UfRN = BigInt("32")
		const bytemD3H72L = "0x0c0c1f1e02121001161c0e1f0507060819170b0a171c0f04191409121903170d"
		const addressQ0sltBd = "0x0000000000000000000000000000000000000001"
		const addressJxiBgm = accounts[2]
		const addressNAEWUcd = accounts[5]
		const uintoe38gNX = BigInt("741")
		const uintytXkf7 = BigInt("1011")
		const uintmE5d8KA = BigInt("1160")
		const byteOGEmPlw = "0x0a141b13131c0909090e15101d071817100c04051a020501141f111816150c16"
		const bytekYbZWIf = "0x1013161f1c03000a051604170813021a0e0c130d0a0c1715120b0f1507011407"
		const addressODvI0TI = accounts[5]
		const uint256A8TImJb = await RevivekJrxasn.tokensLockedAtTime.call(addressQ0sltBd, bytemD3H72L, uintXL5UfRN, {from: accounts[3]});
		const uint256YaQWzio = await RevivekJrxasn.getUnlockableTokens.call(addressJxiBgm, {from: accounts[1]});
		const uint256l32NDlG = await RevivekJrxasn.totalBalanceOf.call(addressNAEWUcd, {from: accounts[0]});
		const uint256OtLKYXp = await RevivekJrxasn.recoverERC20.call(uintoe38gNX, {from: accounts[2]});
		const addressnIZxV9c = await RevivekJrxasn.owner.call({from: accounts[3]});
		const boolTQBc1tY = await RevivekJrxasn.lock.call(byteOGEmPlw, uintmE5d8KA, uintytXkf7, {from: accounts[3]});
		const uint256P9lmZLT = await RevivekJrxasn.tokensLocked.call(addressODvI0TI, bytekYbZWIf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256A8TImJb, BigInt("0"))
		assert.equal(uint256YaQWzio, BigInt("0"))
		assert.equal(uint256l32NDlG, BigInt("0"))
		await expect(RevivekJrxasn.recoverERC20.call(uintoe38gNX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveri3huVw = await Revive.new({from: accounts[4]});
		const addressPOQw6cR = accounts[0]
		const uintFMoePc = BigInt("1393")
		const addressCY5IRhk = accounts[2]
		const byteP2nUB3f = "0x1d181104060a1617200302012010160c17031016120d1d1a170609171f04010b"
		const addressx5kpFG5 = accounts[0]
		const uint256PDUufk = await Reviveri3huVw.unlock.call(addressPOQw6cR, {from: accounts[3]});
		const uint256BazAWXf = await Reviveri3huVw.totalSupply.call({from: accounts[1]});
		const boolULifhPp = await Reviveri3huVw.decreaseAllowance.call(addressCY5IRhk, uintFMoePc, {from: accounts[5]});
		const addressmqmr5CD = await Reviveri3huVw.owner.call({from: accounts[1]});
		const uint256oFanTe9 = await Reviveri3huVw.tokensLocked.call(addressx5kpFG5, byteP2nUB3f, {from: accounts[0]});

		assert.equal(uint256BazAWXf, BigInt("3000000000000000000000000000"))
		assert.equal(uint256PDUufk, BigInt("0"))
		await expect(Reviveri3huVw.decreaseAllowance.call(addressCY5IRhk, uintFMoePc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekJrxasn = await Revive.new({from: accounts[2]});
		const addressIBt557 = accounts[0]
		const uintIAPknEP = BigInt("32")
		const bytesQNZEry = "0x0c0c1f1e06121001161c0e1f0507060819170b0a171c0f04191409121903170d"
		const addressyJ6xawf = "0x0000000000000000000000000000000000000001"
		const addressH553OzS = accounts[5]
		const uintEF9PowL = BigInt("1775")
		const uintyykVwo = BigInt("1805")
		const byteIYfsogt = "0x16071804171713150c20160d1410190b0d0d1a0904141b171518180b1e051013"
		const addressZsNtS8 = accounts[2]
		const uintYxdpsDu = BigInt("1011")
		const uintxNCj5Ei = BigInt("1183")
		const byteSA9kTn9 = "0x0a141b13131c0909090e15101d071817100c04051a020501141f111816150c16"
		const addressSTIrayy = accounts[5]
		const addressYIVCIl2 = accounts[3]
		const uintkx3mnY = BigInt("1251")
		const addressY8yKJff = accounts[2]
		const addressVhnswF = accounts[4]
		const uint256PvOIxwc = await RevivekJrxasn.getUnlockableTokens.call(addressIBt557, {from: accounts[4]});
		const uint256A8TImJb = await RevivekJrxasn.tokensLockedAtTime.call(addressyJ6xawf, bytesQNZEry, uintIAPknEP, {from: accounts[3]});
		const uint256l32NDlG = await RevivekJrxasn.totalBalanceOf.call(addressH553OzS, {from: accounts[0]});
		const bool04VOZ9 = await RevivekJrxasn.transferWithLock.call(addressZsNtS8, byteIYfsogt, uintyykVwo, uintEF9PowL, {from: accounts[2]});
		const boolTQBc1tY = await RevivekJrxasn.lock.call(byteSA9kTn9, uintxNCj5Ei, uintYxdpsDu, {from: accounts[3]});
		const uint2566YBlup = await RevivekJrxasn.allowance.call(addressYIVCIl2, addressSTIrayy, {from: accounts[0]});
		const boolEJpfC0y = await RevivekJrxasn.decreaseAllowance.call(addressY8yKJff, uintkx3mnY, {from: accounts[0]});
		const addressbnn05R0 = await RevivekJrxasn.transferOwnership.call(addressVhnswF, {from: accounts[5]});

		assert.equal(bool04VOZ9, true)
		assert.equal(uint256A8TImJb, BigInt("0"))
		assert.equal(uint256PvOIxwc, BigInt("0"))
		assert.equal(uint256l32NDlG, BigInt("0"))
		await expect(RevivekJrxasn.lock.call(byteSA9kTn9, uintxNCj5Ei, uintYxdpsDu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetnxnbB = await Revive.new({from: accounts[3]});
		const uintfE6puYx = BigInt("461")
		const addressCv77nzZ = accounts[1]
		const addressZvVygSG = accounts[3]
		const uintD9NSmo = BigInt("1426")
		const bytem0OzeW = "0x031f0b0e1f051108041a1f12131907170b09181d091b0f0d201209151d110d1a"
		const uint256Rtw6l2b = await RevivetnxnbB.recoverERC20.call(uintfE6puYx, {from: accounts[5]});
		const uint256v1C8Ra7 = await RevivetnxnbB.allowance.call(addressZvVygSG, addressCv77nzZ, {from: accounts[1]});
		const boolUiAHFA = await RevivetnxnbB.extendLock.call(bytem0OzeW, uintD9NSmo, {from: accounts[5]});

		await expect(RevivetnxnbB.recoverERC20.call(uintfE6puYx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBkqDiK5 = await Revive.new({from: accounts[2]});
		const addressRtn49C = accounts[7]
		const uintnvf3Lyf = BigInt("327")
		const addresscxeqBka = accounts[3]
		const uintf5UUYG4 = BigInt("651")
		const byteRxpzRZu = "0x111f1d0615010f0b1c0d0f1d12090c1d0a1302130f131a13060f04110b070707"
		const uint256nJSKdTy = await ReviveBkqDiK5.unlock.call(addressRtn49C, {from: accounts[2]});
		const uint25660CCJn = await ReviveBkqDiK5.recoverERC20.call(uintnvf3Lyf, {from: accounts[1]});
		const uint256DzOmOB = await ReviveBkqDiK5.getUnlockableTokens.call(addresscxeqBka, {from: accounts[4]});
		const booll6Oee4L = await ReviveBkqDiK5.increaseLockAmount.call(byteRxpzRZu, uintf5UUYG4, {from: accounts[1]});

		assert.equal(uint256nJSKdTy, BigInt("0"))
		await expect(ReviveBkqDiK5.recoverERC20.call(uintnvf3Lyf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewAv9W4J = await Revive.new({from: accounts[5]});
		const addressPtmwO2V = accounts[2]
		const uinthbNAK5 = BigInt("1363")
		const uint256ZrI1lg = await RevivewAv9W4J.getUnlockableTokens.call(addressPtmwO2V, {from: accounts[1]});
		const uint256kISRroZ = await RevivewAv9W4J.recoverERC20.call(uinthbNAK5, {from: accounts[1]});

		assert.equal(uint256ZrI1lg, BigInt("0"))
		await expect(RevivewAv9W4J.recoverERC20.call(uinthbNAK5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKdxSPe = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const bytejT1C9Dx = "0x070d1b140b0311130f091c0f050c05031b10081e1b171d1b0c080a14161c1713"
		const addresseySYrRT = accounts[3]
		const uintdyZc2Xt = BigInt("745")
		const addressCNq4BgF = "0x0000000000000000000000000000000000000001"
		const addressTp4NqsI = accounts[0]
		const addresstFjOa2 = accounts[0]
		const uint256wMshvIi = await ReviveKdxSPe.tokensUnlockable.call(addresseySYrRT, bytejT1C9Dx, {from: accounts[4]});
		const boolMzN1i4U = await ReviveKdxSPe.approve.call(addressCNq4BgF, uintdyZc2Xt, {from: accounts[3]});
		const addressQLd7NHY = await ReviveKdxSPe.owner.call({from: accounts[3]});
		const addressGGlttk1 = await ReviveKdxSPe.transferOwnership.call(addressTp4NqsI, {from: accounts[1]});
		const addressZvx6Hk4 = await ReviveKdxSPe.transferOwnership.call(addresstFjOa2, {from: accounts[2]});
	});

	it('test for Revive', async () => {
		const RevivekJrxasn = await Revive.new({from: accounts[2]});
		const uintQtWNEXp = BigInt("32")
		const byteh5uY5yH = "0x0c0c1f1e02121001161c0e1f0507060819170b0a171c0f04191409121903170d"
		const addressgUb7lh = "0x0000000000000000000000000000000000000000"
		const uintjiIH6E3 = BigInt("992")
		const uintG5Y1yz = BigInt("1105")
		const addressWCnIl44 = accounts[0]
		const addressSx70etQ = accounts[2]
		const addressV2k1Hp6 = await RevivekJrxasn.owner.call({from: accounts[2]});
		const uint256A8TImJb = await RevivekJrxasn.tokensLockedAtTime.call(addressgUb7lh, byteh5uY5yH, uintQtWNEXp, {from: accounts[3]});
		const uint256bIvbsT9 = await RevivekJrxasn.recoverERC20.call(uintjiIH6E3, {from: accounts[2]});
		const boolPynHsqU = await RevivekJrxasn.transfer.call(addressWCnIl44, uintG5Y1yz, {from: accounts[2]});
		const uint256XHPMnz = await RevivekJrxasn.balanceOf.call(addressSx70etQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressV2k1Hp6, 0x01D7a2411c3E7924abd7211A6Ea867fD35F8CA57)
		assert.equal(uint256A8TImJb, BigInt("0"))
		await expect(RevivekJrxasn.recoverERC20.call(uintjiIH6E3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOgSVFci = await Revive.new({from: accounts[0]});
		const uintpkGjY6 = BigInt("1665")
		const byteutq8az8 = "0x1c2006201a171a0a110e02071a10070c0d0f16140c0c031a0e1c10150f190b1c"
		const addresstWoG42 = accounts[4]
		const uintb186ahu = BigInt("155")
		const addressVUYvZ42 = accounts[3]
		const uint256Ubpi6ns = await ReviveOgSVFci.recoverERC20.call(uintpkGjY6, {from: accounts[3]});
		const uint256afXWdg0 = await ReviveOgSVFci.tokensUnlockable.call(addresstWoG42, byteutq8az8, {from: accounts[0]});
		const boolKJByxjj = await ReviveOgSVFci.approve.call(addressVUYvZ42, uintb186ahu, {from: accounts[3]});

		await expect(ReviveOgSVFci.recoverERC20.call(uintpkGjY6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekJrxasn = await Revive.new({from: accounts[2]});
		const uintpGdesgi = BigInt("1528")
		const addresszLnYqZi = accounts[0]
		const address4bX75K = accounts[1]
		const bytemx54GN = "0x041813020e140b1e0f14010d19070f011201130e1a1d0301201718070d0a0102"
		const addressf2f6ykl = accounts[0]
		const uintBhW8UJ = BigInt("1011")
		const uintuAuZV9O = BigInt("1108")
		const bytey28q6SQ = "0x0a141b13131c0909090e15101a071817100c04051a020501141f111816150c16"
		const uint256dN2UK20 = await RevivekJrxasn.recoverERC20.call(uintpGdesgi, {from: accounts[1]});
		const uint256jhjhPFy = await RevivekJrxasn.allowance.call(address4bX75K, addresszLnYqZi, {from: accounts[0]});
		const uint256RdBsqVK = await RevivekJrxasn.tokensUnlockable.call(addressf2f6ykl, bytemx54GN, {from: accounts[0]});
		const boolTQBc1tY = await RevivekJrxasn.lock.call(bytey28q6SQ, uintuAuZV9O, uintBhW8UJ, {from: accounts[3]});

		await expect(RevivekJrxasn.recoverERC20.call(uintpGdesgi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewAv9W4J = await Revive.new({from: accounts[5]});
		const uintnA9UrXL = BigInt("1125")
		const addressnS7QF2p = accounts[2]
		const addressi9ckfi7 = accounts[2]
		const uint256xMsEJj = await RevivewAv9W4J.recoverERC20.call(uintnA9UrXL, {from: accounts[3]});
		const uint256mnSDaZy = await RevivewAv9W4J.totalBalanceOf.call(addressnS7QF2p, {from: accounts[1]});
		const uint256DhZGY4U = await RevivewAv9W4J.balanceOf.call(addressi9ckfi7, {from: accounts[0]});

		await expect(RevivewAv9W4J.recoverERC20.call(uintnA9UrXL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBkqDiK5 = await Revive.new({from: accounts[2]});
		const uintHeaqQq7 = BigInt("632")
		const addresskBUSIOi = accounts[7]
		const uint256RYnZq9F = await ReviveBkqDiK5.recoverERC20.call(uintHeaqQq7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nJSKdTy = await ReviveBkqDiK5.unlock.call(addresskBUSIOi, {from: accounts[2]});

		await expect(ReviveBkqDiK5.recoverERC20.call(uintHeaqQq7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekJrxasn = await Revive.new({from: accounts[2]});
		const uintQjLpAME = BigInt("221")
		const uintJX67gDo = BigInt("1591")
		const addressmWZu7ko = accounts[3]
		const byteiSwV61I = "0x02171413070c051b0a011a130b161a18150513110c081d070e0a0c0f05160a0b"
		const addressZLsJ6ny = accounts[2]
		const addressLPRbGd9 = accounts[3]
		const uintsr8Ulh = BigInt("1011")
		const uintXqNqZgg = BigInt("1085")
		const byteuGjgtqX = "0x0a141b13131c0909090e15101d071817100c04051a020501141f111816150c16"
		const uint256d2VoOZu = await RevivekJrxasn.recoverERC20.call(uintQjLpAME, {from: accounts[4]});
		const boolNqxGs7e = await RevivekJrxasn.increaseAllowance.call(addressmWZu7ko, uintJX67gDo, {from: accounts[1]});
		const uint256GBbvKFS = await RevivekJrxasn.tokensLocked.call(addressZLsJ6ny, byteiSwV61I, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qNUyUnW = await RevivekJrxasn.getUnlockableTokens.call(addressLPRbGd9, {from: accounts[4]});
		const boolTQBc1tY = await RevivekJrxasn.lock.call(byteuGjgtqX, uintXqNqZgg, uintsr8Ulh, {from: accounts[3]});

		await expect(RevivekJrxasn.recoverERC20.call(uintQjLpAME, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBkqDiK5 = await Revive.new({from: accounts[2]});
		const addresslCYgCZz = accounts[6]
		const uintnSJuOtV = BigInt("285")
		const uint256nJSKdTy = await ReviveBkqDiK5.unlock.call(addresslCYgCZz, {from: accounts[2]});
		const uint256Rj78xb9 = await ReviveBkqDiK5.recoverERC20.call(uintnSJuOtV, {from: accounts[1]});

		assert.equal(uint256nJSKdTy, BigInt("0"))
		await expect(ReviveBkqDiK5.recoverERC20.call(uintnSJuOtV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCdEirhB = await Revive.new({from: accounts[2]});
		const addressbYNNgup = accounts[4]
		const addressUhr5IlC = accounts[1]
		const addressaiqGvEK = "0x0000000000000000000000000000000000000001"
		const uintMhTcCc = BigInt("259")
		const uintWm28ays = BigInt("659")
		const uintsqjNag9 = BigInt("315")
		const byteAyLVY4t = "0x0d09090706171a071b14070e1504151e0c1e2018030d0f0a1208030b19190611"
		const addressJcwFjAp = accounts[2]
		const uint256z7ApfxG = await ReviveCdEirhB.totalBalanceOf.call(addressbYNNgup, {from: accounts[3]});
		const uint256udtclkD = await ReviveCdEirhB.allowance.call(addressaiqGvEK, addressUhr5IlC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UxcnAaC = await ReviveCdEirhB.recoverERC20.call(uintMhTcCc, {from: accounts[3]});
		const boolSH7RX6s = await ReviveCdEirhB.transferWithLock.call(addressJcwFjAp, byteAyLVY4t, uintsqjNag9, uintWm28ays, {from: accounts[0]});
		const addressdqN3A1W = await ReviveCdEirhB.owner.call({from: accounts[4]});

		assert.equal(uint256udtclkD, BigInt("0"))
		assert.equal(uint256z7ApfxG, BigInt("0"))
		await expect(ReviveCdEirhB.recoverERC20.call(uintMhTcCc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBkqDiK5 = await Revive.new({from: accounts[2]});
		const uintPLbblsd = BigInt("1215")
		const addressvcfQgrH = accounts[6]
		const uint256rq4o3W9 = await ReviveBkqDiK5.recoverERC20.call(uintPLbblsd, {from: accounts[0]});
		const uint256nJSKdTy = await ReviveBkqDiK5.unlock.call(addressvcfQgrH, {from: accounts[2]});

		await expect(ReviveBkqDiK5.recoverERC20.call(uintPLbblsd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewAv9W4J = await Revive.new({from: accounts[5]});
		const uintbZJZFrc = BigInt("1317")
		const uintjiENt93 = BigInt("0")
		const byteE4ZV3Vy = "0x1c0c020e11160f16031d1b1a1417151c0a090d1900131c080c08181f02140b02"
		const addressA7ionb2 = accounts[0]
		const uint256cGKHblq = await RevivewAv9W4J.recoverERC20.call(uintbZJZFrc, {from: accounts[3]});
		const uint256uzhqSnL = await RevivewAv9W4J.tokensLockedAtTime.call(addressA7ionb2, byteE4ZV3Vy, uintjiENt93, {from: accounts[1]});

		await expect(RevivewAv9W4J.recoverERC20.call(uintbZJZFrc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBkqDiK5 = await Revive.new({from: accounts[2]});
		const uintBGUbJQ = BigInt("1032")
		const addressW2meMU6 = accounts[6]
		const uint256TGVi4rY = await ReviveBkqDiK5.recoverERC20.call(uintBGUbJQ, {from: accounts[2]});
		const uint256nJSKdTy = await ReviveBkqDiK5.unlock.call(addressW2meMU6, {from: accounts[2]});

		await expect(ReviveBkqDiK5.recoverERC20.call(uintBGUbJQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewAv9W4J = await Revive.new({from: accounts[5]});
		const addressZwJjVHY = accounts[5]
		const addresstTRnt6 = accounts[4]
		const addressveBm3VP = accounts[2]
		const uintp9P992f = BigInt("1199")
		const uintdpRIKjI = BigInt("24")
		const bytewzZpkcX = "0x1c0c020e11160f16031d1b1a1417151c0a090d1900131c080c08181f02160b02"
		const addressVvKzhW2 = accounts[0]
		const addressOcFiKt3 = accounts[3]
		const uint256pjSvun = await RevivewAv9W4J.unlock.call(addressZwJjVHY, {from: accounts[4]});
		const uint256enzTQgG = await RevivewAv9W4J.totalBalanceOf.call(addresstTRnt6, {from: accounts[4]});
		const uint256l6Kwc1 = await RevivewAv9W4J.unlock.call(addressveBm3VP, {from: accounts[4]});
		const uint256O72pCdx = await RevivewAv9W4J.recoverERC20.call(uintp9P992f, {from: accounts[1]});
		const uint256uzhqSnL = await RevivewAv9W4J.tokensLockedAtTime.call(addressVvKzhW2, bytewzZpkcX, uintdpRIKjI, {from: accounts[1]});
		const uint256ZrI1lg = await RevivewAv9W4J.getUnlockableTokens.call(addressOcFiKt3, {from: accounts[1]});

		assert.equal(uint256enzTQgG, BigInt("0"))
		assert.equal(uint256l6Kwc1, BigInt("0"))
		assert.equal(uint256pjSvun, BigInt("0"))
		await expect(RevivewAv9W4J.recoverERC20.call(uintp9P992f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
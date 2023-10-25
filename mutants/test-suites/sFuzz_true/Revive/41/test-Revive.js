const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveWb2MFjI = await Revive.new({from: accounts[5]});
		const addressVdEwIB = accounts[0]
		const addressgLIKgmG = accounts[4]
		const addressauMfae8 = await ReviveWb2MFjI.owner.call({from: accounts[2]});
		const uint256Fh6yNf = await ReviveWb2MFjI.unlock.call(addressVdEwIB, {from: accounts[3]});
		const uint256ZUY1SnV = await ReviveWb2MFjI.unlock.call(addressgLIKgmG, {from: accounts[1]});

		assert.equal(addressauMfae8, 0x7fa1347C3028c53F108a84709545FAC81A75AfD0)
		assert.equal(uint256Fh6yNf, BigInt("0"))
		assert.equal(uint256ZUY1SnV, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveG6Qxpyp = await Revive.new({from: accounts[4]});
		const byteOxIKY4 = "0x1f021a181c0619061b0d0319181d1e000111071e1b0e170f1a15190c080d081b"
		const addressj10Z7ip = "0x0000000000000000000000000000000000000001"
		const uinttVpnLSR = BigInt("784")
		const bytezAG51Dm = "0x16071e16040615200f0c1c041708151c1504060c19080f1908120f0c0c091c17"
		const addressh00Ybo2 = accounts[3]
		const addressWuujkYL = accounts[4]
		const uintc47mBq = BigInt("1089")
		const addresswKOEymJ = accounts[3]
		const addressfhMnan3 = accounts[5]
		const uint256i9R8Pb0 = await ReviveG6Qxpyp.tokensLocked.call(addressj10Z7ip, byteOxIKY4, {from: accounts[4]});
//		await ReviveG6Qxpyp.onlyOwner.call({from: accounts[3]});
//		const uint256wUbBaRK = await ReviveG6Qxpyp.tokensLockedAtTime.call(addressh00Ybo2, bytezAG51Dm, uinttVpnLSR, {from: accounts[1]});
//		const uint256NHGUk9e = await ReviveG6Qxpyp.balanceOf.call(addressWuujkYL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzGbryUa = await ReviveG6Qxpyp.transferFrom.call(addressfhMnan3, addresswKOEymJ, uintc47mBq, {from: accounts[5]});

		assert.equal(uint256i9R8Pb0, BigInt("0"))
		await expect(ReviveG6Qxpyp.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveIzu1VcN = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwN23qtH = BigInt("610")
		const byteEP1FAiM = "0x0f0e1108031d05080803021f1d04040d1e1d0a1f0e12171f1f0b1015141f0115"
		const uintyAWxtZi = BigInt("550")
		const addressRhpt4B5 = accounts[0]
		const uintUKBkwHR = BigInt("629")
		const bytetRgutqM = "0x04161a191a12090a021a0c0a1a130a1a051e1a16090404070d141103101a1217"
		const addressHVSP2d = accounts[3]
		const byteCiftfHB = "0x1510131009140a1000181c19091c081c12101c161e131a0e04171116170d0c00"
		const addressyvQ5QJC = accounts[3]
		const boolGPxhauB = await ReviveIzu1VcN.extendLock.call(byteEP1FAiM, uintwN23qtH, {from: accounts[2]});
		const boolN6Ohq1 = await ReviveIzu1VcN.increaseAllowance.call(addressRhpt4B5, uintyAWxtZi, {from: accounts[4]});
		const uint256ZuBbMI = await ReviveIzu1VcN.tokensLockedAtTime.call(addressHVSP2d, bytetRgutqM, uintUKBkwHR, {from: accounts[0]});
		const uint256kBJb1zI = await ReviveIzu1VcN.tokensUnlockable.call(addressyvQ5QJC, byteCiftfHB, {from: accounts[3]});
	});

	it('test for Revive', async () => {
		const ReviveIkuJBaf = await Revive.new({from: accounts[4]});
		const uintupBUd5 = BigInt("256")
		const uintv9sbo3 = BigInt("824")
		const addresskPX288 = "0x0000000000000000000000000000000000000001"
		const addresseQ1nIV = accounts[1]
		const uintgcMiAL7 = BigInt("342")
		const addressdkXLUV = accounts[5]
		const addresszRoCfb = accounts[3]
		const uintHOe6OU8 = BigInt("1541")
		const addresscGAIo0S = "0x0000000000000000000000000000000000000001"
//		const uint256xt64YgA = await ReviveIkuJBaf.recoverERC20.call(uintupBUd5, {from: accounts[2]});
//		const boolRK6xMP = await ReviveIkuJBaf.transferFrom.call(addresseQ1nIV, addresskPX288, uintv9sbo3, {from: accounts[4]});
//		const boollcbeLk = await ReviveIkuJBaf.transferFrom.call(addresszRoCfb, addressdkXLUV, uintgcMiAL7, {from: accounts[5]});
//		const boolv0z2bRh = await ReviveIkuJBaf.increaseAllowance.call(addresscGAIo0S, uintHOe6OU8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveIkuJBaf.recoverERC20.call(uintupBUd5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveuJia0jS = await Revive.new({from: accounts[4]});
		const addressEiDTVFx = accounts[4]
		const addressyEyIWIp = accounts[1]
		const uintkITkuXJ = BigInt("248")
		const byte4WoH7D = "0x1b1d0d1d0e0e0a11091e13050f1e0a0318030e03081c081e0d090a0b0615131e"
		const uintQTgReiB = BigInt("73")
		const addressVOha3S = accounts[0]
		const uintZ1whWj = BigInt("670")
		const uintDrBcavR = BigInt("1632")
		const byteWUh5Mkn = "0x1b021f1603030d0d14031f030913180504010a170e1b0a0e1c18130f1516060b"
		const uint256NfP7xCz = await ReviveuJia0jS.allowance.call(addressyEyIWIp, addressEiDTVFx, {from: accounts[3]});
//		const boolXrjgL17 = await ReviveuJia0jS.increaseLockAmount.call(byte4WoH7D, uintkITkuXJ, {from: accounts[4]});
//		const boolWtUqmp = await ReviveuJia0jS.transfer.call(addressVOha3S, uintQTgReiB, {from: accounts[3]});
//		const boolbh7tqLa = await ReviveuJia0jS.lock.call(byteWUh5Mkn, uintDrBcavR, uintZ1whWj, {from: accounts[0]});
//		await ReviveuJia0jS.onlyOwner.call({from: accounts[4]});
//		await ReviveuJia0jS.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256NfP7xCz, BigInt("0"))
		await expect(ReviveuJia0jS.increaseLockAmount.call(byte4WoH7D, uintkITkuXJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveriQH9D = await Revive.new({from: accounts[5]});
		const uintSTS6kM = BigInt("71")
		const byteSv79ZMj = "0x0a1e051b100f1f040f1b18181910001215100510171d120c09190e1b13100a1b"
		const addressrkGlEQV = accounts[2]
		const uintQSC7vqa = BigInt("902")
		const byteqwk5Rd = "0x0815031415060b1a0804200a0519150b1d1c0411031a0e07131018020b160b0a"
		const addressGHfTDqq = accounts[5]
		const uint256lQSauRn = await ReviveriQH9D.tokensLockedAtTime.call(addressrkGlEQV, byteSv79ZMj, uintSTS6kM, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVbsO5BL = await ReviveriQH9D.extendLock.call(byteqwk5Rd, uintQSC7vqa, {from: accounts[3]});
//		const uint256r3nXSgg = await ReviveriQH9D.unlock.call(addressGHfTDqq, {from: accounts[2]});

		assert.equal(uint256lQSauRn, BigInt("0"))
		await expect(ReviveriQH9D.extendLock.call(byteqwk5Rd, uintQSC7vqa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivep14Edbc = await Revive.new({from: accounts[2]});
		const uintJyoQWiE = BigInt("1559")
		const addressBMplbal = accounts[3]
		const uintNrIiRoD = BigInt("874")
		const uintE1BUY4C = BigInt("467")
		const byteCHnjku = "0x15120e120b081b121a1f14171d161510190b1d170f191a161f0b000e050b2007"
//		const boolcyRuFcJ = await Revivep14Edbc.decreaseAllowance.call(addressBMplbal, uintJyoQWiE, {from: accounts[3]});
//		const boolKybs24U = await Revivep14Edbc.lock.call(byteCHnjku, uintE1BUY4C, uintNrIiRoD, {from: accounts[5]});

		await expect(Revivep14Edbc.decreaseAllowance.call(addressBMplbal, uintJyoQWiE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepLaZ38P = await Revive.new({from: accounts[4]});
		const uintWv7iDe = BigInt("1968")
		const address9NEcJx = accounts[4]
		const addressdudo49z = accounts[5]
		const uintY6SjOID = BigInt("1305")
		const uintpTxQ6Mt = BigInt("1936")
		const byte36yBZ2 = "0x101e170f15190b1f1c1e0d0e02010b0602101419180f1813101904110e051915"
		const addressJVnSZlZ = accounts[4]
//		const boolWdGCSmo = await RevivepLaZ38P.transfer.call(address9NEcJx, uintWv7iDe, {from: accounts[2]});
//		const boolzYdPMc2 = await RevivepLaZ38P.isOwner.call({from: accounts[2]});
//		const uint256NIVXP5L = await RevivepLaZ38P.balanceOf.call(addressdudo49z, {from: accounts[3]});
//		const boolnWbCWa2 = await RevivepLaZ38P.transferWithLock.call(addressJVnSZlZ, byte36yBZ2, uintpTxQ6Mt, uintY6SjOID, {from: accounts[5]});

		await expect(RevivepLaZ38P.transfer.call(address9NEcJx, uintWv7iDe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveStdh0Nk = await Revive.new({from: accounts[0]});
		const uintH0MBumi = BigInt("881")
		const addresspxXGpjQ = accounts[3]
		const byteg8a93Xl = "0x090b011c001110160d181e1714011406100b18080b1c1a1111060e1019110b02"
		const addresscs8j3j8 = accounts[4]
		const addressIrT0e8s = accounts[3]
		const addressjSuRFZ = await ReviveStdh0Nk.owner.call({from: accounts[3]});
		const boolY9UjOLb = await ReviveStdh0Nk.transfer.call(addresspxXGpjQ, uintH0MBumi, {from: accounts[0]});
		const uint256Cxar9BW = await ReviveStdh0Nk.tokensUnlockable.call(addresscs8j3j8, byteg8a93Xl, {from: accounts[4]});
		const uint256d6vyzkG = await ReviveStdh0Nk.getUnlockableTokens.call(addressIrT0e8s, {from: accounts[3]});

		assert.equal(addressjSuRFZ, 0x1F3e987BdF629F81895B61525486ED325B157fb5)
		assert.equal(boolY9UjOLb, true)
		assert.equal(uint256Cxar9BW, BigInt("0"))
		assert.equal(uint256d6vyzkG, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveWb2MFjI = await Revive.new({from: accounts[5]});
		const addressMxbHO2e = accounts[0]
		const addressPKxwIhC = accounts[4]
		const addressXxOuh8W = accounts[5]
		const addresscKSNzgH = accounts[1]
		const addressauMfae8 = await ReviveWb2MFjI.owner.call({from: accounts[2]});
		const uint256Fh6yNf = await ReviveWb2MFjI.unlock.call(addressMxbHO2e, {from: accounts[3]});
//		const addressnCWbPk2 = await ReviveWb2MFjI.transferOwnership.call(addressPKxwIhC, {from: accounts[0]});
//		const uint256ZUY1SnV = await ReviveWb2MFjI.unlock.call(addressXxOuh8W, {from: accounts[1]});
//		const uint256QJIFlMD = await ReviveWb2MFjI.balanceOf.call(addresscKSNzgH, {from: accounts[3]});

		assert.equal(addressauMfae8, 0x7fa1347C3028c53F108a84709545FAC81A75AfD0)
		assert.equal(uint256Fh6yNf, BigInt("0"))
		await expect(ReviveWb2MFjI.transferOwnership.call(addressPKxwIhC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver4aD8Ku = await Revive.new({from: accounts[1]});
		const addressPYCGPK2 = accounts[4]
		const uintrep7q3L = BigInt("1939")
		const byteqdT5Sfj = "0x12031f1c020c070f1e0108131e1f1c171d0d061f05160912201b0a150817150f"
		const bytej9bfjee = "0x01190100181e090b16050705051e021a10091c041d060d1c14140c1e0112110f"
		const addressBieRUl8 = accounts[3]
		const uint256t5NoqMC = await Reviver4aD8Ku.totalBalanceOf.call(addressPYCGPK2, {from: accounts[0]});
//		const boolV5pRV5b = await Reviver4aD8Ku.extendLock.call(byteqdT5Sfj, uintrep7q3L, {from: accounts[2]});
//		const uint256Skr7cN6 = await Reviver4aD8Ku.tokensLocked.call(addressBieRUl8, bytej9bfjee, {from: accounts[1]});
//		const boolmnitlQP = await Reviver4aD8Ku.isOwner.call({from: accounts[5]});

		assert.equal(uint256t5NoqMC, BigInt("0"))
		await expect(Reviver4aD8Ku.extendLock.call(byteqdT5Sfj, uintrep7q3L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveriQH9D = await Revive.new({from: accounts[5]});
		const uintUmwV1r = BigInt("71")
		const byte0ePbK6 = "0x0a1e051b100f1f040f1b18181910001215100510171d120c09190e1b13100a1b"
		const addressJe3j2DV = accounts[2]
		const uintn5pApB1 = BigInt("2012")
		const addressWhUPnht = accounts[4]
		const uinttAkskK = BigInt("990")
		const addressULtza5V = accounts[1]
		const addresstprZtCq = accounts[3]
		const uintlqnljIN = BigInt("902")
		const byteM3v3vvG = "0x0815031415060b1a0804200a0519150b1d1c0411031a0e07131018020b160b0a"
		const uintk1LcMAJ = BigInt("58")
		const addressAdp6GLe = accounts[3]
		const addressDcHIBc8 = "0x0000000000000000000000000000000000000001"
		const addressBcfsh6x = accounts[6]
		const uint256lQSauRn = await ReviveriQH9D.tokensLockedAtTime.call(addressJe3j2DV, byte0ePbK6, uintUmwV1r, {from: "0x0000000000000000000000000000000000000001"});
		const boolWOeYvs8 = await ReviveriQH9D.approve.call(addressWhUPnht, uintn5pApB1, {from: accounts[4]});
//		const boolSeELBtM = await ReviveriQH9D.transferFrom.call(addresstprZtCq, addressULtza5V, uinttAkskK, {from: accounts[0]});
//		const boolVbsO5BL = await ReviveriQH9D.extendLock.call(byteM3v3vvG, uintlqnljIN, {from: accounts[3]});
//		const boolXauAfBt = await ReviveriQH9D.transferFrom.call(addressDcHIBc8, addressAdp6GLe, uintk1LcMAJ, {from: accounts[0]});
//		const uint256r3nXSgg = await ReviveriQH9D.unlock.call(addressBcfsh6x, {from: accounts[2]});

		assert.equal(boolWOeYvs8, true)
		assert.equal(uint256lQSauRn, BigInt("0"))
		await expect(ReviveriQH9D.transferFrom.call(addresstprZtCq, addressULtza5V, uinttAkskK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver4aD8Ku = await Revive.new({from: accounts[1]});
		const addressAf396DE = accounts[5]
		const uintVbtOxZ = BigInt("1103")
		const addressa8DxN5u = accounts[4]
		const uintE8bWyw3 = BigInt("1939")
		const bytepeWCxmw = "0x12031f1c020c070f1e0108131e1f1c171d0d061f05160912201b0a150817150f"
		const bytekxHrlDV = "0x01190100181e090b16050705051e021a10091c041d060d1c14140c1e0112110f"
		const addressSHs3gi0 = accounts[3]
		const uintNfWCV8m = BigInt("158")
		const addressYRtsXN = accounts[3]
		const addressamoiV50 = accounts[2]
		const uint256t5NoqMC = await Reviver4aD8Ku.totalBalanceOf.call(addressAf396DE, {from: accounts[0]});
		const boolKARwyGJ = await Reviver4aD8Ku.increaseAllowance.call(addressa8DxN5u, uintVbtOxZ, {from: accounts[0]});
//		const boolV5pRV5b = await Reviver4aD8Ku.extendLock.call(bytepeWCxmw, uintE8bWyw3, {from: accounts[2]});
//		const uint256Skr7cN6 = await Reviver4aD8Ku.tokensLocked.call(addressSHs3gi0, bytekxHrlDV, {from: accounts[1]});
//		const booljz4t218 = await Reviver4aD8Ku.transferFrom.call(addressamoiV50, addressYRtsXN, uintNfWCV8m, {from: accounts[2]});
//		const boolmnitlQP = await Reviver4aD8Ku.isOwner.call({from: accounts[5]});

		assert.equal(boolKARwyGJ, true)
		assert.equal(uint256t5NoqMC, BigInt("0"))
		await expect(Reviver4aD8Ku.extendLock.call(bytepeWCxmw, uintE8bWyw3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveStdh0Nk = await Revive.new({from: accounts[0]});
		const byteLGk2ft = "0x090b011c001110160d181e1714011406100b18080b1c1a1111060e1019110b02"
		const addressxQeVcYw = accounts[4]
		const uintNwEg2q = BigInt("1442")
		const uintPbwcicw = BigInt("1714")
		const byteEtN0j8K = "0x0518120c0d1e12101f091608031700101802111605031a19120c060f10171b03"
		const addressJO624H4 = accounts[3]
		const addressjSuRFZ = await ReviveStdh0Nk.owner.call({from: accounts[3]});
		const uint256Cxar9BW = await ReviveStdh0Nk.tokensUnlockable.call(addressxQeVcYw, byteLGk2ft, {from: accounts[4]});
//		const boolBDlLp3P = await ReviveStdh0Nk.lock.call(byteEtN0j8K, uintPbwcicw, uintNwEg2q, {from: accounts[5]});
//		const uint256d6vyzkG = await ReviveStdh0Nk.getUnlockableTokens.call(addressJO624H4, {from: accounts[3]});

		assert.equal(addressjSuRFZ, 0x1F3e987BdF629F81895B61525486ED325B157fb5)
		assert.equal(uint256Cxar9BW, BigInt("0"))
		await expect(ReviveStdh0Nk.lock.call(byteEtN0j8K, uintPbwcicw, uintNwEg2q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver4aD8Ku = await Revive.new({from: accounts[1]});
		const uintp2Z4vm6 = BigInt("607")
		const addressOEn8uwt = accounts[3]
		const addressJ3CwBBx = accounts[4]
		const byteSXfJDW = "0x01190100181e090b16050705051e021a10091c041d060d1c14140c1e0112110f"
		const addressUGC0qDH = accounts[3]
//		const addressztHDi97 = await Reviver4aD8Ku.recoverERC20.call(addressOEn8uwt, uintp2Z4vm6, {from: accounts[1]});
//		const uint256t5NoqMC = await Reviver4aD8Ku.totalBalanceOf.call(addressJ3CwBBx, {from: accounts[0]});
//		const uint256Skr7cN6 = await Reviver4aD8Ku.tokensLocked.call(addressUGC0qDH, byteSXfJDW, {from: accounts[1]});
//		const boolmnitlQP = await Reviver4aD8Ku.isOwner.call({from: accounts[5]});

		await expect(Reviver4aD8Ku.recoverERC20.call(addressOEn8uwt, uintp2Z4vm6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver4aD8Ku = await Revive.new({from: accounts[1]});
		const uintFP5Tf7a = BigInt("591")
		const uintaQC1iFM = BigInt("1509")
		const byteOeWLEZk = "0x120c090e1e031f00091015081d15130a191004120b060214040a041e1f0e160a"
		const addresswws248 = accounts[0]
		const addressxx0AdU = accounts[4]
		const uintyxKkfA = BigInt("1939")
		const bytelcUNw1W = "0x12031f1c020c070f1e0108131e1f1c171d0d061f05160912201b0a150817150f"
		const byteWD2lG6Y = "0x01190100181e090b16050705051e021a10091c041d060d1c14140c1e0112110f"
		const addressWfGCP02 = accounts[3]
//		const booljAP0x2A = await Reviver4aD8Ku.transferWithLock.call(addresswws248, byteOeWLEZk, uintaQC1iFM, uintFP5Tf7a, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256t5NoqMC = await Reviver4aD8Ku.totalBalanceOf.call(addressxx0AdU, {from: accounts[0]});
//		const addresskMuW8X9 = await Reviver4aD8Ku.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolV5pRV5b = await Reviver4aD8Ku.extendLock.call(bytelcUNw1W, uintyxKkfA, {from: accounts[2]});
//		const uint256Skr7cN6 = await Reviver4aD8Ku.tokensLocked.call(addressWfGCP02, byteWD2lG6Y, {from: accounts[1]});
//		const boolmnitlQP = await Reviver4aD8Ku.isOwner.call({from: accounts[5]});

		await expect(Reviver4aD8Ku.transferWithLock.call(addresswws248, byteOeWLEZk, uintaQC1iFM, uintFP5Tf7a, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver4aD8Ku = await Revive.new({from: accounts[1]});
		const addressLThG5Iu = accounts[4]
		const uint0msJ3u = BigInt("459")
		const uintCOerRgo = BigInt("1946")
		const byteidbfQ56 = "0x12031f1c020c070f1e0108131e1f1c171d0d061f05160912201b0a150817150f"
		const uint256t5NoqMC = await Reviver4aD8Ku.totalBalanceOf.call(addressLThG5Iu, {from: accounts[0]});
//		const uint256Yv27LgF = await Reviver4aD8Ku.recoverERC20.call(uint0msJ3u, {from: accounts[4]});
//		const boolV5pRV5b = await Reviver4aD8Ku.extendLock.call(byteidbfQ56, uintCOerRgo, {from: accounts[2]});

		assert.equal(uint256t5NoqMC, BigInt("0"))
		await expect(Reviver4aD8Ku.recoverERC20.call(uint0msJ3u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXs8Ngta = await Revive.new({from: accounts[2]});
		const uint6HVl73 = BigInt("814")
		const addressnTSVTDY = accounts[5]
		const uintOn2qGxR = BigInt("242")
		const addressWzAbs3r = "0x0000000000000000000000000000000000000001"
		const uintSWuA2NN = BigInt("1621")
		const addressqykZIW = accounts[3]
		const addressEdudGVb = accounts[0]
		const uintzACO7dt = BigInt("120")
		const addressNOoCiD1 = accounts[4]
		const addressWwwm0Eh = accounts[1]
		const boolT4HXHUp = await ReviveXs8Ngta.increaseAllowance.call(addressnTSVTDY, uint6HVl73, {from: accounts[2]});
		const uint256czTfsHt = await ReviveXs8Ngta.totalSupply.call({from: accounts[1]});
//		const boolr1C5TkA = await ReviveXs8Ngta.decreaseAllowance.call(addressWzAbs3r, uintOn2qGxR, {from: accounts[1]});
//		const boolUuCk6u0 = await ReviveXs8Ngta.transferFrom.call(addressEdudGVb, addressqykZIW, uintSWuA2NN, {from: accounts[3]});
//		const boolwzEjtBn = await ReviveXs8Ngta.approve.call(addressNOoCiD1, uintzACO7dt, {from: accounts[5]});
//		const uint256wu7Iz0e = await ReviveXs8Ngta.getUnlockableTokens.call(addressWwwm0Eh, {from: accounts[4]});

		assert.equal(boolT4HXHUp, true)
		assert.equal(uint256czTfsHt, BigInt("3000000000000000000000000000"))
		await expect(ReviveXs8Ngta.decreaseAllowance.call(addressWzAbs3r, uintOn2qGxR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWb2MFjI = await Revive.new({from: accounts[5]});
		const uintNrzSjhn = BigInt("92")
		const uint3WsbJv = BigInt("14")
		const byteWeuCG9x = "0x07170a0c130218120d072005041f1c1c200a161f0b191605121717200f071101"
		const addresskMpmeAI = accounts[2]
		const uintVyFJf5 = BigInt("1270")
		const uintGtucgEd = BigInt("1480")
		const byteuZmHbd0 = "0x02140b1d060d0b110f021b1b091e1c18040b100c00071109021c201b0303041b"
		const addressauMfae8 = await ReviveWb2MFjI.owner.call({from: accounts[2]});
//		const uint256eM9mN1 = await ReviveWb2MFjI.recoverERC20.call(uintNrzSjhn, {from: accounts[0]});
//		const uint256RREaYu1 = await ReviveWb2MFjI.tokensLockedAtTime.call(addresskMpmeAI, byteWeuCG9x, uint3WsbJv, {from: accounts[0]});
//		const boolRR77n0j = await ReviveWb2MFjI.lock.call(byteuZmHbd0, uintGtucgEd, uintVyFJf5, {from: accounts[2]});

		assert.equal(addressauMfae8, 0x7fa1347C3028c53F108a84709545FAC81A75AfD0)
		await expect(ReviveWb2MFjI.recoverERC20.call(uintNrzSjhn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver4aD8Ku = await Revive.new({from: accounts[1]});
		const uintD95VcrL = BigInt("1293")
		const byteNl4tWt = "0x0104171617010b141d1703131f021b0c15021c10051d1c0e1c1c061b041d1c0a"
		const addressQJcqO6a = accounts[3]
		const uintpYjW5Ij = BigInt("75")
		const address9HXOP5 = accounts[5]
		const uint256mxNZs2 = await Reviver4aD8Ku.tokensLockedAtTime.call(addressQJcqO6a, byteNl4tWt, uintD95VcrL, {from: accounts[5]});
//		const uint256lfl6BC6 = await Reviver4aD8Ku.recoverERC20.call(uintpYjW5Ij, {from: accounts[3]});
//		const uint256t5NoqMC = await Reviver4aD8Ku.totalBalanceOf.call(address9HXOP5, {from: accounts[0]});

		assert.equal(uint256mxNZs2, BigInt("0"))
		await expect(Reviver4aD8Ku.recoverERC20.call(uintpYjW5Ij, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revived5hap6r = await Revive.new({from: accounts[3]});
		const addressxwkZk8v = accounts[1]
		const uintElH8JoX = BigInt("1863")
		const addressBuWC40e = accounts[3]
		const uintjo1w6Td = BigInt("528")
		const uintFSsspmA = BigInt("1904")
		const byteiKX1nmb = "0x1c020a02070a031c050c111f1e1e1f111f0f190019001f1605161b0d12120313"
		const addressydX8UQX = accounts[5]
		const addressiOGTQps = await Revived5hap6r.transferOwnership.call(addressxwkZk8v, {from: accounts[3]});
		const boolHg5GZh1 = await Revived5hap6r.increaseAllowance.call(addressBuWC40e, uintElH8JoX, {from: accounts[1]});
//		const boolXIZ7M1U = await Revived5hap6r.transferWithLock.call(addressydX8UQX, byteiKX1nmb, uintFSsspmA, uintjo1w6Td, {from: accounts[1]});

		assert.equal(boolHg5GZh1, true)
		await expect(Revived5hap6r.transferWithLock.call(addressydX8UQX, byteiKX1nmb, uintFSsspmA, uintjo1w6Td, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveu74VLAj = await Revive.new({from: accounts[2]});
		const uintRFtbi5d = BigInt("1323")
		const addresstBMk7L = accounts[2]
		const addresslXApotm = accounts[2]
		const uintEXnbfjm = BigInt("47")
		const boolodA6yr = await Reviveu74VLAj.increaseAllowance.call(addresstBMk7L, uintRFtbi5d, {from: accounts[0]});
		const uint256ajZy7gS = await Reviveu74VLAj.getUnlockableTokens.call(addresslXApotm, {from: accounts[1]});
//		const uint256RtqJQJW = await Reviveu74VLAj.recoverERC20.call(uintEXnbfjm, {from: accounts[4]});

		assert.equal(boolodA6yr, true)
		assert.equal(uint256ajZy7gS, BigInt("0"))
		await expect(Reviveu74VLAj.recoverERC20.call(uintEXnbfjm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivessmPO35 = await Revive.new({from: accounts[0]});
		const uintsP40ki = BigInt("1835")
		const uintVfhK5tj = BigInt("1054")
		const uintzk3hwmu = BigInt("1155")
		const addressixILjaj = accounts[3]
//		const uint256xsHRwdJ = await RevivessmPO35.recoverERC20.call(uintsP40ki, {from: accounts[1]});
//		const uint256yOj1GF = await RevivessmPO35.recoverERC20.call(uintVfhK5tj, {from: accounts[3]});
//		const addressVQsgFEM = await RevivessmPO35.recoverERC20.call(addressixILjaj, uintzk3hwmu, {from: accounts[0]});
//		await RevivessmPO35.renounceOwnership.call({from: accounts[2]});

		await expect(RevivessmPO35.recoverERC20.call(uintsP40ki, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveriQH9D = await Revive.new({from: accounts[5]});
		const uintsqzDPkj = BigInt("919")
		const bytecY2i63 = "0x0815031415060b1a0804200a0519150b1d1cffffffff11031a0e07131018020b160b0a"
//		const boolVbsO5BL = await ReviveriQH9D.extendLock.call(bytecY2i63, uintsqzDPkj, {from: accounts[3]});

		await expect(ReviveriQH9D.extendLock.call(bytecY2i63, uintsqzDPkj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveriQH9D = await Revive.new({from: accounts[5]});
		const uintLTUBT0l = BigInt("457")
		const uintodGsAT = BigInt("919")
		const bytebCjdQIo = "0x0815031415060b1a0804200a0519150b1d1c0411031a0e07131018020b160b0a"
//		const uint256tMo5QyU = await ReviveriQH9D.recoverERC20.call(uintLTUBT0l, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVbsO5BL = await ReviveriQH9D.extendLock.call(bytebCjdQIo, uintodGsAT, {from: accounts[3]});

		await expect(ReviveriQH9D.recoverERC20.call(uintLTUBT0l, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveriQH9D = await Revive.new({from: accounts[5]});
		const uintS2m9HJq = BigInt("1471")
		const addressvf58XO = accounts[2]
		const uintgCuG41 = BigInt("940")
		const bytec4r1qy = "0x0815031415060b1a0804200a0519150b1d1c0411031a0e07131018020b160b0a"
//		const uint256MqgTqau = await ReviveriQH9D.recoverERC20.call(uintS2m9HJq, {from: accounts[0]});
//		const uint256P6ooQ6L = await ReviveriQH9D.balanceOf.call(addressvf58XO, {from: accounts[1]});
//		const boolVbsO5BL = await ReviveriQH9D.extendLock.call(bytec4r1qy, uintgCuG41, {from: accounts[3]});

		await expect(ReviveriQH9D.recoverERC20.call(uintS2m9HJq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver4aD8Ku = await Revive.new({from: accounts[1]});
		const uintBmdlOOT = BigInt("1843")
		const addresse1LqPvE = accounts[5]
//		const uint256PmOPOuV = await Reviver4aD8Ku.recoverERC20.call(uintBmdlOOT, {from: accounts[0]});
//		const uint256t5NoqMC = await Reviver4aD8Ku.totalBalanceOf.call(addresse1LqPvE, {from: accounts[0]});

		await expect(Reviver4aD8Ku.recoverERC20.call(uintBmdlOOT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver4aD8Ku = await Revive.new({from: accounts[1]});
		const addressHTz0uGH = accounts[4]
		const uintLxLEH3 = BigInt("1017")
		const uintV4KKcnZ = BigInt("575")
		const addressO2rPJ7p = accounts[2]
		const uint256t5NoqMC = await Reviver4aD8Ku.totalBalanceOf.call(addressHTz0uGH, {from: accounts[0]});
//		const uint256TVk7oPE = await Reviver4aD8Ku.recoverERC20.call(uintLxLEH3, {from: accounts[4]});
//		const boolLKVt65e = await Reviver4aD8Ku.increaseAllowance.call(addressO2rPJ7p, uintV4KKcnZ, {from: accounts[3]});

		assert.equal(uint256t5NoqMC, BigInt("0"))
		await expect(Reviver4aD8Ku.recoverERC20.call(uintLxLEH3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWb2MFjI = await Revive.new({from: accounts[5]});
		const uintzTK0Bdi = BigInt("0")
		const byteMdlzQpp = "0x201c0e1b02180a162017170e1219090c05011c1a080d0b1c160908170d1d141b"
		const addressnLjPe7P = accounts[2]
		const uintdZj2t4 = BigInt("1934")
		const uint256RREaYu1 = await ReviveWb2MFjI.tokensLockedAtTime.call(addressnLjPe7P, byteMdlzQpp, uintzTK0Bdi, {from: accounts[0]});
//		const uint256ihhbsNp = await ReviveWb2MFjI.recoverERC20.call(uintdZj2t4, {from: accounts[4]});

		assert.equal(uint256RREaYu1, BigInt("0"))
		await expect(ReviveWb2MFjI.recoverERC20.call(uintdZj2t4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver4aD8Ku = await Revive.new({from: accounts[1]});
		const uintfMOQfeR = BigInt("1678")
		const addressMlnSnPT = accounts[5]
		const bytepK3ij8a = "0x08191c1e13120e170e1a150d0c08011b191e110f0a0806170401180603190118"
		const addresssewj5u = accounts[0]
		const uintFCRKhVk = BigInt("909")
		const uintPOSvECi = BigInt("209")
		const byteREc1Ni = "0x0812070c1e0517041e1e0c13010c1f1f120815071d19181f1d1b080f03170903"
//		const uint256Xjigzwe = await Reviver4aD8Ku.recoverERC20.call(uintfMOQfeR, {from: accounts[4]});
//		const uint256t5NoqMC = await Reviver4aD8Ku.totalBalanceOf.call(addressMlnSnPT, {from: accounts[0]});
//		const uint256OP5zjEc = await Reviver4aD8Ku.tokensUnlockable.call(addresssewj5u, bytepK3ij8a, {from: accounts[1]});
//		const boolsv4qvr1 = await Reviver4aD8Ku.lock.call(byteREc1Ni, uintPOSvECi, uintFCRKhVk, {from: accounts[4]});

		await expect(Reviver4aD8Ku.recoverERC20.call(uintfMOQfeR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebpiFjsj = await Revive.new({from: accounts[1]});
		const uintKFAfAMI = BigInt("1658")
		const addressZFzFkyl = accounts[1]
		const uintPPikLdn = BigInt("925")
		const addressb7CmiST = accounts[1]
//		const uint256H5YEUrR = await RevivebpiFjsj.recoverERC20.call(uintKFAfAMI, {from: accounts[2]});
//		const uint256XApGU5u = await RevivebpiFjsj.totalBalanceOf.call(addressZFzFkyl, {from: accounts[0]});
//		const booldSDuPpu = await RevivebpiFjsj.increaseAllowance.call(addressb7CmiST, uintPPikLdn, {from: accounts[2]});

		await expect(RevivebpiFjsj.recoverERC20.call(uintKFAfAMI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWb2MFjI = await Revive.new({from: accounts[5]});
		const uintxiJPxoh = BigInt("1182")
		const uintlbJiwBc = BigInt("636")
		const uintYepM71o = BigInt("1107")
		const byteXjjMxAH = "0x160b18181e0c1c141a1f0c021008080d041e06100c1e020412191919050c1409"
		const addressJs1BXn = accounts[1]
//		const uint256Q1RdJH = await ReviveWb2MFjI.recoverERC20.call(uintxiJPxoh, {from: accounts[1]});
//		const bool4v2oKm = await ReviveWb2MFjI.transferWithLock.call(addressJs1BXn, byteXjjMxAH, uintYepM71o, uintlbJiwBc, {from: accounts[4]});

		await expect(ReviveWb2MFjI.recoverERC20.call(uintxiJPxoh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
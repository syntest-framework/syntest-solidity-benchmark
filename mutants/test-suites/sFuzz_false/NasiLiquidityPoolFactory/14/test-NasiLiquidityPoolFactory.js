const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringEsfPxok = "V5aSLVgm1woj1WHRpfiosmyxyBOrIus"
		const stringmdM69q7 = "tGsI627CKpO0LIbMIW"
		const uintjiIVhGP = BigInt("72")
		const NasiLiquidityPoolFactoryCWD5KFz = await NasiLiquidityPoolFactory.new(stringEsfPxok, stringmdM69q7, uintjiIVhGP, {from: accounts[0]});
		const addressibJEjId = accounts[2]
		const uintpa7ZnDf = BigInt("471")
		const addressYHE87HX = accounts[0]
		const addressJ8So8e = accounts[3]
		const addressbHj2nPA = await NasiLiquidityPoolFactoryCWD5KFz.setMigrator.call(addressibJEjId, {from: accounts[3]});
		await NasiLiquidityPoolFactoryCWD5KFz.renouncePauser.call({from: accounts[3]});
		const boolXpkPUyP = await NasiLiquidityPoolFactoryCWD5KFz.increaseAllowance.call(addressYHE87HX, uintpa7ZnDf, {from: accounts[3]});
		await NasiLiquidityPoolFactoryCWD5KFz.unpause.call({from: accounts[1]});
		const addressVzJiJM = await NasiLiquidityPoolFactoryCWD5KFz.addPauser.call(addressJ8So8e, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringDXB86CU = "NFkPkJKPN3jpP1oVu3nJKuokDOb2gOD18Bd3NkcM8gka1KBsUuP"
		const stringhjrxHlD = "unB4GVHXi6COxPFpyg5pcn59IdNwOhYTs6r3D5QDNxchS9"
		const uintALi1LTp = BigInt("221")
		const NasiLiquidityPoolFactorylPQStfc = await NasiLiquidityPoolFactory.new(stringDXB86CU, stringhjrxHlD, uintALi1LTp, {from: accounts[2]});
		const uintyZsPQOV = BigInt("1165")
		const uintqcfP3ul = BigInt("1627")
		const addressZm0Momm = accounts[3]
		const uint256tQkuDpR = await NasiLiquidityPoolFactorylPQStfc.enterStaking.call(uintyZsPQOV, {from: accounts[0]});
		const booleGPZXRw = await NasiLiquidityPoolFactorylPQStfc.decreaseAllowance.call(addressZm0Momm, uintqcfP3ul, {from: accounts[5]});
		await NasiLiquidityPoolFactorylPQStfc.massUpdatePools.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressuLCWVVq = accounts[5]
		const addressKTia1YC = accounts[4]
		const uintjFtzBDS = BigInt("210")
		const uintOxvP5NF = BigInt("755")
		const NasiLiquidityPoolFactoryCkkdsJ5 = await NasiLiquidityPoolFactory.new(addressuLCWVVq, addressKTia1YC, uintjFtzBDS, uintOxvP5NF, {from: accounts[1]});
		const addressYFtM7L1 = accounts[2]
		const uintOgqqui = BigInt("1716")
		const addressOjoYcsT = "0x0000000000000000000000000000000000000001"
		const uintQHA14Qh = BigInt("391")
		const addressu6BchQ = accounts[4]
		const addressQZ3aOqg = accounts[2]
		const addressKWLuK2t = await NasiLiquidityPoolFactoryCkkdsJ5.delegate.call(addressYFtM7L1, {from: accounts[3]});
		const boolckVMdrB = await NasiLiquidityPoolFactoryCkkdsJ5.mint.call(addressOjoYcsT, uintOgqqui, {from: accounts[0]});
		const boolyw6R8Wi = await NasiLiquidityPoolFactoryCkkdsJ5.mint.call(addressu6BchQ, uintQHA14Qh, {from: accounts[0]});
		await NasiLiquidityPoolFactoryCkkdsJ5.pause.call({from: accounts[3]});
		const addressYtcHVQ1 = await NasiLiquidityPoolFactoryCkkdsJ5.delegate.call(addressQZ3aOqg, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringTUWKb7j = "QxFAvOxmRjP8hkUBAQxQ5OHBm2SLnzUvgUCUJcRnD7FTbtkTSFGsm7KbP5ye8mtiHV6UO7CTCItYYuauNKwwf53KOWDPDLH"
		const stringw9Lt8OB = "W"
		const uinttJWNnpa = BigInt("231")
		const NasiLiquidityPoolFactorycwIJA6p = await NasiLiquidityPoolFactory.new(stringTUWKb7j, stringw9Lt8OB, uinttJWNnpa, {from: accounts[2]});
		const addressPDftN3k = accounts[0]
		const uintdgzkUiw = BigInt("1642")
		const uintpSCIza0 = BigInt("1515")
		await NasiLiquidityPoolFactorycwIJA6p.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWzXia4 = await NasiLiquidityPoolFactorycwIJA6p.isOwner.call({from: accounts[3]});
		const addressLsOZel8 = await NasiLiquidityPoolFactorycwIJA6p.delegate.call(addressPDftN3k, {from: accounts[1]});
		const uint256qwgUF1 = await NasiLiquidityPoolFactorycwIJA6p.emergencyWithdraw.call(uintdgzkUiw, {from: accounts[1]});
		const uint256YQeijSF = await NasiLiquidityPoolFactorycwIJA6p.emergencyWithdraw.call(uintpSCIza0, {from: accounts[1]});
		const boolOXnmlfk = await NasiLiquidityPoolFactorycwIJA6p.isOwner.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringhZNYwLY = "I239NMOVD"
		const stringBngJJe = "N2oRNFLxam3XCe22X4FLWMhlzaA12XFYFzXSNeoAIfgIFA8flD5Ex287ErRuPWF8LilVhMFUltarp9RwVv9mc"
		const uintDR1CKD3 = BigInt("218")
		const NasiLiquidityPoolFactoryCwi3Hln = await NasiLiquidityPoolFactory.new(stringhZNYwLY, stringBngJJe, uintDR1CKD3, {from: accounts[1]});
		const addressBgj6KYX = accounts[0]
		const uinttajlY1q = BigInt("607")
		const uintfVMJRk5 = BigInt("1462")
		const addressVgtj277 = accounts[3]
		const addressT5hE4v = await NasiLiquidityPoolFactoryCwi3Hln.setMigrator.call(addressBgj6KYX, {from: accounts[0]});
		await NasiLiquidityPoolFactoryCwi3Hln.onlyOwner.call({from: accounts[1]});
		const uint256Dg4srhW = await NasiLiquidityPoolFactoryCwi3Hln.updatePool.call(uinttajlY1q, {from: accounts[5]});
		const addressZAxSm5u = await NasiLiquidityPoolFactoryCwi3Hln.burnFrom.call(addressVgtj277, uintfVMJRk5, {from: accounts[1]});
		const stringZnew4CD = await NasiLiquidityPoolFactoryCwi3Hln.symbol.call({from: accounts[5]});
		const boolPPqG05g = await NasiLiquidityPoolFactoryCwi3Hln.paused.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresspxNFcHk = "0x0000000000000000000000000000000000000001"
		const addressVZ4BkTs = accounts[4]
		const uintEKlP4xM = BigInt("1305")
		const uintzTZqg4Z = BigInt("1347")
		const NasiLiquidityPoolFactoryeMYmrab = await NasiLiquidityPoolFactory.new(addresspxNFcHk, addressVZ4BkTs, uintEKlP4xM, uintzTZqg4Z, {from: accounts[3]});
		const addressfExaSn = "0x0000000000000000000000000000000000000001"
		const uintBXkZF1i = BigInt("1483")
		const uintz1UvGU = BigInt("1918")
		const addresslNYtTFj = accounts[1]
		const addressD7tT1ro = accounts[2]
		const uintUkAyW3 = BigInt("1953")
		const uint256qtsMzJ0 = await NasiLiquidityPoolFactoryeMYmrab.pendingNasi.call(uintBXkZF1i, addressfExaSn, {from: accounts[1]});
		const uint256dOWKvsy = await NasiLiquidityPoolFactoryeMYmrab.totalSupply.call({from: accounts[0]});
		const boolNY6x8ll = await NasiLiquidityPoolFactoryeMYmrab.decreaseAllowance.call(addresslNYtTFj, uintz1UvGU, {from: accounts[1]});
		const uint256l4KbdTt = await NasiLiquidityPoolFactoryeMYmrab.pendingNasi.call(uintUkAyW3, addressD7tT1ro, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresscG1DWDL = accounts[5]
		const addressNO370xs = accounts[3]
		const uintAxEKiLB = BigInt("1214")
		const uintgtGyCXJ = BigInt("1141")
		const NasiLiquidityPoolFactoryiePeSF6 = await NasiLiquidityPoolFactory.new(addresscG1DWDL, addressNO370xs, uintAxEKiLB, uintgtGyCXJ, {from: "0x0000000000000000000000000000000000000001"});
		const uinte1mlf3H = BigInt("392")
		const addressXgdye2 = accounts[0]
		const addresssceufqS = accounts[4]
		const uintuc5dyyA = BigInt("1005")
		const uintRhnq1YC = BigInt("826")
		const address5FHLDf = accounts[2]
		const boolXDJdsjm = await NasiLiquidityPoolFactoryiePeSF6.decreaseAllowance.call(addressXgdye2, uinte1mlf3H, {from: accounts[3]});
		await NasiLiquidityPoolFactoryiePeSF6.massUpdatePools.call({from: accounts[1]});
		const uint256sO6OCzm = await NasiLiquidityPoolFactoryiePeSF6.pendingNasi.call(uintuc5dyyA, addresssceufqS, {from: "0x0000000000000000000000000000000000000001"});
		const boolTvCosyI = await NasiLiquidityPoolFactoryiePeSF6.increaseAllowance.call(address5FHLDf, uintRhnq1YC, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringTH5DcdX = "jDg85"
		const stringzdZgG1n = "9vTWiqusuLOSzHHsuvLwYFrY"
		const uinteLw7b3t = BigInt("92")
		const NasiLiquidityPoolFactoryuLMiyMp = await NasiLiquidityPoolFactory.new(stringTH5DcdX, stringzdZgG1n, uinteLw7b3t, {from: accounts[1]});
		const addressG7U5BgK = accounts[3]
		const addressVnRmU1m = accounts[4]
		const uintQtCHv78 = BigInt("897")
		const addressLteRZHR = accounts[3]
		const uintwSb2ag4 = BigInt("1064")
		const addressAxaB3kf = accounts[3]
		const addresswTNg4Cp = await NasiLiquidityPoolFactoryuLMiyMp.addPauser.call(addressG7U5BgK, {from: accounts[1]});
		const uint256mSRwLPR = await NasiLiquidityPoolFactoryuLMiyMp.getCurrentVotes.call(addressVnRmU1m, {from: accounts[0]});
		const boolVkGRRod = await NasiLiquidityPoolFactoryuLMiyMp.increaseAllowance.call(addressLteRZHR, uintQtCHv78, {from: accounts[4]});
		await NasiLiquidityPoolFactoryuLMiyMp.renounceMinter.call({from: accounts[0]});
		const boolnWvneN4 = await NasiLiquidityPoolFactoryuLMiyMp.transfer.call(addressAxaB3kf, uintwSb2ag4, {from: accounts[4]});
		await NasiLiquidityPoolFactoryuLMiyMp.unpause.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJXE9Tbw = "semA69WfVnGUgVWaKlwAka"
		const stringD4XTLpz = "IgGsuxDdaUw8qNlDd2GlymL6Iyf4cb5c9PMdbfOnOhqppeXvI12FQMkcGs2qFhwjcHwFCEHW3XkIhuykNNYIA"
		const uintPrjlep8 = BigInt("0")
		const NasiLiquidityPoolFactoryOseyBrT = await NasiLiquidityPoolFactory.new(stringJXE9Tbw, stringD4XTLpz, uintPrjlep8, {from: accounts[3]});
		const addressyGC7JAO = accounts[0]
		const uintwBTa9h5 = BigInt("444")
		const addressn35UME = "0x0000000000000000000000000000000000000001"
		const uintfXRSqSk = BigInt("208")
		const addressMG4IibT = accounts[3]
		const boolyZnksrs = true
		const addressZcS4dw8 = accounts[1]
		const uintig39iW7 = BigInt("1249")
		const addressZUapkuP = await NasiLiquidityPoolFactoryOseyBrT.delegate.call(addressyGC7JAO, {from: accounts[0]});
		await NasiLiquidityPoolFactoryOseyBrT.onlyOwner.call({from: accounts[4]});
		const boolkKebNv3 = await NasiLiquidityPoolFactoryOseyBrT.transfer.call(addressn35UME, uintwBTa9h5, {from: accounts[4]});
		const booljJfYMjm = await NasiLiquidityPoolFactoryOseyBrT.decreaseAllowance.call(addressMG4IibT, uintfXRSqSk, {from: accounts[3]});
		const uint256TRTC6U = await NasiLiquidityPoolFactoryOseyBrT.addLpToken.call(uintig39iW7, addressZcS4dw8, boolyZnksrs, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressvNgbplk = accounts[0]
		const addressdQhsLl = accounts[3]
		const uintLcdfLTD = BigInt("275")
		const uintlmQ7Dsf = BigInt("830")
		const NasiLiquidityPoolFactoryTUCIBBL = await NasiLiquidityPoolFactory.new(addressvNgbplk, addressdQhsLl, uintLcdfLTD, uintlmQ7Dsf, {from: accounts[2]});
		const uintvMgP4Zg = BigInt("1217")
		const uintQ4fXCEF = BigInt("608")
		const byteNQoPApb = "0x061b0c120f1e11081309160f090d131d0a131b131d061a1e0118020a1b1e0414"
		const byteUfNB7R5 = "0x0c1d1200050d0214120915171e120117160e090d0a0e05090a0d1c120c140805"
		const uintLlLEZQ5 = BigInt("71")
		const uintFsJWGPM = BigInt("1783")
		const uinttPlIyw = BigInt("216")
		const addressSvnGmek = accounts[0]
		const uintlRThrP = BigInt("84")
		const addresskyv7FxT = accounts[2]
		const uintMMvtUb = BigInt("631")
		const uint256J0ptj70 = await NasiLiquidityPoolFactoryTUCIBBL.withdraw.call(uintQ4fXCEF, uintvMgP4Zg, {from: accounts[0]});
		const 
jbSSa27 = await NasiLiquidityPoolFactoryTUCIBBL.delegateBySig.call(addressSvnGmek, uinttPlIyw, uintFsJWGPM, uintLlLEZQ5, byteUfNB7R5, byteNQoPApb, {from: accounts[3]});
		const boolMisbrQh = await NasiLiquidityPoolFactoryTUCIBBL.isOwner.call({from: accounts[5]});
		const addressmeNwPre = await NasiLiquidityPoolFactoryTUCIBBL.burnFrom.call(addresskyv7FxT, uintlRThrP, {from: accounts[0]});
		const uint256hYvccC2 = await NasiLiquidityPoolFactoryTUCIBBL.leaveStaking.call(uintMMvtUb, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvTVQsW = "M4hIICb11DPpVuUz"
		const stringWXAFkQc = "lR2HluMnrQlofcytwnpcHT7kjU9WQaE1AqNP1fcwtnwTWBIzwwDJpCqA2JrHqLKdLYyoM9auGT8qb2WodFTOthDiWAQ8gE"
		const uintH6iHz2h = BigInt("223")
		const NasiLiquidityPoolFactorygmf2WEe = await NasiLiquidityPoolFactory.new(stringvTVQsW, stringWXAFkQc, uintH6iHz2h, {from: accounts[3]});
		const addressMyXBoDa = accounts[4]
		const boolzdlEfGd = true
		const uintCfwraw = BigInt("169")
		const uinttesSsmk = BigInt("1348")
		const boolHnP81CN = await NasiLiquidityPoolFactorygmf2WEe.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressJqveN0f = await NasiLiquidityPoolFactorygmf2WEe.delegates.call(addressMyXBoDa, {from: accounts[0]});
		const uint256U0Cvq5P = await NasiLiquidityPoolFactorygmf2WEe.setAllocationPoint.call(uinttesSsmk, uintCfwraw, boolzdlEfGd, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringIazW3P2 = "GUOQSVQlhvvtxN7"
		const stringbEp5uNH = "UC5yuGonvh7cdLQpzlAb0aOnYtdu6V23qf12FFE5TAjMO2xhed0IVWhkXwCXcgUfXgAB775xbbUUS4QLMmjR"
		const uintElVpH2P = BigInt("209")
		const NasiLiquidityPoolFactoryj5rBdOV = await NasiLiquidityPoolFactory.new(stringIazW3P2, stringbEp5uNH, uintElVpH2P, {from: accounts[2]});
		const addresspKXA6iO = "0x0000000000000000000000000000000000000001"
		const addressLPQgPAU = await NasiLiquidityPoolFactoryj5rBdOV.dev.call(addresspKXA6iO, {from: accounts[3]});
		const uint256KDgBElz = await NasiLiquidityPoolFactoryj5rBdOV.totalSupply.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressJjsj2F = accounts[2]
		const addressFu0SW2e = accounts[0]
		const uintSV28YCc = BigInt("406")
		const uintRUFS57g = BigInt("1277")
		const NasiLiquidityPoolFactoryC5kZuu = await NasiLiquidityPoolFactory.new(addressJjsj2F, addressFu0SW2e, uintSV28YCc, uintRUFS57g, {from: accounts[4]});
		const addressorNpyc = accounts[1]
		const uintemCJ8Ju = BigInt("1437")
		const uintswBxWjX = BigInt("1236")
		const uintjOm9sNr = BigInt("413")
		const uintu3ko1JR = BigInt("1854")
		const addressZXWSjmp = accounts[3]
		const booltiuzVld = await NasiLiquidityPoolFactoryC5kZuu.isOwner.call({from: accounts[4]});
		const addressWIWLwa = await NasiLiquidityPoolFactoryC5kZuu.delegate.call(addressorNpyc, {from: accounts[3]});
		const uint256iZe5BRV = await NasiLiquidityPoolFactoryC5kZuu.deposit.call(uintswBxWjX, uintemCJ8Ju, {from: accounts[1]});
		const uint256ZKdW1YA = await NasiLiquidityPoolFactoryC5kZuu.updatePool.call(uintjOm9sNr, {from: accounts[2]});
		const boolyl7uAF6 = await NasiLiquidityPoolFactoryC5kZuu.decreaseAllowance.call(addressZXWSjmp, uintu3ko1JR, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringg9PXuXA = "YV2p9fTt4U8bS9Gv2SvJovFEQynwn76R6UFSpYHUPyLeA5jUnIuAPejB"
		const stringCSvDsi = "OMGrBDtGfZzi2KtoiGNnZVu4yOCwwvw7GSqfjIzOOEMwTVMi6UWLJidDL"
		const uintLiQPUMb = BigInt("131")
		const NasiLiquidityPoolFactorydNopYXL = await NasiLiquidityPoolFactory.new(stringg9PXuXA, stringCSvDsi, uintLiQPUMb, {from: accounts[0]});
		const addressx8yaiAP = accounts[2]
		const uintyMN7Ad = BigInt("1343")
		const stringjYU4t8o = await NasiLiquidityPoolFactorydNopYXL.symbol.call({from: accounts[4]});
		await NasiLiquidityPoolFactorydNopYXL.onlyOwner.call({from: accounts[1]});
		await NasiLiquidityPoolFactorydNopYXL.whenPaused.call({from: accounts[2]});
		const uint256Ey2dQjP = await NasiLiquidityPoolFactorydNopYXL.pendingNasi.call(uintyMN7Ad, addressx8yaiAP, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringG3rieAL = "YBsqtm5AzHsGeOv5PaukjRtZzSeySpqMCjqNt4vfW4z9O8cu7griduaS9qtOc7uH"
		const stringzYViR2t = "hQnIHD3xLqRQVwH1jNhcs52UFuworOF"
		const uintrXy8qd3 = BigInt("219")
		const NasiLiquidityPoolFactoryhFnLItO = await NasiLiquidityPoolFactory.new(stringG3rieAL, stringzYViR2t, uintrXy8qd3, {from: accounts[4]});
		const uintDBaW9V5 = BigInt("166")
		const uintxyiG1PY = BigInt("424")
		const stringxBcs3dG = await NasiLiquidityPoolFactoryhFnLItO.symbol.call({from: accounts[0]});
		const uint256aCCKfkd = await NasiLiquidityPoolFactoryhFnLItO.getBonusMultiplier.call(uintxyiG1PY, uintDBaW9V5, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringlyn32i = "Nu34AbT7OMkaby2Qy8RYvFtN3bZ1lHBPyFyCRgQmvk1BfczieV4GMScbeuZjt61HtlaAMK7apQE3MqGcNYaqdoJ4KBrmpj"
		const stringLGMFr9L = "fvcG7LXPDYpuQt8bv9qs2GRaxEut7uD6lXqFWO1RTxK2jyOuzfhsCO9Fqsnc1OVRXKCs4CtozOJvU4yni5yn1TtvKam8fr099"
		const uintz1UTXO = BigInt("109")
		const NasiLiquidityPoolFactory6J0K2H = await NasiLiquidityPoolFactory.new(stringlyn32i, stringLGMFr9L, uintz1UTXO, {from: accounts[1]});
		const uintgQ3VVK = BigInt("1375")
		const addressyCfudge = accounts[0]
		const addressdeySfZp = accounts[0]
		const addresser4TN5o = accounts[4]
		const boolpQVUGZw = await NasiLiquidityPoolFactory6J0K2H.increaseAllowance.call(addressyCfudge, uintgQ3VVK, {from: accounts[2]});
		const uint256kGDUCaS = await NasiLiquidityPoolFactory6J0K2H.getCurrentVotes.call(addressdeySfZp, {from: accounts[0]});
		const addressXlpVoSZ = await NasiLiquidityPoolFactory6J0K2H.addMinter.call(addresser4TN5o, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcT5xlwO = "FlkpRGbq57xFtkKKLxa6t656TwloJl0j9OrqvUxmzjx"
		const stringOng3Q8E = "uCLdvlmjUqBWYpgrPzQ0t76k3pyGjOu5kEZ3rtHm3VJgQKujhRw8uuYzeFkbt3QQxdHJ7JgFMORnWjkAzogtOKKfmE"
		const uintlPOuzCW = BigInt("21")
		const NasiLiquidityPoolFactorykgiSkRU = await NasiLiquidityPoolFactory.new(stringcT5xlwO, stringOng3Q8E, uintlPOuzCW, {from: accounts[0]});
		const byteTxzNqzP = "0x061d160d1d1c1419171b0d171401010a02050a120b01041b0f07080e00081307"
		const byte23mhnd = "0x02110211070306110c1209150a18101409110a1c20010f171b1d0d1c15150a1b"
		const uintx3MvD9 = BigInt("234")
		const uintcjUtZgJ = BigInt("775")
		const uintaZcLs2A = BigInt("1491")
		const addressAXQu1Py = "0x0000000000000000000000000000000000000001"
		const uint8kpXaV = BigInt("333")
		const addressnOfn767 = accounts[5]
		const addressQOMiOet = accounts[5]
		const addressLKUqJ4N = accounts[0]
		const uintNs6n6k = BigInt("781")
		const addresskEF6dcV = accounts[1]
		const uintkpYnY57 = BigInt("464")
		const 
mP5tHy = await NasiLiquidityPoolFactorykgiSkRU.delegateBySig.call(addressAXQu1Py, uintaZcLs2A, uintcjUtZgJ, uintx3MvD9, byte23mhnd, byteTxzNqzP, {from: accounts[0]});
		const boolNvnTOyG = await NasiLiquidityPoolFactorykgiSkRU.isOwner.call({from: accounts[2]});
		const boolUk5nEex = await NasiLiquidityPoolFactorykgiSkRU.transferFrom.call(addressQOMiOet, addressnOfn767, uint8kpXaV, {from: accounts[3]});
		const uint256wtOluk6 = await NasiLiquidityPoolFactorykgiSkRU.balanceOf.call(addressLKUqJ4N, {from: accounts[4]});
		const boolXdkPnyH = await NasiLiquidityPoolFactorykgiSkRU.approve.call(addresskEF6dcV, uintNs6n6k, {from: accounts[0]});
		const uint256x3gAFSU = await NasiLiquidityPoolFactorykgiSkRU.leaveStaking.call(uintkpYnY57, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressFPJ7ZoC = accounts[4]
		const addressfZZPo1 = accounts[2]
		const uintufZdhLK = BigInt("1752")
		const uintn9GqxA = BigInt("673")
		const NasiLiquidityPoolFactoryPr7ND3B = await NasiLiquidityPoolFactory.new(addressFPJ7ZoC, addressfZZPo1, uintufZdhLK, uintn9GqxA, {from: accounts[1]});
		const addressVvBXQY = accounts[4]
		await NasiLiquidityPoolFactoryPr7ND3B.massUpdatePools.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryPr7ND3B.renounceOwnership.call({from: accounts[1]});
		const stringmKpyTR = await NasiLiquidityPoolFactoryPr7ND3B.symbol.call({from: accounts[3]});
		const booln8hyYzG = await NasiLiquidityPoolFactoryPr7ND3B.isMinter.call(addressVvBXQY, {from: accounts[1]});
	});
})
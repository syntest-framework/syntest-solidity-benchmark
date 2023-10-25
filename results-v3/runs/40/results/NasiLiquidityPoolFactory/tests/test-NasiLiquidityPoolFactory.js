const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringjE6HJI = "U1QOszHKtg75zvfXrtG89aiVcbsslgNSntNt5mYuBUI0Q8PJ8Am8Dyv0r15Q7Cn90U7sNxwC0xisXXHdfgbItkF91oJTJ"
		const stringzhT9GCl = "5VuyWIkHtWkTvx8taXsrBV"
		const uintv0iKjf1 = BigInt("146")
		const NasiLiquidityPoolFactoryAAEFM2Q = await NasiLiquidityPoolFactory.new(stringjE6HJI, stringzhT9GCl, uintv0iKjf1, {from: accounts[3]});
		const uintkYXyN5S = BigInt("726")
		const uintHotySgW = BigInt("1543")
		const addressb0y7Fl = accounts[3]
		const uinthrzwBBM = BigInt("1670")
		const uintMl7Ph5 = BigInt("1978")
		await NasiLiquidityPoolFactoryAAEFM2Q.whenNotPaused.call({from: accounts[2]});
		const uint256fnHa08q = await NasiLiquidityPoolFactoryAAEFM2Q.migrate.call(uintkYXyN5S, {from: accounts[2]});
		const boolIFZmctN = await NasiLiquidityPoolFactoryAAEFM2Q.approve.call(addressb0y7Fl, uintHotySgW, {from: accounts[5]});
		const boolOuBJljC = await NasiLiquidityPoolFactoryAAEFM2Q.paused.call({from: accounts[0]});
		const uint256P5EpuYh = await NasiLiquidityPoolFactoryAAEFM2Q.withdraw.call(uintMl7Ph5, uinthrzwBBM, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringybC6BJK = "KFbl41qlrpQ9sVZrNojwQgsjTLXmGYcsO1JyNmqrfeallED3FE6Z2M8wRZkE2uFVI9"
		const string36WVRz = "KSIfOzIPoHQigylgVT0VOm7xXT2zdCnrWAMNmQlLn5MritcvphggU"
		const uintR8YGV3k = BigInt("224")
		const NasiLiquidityPoolFactoryqLKWaVs = await NasiLiquidityPoolFactory.new(stringybC6BJK, string36WVRz, uintR8YGV3k, {from: accounts[3]});
		const uintLFC2gTz = BigInt("67")
		const addressZbaT2R = accounts[4]
		const addressVDrzAjp = accounts[4]
		const uintxYBeo2w = BigInt("223")
		const addressGjhkRh = accounts[0]
		const uintyVvBB97 = BigInt("1254")
		const uintNB37sr = BigInt("1225")
		const uintEbKTNJ2 = BigInt("1169")
		const addressUxgVzkx = accounts[3]
		const uintReml5LE = BigInt("262")
		const boolM76IRUk = await NasiLiquidityPoolFactoryqLKWaVs.transferFrom.call(addressVDrzAjp, addressZbaT2R, uintLFC2gTz, {from: accounts[1]});
		const boolUU0A46e = await NasiLiquidityPoolFactoryqLKWaVs.increaseAllowance.call(addressGjhkRh, uintxYBeo2w, {from: accounts[1]});
		const uint256MaRPrNp = await NasiLiquidityPoolFactoryqLKWaVs.totalSupply.call({from: accounts[0]});
		const uint2563sDfol = await NasiLiquidityPoolFactoryqLKWaVs.withdraw.call(uintNB37sr, uintyVvBB97, {from: accounts[1]});
		const boolcqIjcm6 = await NasiLiquidityPoolFactoryqLKWaVs.decreaseAllowance.call(addressUxgVzkx, uintEbKTNJ2, {from: accounts[4]});
		const uint256v9bIBRc = await NasiLiquidityPoolFactoryqLKWaVs.enterStaking.call(uintReml5LE, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressa0bJ9Vy = accounts[1]
		const addressMz91tU = accounts[1]
		const uints50dZ1c = BigInt("996")
		const uintUjthbE = BigInt("1481")
		const NasiLiquidityPoolFactoryvcPdjNs = await NasiLiquidityPoolFactory.new(addressa0bJ9Vy, addressMz91tU, uints50dZ1c, uintUjthbE, {from: accounts[3]});
		const uintkFLPbs3 = BigInt("1243")
		const addresscZazsxd = accounts[4]
		const uintmFvcWEi = BigInt("984")
		await NasiLiquidityPoolFactoryvcPdjNs.onlyPauser.call({from: accounts[2]});
		const uint256KqT3WBE = await NasiLiquidityPoolFactoryvcPdjNs.enterStaking.call(uintkFLPbs3, {from: "0x0000000000000000000000000000000000000001"});
		const addresskow9WMW = await NasiLiquidityPoolFactoryvcPdjNs.delegate.call(addresscZazsxd, {from: accounts[4]});
		const uint256TIelJzQ = await NasiLiquidityPoolFactoryvcPdjNs.updatePool.call(uintmFvcWEi, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringikeTLog = "YRMft1sqYcavmb"
		const stringFN8g72 = "7sTDrWsqgaoqWc9qhe0bnAEDzgptRyVILnQIqJST7"
		const uintnDpo7uV = BigInt("79")
		const NasiLiquidityPoolFactoryUsVSad = await NasiLiquidityPoolFactory.new(stringikeTLog, stringFN8g72, uintnDpo7uV, {from: accounts[2]});
		const addresshuUJT6 = accounts[2]
		const addressQ827G7R = accounts[3]
		const addressmTdRAeD = accounts[0]
		const addressbTZaq9H = accounts[4]
		const addresseuwYIdb = accounts[4]
		await NasiLiquidityPoolFactoryUsVSad.unpause.call({from: accounts[4]});
		const uint256AoBdOt = await NasiLiquidityPoolFactoryUsVSad.balanceOf.call(addresshuUJT6, {from: accounts[1]});
		await NasiLiquidityPoolFactoryUsVSad.renounceMinter.call({from: accounts[0]});
		const uint256taCYXi0 = await NasiLiquidityPoolFactoryUsVSad.allowance.call(addressmTdRAeD, addressQ827G7R, {from: accounts[4]});
		const addresstal6okv = await NasiLiquidityPoolFactoryUsVSad.dev.call(addressbTZaq9H, {from: "0x0000000000000000000000000000000000000001"});
		const addressw8RtmTe = await NasiLiquidityPoolFactoryUsVSad.setMigrator.call(addresseuwYIdb, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringE9XldwC = "jx0P9juYivGQ9dpXtPTWH3mqj7v61TShIuRngqc2mdXtG0XQRF8XMtzyID2rE"
		const stringBZIZXMJ = "nqhkk6"
		const uintIKMBrp = BigInt("230")
		const NasiLiquidityPoolFactoryRhTPokb = await NasiLiquidityPoolFactory.new(stringE9XldwC, stringBZIZXMJ, uintIKMBrp, {from: accounts[0]});
		const uintCJ3w7Ns = BigInt("164")
		await NasiLiquidityPoolFactoryRhTPokb.onlyOwner.call({from: accounts[5]});
		const uint256HVR1V6w = await NasiLiquidityPoolFactoryRhTPokb.emergencyWithdraw.call(uintCJ3w7Ns, {from: accounts[0]});
		await NasiLiquidityPoolFactoryRhTPokb.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		const stringoI5um44 = await NasiLiquidityPoolFactoryRhTPokb.symbol.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryRhTPokb.whenNotPaused.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtYdibXq = "TR926DCCQdCtrGlrGVHkSd"
		const stringnQaIRpe = "imUTuhnVNj7u8un5RWLZh0iZDrSD"
		const uintu17CcmL = BigInt("162")
		const NasiLiquidityPoolFactorypaIbnGr = await NasiLiquidityPoolFactory.new(stringtYdibXq, stringnQaIRpe, uintu17CcmL, {from: accounts[3]});
		const uintUpvKlei = BigInt("1264")
		const addressFVeZdua = accounts[1]
		const uintZR8XLEa = BigInt("1811")
		const boolZoWCANP = await NasiLiquidityPoolFactorypaIbnGr.increaseAllowance.call(addressFVeZdua, uintUpvKlei, {from: accounts[4]});
		await NasiLiquidityPoolFactorypaIbnGr.onlyMinter.call({from: accounts[1]});
		const uint2566aQJWU = await NasiLiquidityPoolFactorypaIbnGr.updatePool.call(uintZR8XLEa, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressImklVq0 = accounts[3]
		const addressb417vGV = accounts[2]
		const uintkfIznsS = BigInt("1326")
		const uintweyKTwd = BigInt("1988")
		const NasiLiquidityPoolFactory9CwggP = await NasiLiquidityPoolFactory.new(addressImklVq0, addressb417vGV, uintkfIznsS, uintweyKTwd, {from: accounts[1]});
		const addressUhsPg1i = accounts[0]
		const addressu4aOo1V = accounts[1]
		const addressEatefPP = await NasiLiquidityPoolFactory9CwggP.setMigrator.call(addressUhsPg1i, {from: accounts[0]});
		const addressScXuhxL = await NasiLiquidityPoolFactory9CwggP.delegate.call(addressu4aOo1V, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringeB5UNNY = "g6cVBWmqDzCbtVpueu8hIcpC6IWFBQrT9oi2waZ8LtiAC03QqgkpPtyNcAOP"
		const stringsXX3QYM = "VmFHkUUIGnxQ5wBp"
		const uintmLevod = BigInt("41")
		const NasiLiquidityPoolFactoryCrDMyC7 = await NasiLiquidityPoolFactory.new(stringeB5UNNY, stringsXX3QYM, uintmLevod, {from: accounts[2]});
		const stringuzemSc = await NasiLiquidityPoolFactoryCrDMyC7.name.call({from: accounts[4]});
		const addressmsiRp7c = await NasiLiquidityPoolFactoryCrDMyC7.owner.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringZyC8N2O = "y8v"
		const stringD4zgOKf = "sLlNiBa4Tj0AYF2MulKivT6tW5tqHfjV519SxduI"
		const uintdXetn9X = BigInt("236")
		const NasiLiquidityPoolFactoryqV20j4B = await NasiLiquidityPoolFactory.new(stringZyC8N2O, stringD4zgOKf, uintdXetn9X, {from: accounts[2]});
		const uintwuARzrY = BigInt("128")
		const uintcr7deve = BigInt("698")
		const uintZr80gYs = BigInt("515")
		const addressC2Lp6Pa = accounts[4]
		const 
e16sw1w = await NasiLiquidityPoolFactoryqV20j4B._writeCheckpoint.call(addressC2Lp6Pa, uintZr80gYs, uintcr7deve, uintwuARzrY, {from: accounts[2]});
		await NasiLiquidityPoolFactoryqV20j4B.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryqV20j4B.renounceOwnership.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBPbRfox = accounts[3]
		const addressRrrQrDW = accounts[2]
		const uintuZhW9OT = BigInt("1326")
		const uintR58zM81 = BigInt("1988")
		const NasiLiquidityPoolFactory9CwggP = await NasiLiquidityPoolFactory.new(addressBPbRfox, addressRrrQrDW, uintuZhW9OT, uintR58zM81, {from: accounts[1]});
		const address1Cpbtf = accounts[1]
		const addresszfyKQAO = accounts[0]
		const addressAS3IFeq = accounts[0]
		const addressmoN4Mzq = await NasiLiquidityPoolFactory9CwggP.dev.call(address1Cpbtf, {from: accounts[4]});
		const addressEatefPP = await NasiLiquidityPoolFactory9CwggP.setMigrator.call(addresszfyKQAO, {from: accounts[0]});
		const boole6DRJw8 = await NasiLiquidityPoolFactory9CwggP.isMinter.call(addressAS3IFeq, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringFa1KwK4 = "gaqYUDV8K"
		const stringZl1JVAi = "XRc8892QyjPOWX1SMOz8Gdn8z82ouQG"
		const uintCbHL0aY = BigInt("102")
		const NasiLiquidityPoolFactoryPFQnNJ8 = await NasiLiquidityPoolFactory.new(stringFa1KwK4, stringZl1JVAi, uintCbHL0aY, {from: accounts[1]});
		const addresstCCalKO = accounts[4]
		const uintBsHluOZ = BigInt("1565")
		const addressOZoI6c1 = accounts[2]
		const uint57pHao = BigInt("400")
		const addressXMIvOJR = accounts[1]
		const addressD2JBCUb = accounts[1]
		const addressIHu2Isz = accounts[2]
		const uint256dlUuB3r = await NasiLiquidityPoolFactoryPFQnNJ8.balanceOf.call(addresstCCalKO, {from: accounts[0]});
		const boolPvksTdH = await NasiLiquidityPoolFactoryPFQnNJ8.increaseAllowance.call(addressOZoI6c1, uintBsHluOZ, {from: accounts[5]});
		const boolsixwoR5 = await NasiLiquidityPoolFactoryPFQnNJ8.transfer.call(addressXMIvOJR, uint57pHao, {from: accounts[1]});
		const addresscS5anbD = await NasiLiquidityPoolFactoryPFQnNJ8._delegate.call(addressIHu2Isz, addressD2JBCUb, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressVjnTBhW = accounts[2]
		const addressryGpfg = accounts[3]
		const uintW4Ok6fI = BigInt("1088")
		const uintMp9YXZD = BigInt("88")
		const NasiLiquidityPoolFactoryJr0zdZ = await NasiLiquidityPoolFactory.new(addressVjnTBhW, addressryGpfg, uintW4Ok6fI, uintMp9YXZD, {from: accounts[0]});
		const addresspBFmNui = "0x0000000000000000000000000000000000000001"
		const uintbzn11Nm = BigInt("438")
		const uintsMmeMvp = BigInt("533")
		const addressGLvIsbg = accounts[0]
		const addresslRhYRko = accounts[1]
		const boolHYiv4Kd = true
		const uintzGO5VAy = BigInt("732")
		const uintHNqt1Mi = BigInt("1156")
		const addressrrYN2pM = accounts[0]
		const uint256DOCGCW3 = await NasiLiquidityPoolFactoryJr0zdZ.pendingNasi.call(uintbzn11Nm, addresspBFmNui, {from: accounts[3]});
		await NasiLiquidityPoolFactoryJr0zdZ.onlyOwner.call({from: accounts[2]});
		const boolkvKcW06 = await NasiLiquidityPoolFactoryJr0zdZ.transferFrom.call(addresslRhYRko, addressGLvIsbg, uintsMmeMvp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gP3C3EI = await NasiLiquidityPoolFactoryJr0zdZ.setAllocationPoint.call(uintHNqt1Mi, uintzGO5VAy, boolHYiv4Kd, {from: "0x0000000000000000000000000000000000000001"});
		const boolH59ijQJ = await NasiLiquidityPoolFactoryJr0zdZ.paused.call({from: accounts[4]});
		const addressPvXi17K = await NasiLiquidityPoolFactoryJr0zdZ.delegates.call(addressrrYN2pM, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresslOF80PV = accounts[3]
		const addressxyNR41x = accounts[2]
		const uintkCZIqi = BigInt("1326")
		const uintBwdkH8O = BigInt("1988")
		const NasiLiquidityPoolFactory9CwggP = await NasiLiquidityPoolFactory.new(addresslOF80PV, addressxyNR41x, uintkCZIqi, uintBwdkH8O, {from: accounts[1]});
		const uintPoalB3h = BigInt("550")
		const addressxhYdsgd = accounts[1]
		const addresskZ9fGhj = accounts[0]
		const addressqLEPjQh = accounts[2]
		const uint256LeG5XE6 = await NasiLiquidityPoolFactory9CwggP.updatePool.call(uintPoalB3h, {from: accounts[3]});
		const addressmoN4Mzq = await NasiLiquidityPoolFactory9CwggP.dev.call(addressxhYdsgd, {from: accounts[4]});
		const addressEatefPP = await NasiLiquidityPoolFactory9CwggP.setMigrator.call(addresskZ9fGhj, {from: accounts[0]});
		const boole6DRJw8 = await NasiLiquidityPoolFactory9CwggP.isMinter.call(addressqLEPjQh, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSZr6sfg = "4USNeQz99juWGLMFRfEqd3XodZK2sc8t9shwNi1SCEQCFSKb5gygiiN5A2WnPyjWtwBatEW9oYFMYec3RboU07kLAMd9wGth1fJ"
		const stringhWxwAzq = "YfQ3Z8LJRbnsc5i53zGAvvMsAWgV3w3JFroqQa3WCWBhmZhtszol9"
		const uinthHaMDQw = BigInt("121")
		const NasiLiquidityPoolFactoryh79JvHv = await NasiLiquidityPoolFactory.new(stringSZr6sfg, stringhWxwAzq, uinthHaMDQw, {from: accounts[2]});
		const uintsS3FBks = BigInt("1846")
		const addresscg2lCNa = accounts[1]
		const uintGeWHWec = BigInt("726")
		const addressWqBrCau = accounts[0]
		const uintejWcQCh = BigInt("1929")
		const addressyIZpEYj = accounts[0]
		const uintBQwCZhi = BigInt("2027")
		const uintpWW9p7x = BigInt("1718")
		const boolouAyrX3 = await NasiLiquidityPoolFactoryh79JvHv.increaseAllowance.call(addresscg2lCNa, uintsS3FBks, {from: accounts[0]});
		await NasiLiquidityPoolFactoryh79JvHv.renounceOwnership.call({from: accounts[4]});
		const boolLi84maP = await NasiLiquidityPoolFactoryh79JvHv.mint.call(addressWqBrCau, uintGeWHWec, {from: accounts[4]});
		const boolc6NzDaM = await NasiLiquidityPoolFactoryh79JvHv.decreaseAllowance.call(addressyIZpEYj, uintejWcQCh, {from: accounts[4]});
		const uint256K8rfvsL = await NasiLiquidityPoolFactoryh79JvHv.deposit.call(uintpWW9p7x, uintBQwCZhi, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringy8RUNRV = "2MRiYz8EU2o7liuOAPL87Cvr6F4jo9RXFS8OcVMX3aTHvHbLRhwshBFM1wwPGhOBHOnxG"
		const stringIXEh2HR = "7obpCckmk4r8VsLX2FECe6"
		const uintnSasuFm = BigInt("229")
		const NasiLiquidityPoolFactorySMlIFNp = await NasiLiquidityPoolFactory.new(stringy8RUNRV, stringIXEh2HR, uintnSasuFm, {from: accounts[0]});
		const addressXpwMjY = "0x0000000000000000000000000000000000000001"
		const uintLLDfL80 = BigInt("1805")
		const addressJ3Vmrpz = accounts[1]
		const addressISQweEL = accounts[2]
		const addressE1ic4K2 = "0x0000000000000000000000000000000000000001"
		const addressLeNuLgL = await NasiLiquidityPoolFactorySMlIFNp.setMigrator.call(addressXpwMjY, {from: accounts[4]});
		const boolYRUGoT6 = await NasiLiquidityPoolFactorySMlIFNp.decreaseAllowance.call(addressJ3Vmrpz, uintLLDfL80, {from: accounts[3]});
		const uint256Q2hVUNT = await NasiLiquidityPoolFactorySMlIFNp.allowance.call(addressE1ic4K2, addressISQweEL, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringCsMXW8o = "UobUDOZLz03R3BoAfDK2uAJutvwPRcYxqtlUG1q7DxCbYcDtywklP5KdaD8gKyU5vB"
		const stringQ0ssdCH = "P2dAOMrMXN87CUM35uL0BoZVDEoJVsHDw3nxSiDcHkfeoxjtXUbIwmOdfSpwWSzDK7ss0QIDwnB"
		const uintFvFQB3f = BigInt("94")
		const NasiLiquidityPoolFactoryz9DbhSu = await NasiLiquidityPoolFactory.new(stringCsMXW8o, stringQ0ssdCH, uintFvFQB3f, {from: accounts[0]});
		const addressPKmiOLg = accounts[3]
		const addressbmoUGtK = accounts[4]
		const uintTlaS5zH = BigInt("1255")
		const addressnPFdjGr = accounts[2]
		const boolrN3xK9 = await NasiLiquidityPoolFactoryz9DbhSu.isMinter.call(addressPKmiOLg, {from: accounts[0]});
		const addressdLXSsNY = await NasiLiquidityPoolFactoryz9DbhSu.setMigrator.call(addressbmoUGtK, {from: accounts[1]});
		const boolSHl0rVi = await NasiLiquidityPoolFactoryz9DbhSu.mint.call(addressnPFdjGr, uintTlaS5zH, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBJwgc8x = accounts[4]
		const addressoq4f94F = accounts[3]
		const uintDAEUZ6C = BigInt("1813")
		const uintCakhLHH = BigInt("1943")
		const NasiLiquidityPoolFactoryENGpPxo = await NasiLiquidityPoolFactory.new(addressBJwgc8x, addressoq4f94F, uintDAEUZ6C, uintCakhLHH, {from: accounts[0]});
		const boolfI7jL4g = true
		const addressrNM9AAG = accounts[5]
		const uintxVQC25 = BigInt("281")
		const uintB0EU3GS = BigInt("780")
		const uintM0uMku9 = BigInt("336")
		const uintAt6epqX = BigInt("483")
		const addressZyaYlkq = accounts[3]
		const uintkd5Mxjp = BigInt("481")
		const address2aU8z3 = accounts[4]
		const uint256sHXNwRx = await NasiLiquidityPoolFactoryENGpPxo.addLpToken.call(uintxVQC25, addressrNM9AAG, boolfI7jL4g, {from: accounts[0]});
		const 
vCOJ3yE = await NasiLiquidityPoolFactoryENGpPxo._writeCheckpoint.call(addressZyaYlkq, uintAt6epqX, uintM0uMku9, uintB0EU3GS, {from: "0x0000000000000000000000000000000000000001"});
		const booloVt2kA = await NasiLiquidityPoolFactoryENGpPxo.mint.call(address2aU8z3, uintkd5Mxjp, {from: accounts[2]});
		await NasiLiquidityPoolFactoryENGpPxo.onlyOwner.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressTg9cb7Y = accounts[3]
		const addressSZNlEHa = accounts[2]
		const uintLi1y0XH = BigInt("1326")
		const uintnTvbCx9 = BigInt("1988")
		const NasiLiquidityPoolFactory9CwggP = await NasiLiquidityPoolFactory.new(addressTg9cb7Y, addressSZNlEHa, uintLi1y0XH, uintnTvbCx9, {from: accounts[1]});
		const uintbXs5ZuK = BigInt("958")
		const addressnk962XF = accounts[3]
		const uint256WvxrWox = await NasiLiquidityPoolFactory9CwggP.enterStaking.call(uintbXs5ZuK, {from: accounts[1]});
		const addressmoN4Mzq = await NasiLiquidityPoolFactory9CwggP.dev.call(addressnk962XF, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressPKniQ2c = accounts[3]
		const addresswXd23AD = accounts[2]
		const uintbvT5J1j = BigInt("1326")
		const uintG2KP8K0 = BigInt("1988")
		const NasiLiquidityPoolFactory9CwggP = await NasiLiquidityPoolFactory.new(addressPKniQ2c, addresswXd23AD, uintbvT5J1j, uintG2KP8K0, {from: accounts[1]});
		const uintFxYl1x0 = BigInt("1049")
		const uintDPsjpUt = BigInt("216")
		const uint9RE4Na = BigInt("550")
		const uintH8M438i = BigInt("118")
		const addressycwDfbN = accounts[2]
		const addressZGXc8es = accounts[0]
		const addressCqnGIz0 = accounts[2]
		const uint256Pjti4FZ = await NasiLiquidityPoolFactory9CwggP.withdraw.call(uintDPsjpUt, uintFxYl1x0, {from: accounts[0]});
		const uint256LeG5XE6 = await NasiLiquidityPoolFactory9CwggP.updatePool.call(uint9RE4Na, {from: accounts[3]});
		const uint256IYaLBIo = await NasiLiquidityPoolFactory9CwggP.emergencyWithdraw.call(uintH8M438i, {from: accounts[1]});
		const addressmoN4Mzq = await NasiLiquidityPoolFactory9CwggP.dev.call(addressycwDfbN, {from: accounts[4]});
		const addressEatefPP = await NasiLiquidityPoolFactory9CwggP.setMigrator.call(addressZGXc8es, {from: accounts[0]});
		const boole6DRJw8 = await NasiLiquidityPoolFactory9CwggP.isMinter.call(addressCqnGIz0, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringQlDH7Sj = "kwJGobWAR9Byl3ptX68S5MIKceErjaWpA602qYrb"
		const stringIlbIc2M = "ulEhB6CGxDXAruhLjOM8RrVlE4RBeA"
		const uintZnnc9qk = BigInt("72")
		const NasiLiquidityPoolFactoryugyRewq = await NasiLiquidityPoolFactory.new(stringQlDH7Sj, stringIlbIc2M, uintZnnc9qk, {from: accounts[1]});
		const uintDV50Vd3 = BigInt("1821")
		const uintIQWEfFM = BigInt("1755")
		const uintIFe98cu = BigInt("1033")
		const addressiWAgGeX = accounts[1]
		const uint256sQGx6cF = await NasiLiquidityPoolFactoryugyRewq.getBonusMultiplier.call(uintIQWEfFM, uintDV50Vd3, {from: accounts[2]});
		const boolnifAq1q = await NasiLiquidityPoolFactoryugyRewq.transfer.call(addressiWAgGeX, uintIFe98cu, {from: accounts[1]});
		await NasiLiquidityPoolFactoryugyRewq.unpause.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressz0wtmdu = accounts[2]
		const addressCSzN3BQ = accounts[3]
		const uintN1A8ctu = BigInt("1088")
		const uintlxhj5O = BigInt("88")
		const NasiLiquidityPoolFactoryJr0zdZ = await NasiLiquidityPoolFactory.new(addressz0wtmdu, addressCSzN3BQ, uintN1A8ctu, uintlxhj5O, {from: accounts[0]});
		const uintf4qZMKy = BigInt("1533")
		const addressyTxPeAp = accounts[2]
		const uintlYyxLFt = BigInt("438")
		const uint256GaHIjU = await NasiLiquidityPoolFactoryJr0zdZ.leaveStaking.call(uintf4qZMKy, {from: accounts[1]});
		const uint256DOCGCW3 = await NasiLiquidityPoolFactoryJr0zdZ.pendingNasi.call(uintlYyxLFt, addressyTxPeAp, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressI88nfIW = accounts[3]
		const addressc3Tj1B = "0x0000000000000000000000000000000000000001"
		const uintu8XjZab = BigInt("972")
		const uintDTQwP10 = BigInt("852")
		const NasiLiquidityPoolFactorygEanGqV = await NasiLiquidityPoolFactory.new(addressI88nfIW, addressc3Tj1B, uintu8XjZab, uintDTQwP10, {from: accounts[3]});
		const uintITU0gYO = BigInt("1880")
		const uintTaON1Aq = BigInt("626")
		const uintGiWfKq = BigInt("323")
		const uintM99ij1r = BigInt("1368")
		const uint256CRrvAN = await NasiLiquidityPoolFactorygEanGqV.deposit.call(uintTaON1Aq, uintITU0gYO, {from: accounts[0]});
		const uint256cQBzSMm = await NasiLiquidityPoolFactorygEanGqV.getBonusMultiplier.call(uintM99ij1r, uintGiWfKq, {from: accounts[3]});
		await NasiLiquidityPoolFactorygEanGqV.onlyMinter.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSL3QVcS = "chFl8U6dwq6nZ13j8rU2f411vfSftWuvFJHKAni"
		const stringP0QoJc6 = "lKXmHnrNXoSfgTRv4NlmlDOHjopj3NPORIB3AtAOJzafxUS23bpVUVgDC7d"
		const uintsPKaiE5 = BigInt("6")
		const NasiLiquidityPoolFactoryQoaaTbc = await NasiLiquidityPoolFactory.new(stringSL3QVcS, stringP0QoJc6, uintsPKaiE5, {from: accounts[4]});
		const uintCWN2Lwf = BigInt("739")
		const addresspzp4y8M = accounts[5]
		const addressMDnZikH = accounts[3]
		const uintEbrJyav = BigInt("858")
		const addressEsLq0A1 = accounts[1]
		const uintBexPUI6 = BigInt("771")
		const uintPTwU23D = BigInt("648")
		const addressJbIyoWD = accounts[4]
		const boolqdW6Ur = await NasiLiquidityPoolFactoryQoaaTbc.transferFrom.call(addressMDnZikH, addresspzp4y8M, uintCWN2Lwf, {from: accounts[4]});
		const bool89uHUr = await NasiLiquidityPoolFactoryQoaaTbc.decreaseAllowance.call(addressEsLq0A1, uintEbrJyav, {from: accounts[5]});
		const uint256Tlt8zxV = await NasiLiquidityPoolFactoryQoaaTbc.withdraw.call(uintPTwU23D, uintBexPUI6, {from: accounts[1]});
		const addressF7MyWe = await NasiLiquidityPoolFactoryQoaaTbc.setMigrator.call(addressJbIyoWD, {from: accounts[1]});
		await NasiLiquidityPoolFactoryQoaaTbc.onlyPauser.call({from: accounts[0]});
	});
})
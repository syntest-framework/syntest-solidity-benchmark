const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringdX5Rv6O = "eayrFsq1uQE2oQQFfsHJqPdj79PMlASXUu"
		const stringDnYeLgN = "aeCIyY6lYYdeuYVME6y2BpyJiN2zWOnzMjqWDaycJy8LGfYV6W1h3m2Nu5Sz8fXg3SN1YmaKSNcGB"
		const uintfOJeXs5 = BigInt("191")
		const NasiLiquidityPoolFactoryqFCNao6 = await NasiLiquidityPoolFactory.new(stringdX5Rv6O, stringDnYeLgN, uintfOJeXs5, {from: accounts[5]});
		const uintQ3Q74ZI = BigInt("159")
		const address0IX3lP = accounts[4]
		const addressTRSPuGT = accounts[2]
		const uintI6eHcG = BigInt("280")
		const addressY4kiPCM = accounts[2]
		const uintb58ptgx = BigInt("1169")
		const boolw5y8l6R = await NasiLiquidityPoolFactoryqFCNao6.increaseAllowance.call(address0IX3lP, uintQ3Q74ZI, {from: accounts[3]});
		const addresseHU7Kl7 = await NasiLiquidityPoolFactoryqFCNao6.setMigrator.call(addressTRSPuGT, {from: accounts[2]});
		const uint8EdlkOR4 = await NasiLiquidityPoolFactoryqFCNao6.decimals.call({from: accounts[2]});
		const stringJJH1JsT = await NasiLiquidityPoolFactoryqFCNao6.symbol.call({from: accounts[1]});
		const boolJkzmOT1 = await NasiLiquidityPoolFactoryqFCNao6.decreaseAllowance.call(addressY4kiPCM, uintI6eHcG, {from: accounts[0]});
		const uint256hsHcUx = await NasiLiquidityPoolFactoryqFCNao6.burn.call(uintb58ptgx, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringy25pKg = "7tZ78tcVjFLJT3Ucc"
		const stringXHIb3b = "GtyPdF8AmaxDH"
		const uintVCsldUM = BigInt("212")
		const NasiLiquidityPoolFactoryIISJfko = await NasiLiquidityPoolFactory.new(stringy25pKg, stringXHIb3b, uintVCsldUM, {from: accounts[1]});
		const uint0KlwXZ = BigInt("1778")
		const addressAkHIOUf = accounts[2]
		const uintSVMPit = BigInt("1832")
		const uintWtCG7O0 = BigInt("1826")
		const addressTa01f6S = accounts[1]
		const uintuBgn5nS = BigInt("434")
		const addressecAHNmR = accounts[1]
		const boolBcAINqG = await NasiLiquidityPoolFactoryIISJfko.approve.call(addressAkHIOUf, uint0KlwXZ, {from: accounts[3]});
		const stringijRe06V = await NasiLiquidityPoolFactoryIISJfko.name.call({from: accounts[0]});
		const uint256CoAkiPI = await NasiLiquidityPoolFactoryIISJfko.leaveStaking.call(uintSVMPit, {from: accounts[1]});
		const booldv0x9H = await NasiLiquidityPoolFactoryIISJfko.approve.call(addressTa01f6S, uintWtCG7O0, {from: accounts[4]});
		const boolXGwjcB5 = await NasiLiquidityPoolFactoryIISJfko.approve.call(addressecAHNmR, uintuBgn5nS, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSRa8pZI = "CLBIRTy08cfomHVP1j4vC7TpJgf6aVx9JL1ufp15wnLN7NN4KDpt5hJ3SD3V98tItVWQlUIKzZbs"
		const stringfXXuyuC = "6cvJaZ7j94Q4rtJ0sLxSTq6yjm5PRGtVfVABC2Gr6"
		const uintHuuolqM = BigInt("105")
		const NasiLiquidityPoolFactoryqPdH4wY = await NasiLiquidityPoolFactory.new(stringSRa8pZI, stringfXXuyuC, uintHuuolqM, {from: accounts[3]});
		const uintTka0t9Q = BigInt("1920")
		const addressgoyhI7 = accounts[1]
		const bytey2noasw = "0x030b030e061514052008030a0f0a160c0f0b091b001c080e0e1d0a110c120b02"
		const byte4uZPrJ = "0x19060a1d1c131e0b1f18170411011e001e1207030919120618150b0a121c0508"
		const uintf4caK1T = BigInt("190")
		const uintBm7MCE6 = BigInt("1698")
		const uintKWpbN3s = BigInt("1210")
		const addressSRWYDda = accounts[5]
		const boolgoltd0M = false
		const addressRer1f3a = accounts[1]
		const uintvyieA6 = BigInt("1339")
		const uintxgfKsDp = BigInt("506")
		const booltmu72Vn = await NasiLiquidityPoolFactoryqPdH4wY.approve.call(addressgoyhI7, uintTka0t9Q, {from: accounts[2]});
		const 
so7rqNc = await NasiLiquidityPoolFactoryqPdH4wY.delegateBySig.call(addressSRWYDda, uintKWpbN3s, uintBm7MCE6, uintf4caK1T, byte4uZPrJ, bytey2noasw, {from: accounts[5]});
		const uint256ncuKQ84 = await NasiLiquidityPoolFactoryqPdH4wY.addLpToken.call(uintvyieA6, addressRer1f3a, boolgoltd0M, {from: accounts[5]});
		const uint256t9fNpGP = await NasiLiquidityPoolFactoryqPdH4wY.updatePool.call(uintxgfKsDp, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringwevK8O = "wN1iHTZVnBFFc9JlEWF0xgXL9vs5j9ICEyDztgAUnyBvUi6XaYzlVgs"
		const stringSLJV8E0 = "LUy1Hmju5bEjGgcXC8lS2PYhGfpK85wmyuipGnoDqNwwxAKSa2ZNxlsidtXZu4tzpQaTX0xY8YUGiQiQbzDhI6ke6"
		const uintrze0zc6 = BigInt("101")
		const NasiLiquidityPoolFactoryy949fWG = await NasiLiquidityPoolFactory.new(stringwevK8O, stringSLJV8E0, uintrze0zc6, {from: accounts[4]});
		const uint7K3p0g = BigInt("1281")
		const addressE7ZK2Pt = accounts[5]
		const uintPK6M7VE = BigInt("1207")
		const uinteg5N6sN = BigInt("1376")
		const addressqoQVahq = accounts[1]
		const uinthrYfYsP = BigInt("1272")
		const uintw0RdFJm = BigInt("989")
		await NasiLiquidityPoolFactoryy949fWG.pause.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryy949fWG.renouncePauser.call({from: accounts[0]});
		const uint256JYxhTe = await NasiLiquidityPoolFactoryy949fWG.getPriorVotes.call(addressE7ZK2Pt, uint7K3p0g, {from: accounts[4]});
		const uint256QALjTMu = await NasiLiquidityPoolFactoryy949fWG.burn.call(uintPK6M7VE, {from: accounts[1]});
		const boolMGYGZFb = await NasiLiquidityPoolFactoryy949fWG.decreaseAllowance.call(addressqoQVahq, uinteg5N6sN, {from: accounts[0]});
		const uint256fF8tAXd = await NasiLiquidityPoolFactoryy949fWG.deposit.call(uintw0RdFJm, uinthrYfYsP, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressq0bhJX8 = accounts[3]
		const addressxPIjZRX = accounts[0]
		const uintJH3ftKa = BigInt("480")
		const uintOBXPTVA = BigInt("421")
		const NasiLiquidityPoolFactoryuhiV9d = await NasiLiquidityPoolFactory.new(addressq0bhJX8, addressxPIjZRX, uintJH3ftKa, uintOBXPTVA, {from: accounts[2]});
		const uintQ1Czw8s = BigInt("337")
		const addressFcalxF = accounts[4]
		const boolut7SqNX = true
		const uintL5sMvJ1 = BigInt("1856")
		const uintqaRFHy = BigInt("1474")
		await NasiLiquidityPoolFactoryuhiV9d.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryuhiV9d.onlyPauser.call({from: accounts[4]});
		const boolVp3sJyz = await NasiLiquidityPoolFactoryuhiV9d.increaseAllowance.call(addressFcalxF, uintQ1Czw8s, {from: accounts[5]});
		await NasiLiquidityPoolFactoryuhiV9d.onlyPauser.call({from: accounts[4]});
		const boolET1FYmD = await NasiLiquidityPoolFactoryuhiV9d.paused.call({from: accounts[4]});
		const uint256FzqPY7W = await NasiLiquidityPoolFactoryuhiV9d.setAllocationPoint.call(uintqaRFHy, uintL5sMvJ1, boolut7SqNX, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringmZdbmqI = "hP9pKhE6sXJH1Y73d4CzDeSrj3JMO4dIGwgPlOLY6z2"
		const stringhWhCosb = "lUqEn4BWyRO6H4urdHKsxxMkaWa2ZjsuCzPsb1URbP6Ble877wIFQirdIFEuoA0UCTToKdPR3Pn"
		const uintzEOJQQV = BigInt("174")
		const NasiLiquidityPoolFactorysj6tciz = await NasiLiquidityPoolFactory.new(stringmZdbmqI, stringhWhCosb, uintzEOJQQV, {from: "0x0000000000000000000000000000000000000001"});
		const uintfPVuZSg = BigInt("921")
		const uintKJDr0r = BigInt("1287")
		const boolGMdZKmR = false
		const addressFKlUEuC = accounts[1]
		const uint74ecjY = BigInt("763")
		const addressPUKCLF = accounts[0]
		const uint256TU6s49D = await NasiLiquidityPoolFactorysj6tciz.getBonusMultiplier.call(uintKJDr0r, uintfPVuZSg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Cnzghgw = await NasiLiquidityPoolFactorysj6tciz.addLpToken.call(uint74ecjY, addressFKlUEuC, boolGMdZKmR, {from: accounts[4]});
		const addressqXMR30p = await NasiLiquidityPoolFactorysj6tciz.addMinter.call(addressPUKCLF, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringDdcvb4p = "cZhGOyw"
		const stringe9qV21 = "jyh47BUec"
		const uintMaGvoTu = BigInt("77")
		const NasiLiquidityPoolFactoryyxuCyWo = await NasiLiquidityPoolFactory.new(stringDdcvb4p, stringe9qV21, uintMaGvoTu, {from: accounts[0]});
		const addressj4jfyg = accounts[4]
		const uintUOsaKG5 = BigInt("1898")
		const uintcBMXikM = BigInt("1273")
		const addressoXmHIs6 = accounts[1]
		const boolQ6e6ZoH = await NasiLiquidityPoolFactoryyxuCyWo.isPauser.call(addressj4jfyg, {from: accounts[4]});
		const uint256ppLbFNN = await NasiLiquidityPoolFactoryyxuCyWo.updatePool.call(uintUOsaKG5, {from: accounts[0]});
		const boolknB3UcC = await NasiLiquidityPoolFactoryyxuCyWo.approve.call(addressoXmHIs6, uintcBMXikM, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringA0NXzpT = "IgBMOo3E9HClPvzjPPUHoIKL76miW"
		const stringTBitWT4 = "70d7pJOaGTxGZPwAWGgCrucY88qmq1kqTMQazyasp7yg71r8QK6vabrc94uy7LDCUaamo8iNbmmx"
		const uintB8cdjHT = BigInt("75")
		const NasiLiquidityPoolFactoryrtsnKel = await NasiLiquidityPoolFactory.new(stringA0NXzpT, stringTBitWT4, uintB8cdjHT, {from: accounts[4]});
		const uintEqrgKWk = BigInt("283")
		const addresskyE6p5C = accounts[0]
		const addressKwQggs = accounts[3]
		const uintNaGEY7W = BigInt("554")
		const uintsS5hTdw = BigInt("1310")
		const boolqutxaag = await NasiLiquidityPoolFactoryrtsnKel.decreaseAllowance.call(addresskyE6p5C, uintEqrgKWk, {from: accounts[1]});
		await NasiLiquidityPoolFactoryrtsnKel.massUpdatePools.call({from: accounts[2]});
		const uint256Ris6DEH = await NasiLiquidityPoolFactoryrtsnKel.pendingNasi.call(uintNaGEY7W, addressKwQggs, {from: accounts[0]});
		const uint256Y2C7mPj = await NasiLiquidityPoolFactoryrtsnKel.updatePool.call(uintsS5hTdw, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringPDg0ADX = "SYXuoBqOTEEY5AIz35DKfF"
		const stringkDBD1r = "hFRQIrDwpPRhkbgj71rkVDshrO3XhY0oIDoDb2u1zzb"
		const uintWKeGAjv = BigInt("140")
		const NasiLiquidityPoolFactoryoTUQNzC = await NasiLiquidityPoolFactory.new(stringPDg0ADX, stringkDBD1r, uintWKeGAjv, {from: accounts[1]});
		const uintfbDOdEP = BigInt("1553")
		const addressIgjjZbQ = accounts[0]
		await NasiLiquidityPoolFactoryoTUQNzC.whenNotPaused.call({from: accounts[2]});
		const boolBwppwBX = await NasiLiquidityPoolFactoryoTUQNzC.increaseAllowance.call(addressIgjjZbQ, uintfbDOdEP, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringc3jFmzH = "QsmsHEMfjxMTmCVIFGVzMb1U71V6EjIxDT5O"
		const stringOLGLNGN = "qFo15RXEPDCDbaHZgIkVwhm4WM75luMkCOSqehQWvKV5xwg"
		const uintPodWXWK = BigInt("65")
		const NasiLiquidityPoolFactoryAtDP8UG = await NasiLiquidityPoolFactory.new(stringc3jFmzH, stringOLGLNGN, uintPodWXWK, {from: accounts[2]});
		const addresskn6z4M4 = accounts[0]
		const uintSIG60i1 = BigInt("1964")
		const addressPlHCPe = accounts[3]
		const uint27fwDB = BigInt("1890")
		const addressCedDyU6 = await NasiLiquidityPoolFactoryAtDP8UG.addMinter.call(addresskn6z4M4, {from: accounts[3]});
		const addressCcqgb7P = await NasiLiquidityPoolFactoryAtDP8UG.burnFrom.call(addressPlHCPe, uintSIG60i1, {from: accounts[3]});
		const boolRCYvlmt = await NasiLiquidityPoolFactoryAtDP8UG.isOwner.call({from: accounts[2]});
		const uint256i97yAKU = await NasiLiquidityPoolFactoryAtDP8UG.migrate.call(uint27fwDB, {from: accounts[3]});
		await NasiLiquidityPoolFactoryAtDP8UG.renounceOwnership.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringbGiad6Q = "IW4BfnuV6NxSUfjWEcVLKQxdISmhiMWc2JKiI2VXtXZFxafCYg1uWPA7CXIp2PIkSQlszfl6go7MZXcKJVJjG531kXlFRK"
		const stringIRNvNBb = "G2vRmZxb2feNerlHwaz7nTShil27ouCsAI4dYy9S5N"
		const uintcujhDE6 = BigInt("8")
		const NasiLiquidityPoolFactoryf02cPpX = await NasiLiquidityPoolFactory.new(stringbGiad6Q, stringIRNvNBb, uintcujhDE6, {from: accounts[3]});
		const uintTeXLDnt = BigInt("563")
		const addressZFbbKAp = accounts[2]
		const addressXjJk83 = accounts[3]
		await NasiLiquidityPoolFactoryf02cPpX.onlyPauser.call({from: accounts[1]});
		const addressYGHpoXs = await NasiLiquidityPoolFactoryf02cPpX.owner.call({from: accounts[3]});
		const boollIoBTfq = await NasiLiquidityPoolFactoryf02cPpX.transferFrom.call(addressXjJk83, addressZFbbKAp, uintTeXLDnt, {from: accounts[1]});
		await NasiLiquidityPoolFactoryf02cPpX.massUpdatePools.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringwy5ckmV = "2uVJI9PgISv9vqPhC65s0nvC6S9ikHnHvVISmsnQwa"
		const stringGWekQEo = "KNQkauNnOw27eqsI9uS9H92Gz2DcFRNX2MoPG7U8e2mWUAn01n"
		const uintzVtZfR8 = BigInt("146")
		const NasiLiquidityPoolFactoryCbDBYnq = await NasiLiquidityPoolFactory.new(stringwy5ckmV, stringGWekQEo, uintzVtZfR8, {from: accounts[2]});
		const boolwkOvlIm = false
		const uintdD8kA5 = BigInt("303")
		const uintKY1FiO = BigInt("805")
		const addressDRtFLHw = accounts[4]
		const addressFH90jOG = accounts[2]
		const addressrHD85jy = accounts[4]
		const uint256yG5PGxI = await NasiLiquidityPoolFactoryCbDBYnq.setAllocationPoint.call(uintKY1FiO, uintdD8kA5, boolwkOvlIm, {from: accounts[3]});
		await NasiLiquidityPoolFactoryCbDBYnq.whenNotPaused.call({from: accounts[0]});
		const boolXFDzEdU = await NasiLiquidityPoolFactoryCbDBYnq.isMinter.call(addressDRtFLHw, {from: accounts[1]});
		const uint256U3Zgcni = await NasiLiquidityPoolFactoryCbDBYnq.allowance.call(addressrHD85jy, addressFH90jOG, {from: accounts[1]});
		await NasiLiquidityPoolFactoryCbDBYnq.renounceMinter.call({from: accounts[2]});
		const addressxkOV04y = await NasiLiquidityPoolFactoryCbDBYnq.owner.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringnsnwxlW = "Sz45X4MoIjyYmfEV1DDfDYLjFUAqYgafVnpXJE2ovY5z4AtGUBaYGEa46evQF1nsp"
		const stringYLq5Uln = "4Mc1hPr4bcKAG4i"
		const uintkkfABo2 = BigInt("42")
		const NasiLiquidityPoolFactoryBngMG0R = await NasiLiquidityPoolFactory.new(stringnsnwxlW, stringYLq5Uln, uintkkfABo2, {from: accounts[4]});
		const addressKKi577 = accounts[4]
		const addressPmYheN = accounts[5]
		const addressFMMqGmX = accounts[0]
		const uintLrRJFhw = BigInt("1985")
		const addressXBIVilh = accounts[1]
		const addressMExf020 = accounts[1]
		const uint256at2UJG = await NasiLiquidityPoolFactoryBngMG0R.getCurrentVotes.call(addressKKi577, {from: accounts[3]});
		const uint256om314Jx = await NasiLiquidityPoolFactoryBngMG0R.balanceOf.call(addressPmYheN, {from: accounts[2]});
		await NasiLiquidityPoolFactoryBngMG0R.onlyPauser.call({from: accounts[4]});
		const addresshBrwNsh = await NasiLiquidityPoolFactoryBngMG0R.delegates.call(addressFMMqGmX, {from: accounts[3]});
		const uint256xAxSsXg = await NasiLiquidityPoolFactoryBngMG0R.burn.call(uintLrRJFhw, {from: accounts[4]});
		const uint256Fq9G7Vt = await NasiLiquidityPoolFactoryBngMG0R.allowance.call(addressMExf020, addressXBIVilh, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringMbV7sZi = "99W75GS4yKk"
		const stringvKi0XPH = "lTDOsVmdkdHCQ5AWJ7AEMlUFDBeUD99mhOrRHeM1l3XsYOs2qTPS5UFSVUKthR6pdEPsIRLBIm8pjRaVJ6IHLz"
		const uintCIgBXkg = BigInt("201")
		const NasiLiquidityPoolFactoryBkJ0lj7 = await NasiLiquidityPoolFactory.new(stringMbV7sZi, stringvKi0XPH, uintCIgBXkg, {from: accounts[3]});
		const uintwMAnbWM = BigInt("1020")
		const uintFzEacSz = BigInt("2000")
		const uintYjC7pG = BigInt("1864")
		const uint256MB1nh9f = await NasiLiquidityPoolFactoryBkJ0lj7.leaveStaking.call(uintwMAnbWM, {from: accounts[3]});
		const uint256QOJAuyI = await NasiLiquidityPoolFactoryBkJ0lj7.leaveStaking.call(uintFzEacSz, {from: accounts[4]});
		const uint256vecnBGR = await NasiLiquidityPoolFactoryBkJ0lj7.emergencyWithdraw.call(uintYjC7pG, {from: accounts[1]});
		const uint256tI8gaKu = await NasiLiquidityPoolFactoryBkJ0lj7.totalSupply.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryBkJ0lj7.pause.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringKNuVgF = "nBdrAr3fiSumKKl6JoAICPCpb3QuuEe4ajL9Te0AI1Vtxxr9ToktLiO5gQgHK0Q3XtuaOPTdn6xGCiigxSnhzJK2KOxNXPZGGz6"
		const stringYok09sx = "fxEnxDKwdHMS7p5tuYULemPy4gsnqj5eZdkaRy3JiIK59aMUuX6tjUITz1gdLzA4JkehpHhMacmBcEQRf62IHU8tL8KdAF"
		const uintoOZ7VFO = BigInt("164")
		const NasiLiquidityPoolFactoryfGKqEAk = await NasiLiquidityPoolFactory.new(stringKNuVgF, stringYok09sx, uintoOZ7VFO, {from: "0x0000000000000000000000000000000000000001"});
		const addressNDKF8z2 = accounts[4]
		const uintYVf7YYa = BigInt("1559")
		const addresssyPTGea = accounts[5]
		const addressNBwTLpY = "0x0000000000000000000000000000000000000001"
		const addressLJLVbeQ = await NasiLiquidityPoolFactoryfGKqEAk.transferOwnership.call(addressNDKF8z2, {from: accounts[0]});
		const uint256wGedncc = await NasiLiquidityPoolFactoryfGKqEAk.updatePool.call(uintYVf7YYa, {from: accounts[2]});
		const addresseqEe6B3 = await NasiLiquidityPoolFactoryfGKqEAk._delegate.call(addressNBwTLpY, addresssyPTGea, {from: accounts[0]});
		const stringg8uBINp = await NasiLiquidityPoolFactoryfGKqEAk.name.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringsPgwpw = "pHV8NkT1X9nXNLvJzFESAscTwTzZjSH1wlA79xTqrpczYK"
		const stringMH22XJ = "YXNyphptc9ijCDoG8nOS8Osdp5x9KHyeGKUqPV"
		const uintIWfvkQw = BigInt("227")
		const NasiLiquidityPoolFactoryjWBsx0r = await NasiLiquidityPoolFactory.new(stringsPgwpw, stringMH22XJ, uintIWfvkQw, {from: accounts[2]});
		const stringF59K7Qt = await NasiLiquidityPoolFactoryjWBsx0r.name.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryjWBsx0r.onlyPauser.call({from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressocjU9gi = accounts[3]
		const addresszUbdRLi = accounts[0]
		const uintkZ6mWD = BigInt("480")
		const uintfNoUmy7 = BigInt("421")
		const NasiLiquidityPoolFactoryuhiV9d = await NasiLiquidityPoolFactory.new(addressocjU9gi, addresszUbdRLi, uintkZ6mWD, uintfNoUmy7, {from: accounts[2]});
		const boolEI8UDeO = true
		const addressvzeXYn7 = accounts[4]
		const uint5FUJjg = BigInt("713")
		const uintuWwde7q = BigInt("337")
		const addressZcW1XtT = accounts[4]
		const boolut7SqNX = true
		const uinthP14UgF = BigInt("1856")
		const uintRrZIsLt = BigInt("1474")
		const uint256d8Dkh7v = await NasiLiquidityPoolFactoryuhiV9d.addLpToken.call(uint5FUJjg, addressvzeXYn7, boolEI8UDeO, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryuhiV9d.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryuhiV9d.onlyPauser.call({from: accounts[4]});
		const boolVp3sJyz = await NasiLiquidityPoolFactoryuhiV9d.increaseAllowance.call(addressZcW1XtT, uintuWwde7q, {from: accounts[5]});
		await NasiLiquidityPoolFactoryuhiV9d.onlyPauser.call({from: accounts[4]});
		const boolET1FYmD = await NasiLiquidityPoolFactoryuhiV9d.paused.call({from: accounts[4]});
		const uint256FzqPY7W = await NasiLiquidityPoolFactoryuhiV9d.setAllocationPoint.call(uintRrZIsLt, uinthP14UgF, boolut7SqNX, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringaCaFnaN = "D8Kb6jIou88C42De8TSx5JVi8RX3B6DjTj"
		const stringlc43QAj = "dYgVbrwBafRtCh313rA846wvyP9QsYQFV5oYK"
		const uintMAaQgkN = BigInt("186")
		const NasiLiquidityPoolFactorygpXDwe = await NasiLiquidityPoolFactory.new(stringaCaFnaN, stringlc43QAj, uintMAaQgkN, {from: accounts[0]});
		const uintrDhPJxQ = BigInt("1946")
		const addressQr0Lqcs = accounts[5]
		const uintgxWdCVw = BigInt("890")
		const addressqzBXcOc = accounts[5]
		const uintr6DpJn7 = BigInt("889")
		const uintAGc4lvy = BigInt("1401")
		const uint256jmIxde = await NasiLiquidityPoolFactorygpXDwe.updatePool.call(uintrDhPJxQ, {from: accounts[5]});
		const uint256yEbDQO = await NasiLiquidityPoolFactorygpXDwe.pendingNasi.call(uintgxWdCVw, addressQr0Lqcs, {from: accounts[3]});
		const uint256JU7vl28 = await NasiLiquidityPoolFactorygpXDwe.pendingNasi.call(uintr6DpJn7, addressqzBXcOc, {from: accounts[1]});
		const uint256KHzeguH = await NasiLiquidityPoolFactorygpXDwe.leaveStaking.call(uintAGc4lvy, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressI9BJnc = accounts[5]
		const addressfqBbARQ = accounts[3]
		const uintzvYdmGz = BigInt("471")
		const uintnF8IQD = BigInt("1069")
		const NasiLiquidityPoolFactoryzYVSX7g = await NasiLiquidityPoolFactory.new(addressI9BJnc, addressfqBbARQ, uintzvYdmGz, uintnF8IQD, {from: accounts[3]});
		const boolOhw3hUJ = false
		const addressuJ8rpJc = accounts[5]
		const uintPFiwUph = BigInt("1502")
		const uintUFJMEx = BigInt("938")
		const uintWZdPH0S = BigInt("162")
		const uintwePbVrx = BigInt("1777")
		const uint256ioqTmVZ = await NasiLiquidityPoolFactoryzYVSX7g.addLpToken.call(uintPFiwUph, addressuJ8rpJc, boolOhw3hUJ, {from: accounts[3]});
		const uint256dICVnVO = await NasiLiquidityPoolFactoryzYVSX7g.withdraw.call(uintWZdPH0S, uintUFJMEx, {from: accounts[0]});
		const uint256FHKIau = await NasiLiquidityPoolFactoryzYVSX7g.enterStaking.call(uintwePbVrx, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringpSiQGS = "NgXeWRHnGVHqXFLu3TmHEv"
		const stringE9Fziyq = "07we99MdR6V0w1FBENphPmY3lLNYrLmAhRarMn6ib13k8yjFVCIF8RmPYfvaoPUWFrFixca"
		const uintzIxQzJB = BigInt("174")
		const NasiLiquidityPoolFactoryUrsn2kT = await NasiLiquidityPoolFactory.new(stringpSiQGS, stringE9Fziyq, uintzIxQzJB, {from: accounts[2]});
		const uinttMuw7RG = BigInt("1376")
		const addresswvX7COa = "0x0000000000000000000000000000000000000001"
		const addressCKUaz9q = accounts[3]
		const boolL0dbcED = await NasiLiquidityPoolFactoryUrsn2kT.increaseAllowance.call(addresswvX7COa, uinttMuw7RG, {from: accounts[3]});
		const addressx60FyqZ = await NasiLiquidityPoolFactoryUrsn2kT.setMigrator.call(addressCKUaz9q, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryUrsn2kT.whenPaused.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressHbbBChU = accounts[5]
		const addressyWQbc8 = accounts[2]
		const uintN188fHr = BigInt("1957")
		const uintlm7MmsL = BigInt("1594")
		const NasiLiquidityPoolFactoryCce3zpo = await NasiLiquidityPoolFactory.new(addressHbbBChU, addressyWQbc8, uintN188fHr, uintlm7MmsL, {from: accounts[1]});
		const uintcJXPwJc = BigInt("787")
		const addressK6c2Ga = accounts[0]
		const addressp7e6lFr = "0x0000000000000000000000000000000000000001"
		const boolerGpAhS = false
		const addressKMaAq30 = accounts[1]
		const uintMMj8ACG = BigInt("1013")
		const uint256xKHtmVm = await NasiLiquidityPoolFactoryCce3zpo.enterStaking.call(uintcJXPwJc, {from: accounts[0]});
		const addressXgnFas4 = await NasiLiquidityPoolFactoryCce3zpo.setMigrator.call(addressK6c2Ga, {from: accounts[3]});
		const addressUTmCmFB = await NasiLiquidityPoolFactoryCce3zpo.addMinter.call(addressp7e6lFr, {from: accounts[1]});
		const uint256ehhlBbA = await NasiLiquidityPoolFactoryCce3zpo.addLpToken.call(uintMMj8ACG, addressKMaAq30, boolerGpAhS, {from: accounts[3]});
		await NasiLiquidityPoolFactoryCce3zpo.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
	});
})
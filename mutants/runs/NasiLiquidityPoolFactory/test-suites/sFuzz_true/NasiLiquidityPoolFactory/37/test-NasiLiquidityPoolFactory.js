const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressf3izMKV = "0x0000000000000000000000000000000000000001"
		const addressWVChQyi = accounts[2]
		const uintWhCKcSo = BigInt("1036")
		const uintBRmXHpa = BigInt("460")
		const NasiLiquidityPoolFactoryCm0P1i3 = await NasiLiquidityPoolFactory.new(addressf3izMKV, addressWVChQyi, uintWhCKcSo, uintBRmXHpa, {from: accounts[3]});
		const address3sgsCn = "0x0000000000000000000000000000000000000001"
		const stringOWYN4e = await NasiLiquidityPoolFactoryCm0P1i3.symbol.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryCm0P1i3.pause.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryCm0P1i3.onlyPauser.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryCm0P1i3.whenPaused.call({from: accounts[1]});
		const uint256t5iglw4 = await NasiLiquidityPoolFactoryCm0P1i3.balanceOf.call(address3sgsCn, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringp4CDGAu = "DkEOJE25vMzPJH2F2gGh4kcveFrr2TW5JqfT6t5Jgo5ZjeK7nqM5G2XoPHtnYUkYLBdgY8SaC7N2IzzKgkLCR6nLctv"
		const stringXHeVZ7M = "Ugrb8Vk83fGIkVaYsfmJ5yPag6EwjOQlDQZPyxpIRkVsYL1brQKzlEzFT5gOL0GopQyFREsaQFiIrxRUq5mOXRaS9seATrSN"
		const uintE3X5I3A = BigInt("11")
		const NasiLiquidityPoolFactoryOH1JL60 = await NasiLiquidityPoolFactory.new(stringp4CDGAu, stringXHeVZ7M, uintE3X5I3A, {from: accounts[3]});
		const uintS78UKv = BigInt("1054")
		const addressowiiYaN = accounts[2]
		const uintwYbEUpQ = BigInt("997")
		const addressZGSshWZ = accounts[2]
		const uintwlm7cm = BigInt("1945")
		const addressddi0XfS = accounts[0]
		const boolWhLHBdP = await NasiLiquidityPoolFactoryOH1JL60.approve.call(addressowiiYaN, uintS78UKv, {from: accounts[3]});
		const boolFOH3sDZ = await NasiLiquidityPoolFactoryOH1JL60.increaseAllowance.call(addressZGSshWZ, uintwYbEUpQ, {from: accounts[0]});
		const boolKLl5YAr = await NasiLiquidityPoolFactoryOH1JL60.decreaseAllowance.call(addressddi0XfS, uintwlm7cm, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSTRSI7I = "lGNhw9hb2Qge8uYxP18VNerVh2fXayyhRnLvRdSgcQgoYYbhTUJVTIg2udybUJcyYxr073XiG7yi4Uqs"
		const string2X4ILB = "uYr6B4nMTyKWm7v7ifEFS6Vh6npuahwDN"
		const uintIzXeiC = BigInt("125")
		const NasiLiquidityPoolFactoryOPVFo0R = await NasiLiquidityPoolFactory.new(stringSTRSI7I, string2X4ILB, uintIzXeiC, {from: accounts[5]});
		const uintI8gKaF1 = BigInt("1105")
		const uintDY9vxCa = BigInt("1835")
		const uintt2qI7JZ = BigInt("994")
		const addressrwqsNp8 = accounts[4]
		const addresslezv8Uj = accounts[3]
		const addressqZeXQav = accounts[3]
		const uintat2PQHk = BigInt("1049")
		const uintwhJI2bp = BigInt("13")
		const bytewasyoSB = "0x051817180f12182007041315091c181c13081f101a1a1414151405030e06140f"
		const byterIBvvwx = "0x19150d050e0d05071f16010a0c13010a1c1d0d1e201815020f130f020c010d1e"
		const uintDcEUbBQ = BigInt("39")
		const uintWE4woSU = BigInt("1785")
		const uintIdE7f1l = BigInt("299")
		const addressHrFEDge = accounts[1]
		const 
CEinVE = await NasiLiquidityPoolFactoryOPVFo0R._writeCheckpoint.call(addressrwqsNp8, uintt2qI7JZ, uintDY9vxCa, uintI8gKaF1, {from: accounts[0]});
		const uint2568fDWQn = await NasiLiquidityPoolFactoryOPVFo0R.allowance.call(addressqZeXQav, addresslezv8Uj, {from: accounts[0]});
		const uint256Y0GYR1c = await NasiLiquidityPoolFactoryOPVFo0R.withdraw.call(uintwhJI2bp, uintat2PQHk, {from: accounts[5]});
		const 
IWO8NoE = await NasiLiquidityPoolFactoryOPVFo0R.delegateBySig.call(addressHrFEDge, uintIdE7f1l, uintWE4woSU, uintDcEUbBQ, byterIBvvwx, bytewasyoSB, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressI1YpE7H = accounts[4]
		const addressTvFr78Z = accounts[2]
		const uintaY1bsRs = BigInt("649")
		const uint6fA5YR = BigInt("1461")
		const NasiLiquidityPoolFactoryCFKsm24 = await NasiLiquidityPoolFactory.new(addressI1YpE7H, addressTvFr78Z, uintaY1bsRs, uint6fA5YR, {from: accounts[4]});
		const uintwNeLUpU = BigInt("165")
		const uintC2PIKl = BigInt("343")
		const uintHu0L6Iv = BigInt("518")
		const addressLduPHCW = accounts[1]
		const uintj1SzkCM = BigInt("398")
		const addresstVr3M4v = accounts[3]
		const boolsnQmnOz = true
		const uintVIhpG5z = BigInt("924")
		const uinte8kdQIb = BigInt("380")
		const uint256e9RbUtV = await NasiLiquidityPoolFactoryCFKsm24.getBonusMultiplier.call(uintC2PIKl, uintwNeLUpU, {from: accounts[2]});
		const boolVdEpaWf = await NasiLiquidityPoolFactoryCFKsm24.decreaseAllowance.call(addressLduPHCW, uintHu0L6Iv, {from: accounts[2]});
		const boolUUEGA8 = await NasiLiquidityPoolFactoryCFKsm24.increaseAllowance.call(addresstVr3M4v, uintj1SzkCM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256C3SYRJy = await NasiLiquidityPoolFactoryCFKsm24.setAllocationPoint.call(uinte8kdQIb, uintVIhpG5z, boolsnQmnOz, {from: "0x0000000000000000000000000000000000000001"});
		const uint8XrcQ3Yq = await NasiLiquidityPoolFactoryCFKsm24.decimals.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUHVCHg1 = "cSWv8FzoXLEONK9aUomI4m6picAE4oXOLVBXoIr3FOwzGu"
		const stringl9IpOeo = "yNm4"
		const uinttQMC0se = BigInt("115")
		const NasiLiquidityPoolFactorywTEoXio = await NasiLiquidityPoolFactory.new(stringUHVCHg1, stringl9IpOeo, uinttQMC0se, {from: accounts[1]});
		const addressmqGcth = accounts[4]
		const addressNyqzYAL = accounts[0]
		const addressTZxjLUI = accounts[4]
		const uintyv5rEgT = BigInt("584")
		const addressdO3Xs8p = await NasiLiquidityPoolFactorywTEoXio.delegates.call(addressmqGcth, {from: accounts[1]});
		const uint256vAJ11R = await NasiLiquidityPoolFactorywTEoXio.balanceOf.call(addressNyqzYAL, {from: accounts[0]});
		const addressuFSQKRu = await NasiLiquidityPoolFactorywTEoXio.transferOwnership.call(addressTZxjLUI, {from: accounts[0]});
		const uint256IF7olwP = await NasiLiquidityPoolFactorywTEoXio.migrate.call(uintyv5rEgT, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringC2Gk2Ts = "wP9kM4lHq5gUokD8xCKtocmsVq2oiiQ2n19DR"
		const stringA5eIDOd = "15enjo2twWscvIuHI16icyRLNA"
		const uintFrYEKY = BigInt("104")
		const NasiLiquidityPoolFactoryxRZARUN = await NasiLiquidityPoolFactory.new(stringC2Gk2Ts, stringA5eIDOd, uintFrYEKY, {from: accounts[4]});
		const uintnSMhlOb = BigInt("1698")
		const uintEsV0bRK = BigInt("1504")
		const addressRi9jOx5 = accounts[3]
		const addressS7qRlx1 = accounts[4]
		const uintGcAwo6k = BigInt("1969")
		const uintdQv82c6 = BigInt("1881")
		const uintoDPdzaZ = BigInt("973")
		const addressl0ICJ9f = accounts[1]
		const uintIwYPiFu = BigInt("760")
		const addressE7xPgbt = accounts[1]
		const uint256yPllXSJ = await NasiLiquidityPoolFactoryxRZARUN.getBonusMultiplier.call(uintEsV0bRK, uintnSMhlOb, {from: accounts[3]});
		const uint256pJY7El = await NasiLiquidityPoolFactoryxRZARUN.allowance.call(addressS7qRlx1, addressRi9jOx5, {from: accounts[3]});
		const uint256uoq3B4j = await NasiLiquidityPoolFactoryxRZARUN.deposit.call(uintdQv82c6, uintGcAwo6k, {from: accounts[2]});
		const boolOas58fg = await NasiLiquidityPoolFactoryxRZARUN.isOwner.call({from: accounts[0]});
		const boolbmxOxS = await NasiLiquidityPoolFactoryxRZARUN.increaseAllowance.call(addressl0ICJ9f, uintoDPdzaZ, {from: accounts[3]});
		const addressQCrb1lY = await NasiLiquidityPoolFactoryxRZARUN.burnFrom.call(addressE7xPgbt, uintIwYPiFu, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresscT5HsWc = accounts[3]
		const addressMLnC4ZR = accounts[3]
		const uintZElSzF6 = BigInt("1713")
		const uintgkacnDs = BigInt("466")
		const NasiLiquidityPoolFactoryLkmuEX = await NasiLiquidityPoolFactory.new(addresscT5HsWc, addressMLnC4ZR, uintZElSzF6, uintgkacnDs, {from: accounts[3]});
		const addressf1NLMYZ = accounts[3]
		const addressuDej03x = accounts[4]
		const uintXK92slw = BigInt("1629")
		const addressLLhaOBB = "0x0000000000000000000000000000000000000001"
		const addressmzmvDzy = accounts[3]
		const uintTk8U8RV = BigInt("1917")
		const addressDfWekbt = await NasiLiquidityPoolFactoryLkmuEX.dev.call(addressf1NLMYZ, {from: accounts[2]});
		const boolZBNI4Wq = await NasiLiquidityPoolFactoryLkmuEX.isPauser.call(addressuDej03x, {from: accounts[4]});
		const boolSDwQTxA = await NasiLiquidityPoolFactoryLkmuEX.transfer.call(addressLLhaOBB, uintXK92slw, {from: accounts[1]});
		await NasiLiquidityPoolFactoryLkmuEX.whenNotPaused.call({from: accounts[2]});
		const uint256czpcIY9 = await NasiLiquidityPoolFactoryLkmuEX.getCurrentVotes.call(addressmzmvDzy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VgZoC8 = await NasiLiquidityPoolFactoryLkmuEX.enterStaking.call(uintTk8U8RV, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcVIjPb = "dScW1YhmSbYCzMjSu"
		const stringNDqx6Sy = "OjQ"
		const uintTNeXPtg = BigInt("139")
		const NasiLiquidityPoolFactoryNgJRAyN = await NasiLiquidityPoolFactory.new(stringcVIjPb, stringNDqx6Sy, uintTNeXPtg, {from: accounts[3]});
		const uintCCRE5J2 = BigInt("707")
		const uintY8Pgh1f = BigInt("1342")
		const addressWhag0vu = accounts[3]
		const stringy75VNGX = await NasiLiquidityPoolFactoryNgJRAyN.name.call({from: accounts[3]});
		const uint256IowwGhu = await NasiLiquidityPoolFactoryNgJRAyN.withdraw.call(uintY8Pgh1f, uintCCRE5J2, {from: accounts[2]});
		const address5O0W48 = await NasiLiquidityPoolFactoryNgJRAyN.delegates.call(addressWhag0vu, {from: accounts[2]});
		await NasiLiquidityPoolFactoryNgJRAyN.unpause.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringb8Sv998 = "nxlfnmsTPX8xDEyYJRF8O25lutBfJCmLNWEVNDDRogJUnKCCqAohRVvGF44Q287dQqHr58Jxe3XUETlXdnwXbPWPEQGo4OH99O"
		const stringPS1B10W = "8KmRj2wAtbWLcvPgp7"
		const uintB8dMSJq = BigInt("146")
		const NasiLiquidityPoolFactoryozU4m8G = await NasiLiquidityPoolFactory.new(stringb8Sv998, stringPS1B10W, uintB8dMSJq, {from: accounts[1]});
		const uintMO60cPK = BigInt("259")
		const uintatJU4KJ = BigInt("710")
		const uintMD7Lhk = BigInt("1513")
		const addresswlUZaNT = accounts[3]
		const uintukgRxs2 = BigInt("399")
		const addressryhk24y = accounts[0]
		const uint256OyfMmoN = await NasiLiquidityPoolFactoryozU4m8G.getBonusMultiplier.call(uintatJU4KJ, uintMO60cPK, {from: accounts[4]});
		const boolxtCme56 = await NasiLiquidityPoolFactoryozU4m8G.increaseAllowance.call(addresswlUZaNT, uintMD7Lhk, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryozU4m8G.renounceOwnership.call({from: accounts[4]});
		const boollPQWh2T = await NasiLiquidityPoolFactoryozU4m8G.increaseAllowance.call(addressryhk24y, uintukgRxs2, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtKZWKeZ = "klJnUapsg5IOYrdpu3rctiDEtb7CiDW8HdJWgebuvLyw3wBGc5Cxg9Ek6y0Y0scJXIpgtcuUAhj"
		const stringoYvYiFT = "hInspNXBy1dyiqrluN4yldxU3BXscQ1gfeu7twhrIIIwnDmUqyr6gnnRA9uI1Pg0FThrjBAhLJmBI8N8Yv91WJdso10be"
		const uintWsX2gKC = BigInt("138")
		const NasiLiquidityPoolFactoryryLo06f = await NasiLiquidityPoolFactory.new(stringtKZWKeZ, stringoYvYiFT, uintWsX2gKC, {from: accounts[0]});
		const uintlQMDKEX = BigInt("1491")
		const uintMZZBa6P = BigInt("1945")
		const addressvNmG8PI = accounts[1]
		const addressVsDhcpY = "0x0000000000000000000000000000000000000001"
		const uintPqssWgn = BigInt("851")
		const addressgTrsxvC = "0x0000000000000000000000000000000000000001"
		const uint256gVowVDo = await NasiLiquidityPoolFactoryryLo06f.leaveStaking.call(uintlQMDKEX, {from: accounts[1]});
		const uint256PIKZYpY = await NasiLiquidityPoolFactoryryLo06f.enterStaking.call(uintMZZBa6P, {from: accounts[0]});
		const addressm9DkgDo = await NasiLiquidityPoolFactoryryLo06f.dev.call(addressvNmG8PI, {from: accounts[0]});
		const addresse11zHon = await NasiLiquidityPoolFactoryryLo06f.setMigrator.call(addressVsDhcpY, {from: accounts[2]});
		const uint256Lm85hCR = await NasiLiquidityPoolFactoryryLo06f.getPriorVotes.call(addressgTrsxvC, uintPqssWgn, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressNLD34Mn = accounts[4]
		const addressJ7UAWcy = accounts[2]
		const uintopEUahR = BigInt("68")
		const uintfjKPbtR = BigInt("1248")
		const NasiLiquidityPoolFactorysAu6BIR = await NasiLiquidityPoolFactory.new(addressNLD34Mn, addressJ7UAWcy, uintopEUahR, uintfjKPbtR, {from: accounts[4]});
		const uintO83LuC1 = BigInt("1260")
		const addressQgRsUwR = accounts[5]
		const addressbKnAXOr = accounts[2]
		const uint256JZN5hXV = await NasiLiquidityPoolFactorysAu6BIR.migrate.call(uintO83LuC1, {from: accounts[3]});
		const uint256KGTTVSm = await NasiLiquidityPoolFactorysAu6BIR.balanceOf.call(addressQgRsUwR, {from: accounts[4]});
		const boolvzyrAfY = await NasiLiquidityPoolFactorysAu6BIR.isMinter.call(addressbKnAXOr, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringe7z701T = "wjcRMh7hdszwTUqBMBm"
		const stringHS3yklD = "wNd4wySzKlyYhrHW9yTmOETAf1qruhfUaeJghfjJ5rDPTJWeaiAmsCcIgHRVzbu88YrO5OLgGPxha3PKkahpH6Dz"
		const uinthwQ5cW = BigInt("125")
		const NasiLiquidityPoolFactoryLD09KX = await NasiLiquidityPoolFactory.new(stringe7z701T, stringHS3yklD, uinthwQ5cW, {from: accounts[3]});
		const boolhz5swfx = true
		const addresszCdkYVt = "0x0000000000000000000000000000000000000001"
		const uintnk9gKx1 = BigInt("1450")
		const uintONKZRKs = BigInt("426")
		const addressvwwdFQd = accounts[0]
		const uintwoSJWF = BigInt("224")
		const addressd8KN0qO = accounts[4]
		const addressxyDHRr = accounts[2]
		const uintBuEkACO = BigInt("1493")
		const addressRHE9WBw = accounts[2]
		const uint256HBYkJgg = await NasiLiquidityPoolFactoryLD09KX.addLpToken.call(uintnk9gKx1, addresszCdkYVt, boolhz5swfx, {from: accounts[1]});
		const boolgegY98l = await NasiLiquidityPoolFactoryLD09KX.approve.call(addressvwwdFQd, uintONKZRKs, {from: accounts[5]});
		const addressPAyXLb = await NasiLiquidityPoolFactoryLD09KX.burnFrom.call(addressd8KN0qO, uintwoSJWF, {from: accounts[1]});
		const uint256hhcf3QJ = await NasiLiquidityPoolFactoryLD09KX.balanceOf.call(addressxyDHRr, {from: accounts[2]});
		const addressflq3ntk = await NasiLiquidityPoolFactoryLD09KX.burnFrom.call(addressRHE9WBw, uintBuEkACO, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJN1aDSU = "0cDX1k7KR744nbkDwrewRAjXYH"
		const stringLiBGTlZ = "PHmkNQEx5vPClk64JGweP15XBuLwEgwSYy4SO3f986Mwig1mqRiG4CX7dIqJEHGpMvNppvSnBY7AT4r49N"
		const uintFKpBtJT = BigInt("191")
		const NasiLiquidityPoolFactoryq6R6yZX = await NasiLiquidityPoolFactory.new(stringJN1aDSU, stringLiBGTlZ, uintFKpBtJT, {from: accounts[4]});
		const addressAtSHmO = accounts[0]
		const addressHFvgIuL = accounts[3]
		const addressY8Q9WIj = await NasiLiquidityPoolFactoryq6R6yZX.transferOwnership.call(addressAtSHmO, {from: accounts[4]});
		const addressmwGSMLN = await NasiLiquidityPoolFactoryq6R6yZX.delegate.call(addressHFvgIuL, {from: accounts[3]});
		await NasiLiquidityPoolFactoryq6R6yZX.whenPaused.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressmYnyQ69 = accounts[2]
		const addressLXY9S7E = accounts[0]
		const uintNjnrQK5 = BigInt("1328")
		const uintqFIlyjd = BigInt("1849")
		const NasiLiquidityPoolFactoryp4ioUXX = await NasiLiquidityPoolFactory.new(addressmYnyQ69, addressLXY9S7E, uintNjnrQK5, uintqFIlyjd, {from: accounts[3]});
		const addresswjBwM3j = "0x0000000000000000000000000000000000000001"
		const uinte6HHn8N = BigInt("634")
		const uintETYvRVj = BigInt("944")
		const uintV5sDkDR = BigInt("1947")
		const addressnbvJIWa = accounts[1]
		const addressGVTZvl7 = await NasiLiquidityPoolFactoryp4ioUXX.setMigrator.call(addresswjBwM3j, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryp4ioUXX.renounceOwnership.call({from: accounts[0]});
		const 
Jg8a1Xo = await NasiLiquidityPoolFactoryp4ioUXX._writeCheckpoint.call(addressnbvJIWa, uintV5sDkDR, uintETYvRVj, uinte6HHn8N, {from: accounts[5]});
		await NasiLiquidityPoolFactoryp4ioUXX.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressxhwoi96 = accounts[0]
		const address6E0FcL = accounts[4]
		const uintIbZ3U7J = BigInt("1982")
		const uintZjIC2xf = BigInt("179")
		const NasiLiquidityPoolFactoryEfKzGWe = await NasiLiquidityPoolFactory.new(addressxhwoi96, address6E0FcL, uintIbZ3U7J, uintZjIC2xf, {from: "0x0000000000000000000000000000000000000001"});
		const addressRvEAt1C = accounts[1]
		const uintUm9LbnX = BigInt("1071")
		const uintfEzc2i = BigInt("1168")
		const uintIjh7HtX = BigInt("1147")
		const addressdnEQrhD = accounts[4]
		const addressHVPQg2 = await NasiLiquidityPoolFactoryEfKzGWe.addMinter.call(addressRvEAt1C, {from: accounts[3]});
		const uint256jToQIh1 = await NasiLiquidityPoolFactoryEfKzGWe.deposit.call(uintfEzc2i, uintUm9LbnX, {from: accounts[3]});
		await NasiLiquidityPoolFactoryEfKzGWe.renounceMinter.call({from: accounts[2]});
		const booldzCPXmt = await NasiLiquidityPoolFactoryEfKzGWe.approve.call(addressdnEQrhD, uintIjh7HtX, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringTWi0Wnm = "tbQ3lju4YvH4WloESAe31T"
		const stringD56S6BU = "eKWXKoXnoEJOtTw8f5vPGSui2TWAN29TVDHzGAITigbDSYbVowUw2sMyeNl2SeJ6IMdgX1iQFM8KPdUM3pIvYK3"
		const uintbUmIBjB = BigInt("197")
		const NasiLiquidityPoolFactoryG7Zam11 = await NasiLiquidityPoolFactory.new(stringTWi0Wnm, stringD56S6BU, uintbUmIBjB, {from: accounts[0]});
		const addressEmvcdZu = accounts[1]
		const uintYosxXhV = BigInt("1254")
		const addressSOG5gfS = accounts[3]
		const uint256wgQsexJ = await NasiLiquidityPoolFactoryG7Zam11.pendingNasi.call(uintYosxXhV, addressEmvcdZu, {from: accounts[2]});
		const boolC6CZbm = await NasiLiquidityPoolFactoryG7Zam11.isPauser.call(addressSOG5gfS, {from: accounts[0]});
		await NasiLiquidityPoolFactoryG7Zam11.renounceOwnership.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringRug9381 = "S27JyznwO7DK8cmK7oMCQLa7fI7WsfDEvCuW51X1HDye9XqiM46onv2TRnxOHZkI5YY2YxP8pm2AITygOQahu19LK1TKel"
		const stringpe1s9Cf = "uYh85M1H4TCgUR9RGe6JEQ2szKgDKriD6ILllt2GO1s3R5FJQ6tr"
		const uintzHv3kDD = BigInt("69")
		const NasiLiquidityPoolFactoryCmLdVJT = await NasiLiquidityPoolFactory.new(stringRug9381, stringpe1s9Cf, uintzHv3kDD, {from: accounts[1]});
		const uintREtztKg = BigInt("1494")
		const addressw8jW4gb = accounts[4]
		const uintKrYWyLS = BigInt("15")
		const uintdntQTLk = BigInt("73")
		const addresslH9GNrP = accounts[4]
		const addressBSowN4f = accounts[0]
		const uintc4Vs5Xu = BigInt("1767")
		const uintomRLxCA = BigInt("1055")
		const uint2kbO3S = BigInt("135")
		const addressPLDvwEL = accounts[1]
		const boolbZhR5UV = await NasiLiquidityPoolFactoryCmLdVJT.decreaseAllowance.call(addressw8jW4gb, uintREtztKg, {from: accounts[4]});
		const uint256AXe2BEJ = await NasiLiquidityPoolFactoryCmLdVJT.burn.call(uintKrYWyLS, {from: accounts[1]});
		const boolQFYHtv = await NasiLiquidityPoolFactoryCmLdVJT.increaseAllowance.call(addresslH9GNrP, uintdntQTLk, {from: accounts[5]});
		const addresszOk470c = await NasiLiquidityPoolFactoryCmLdVJT.delegate.call(addressBSowN4f, {from: accounts[2]});
		const 
kHdeM5 = await NasiLiquidityPoolFactoryCmLdVJT._writeCheckpoint.call(addressPLDvwEL, uint2kbO3S, uintomRLxCA, uintc4Vs5Xu, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressMdlLHug = accounts[4]
		const addressK37tZY = accounts[2]
		const uintA5AxRYP = BigInt("68")
		const uintVs5cX9 = BigInt("1248")
		const NasiLiquidityPoolFactorysAu6BIR = await NasiLiquidityPoolFactory.new(addressMdlLHug, addressK37tZY, uintA5AxRYP, uintVs5cX9, {from: accounts[4]});
		const uintZDhvQGj = BigInt("629")
		const uintaDdKrdR = BigInt("1260")
		const uintOR5v7ce = BigInt("224")
		const addressKh8XXbZ = accounts[2]
		const addressHWzW5g = accounts[3]
		const addressy5Icj7 = accounts[3]
		const uint256YfX4REc = await NasiLiquidityPoolFactorysAu6BIR.emergencyWithdraw.call(uintZDhvQGj, {from: accounts[1]});
		const uint256JZN5hXV = await NasiLiquidityPoolFactorysAu6BIR.migrate.call(uintaDdKrdR, {from: accounts[3]});
		const uint256m0tmG9 = await NasiLiquidityPoolFactorysAu6BIR.getPriorVotes.call(addressKh8XXbZ, uintOR5v7ce, {from: accounts[4]});
		const uint256KGTTVSm = await NasiLiquidityPoolFactorysAu6BIR.balanceOf.call(addressHWzW5g, {from: accounts[4]});
		const boolvzyrAfY = await NasiLiquidityPoolFactorysAu6BIR.isMinter.call(addressy5Icj7, {from: accounts[1]});
	});
})
const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringqjDACvz = "hH2P4nDBxGNanRiI2Kj9n2LrOZ54MFeQNY9jze7LlzNuc1iwvgj"
		const stringFXmEscR = "0AGGTpB07NiFMviK1XPnpMqZFiild1u31isb"
		const uintZZgb7RZ = BigInt("237")
		const NasiLiquidityPoolFactoryZqUG2xr = await NasiLiquidityPoolFactory.new(stringqjDACvz, stringFXmEscR, uintZZgb7RZ, {from: accounts[4]});
		const addressoB7Ed3D = accounts[3]
		const uintEqDzq11 = BigInt("1382")
		const addressGC5eaMH = accounts[2]
		const addresslCNBO16 = accounts[4]
		const boolkZpGcht = await NasiLiquidityPoolFactoryZqUG2xr.isMinter.call(addressoB7Ed3D, {from: accounts[3]});
		const boolIZsSmrU = await NasiLiquidityPoolFactoryZqUG2xr.decreaseAllowance.call(addressGC5eaMH, uintEqDzq11, {from: accounts[4]});
		const uint256AWjraro = await NasiLiquidityPoolFactoryZqUG2xr.getCurrentVotes.call(addresslCNBO16, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressjwtuC5q = accounts[0]
		const addressZt7Gmup = accounts[2]
		const uintctZMmiP = BigInt("190")
		const uintYAOc32s = BigInt("204")
		const NasiLiquidityPoolFactoryOfcMvr = await NasiLiquidityPoolFactory.new(addressjwtuC5q, addressZt7Gmup, uintctZMmiP, uintYAOc32s, {from: accounts[0]});
		const uintk8s0xov = BigInt("459")
		const addressFFIf1Y = accounts[4]
		const address2g1zfG = accounts[2]
		const uintDOZeo7Z = BigInt("943")
		const addressTAnQHVH = "0x0000000000000000000000000000000000000001"
		const booll7ZfVRS = await NasiLiquidityPoolFactoryOfcMvr.paused.call({from: accounts[4]});
		const uint256MTueqpD = await NasiLiquidityPoolFactoryOfcMvr.leaveStaking.call(uintk8s0xov, {from: accounts[4]});
		const addressayL8orZ = await NasiLiquidityPoolFactoryOfcMvr._delegate.call(address2g1zfG, addressFFIf1Y, {from: accounts[1]});
		await NasiLiquidityPoolFactoryOfcMvr.unpause.call({from: accounts[4]});
		const boolDYV3u0o = await NasiLiquidityPoolFactoryOfcMvr.transfer.call(addressTAnQHVH, uintDOZeo7Z, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringrZsDtJg = "OgStBSiaBC2DYq"
		const stringafqA1j = "LVTmlaCgIv6DHwuGTtrGhLx8puFbLJMWYrx098HRNsBeaYk94rtvyQT7Vu89PKaOZP6cLgzuDtRC13RC93XePU"
		const uintwdL8vnO = BigInt("241")
		const NasiLiquidityPoolFactoryZHeH8fL = await NasiLiquidityPoolFactory.new(stringrZsDtJg, stringafqA1j, uintwdL8vnO, {from: accounts[3]});
		const boolhft8NL = true
		const uintEQAI0V9 = BigInt("989")
		const uintH4ZCEJv = BigInt("1762")
		const addressG6QoVUw = accounts[2]
		const uint256yEjRI2M = await NasiLiquidityPoolFactoryZHeH8fL.setAllocationPoint.call(uintH4ZCEJv, uintEQAI0V9, boolhft8NL, {from: accounts[0]});
		const addressOVxFCUJ = await NasiLiquidityPoolFactoryZHeH8fL.addMinter.call(addressG6QoVUw, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringy5D9w7 = "QQatpqFNJuyTdjgPKY8PKOnsAX4T69kCAXe3zUKVJW9RyvUG9"
		const stringdWhFV3n = "lsTgJWMYMoZ67JLJkcuQwvuD1pLfqILHOXLGydAqjlbjV"
		const uinta0KPK2b = BigInt("186")
		const NasiLiquidityPoolFactoryq5Xn5fh = await NasiLiquidityPoolFactory.new(stringy5D9w7, stringdWhFV3n, uinta0KPK2b, {from: accounts[0]});
		const boolRotQicE = false
		const addressqdFw9FB = accounts[2]
		const uintayFvvRM = BigInt("1843")
		const addressYIeec5b = accounts[1]
		const uintzkfQhF4 = BigInt("1459")
		const addressXrRHHc5 = "0x0000000000000000000000000000000000000001"
		const addressEOgJrL8 = accounts[4]
		const uint256zosHdV = await NasiLiquidityPoolFactoryq5Xn5fh.addLpToken.call(uintayFvvRM, addressqdFw9FB, boolRotQicE, {from: accounts[2]});
		const addressT9YBwy5 = await NasiLiquidityPoolFactoryq5Xn5fh.dev.call(addressYIeec5b, {from: accounts[0]});
		const boolmbyw9tl = await NasiLiquidityPoolFactoryq5Xn5fh.approve.call(addressXrRHHc5, uintzkfQhF4, {from: accounts[4]});
		const uint256GK4BsI = await NasiLiquidityPoolFactoryq5Xn5fh.getCurrentVotes.call(addressEOgJrL8, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringfvGnG11 = "2SGIeNdcS2Zf5qiYizfWAdZw1Tg7pq8hzhbLhZD7nEx4g5wgC8tBoJVBMtJWUdUjJPUUdNzioAasr"
		const stringiL5Klyo = "laCi"
		const uintwcnvvbB = BigInt("83")
		const NasiLiquidityPoolFactoryqKaqWju = await NasiLiquidityPoolFactory.new(stringfvGnG11, stringiL5Klyo, uintwcnvvbB, {from: accounts[2]});
		const uintM8Yh5hp = BigInt("712")
		const addressCkb941 = accounts[4]
		const boolc9X90M4 = await NasiLiquidityPoolFactoryqKaqWju.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolwMThDAI = await NasiLiquidityPoolFactoryqKaqWju.decreaseAllowance.call(addressCkb941, uintM8Yh5hp, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringBlHSnis = "X9hAOq9sp1yCzcImmPHhhHLgoo7XkBGGcHcN1mwvKTfGsIkLySfpkW4J8X2zWSUqkEhZWsAdABHkWBgSaENHbsezoO8awuL5E"
		const stringslyZs2T = "QlUmuSc4kxtVE3irK9E9dhUd8LSPMVQxLYftOz"
		const uinth8uNpv = BigInt("6")
		const NasiLiquidityPoolFactoryXQCngTm = await NasiLiquidityPoolFactory.new(stringBlHSnis, stringslyZs2T, uinth8uNpv, {from: accounts[2]});
		const address10XCCv = accounts[4]
		const addressCIzlU7L = accounts[3]
		const boolENfp5ym = await NasiLiquidityPoolFactoryXQCngTm.paused.call({from: accounts[3]});
		const addressuRTKC4E = await NasiLiquidityPoolFactoryXQCngTm.dev.call(address10XCCv, {from: accounts[4]});
		const uint256bZsGQgS = await NasiLiquidityPoolFactoryXQCngTm.getCurrentVotes.call(addressCIzlU7L, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringESZJqEC = "MafoWqhTZCer7nH9JFFV5coWv6juwi"
		const stringOTfIFoq = "Z6JSwHaSwEGx6ocjprIp5vMnJZjN76fHaSDPFj0S1g75gl"
		const uintMCKLvZK = BigInt("38")
		const NasiLiquidityPoolFactorykMmw0yb = await NasiLiquidityPoolFactory.new(stringESZJqEC, stringOTfIFoq, uintMCKLvZK, {from: accounts[0]});
		const addressP6XIEpb = accounts[3]
		const stringExe8x55 = await NasiLiquidityPoolFactorykMmw0yb.name.call({from: accounts[3]});
		const addressdJax3BI = await NasiLiquidityPoolFactorykMmw0yb.setMigrator.call(addressP6XIEpb, {from: accounts[1]});
		await NasiLiquidityPoolFactorykMmw0yb.onlyPauser.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringwWrmK6c = "75KiYCxCJJNE52S7ZnG1qTYFbpfoP7EaUQqDTEtKN7U65"
		const stringCufqKA = "tzjSqtegJZsxDlGq69qrCV3xe2V1nawN8yXzN4Jz3"
		const uintfPsGtTQ = BigInt("56")
		const NasiLiquidityPoolFactoryWbZn1C = await NasiLiquidityPoolFactory.new(stringwWrmK6c, stringCufqKA, uintfPsGtTQ, {from: accounts[0]});
		const uintfii0ggC = BigInt("1805")
		const uintYxmdVbn = BigInt("1084")
		const uintMfNfoqH = BigInt("1297")
		const addressTE6kXyw = accounts[2]
		const addressnXnT1Sz = accounts[5]
		const addressBUyDITt = accounts[4]
		const uintBnY3DWm = BigInt("1719")
		const addressR18tWOR = accounts[3]
		const addresso8ARXM = accounts[3]
		const uint256fdhbqkF = await NasiLiquidityPoolFactoryWbZn1C.getBonusMultiplier.call(uintYxmdVbn, uintfii0ggC, {from: accounts[4]});
		const boolfYRfjOt = await NasiLiquidityPoolFactoryWbZn1C.transferFrom.call(addressnXnT1Sz, addressTE6kXyw, uintMfNfoqH, {from: accounts[3]});
		const uint256SRzcmJx = await NasiLiquidityPoolFactoryWbZn1C.pendingNasi.call(uintBnY3DWm, addressBUyDITt, {from: accounts[2]});
		const addressZSBJRb = await NasiLiquidityPoolFactoryWbZn1C.delegates.call(addressR18tWOR, {from: "0x0000000000000000000000000000000000000001"});
		const addressODIsgIn = await NasiLiquidityPoolFactoryWbZn1C.delegate.call(addresso8ARXM, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressdieywH = accounts[0]
		const addressoyhmxCf = accounts[2]
		const uintwRfvhSl = BigInt("190")
		const uintVVNeJd9 = BigInt("204")
		const NasiLiquidityPoolFactoryOfcMvr = await NasiLiquidityPoolFactory.new(addressdieywH, addressoyhmxCf, uintwRfvhSl, uintVVNeJd9, {from: accounts[0]});
		const uint2AwZfx = BigInt("459")
		const addressbEiUmBt = accounts[4]
		const addressqwxIn5F = accounts[2]
		const uintzM7ofhI = BigInt("943")
		const addressqHfC2ej = "0x0000000000000000000000000000000000000001"
		const uint256MTueqpD = await NasiLiquidityPoolFactoryOfcMvr.leaveStaking.call(uint2AwZfx, {from: accounts[4]});
		const addressayL8orZ = await NasiLiquidityPoolFactoryOfcMvr._delegate.call(addressqwxIn5F, addressbEiUmBt, {from: accounts[1]});
		await NasiLiquidityPoolFactoryOfcMvr.unpause.call({from: accounts[4]});
		const boolDYV3u0o = await NasiLiquidityPoolFactoryOfcMvr.transfer.call(addressqHfC2ej, uintzM7ofhI, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringL8DmXV6 = "hLaCg6ndMu7ITx2GEzlljob3AqhqG"
		const stringBFfrUPQ = "v6lM3RcjJndTwoneHcGLLDzLg2ep6XSDnRiwCWJEUYvHBY997"
		const uintxkxNzVp = BigInt("104")
		const NasiLiquidityPoolFactorywQ3RJyS = await NasiLiquidityPoolFactory.new(stringL8DmXV6, stringBFfrUPQ, uintxkxNzVp, {from: accounts[2]});
		const uintuaTegNz = BigInt("9")
		const addressLVJjM3x = accounts[3]
		const addressUoKtAcy = accounts[2]
		const uintDHPM2zz = BigInt("598")
		const addressoR2LMcw = accounts[2]
		const uintySRzZDu = BigInt("1261")
		const addressuQRc7GM = accounts[2]
		const addressiT7iDEO = accounts[1]
		const boolZk3ctyX = await NasiLiquidityPoolFactorywQ3RJyS.transferFrom.call(addressUoKtAcy, addressLVJjM3x, uintuaTegNz, {from: accounts[5]});
		const boolif0k9Yc = await NasiLiquidityPoolFactorywQ3RJyS.increaseAllowance.call(addressoR2LMcw, uintDHPM2zz, {from: accounts[4]});
		const booltSbbTbq = await NasiLiquidityPoolFactorywQ3RJyS.approve.call(addressuQRc7GM, uintySRzZDu, {from: accounts[1]});
		await NasiLiquidityPoolFactorywQ3RJyS.whenNotPaused.call({from: accounts[1]});
		await NasiLiquidityPoolFactorywQ3RJyS.massUpdatePools.call({from: accounts[0]});
		const addressdS44Yld = await NasiLiquidityPoolFactorywQ3RJyS.addMinter.call(addressiT7iDEO, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressQleCDW6 = accounts[3]
		const addressKpQtp8W = accounts[3]
		const uinturL8mDA = BigInt("1500")
		const uintC34rFDM = BigInt("140")
		const NasiLiquidityPoolFactoryLlnHyg1 = await NasiLiquidityPoolFactory.new(addressQleCDW6, addressKpQtp8W, uinturL8mDA, uintC34rFDM, {from: accounts[4]});
		const addressFSHbVPC = accounts[3]
		const uintYqhoqWH = BigInt("1363")
		const uintqft6yY8 = BigInt("666")
		const uintRzwzht = BigInt("1046")
		const addressj8UWYmn = accounts[0]
		const boolFZyQjHZ = await NasiLiquidityPoolFactoryLlnHyg1.isOwner.call({from: accounts[2]});
		const addressPlIIUkF = await NasiLiquidityPoolFactoryLlnHyg1.addPauser.call(addressFSHbVPC, {from: accounts[0]});
		const uint256umUDiPX = await NasiLiquidityPoolFactoryLlnHyg1.deposit.call(uintqft6yY8, uintYqhoqWH, {from: accounts[3]});
		const boolpodFs0u = await NasiLiquidityPoolFactoryLlnHyg1.increaseAllowance.call(addressj8UWYmn, uintRzwzht, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressEEGjJn = accounts[4]
		const addressDZMkKn = accounts[2]
		const uintS6Olmv3 = BigInt("129")
		const uint6YjGiQ = BigInt("690")
		const NasiLiquidityPoolFactoryFLTTl5v = await NasiLiquidityPoolFactory.new(addressEEGjJn, addressDZMkKn, uintS6Olmv3, uint6YjGiQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintfZkRkUK = BigInt("1060")
		const addresscgUzkjy = accounts[3]
		const addressN5WQ1z = accounts[1]
		const uintPjf1Faz = BigInt("244")
		const uint256FpoQySu = await NasiLiquidityPoolFactoryFLTTl5v.getPriorVotes.call(addresscgUzkjy, uintfZkRkUK, {from: accounts[4]});
		const uint256Y0EVcP5 = await NasiLiquidityPoolFactoryFLTTl5v.balanceOf.call(addressN5WQ1z, {from: accounts[5]});
		const stringEj9IQ8g = await NasiLiquidityPoolFactoryFLTTl5v.name.call({from: accounts[2]});
		const uint256PwkmhR = await NasiLiquidityPoolFactoryFLTTl5v.burn.call(uintPjf1Faz, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringF8RfHe5 = "ancWPsp3CgxoWfoRxWPA9XwgkYN22C2T447Hve7r6I1mEAXXqsrEPs0kVjnQj"
		const stringoEtrSa0 = "PXGtO6RfIvgmUYsl2iQ"
		const uintKyaTLO7 = BigInt("132")
		const NasiLiquidityPoolFactoryZKFNKg = await NasiLiquidityPoolFactory.new(stringF8RfHe5, stringoEtrSa0, uintKyaTLO7, {from: "0x0000000000000000000000000000000000000001"});
		const uinty07VlD2 = BigInt("726")
		const uint256ghPzm8S = await NasiLiquidityPoolFactoryZKFNKg.leaveStaking.call(uinty07VlD2, {from: accounts[1]});
		const addresseCzFkU1 = await NasiLiquidityPoolFactoryZKFNKg.owner.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryZKFNKg.whenNotPaused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const address6vCHv7 = accounts[0]
		const addressQ50ItER = accounts[2]
		const uintv9XFNuT = BigInt("190")
		const uinthEcWNXq = BigInt("204")
		const NasiLiquidityPoolFactoryOfcMvr = await NasiLiquidityPoolFactory.new(address6vCHv7, addressQ50ItER, uintv9XFNuT, uinthEcWNXq, {from: accounts[0]});
		const uintfZC4G3N = BigInt("170")
		const uintumNBSim = BigInt("1116")
		const uintR7a51f = BigInt("70")
		const uintPTzLsym = BigInt("1810")
		const uintJPNpyz2 = BigInt("943")
		const addressBx39yb = "0x0000000000000000000000000000000000000001"
		const uint256vFqSXsO = await NasiLiquidityPoolFactoryOfcMvr.emergencyWithdraw.call(uintfZC4G3N, {from: accounts[1]});
		const uint256MTueqpD = await NasiLiquidityPoolFactoryOfcMvr.leaveStaking.call(uintumNBSim, {from: accounts[4]});
		await NasiLiquidityPoolFactoryOfcMvr.unpause.call({from: accounts[4]});
		const uint256pHBFFDS = await NasiLiquidityPoolFactoryOfcMvr.burn.call(uintR7a51f, {from: accounts[2]});
		const uint256aN3DLV8 = await NasiLiquidityPoolFactoryOfcMvr.enterStaking.call(uintPTzLsym, {from: accounts[0]});
		const boolDYV3u0o = await NasiLiquidityPoolFactoryOfcMvr.transfer.call(addressBx39yb, uintJPNpyz2, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringVt80eTV = "UoScyDGlaW55P99ueYsp8OjR1nzeeEktQvTuhE8WDErh62TxwcRH1BPNegNgTDA6NOp92gpQZRtxM1zkPlTI"
		const stringyyqj4fS = "ENluF0dd7LruYiiN4UF90AGfeghreXpBlvfUHSUCVSwjfpePaeeXBNwY3KFFyW2IIxcG0fYQjBmneVd3G6Yx"
		const uintxOiId0S = BigInt("125")
		const NasiLiquidityPoolFactoryE3Rjhqb = await NasiLiquidityPoolFactory.new(stringVt80eTV, stringyyqj4fS, uintxOiId0S, {from: accounts[4]});
		const uintSON3SbZ = BigInt("815")
		const uintLHARqHq = BigInt("1021")
		const uintNYbe5XP = BigInt("718")
		const addressmy3VSVg = accounts[0]
		const addressi6vkkd = "0x0000000000000000000000000000000000000001"
		const uintsrn4itW = BigInt("337")
		const uint256bvCCVUb = await NasiLiquidityPoolFactoryE3Rjhqb.deposit.call(uintLHARqHq, uintSON3SbZ, {from: accounts[3]});
		const uint256PZRqCSM = await NasiLiquidityPoolFactoryE3Rjhqb.migrate.call(uintNYbe5XP, {from: accounts[4]});
		const uint256epRTXiN = await NasiLiquidityPoolFactoryE3Rjhqb.totalSupply.call({from: accounts[3]});
		const addressctgZ5ae = await NasiLiquidityPoolFactoryE3Rjhqb.delegates.call(addressmy3VSVg, {from: accounts[2]});
		const uint256GH9YDr4 = await NasiLiquidityPoolFactoryE3Rjhqb.pendingNasi.call(uintsrn4itW, addressi6vkkd, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHRAl8YS = "krb7VxngaRt5ksPF51FzxeX9CVec8EY2pWFRHEk9FU2AUXpeW"
		const stringJyoEJSP = "8LHWQY9VX8IPLfw7X7yS19MJ1XkG38W7HOztxHMFcIbxm9ywEMTjHYWrsVTHQY2gaLSwEb4QBmJ12pjy4k"
		const uintiJrPCax = BigInt("13")
		const NasiLiquidityPoolFactorysqIW8Y6 = await NasiLiquidityPoolFactory.new(stringHRAl8YS, stringJyoEJSP, uintiJrPCax, {from: accounts[1]});
		const uintretEXBj = BigInt("1896")
		const addresssGx5r7J = accounts[4]
		const uintOsYsyg7 = BigInt("1759")
		const addressrd6LMr = accounts[5]
		const uintGcszQjq = BigInt("1401")
		const address4RJscJ = "0x0000000000000000000000000000000000000001"
		const uintAsRTePm = BigInt("533")
		const addressFYGAnIt = accounts[4]
		await NasiLiquidityPoolFactorysqIW8Y6.onlyMinter.call({from: accounts[1]});
		const boolFSCnmOz = await NasiLiquidityPoolFactorysqIW8Y6.approve.call(addresssGx5r7J, uintretEXBj, {from: accounts[3]});
		const boolH6O3PI5 = await NasiLiquidityPoolFactorysqIW8Y6.increaseAllowance.call(addressrd6LMr, uintOsYsyg7, {from: accounts[1]});
		const uint256e1NlmR1 = await NasiLiquidityPoolFactorysqIW8Y6.getPriorVotes.call(address4RJscJ, uintGcszQjq, {from: accounts[5]});
		const boolPZjdpMI = await NasiLiquidityPoolFactorysqIW8Y6.decreaseAllowance.call(addressFYGAnIt, uintAsRTePm, {from: accounts[3]});
		await NasiLiquidityPoolFactorysqIW8Y6.whenPaused.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressXWyo9N = accounts[0]
		const addressmkRm2iB = accounts[2]
		const uintK7V7vex = BigInt("190")
		const uintfGIB5Bv = BigInt("204")
		const NasiLiquidityPoolFactoryOfcMvr = await NasiLiquidityPoolFactory.new(addressXWyo9N, addressmkRm2iB, uintK7V7vex, uintfGIB5Bv, {from: accounts[0]});
		const uintdUVsmt0 = BigInt("59")
		const uintZ1oWER6 = BigInt("1036")
		const uintsieUzrk = BigInt("170")
		const uintwK1SPR9 = BigInt("1116")
		const uintxaic5ja = BigInt("70")
		const address2E7XvN = accounts[0]
		const uintWkBiVdC = BigInt("1810")
		const uintAt5uLNM = BigInt("943")
		const addressnctMQT8 = "0x0000000000000000000000000000000000000001"
		const uint256cdQlz6w = await NasiLiquidityPoolFactoryOfcMvr.withdraw.call(uintZ1oWER6, uintdUVsmt0, {from: accounts[3]});
		const uint256vFqSXsO = await NasiLiquidityPoolFactoryOfcMvr.emergencyWithdraw.call(uintsieUzrk, {from: accounts[1]});
		const uint256MTueqpD = await NasiLiquidityPoolFactoryOfcMvr.leaveStaking.call(uintwK1SPR9, {from: accounts[4]});
		await NasiLiquidityPoolFactoryOfcMvr.unpause.call({from: accounts[4]});
		const uint256pHBFFDS = await NasiLiquidityPoolFactoryOfcMvr.burn.call(uintxaic5ja, {from: accounts[2]});
		const addressEHQmknx = await NasiLiquidityPoolFactoryOfcMvr.transferOwnership.call(address2E7XvN, {from: accounts[0]});
		const uint256aN3DLV8 = await NasiLiquidityPoolFactoryOfcMvr.enterStaking.call(uintWkBiVdC, {from: accounts[0]});
		const boolDYV3u0o = await NasiLiquidityPoolFactoryOfcMvr.transfer.call(addressnctMQT8, uintAt5uLNM, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringVu2DS2K = "R4o77yLQPtV2MHvIfekuyUWV3ChADTERXjGhpCGgSSlfxtHCr4KxY5NWxDemPgmYFWwXhGN"
		const stringB6x9NMU = "zofz8BQ1"
		const uinty6l3H6Y = BigInt("20")
		const NasiLiquidityPoolFactoryUbN4Gtf = await NasiLiquidityPoolFactory.new(stringVu2DS2K, stringB6x9NMU, uinty6l3H6Y, {from: accounts[3]});
		const boolGYXnYrl = false
		const uintbPejf8g = BigInt("593")
		const uintXxaIPph = BigInt("1414")
		const uintZ3dejgY = BigInt("592")
		const addressyyMmtX0 = accounts[1]
		const uint256GGf3FJy = await NasiLiquidityPoolFactoryUbN4Gtf.setAllocationPoint.call(uintXxaIPph, uintbPejf8g, boolGYXnYrl, {from: accounts[1]});
		const boolFhH6TWZ = await NasiLiquidityPoolFactoryUbN4Gtf.increaseAllowance.call(addressyyMmtX0, uintZ3dejgY, {from: accounts[4]});
		const uint8N79h2X6 = await NasiLiquidityPoolFactoryUbN4Gtf.decimals.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressb0D3q9 = accounts[1]
		const addressIJvkd4p = accounts[0]
		const uintk1cXTn = BigInt("700")
		const uintphUkajY = BigInt("1096")
		const NasiLiquidityPoolFactoryh1f3xKa = await NasiLiquidityPoolFactory.new(addressb0D3q9, addressIJvkd4p, uintk1cXTn, uintphUkajY, {from: accounts[2]});
		const uintH2410ad = BigInt("1779")
		const addressnt6nrMQ = accounts[1]
		const uintnv9OBtp = BigInt("1596")
		const uint256uL1giz9 = await NasiLiquidityPoolFactoryh1f3xKa.migrate.call(uintH2410ad, {from: accounts[3]});
		const addressSHa1JC8 = await NasiLiquidityPoolFactoryh1f3xKa.setMigrator.call(addressnt6nrMQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pLPJQdG = await NasiLiquidityPoolFactoryh1f3xKa.updatePool.call(uintnv9OBtp, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringNDZ1stP = "FDEFm9uUt3J8qiOZ7Rzumr38FwDKrkQvqbu0zRPyxgDuzjKMRTpg8B7mxMsHl9k0vvmBROy4LAOcFDCLaTux5zc6"
		const stringaa8fWLO = "CqxiuDIXrxwzRjxuzWICtU4JwYgj"
		const uintOvKr5C6 = BigInt("224")
		const NasiLiquidityPoolFactoryQwfThr7 = await NasiLiquidityPoolFactory.new(stringNDZ1stP, stringaa8fWLO, uintOvKr5C6, {from: accounts[4]});
		const addressAWbL5wn = accounts[5]
		const addressrvZT1G4 = accounts[5]
		const uintw52xks = BigInt("1977")
		const uintgon4v7V = BigInt("1230")
		const uintNUjDj6c = BigInt("659")
		const addressBSsr1Q = accounts[1]
		const addressr80drHE = accounts[2]
		const addressx67OFNn = accounts[1]
		const addresskH3lLXB = await NasiLiquidityPoolFactoryQwfThr7._delegate.call(addressrvZT1G4, addressAWbL5wn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wCvM2d = await NasiLiquidityPoolFactoryQwfThr7.withdraw.call(uintgon4v7V, uintw52xks, {from: accounts[2]});
		const uint256nJwyFRF = await NasiLiquidityPoolFactoryQwfThr7.burn.call(uintNUjDj6c, {from: "0x0000000000000000000000000000000000000001"});
		const addressCNvskU7 = await NasiLiquidityPoolFactoryQwfThr7.delegates.call(addressBSsr1Q, {from: accounts[2]});
		const addressRGnMs57 = await NasiLiquidityPoolFactoryQwfThr7._delegate.call(addressx67OFNn, addressr80drHE, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressWh9Rlel = accounts[2]
		const addresspg85nDM = accounts[3]
		const uintbYiNa6b = BigInt("49")
		const uintlT7ywFl = BigInt("596")
		const NasiLiquidityPoolFactoryZ2AsE7b = await NasiLiquidityPoolFactory.new(addressWh9Rlel, addresspg85nDM, uintbYiNa6b, uintlT7ywFl, {from: accounts[2]});
		const addressSfs6nwz = accounts[1]
		const byteKHF7tgX = "0x0519011f1a081d1d0f1007171617041e160b0d050b0d15111f150a15111c1b04"
		const byteE074Ogm = "0x041d1f13090c120a06031b03180e1516031e0a0412120e0804160c0d0d051919"
		const uintCXeXr3h = BigInt("42")
		const uintUMixAUB = BigInt("1970")
		const uintwM6LTBt = BigInt("604")
		const addressY0Ygoi = accounts[1]
		await NasiLiquidityPoolFactoryZ2AsE7b.massUpdatePools.call({from: "0x0000000000000000000000000000000000000001"});
		const addresssqGgQkU = await NasiLiquidityPoolFactoryZ2AsE7b.transferOwnership.call(addressSfs6nwz, {from: accounts[3]});
		const 
JkVURXK = await NasiLiquidityPoolFactoryZ2AsE7b.delegateBySig.call(addressY0Ygoi, uintwM6LTBt, uintUMixAUB, uintCXeXr3h, byteE074Ogm, byteKHF7tgX, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringk7DNExa = "6rCQYk4mO3rFI08dfxkItLxDgtJnaoibwnq5Op7a2Xsd7FRQ9CPWE1MV9Mm6JWL9HwjjpzeGGWYi8QU"
		const stringR2yypkO = "e9bg9CZrXedSwkLvkKVxEKtvMc"
		const uintKNnDP8V = BigInt("76")
		const NasiLiquidityPoolFactoryqej95B = await NasiLiquidityPoolFactory.new(stringk7DNExa, stringR2yypkO, uintKNnDP8V, {from: accounts[2]});
		const addressZzYwSkx = accounts[2]
		const uintN5wZT3q = BigInt("1964")
		const uintnNBI3Cw = BigInt("479")
		const uintWd0GRIp = BigInt("1286")
		const uintUbnJcF = BigInt("329")
		const address7KefMF = accounts[4]
		const addressyVsS0LY = accounts[2]
		const uintLHJOpdQ = BigInt("416")
		const addressrXr0SMM = accounts[1]
		const addressB7KTUsH = await NasiLiquidityPoolFactoryqej95B.setMigrator.call(addressZzYwSkx, {from: accounts[5]});
		const stringPwzWrG0 = await NasiLiquidityPoolFactoryqej95B.symbol.call({from: accounts[4]});
		const uint256YvwWPH = await NasiLiquidityPoolFactoryqej95B.getBonusMultiplier.call(uintnNBI3Cw, uintN5wZT3q, {from: accounts[3]});
		const uint256igrg22A = await NasiLiquidityPoolFactoryqej95B.withdraw.call(uintUbnJcF, uintWd0GRIp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ef72HAP = await NasiLiquidityPoolFactoryqej95B.allowance.call(addressyVsS0LY, address7KefMF, {from: accounts[3]});
		const boolovwVufl = await NasiLiquidityPoolFactoryqej95B.decreaseAllowance.call(addressrXr0SMM, uintLHJOpdQ, {from: "0x0000000000000000000000000000000000000001"});
	});
})
const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const strings8QSTkK = "zxKHd8ekvX2czIO55boxqiTk21qBvVNkMed5TrCO3WMQvHuyhAaZBwzqaJv51gm9dCzkdh15jbmkRzg"
		const stringLywYqt = "f815GbAqvCafw1lbzgCI61vq2PeXTeAzJlInc76aRMSZmSycYumcEUIIqtNvo"
		const uintwGqdMw = BigInt("146")
		const NasiLiquidityPoolFactoryEB8Cyn = await NasiLiquidityPoolFactory.new(strings8QSTkK, stringLywYqt, uintwGqdMw, {from: accounts[2]});
		const boolPsjmTC9 = false
		const uintSGfTcYz = BigInt("1382")
		const uintBazsJc = BigInt("588")
		const uint256atwABg = await NasiLiquidityPoolFactoryEB8Cyn.setAllocationPoint.call(uintBazsJc, uintSGfTcYz, boolPsjmTC9, {from: accounts[0]});
		await NasiLiquidityPoolFactoryEB8Cyn.massUpdatePools.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryEB8Cyn.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryEB8Cyn.onlyPauser.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringndC4Cx = "FgEwB7TIlCZ7WB8zJY4Rxz9d6Q67V4ujW5fQ0scHO0nXIZxxgNtJYbHceam17mEF82"
		const stringupyrRmk = "87Jbogevvv5Fj9D2hY3Egf"
		const uintiad0hBM = BigInt("233")
		const NasiLiquidityPoolFactorySAdytV3 = await NasiLiquidityPoolFactory.new(stringndC4Cx, stringupyrRmk, uintiad0hBM, {from: accounts[4]});
		const uintVZWxxbi = BigInt("1081")
		const uinttBDZA3D = BigInt("1388")
		const addressOUxu8mz = accounts[3]
		const uintvgKDC43 = BigInt("1763")
		const addressGGmAM6j = accounts[1]
		const addressJEC4MxU = accounts[2]
		const addresszpO41R7 = accounts[2]
		const addressw4Vfd8o = accounts[1]
		const addressc0ArRng = accounts[0]
		const uint256mze668p = await NasiLiquidityPoolFactorySAdytV3.leaveStaking.call(uintVZWxxbi, {from: accounts[1]});
		const boolOemQcSA = await NasiLiquidityPoolFactorySAdytV3.increaseAllowance.call(addressOUxu8mz, uinttBDZA3D, {from: accounts[2]});
		const boolo011SmV = await NasiLiquidityPoolFactorySAdytV3.approve.call(addressGGmAM6j, uintvgKDC43, {from: accounts[3]});
		await NasiLiquidityPoolFactorySAdytV3.onlyPauser.call({from: accounts[4]});
		const uint256iJ3JDX = await NasiLiquidityPoolFactorySAdytV3.allowance.call(addresszpO41R7, addressJEC4MxU, {from: accounts[2]});
		const addressOPObDDf = await NasiLiquidityPoolFactorySAdytV3._delegate.call(addressc0ArRng, addressw4Vfd8o, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringAItuuqT = "SsDYPP8M0fHVvU84PwtKpEk"
		const stringX8Mrd4 = "Dw4PiY9dzrVF1qFBi0AxoVdtonpHWlxKAufxcO7V7t"
		const uintxBXUsZv = BigInt("85")
		const NasiLiquidityPoolFactoryMGwvZ5h = await NasiLiquidityPoolFactory.new(stringAItuuqT, stringX8Mrd4, uintxBXUsZv, {from: "0x0000000000000000000000000000000000000001"});
		const uintZlapC1c = BigInt("1467")
		const uintkVkeSop = BigInt("1196")
		const uinttgVP8Zq = BigInt("1469")
		const uintb1PLUle = BigInt("705")
		const uint256jyJiM4 = await NasiLiquidityPoolFactoryMGwvZ5h.leaveStaking.call(uintZlapC1c, {from: accounts[1]});
		const uint256kSGpsCK = await NasiLiquidityPoolFactoryMGwvZ5h.burn.call(uintkVkeSop, {from: accounts[0]});
		const uint256PIcsgg0 = await NasiLiquidityPoolFactoryMGwvZ5h.deposit.call(uintb1PLUle, uinttgVP8Zq, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressxfYueU2 = accounts[1]
		const addressHIQytE3 = accounts[1]
		const uintiKk6WaX = BigInt("195")
		const uintRWxOmyj = BigInt("634")
		const NasiLiquidityPoolFactorytp4uooj = await NasiLiquidityPoolFactory.new(addressxfYueU2, addressHIQytE3, uintiKk6WaX, uintRWxOmyj, {from: accounts[2]});
		const addressDPd00B = accounts[5]
		const addressPA0EZ09 = accounts[3]
		const addressLIwdfWN = accounts[0]
		const addressK4HHbVW = await NasiLiquidityPoolFactorytp4uooj._delegate.call(addressPA0EZ09, addressDPd00B, {from: accounts[4]});
		const addressJJiVWl = await NasiLiquidityPoolFactorytp4uooj.addMinter.call(addressLIwdfWN, {from: accounts[1]});
		await NasiLiquidityPoolFactorytp4uooj.onlyMinter.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactorytp4uooj.pause.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringawqmbnG = "HlMFd6Gag2z5WjKoxgvjLrLoPApzycxLkdxwIWLlCAPbWFLqBH3eOIhYdWpPoRnIstB4ys0H2g"
		const stringAPgapae = "mxGuhgKxREuxGoRTtBDRroG8aQ8xuOnU5nopVnrJQ7IpBT9hxBqCLKx"
		const uintjjYQGxK = BigInt("38")
		const NasiLiquidityPoolFactoryqoJicKS = await NasiLiquidityPoolFactory.new(stringawqmbnG, stringAPgapae, uintjjYQGxK, {from: accounts[0]});
		const uintsBDvfEo = BigInt("274")
		const addressXYfOy0O = accounts[2]
		const uintQugQHtz = BigInt("307")
		const uintJsZFKSR = BigInt("1155")
		const uintokdlPDr = BigInt("166")
		const addressdXOf2xR = accounts[0]
		await NasiLiquidityPoolFactoryqoJicKS.unpause.call({from: accounts[5]});
		const boolgctPPQJ = await NasiLiquidityPoolFactoryqoJicKS.transfer.call(addressXYfOy0O, uintsBDvfEo, {from: accounts[2]});
		const 
wPb9vBT = await NasiLiquidityPoolFactoryqoJicKS._writeCheckpoint.call(addressdXOf2xR, uintokdlPDr, uintJsZFKSR, uintQugQHtz, {from: accounts[3]});
		const uint8i6HroUm = await NasiLiquidityPoolFactoryqoJicKS.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringzFl6IwY = "JXlBOhzIiJ3FmudA0WKuSutK4jn4uWsuRXxNOiT783CfM0XWxkGfXTSESwDbIdDgwUbBWV9"
		const stringWvRzes6 = "X9zw8dbUnGjceukkHQ8lVCKkFpXXDDKwtjLpeOX967R47kofBiEBgBb7Ueu"
		const uintY9dgytU = BigInt("152")
		const NasiLiquidityPoolFactoryLEGhb1Y = await NasiLiquidityPoolFactory.new(stringzFl6IwY, stringWvRzes6, uintY9dgytU, {from: accounts[3]});
		const uinthZ6ncow = BigInt("1128")
		const uintkyN1MZ9 = BigInt("810")
		const uintlIf4MBj = BigInt("783")
		const uintYgj91N = BigInt("647")
		const addressukEThi = accounts[2]
		const uint256uEEyXnT = await NasiLiquidityPoolFactoryLEGhb1Y.withdraw.call(uintkyN1MZ9, uinthZ6ncow, {from: accounts[3]});
		await NasiLiquidityPoolFactoryLEGhb1Y.onlyMinter.call({from: accounts[1]});
		const uint256Vn4MS7I = await NasiLiquidityPoolFactoryLEGhb1Y.burn.call(uintlIf4MBj, {from: accounts[1]});
		const uint2563UxESP = await NasiLiquidityPoolFactoryLEGhb1Y.getPriorVotes.call(addressukEThi, uintYgj91N, {from: accounts[0]});
		await NasiLiquidityPoolFactoryLEGhb1Y.onlyOwner.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringVcEtjkv = "vaUj7zD9c2iijgCDXGIs82O1XoK3t3I9TFeXIBSnkJY6uzBQxiJYOmf32vz7fFFJOXYYplyulkyLYilA822Ay8"
		const stringe4y6mg = "QDTTu3WiDjvvgI"
		const uintlSov1U = BigInt("93")
		const NasiLiquidityPoolFactoryEKsMsTA = await NasiLiquidityPoolFactory.new(stringVcEtjkv, stringe4y6mg, uintlSov1U, {from: accounts[3]});
		const boolKuh4H2j = true
		const addressPLr1ZZm = accounts[4]
		const uintDYBznP = BigInt("799")
		const addressOxpADK = accounts[3]
		const uint256JNkaGnB = await NasiLiquidityPoolFactoryEKsMsTA.totalSupply.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryEKsMsTA.onlyMinter.call({from: accounts[1]});
		const uint256parjD92 = await NasiLiquidityPoolFactoryEKsMsTA.addLpToken.call(uintDYBznP, addressPLr1ZZm, boolKuh4H2j, {from: accounts[0]});
		const addressnKNq4p = await NasiLiquidityPoolFactoryEKsMsTA.delegate.call(addressOxpADK, {from: accounts[1]});
		await NasiLiquidityPoolFactoryEKsMsTA.pause.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJQ8GYay = "O4DwYWgLHqSumMzEJXaJ1cwQDJUvikMUDyC6DpdLMVF9h4pBT5OY"
		const stringJkY9NUE = "Nqs3LvnhX7UlTPOi8gk6eQdOluU2s9dM0SFBn8HQpoKgl12hTPc29RTQRXOW"
		const uintRZeYMYR = BigInt("11")
		const NasiLiquidityPoolFactoryVgQzjZ = await NasiLiquidityPoolFactory.new(stringJQ8GYay, stringJkY9NUE, uintRZeYMYR, {from: accounts[4]});
		const uint05bfGU = BigInt("943")
		const addresse7ROXqO = accounts[1]
		const addressSGEruMq = accounts[1]
		const uintV12oTWj = BigInt("265")
		const addressYX6ScUi = accounts[0]
		const addressz9KAy1Z = accounts[0]
		const boolUNR6Sn9 = await NasiLiquidityPoolFactoryVgQzjZ.decreaseAllowance.call(addresse7ROXqO, uint05bfGU, {from: accounts[3]});
		const addressPKBFPBB = await NasiLiquidityPoolFactoryVgQzjZ.addPauser.call(addressSGEruMq, {from: accounts[0]});
		const boolM2R2DEF = await NasiLiquidityPoolFactoryVgQzjZ.transferFrom.call(addressz9KAy1Z, addressYX6ScUi, uintV12oTWj, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringgsGll2R = "VtpfBCSqCkAGA2Db5B10BwrkaYnyVC4PSaf2b3gbIppQ3dYcJVmVHAyyoxwiekvdTGggkeyHypu0ILC8LtniQEnv5EkaMa2"
		const stringlkk1Sqx = "ciO64EA2RkuS3ZN46G7haSYCQVGgZN8oWb9qyAYV3VM"
		const uintw08U7a1 = BigInt("176")
		const NasiLiquidityPoolFactoryfZyNy6F = await NasiLiquidityPoolFactory.new(stringgsGll2R, stringlkk1Sqx, uintw08U7a1, {from: accounts[0]});
		const uintjmKxxS7 = BigInt("602")
		const addressEYL51cd = accounts[3]
		const uintrifj1Rt = BigInt("1903")
		const addressgHCuqI = accounts[3]
		const boolFoCvM8 = false
		const addressMdImLsD = accounts[2]
		const uintEcKHEaP = BigInt("616")
		const uintOHgRo0r = BigInt("173")
		const addressvn7QxoT = "0x0000000000000000000000000000000000000001"
		const addressk41gPc = accounts[1]
		const addressmObVLHX = await NasiLiquidityPoolFactoryfZyNy6F.burnFrom.call(addressEYL51cd, uintjmKxxS7, {from: accounts[3]});
		const boolAozzfGW = await NasiLiquidityPoolFactoryfZyNy6F.approve.call(addressgHCuqI, uintrifj1Rt, {from: accounts[0]});
		const uint256WlGh7J = await NasiLiquidityPoolFactoryfZyNy6F.addLpToken.call(uintEcKHEaP, addressMdImLsD, boolFoCvM8, {from: accounts[3]});
		const boolns4Sxhh = await NasiLiquidityPoolFactoryfZyNy6F.transferFrom.call(addressk41gPc, addressvn7QxoT, uintOHgRo0r, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringrkqYs6G = "pFWPPHh9S5BtRpVv2xoMT1Th8l0esCJE8Slk9tYJAHTuAMAnHFcC6rfA"
		const stringnrwpRqB = "kf6hQTuEckBe2BerB3yOgTF6CctWdQK24p0lUgOX"
		const uintj3vzNpn = BigInt("175")
		const NasiLiquidityPoolFactorytKe8Cnw = await NasiLiquidityPoolFactory.new(stringrkqYs6G, stringnrwpRqB, uintj3vzNpn, {from: accounts[1]});
		const uintRgGp8II = BigInt("517")
		const addressuOiqMz2 = accounts[4]
		const uintD79v1cM = BigInt("384")
		const uintcml0V7 = BigInt("1427")
		await NasiLiquidityPoolFactorytKe8Cnw.whenNotPaused.call({from: accounts[4]});
		const boolR3qvNlT = await NasiLiquidityPoolFactorytKe8Cnw.mint.call(addressuOiqMz2, uintRgGp8II, {from: accounts[2]});
		const uint256iWgsJ6R = await NasiLiquidityPoolFactorytKe8Cnw.deposit.call(uintcml0V7, uintD79v1cM, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHgiexrK = "DXjTHgh4zoOAjaWjLIl9AElmy4lGtW7iETdcq"
		const stringI0m2LiN = "A6bBpiRhdBM2z6BRFVxvIV6cDrQ830CzEd4jYIMjrSgozmzsJhJNKbhWjwDv"
		const uintapg1wrr = BigInt("178")
		const NasiLiquidityPoolFactoryJEwA1cL = await NasiLiquidityPoolFactory.new(stringHgiexrK, stringI0m2LiN, uintapg1wrr, {from: accounts[4]});
		const uintlBbJjpG = BigInt("756")
		const uintrvwF5Uv = BigInt("1064")
		const addresswdr4K49 = accounts[4]
		const uint256r6zsBS = await NasiLiquidityPoolFactoryJEwA1cL.getBonusMultiplier.call(uintrvwF5Uv, uintlBbJjpG, {from: accounts[2]});
		await NasiLiquidityPoolFactoryJEwA1cL.renounceMinter.call({from: accounts[2]});
		const addressxOPmpgS = await NasiLiquidityPoolFactoryJEwA1cL.addPauser.call(addresswdr4K49, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringGopwt1j = "m0g837paAnRYBd4U4EjHUW2hgq8WWd2vqv2kYe6qOgqT3NrCC4hMLHGrRTCkguL"
		const stringnl5gz5Z = "Thp5ovhbijXj75FNcYsUHpEvlAx2J3cJo4Q8OjnatZSbBqJBbUOOFegYGefvchCM75ruUFHIudao9x8w"
		const uintTiYG0Oy = BigInt("254")
		const NasiLiquidityPoolFactoryKxw5PBJ = await NasiLiquidityPoolFactory.new(stringGopwt1j, stringnl5gz5Z, uintTiYG0Oy, {from: accounts[0]});
		const uintZag419P = BigInt("972")
		const uintfJwzWbL = BigInt("1903")
		const uinthJFH8sa = BigInt("1802")
		const addressoVwHSCG = accounts[3]
		const uintT1o2cwF = BigInt("1402")
		const addressdF5cHN = "0x0000000000000000000000000000000000000001"
		const uint9H0XXJ = BigInt("1101")
		const addressbPwvQt = accounts[2]
		const uint256Qvq3lSI = await NasiLiquidityPoolFactoryKxw5PBJ.getBonusMultiplier.call(uintfJwzWbL, uintZag419P, {from: accounts[3]});
		const uint256d8fv1Uf = await NasiLiquidityPoolFactoryKxw5PBJ.burn.call(uinthJFH8sa, {from: accounts[0]});
		const addressfpC7uLf = await NasiLiquidityPoolFactoryKxw5PBJ.addPauser.call(addressoVwHSCG, {from: accounts[2]});
		const bool3pRRIu = await NasiLiquidityPoolFactoryKxw5PBJ.increaseAllowance.call(addressdF5cHN, uintT1o2cwF, {from: accounts[0]});
		const boolFOudgf9 = await NasiLiquidityPoolFactoryKxw5PBJ.transfer.call(addressbPwvQt, uint9H0XXJ, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringmyfbDsC = "lXMoXgR9K4FcZ3hwVKeZh853E4lkWg3culFLz8TPL3Bbpx6"
		const stringOwYbRM1 = "R3WyyTTGEa7"
		const uintUneGSCx = BigInt("150")
		const NasiLiquidityPoolFactory4oI24n = await NasiLiquidityPoolFactory.new(stringmyfbDsC, stringOwYbRM1, uintUneGSCx, {from: accounts[2]});
		const uintrZ8rImH = BigInt("1486")
		const addresspamYadZ = accounts[0]
		const bytesoVdmiC = "0x010d0611031c1f0f031d121110011e19030a0b080a1f1a0c0b1d1a01081e0604"
		const byteAdTDZ1l = "0x081d0e1c1a1c001f101612030a1c0a1c1e031607150f1e0e130d05141a1d091d"
		const uintXIUKkRH = BigInt("225")
		const uintyobryE1 = BigInt("737")
		const uintGHSSTlB = BigInt("522")
		const addressqKepGsK = accounts[4]
		const uintzzqYL0t = BigInt("179")
		const addressVtVR1Ej = accounts[0]
		const uintXBn3Hq3 = BigInt("1588")
		const uintvZsy3C7 = BigInt("1935")
		const boolTcoLnTB = await NasiLiquidityPoolFactory4oI24n.increaseAllowance.call(addresspamYadZ, uintrZ8rImH, {from: accounts[5]});
		const 
B9f1YC = await NasiLiquidityPoolFactory4oI24n.delegateBySig.call(addressqKepGsK, uintGHSSTlB, uintyobryE1, uintXIUKkRH, byteAdTDZ1l, bytesoVdmiC, {from: accounts[4]});
		const boolLwHguux = await NasiLiquidityPoolFactory4oI24n.increaseAllowance.call(addressVtVR1Ej, uintzzqYL0t, {from: accounts[1]});
		const uint256Zwnh9g3 = await NasiLiquidityPoolFactory4oI24n.getBonusMultiplier.call(uintvZsy3C7, uintXBn3Hq3, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringsmxIkVY = "YzvH6xqwVJ4YRofzvGf3LNl2baJNx77q"
		const stringspsowVN = "HSmdupWhDdRL3oiH8Cpzk"
		const uintN8Jvx6O = BigInt("202")
		const NasiLiquidityPoolFactoryUyBzgKr = await NasiLiquidityPoolFactory.new(stringsmxIkVY, stringspsowVN, uintN8Jvx6O, {from: accounts[0]});
		const addresscO3Csu = accounts[5]
		const uintXSvRcWk = BigInt("1179")
		const addressYRLY6Hv = await NasiLiquidityPoolFactoryUyBzgKr.addMinter.call(addresscO3Csu, {from: accounts[3]});
		const uint256z3bWZC = await NasiLiquidityPoolFactoryUyBzgKr.leaveStaking.call(uintXSvRcWk, {from: accounts[2]});
		const uint8hkPJiAQ = await NasiLiquidityPoolFactoryUyBzgKr.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256O7Y6xP = await NasiLiquidityPoolFactoryUyBzgKr.totalSupply.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringFhMaUhO = "ZooWq9Tdlb3NxruxseHIAgSacZhVtkGsGM8Rc221a4Z2JJvwSz"
		const stringo5DpLGi = "CdTNpOjpBDwQ6W8P3QM6GCL2NFmITWgChYSBURJRfNSBBBdnKDtFVgEkHvVyoJMrpAxi2dDLEQbK81KL3g6QQI79bX5wI1m"
		const uintjAjf13 = BigInt("241")
		const NasiLiquidityPoolFactoryQZrqXqF = await NasiLiquidityPoolFactory.new(stringFhMaUhO, stringo5DpLGi, uintjAjf13, {from: accounts[4]});
		const uinti6WJpHQ = BigInt("161")
		const uintm3p9Hbh = BigInt("677")
		const addressqTZTJp = "0x0000000000000000000000000000000000000001"
		const uintkck1y5A = BigInt("1752")
		const addressFRue0q3 = accounts[4]
		const uint256LfdP9HW = await NasiLiquidityPoolFactoryQZrqXqF.withdraw.call(uintm3p9Hbh, uinti6WJpHQ, {from: accounts[0]});
		const uint256GPpHSok = await NasiLiquidityPoolFactoryQZrqXqF.getCurrentVotes.call(addressqTZTJp, {from: accounts[3]});
		const booljHoy84t = await NasiLiquidityPoolFactoryQZrqXqF.increaseAllowance.call(addressFRue0q3, uintkck1y5A, {from: accounts[3]});
		const uint8W6Dm1an = await NasiLiquidityPoolFactoryQZrqXqF.decimals.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringNDt8SHJ = "FYshQgothAA8NJBav4ab1xegKKL6C9VeakBQoyJfN8Y9jNCNa37mIEhu8ceP"
		const stringDqcY7MX = "LDX2d1G0XvT"
		const uintkkVbZZe = BigInt("175")
		const NasiLiquidityPoolFactoryyDffLs8 = await NasiLiquidityPoolFactory.new(stringNDt8SHJ, stringDqcY7MX, uintkkVbZZe, {from: accounts[3]});
		const uintp6u3WQ8 = BigInt("481")
		const addressF7nrghp = accounts[1]
		const addressWSJHTV5 = accounts[0]
		const boolh7UMk1c = await NasiLiquidityPoolFactoryyDffLs8.approve.call(addressF7nrghp, uintp6u3WQ8, {from: accounts[3]});
		const addresslHQMrKv = await NasiLiquidityPoolFactoryyDffLs8.transferOwnership.call(addressWSJHTV5, {from: accounts[2]});
		await NasiLiquidityPoolFactoryyDffLs8.renounceOwnership.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressm1UHhQS = accounts[5]
		const addressVSTSRZ = accounts[3]
		const uintXpoZwjj = BigInt("1238")
		const uintzk0e2A = BigInt("1481")
		const NasiLiquidityPoolFactorywRMRON9 = await NasiLiquidityPoolFactory.new(addressm1UHhQS, addressVSTSRZ, uintXpoZwjj, uintzk0e2A, {from: accounts[1]});
		const uintbPzSMCx = BigInt("1234")
		const addresshHpWvU9 = accounts[0]
		const uintJyhdmwE = BigInt("1199")
		const addresslNL9wCz = accounts[4]
		const uint256uAH5m5z = await NasiLiquidityPoolFactorywRMRON9.enterStaking.call(uintbPzSMCx, {from: accounts[0]});
		const addressvQ6RSeQ = await NasiLiquidityPoolFactorywRMRON9.dev.call(addresshHpWvU9, {from: accounts[3]});
		const uint256QmmfpXH = await NasiLiquidityPoolFactorywRMRON9.getPriorVotes.call(addresslNL9wCz, uintJyhdmwE, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressa3EHKBs = accounts[5]
		const addressqwOmsPP = accounts[3]
		const uintMRlSFR = BigInt("1238")
		const uintwSLJElH = BigInt("1481")
		const NasiLiquidityPoolFactorywRMRON9 = await NasiLiquidityPoolFactory.new(addressa3EHKBs, addressqwOmsPP, uintMRlSFR, uintwSLJElH, {from: accounts[1]});
		const addressiXrVf60 = accounts[0]
		const uintugMFwJ = BigInt("1199")
		const addressXoC48y = accounts[4]
		const addressvQ6RSeQ = await NasiLiquidityPoolFactorywRMRON9.dev.call(addressiXrVf60, {from: accounts[3]});
		const uint256QmmfpXH = await NasiLiquidityPoolFactorywRMRON9.getPriorVotes.call(addressXoC48y, uintugMFwJ, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressqprcGRn = accounts[5]
		const addressCMalkvQ = accounts[3]
		const uintpWkzL98 = BigInt("1238")
		const uintAneI3dC = BigInt("1481")
		const NasiLiquidityPoolFactorywRMRON9 = await NasiLiquidityPoolFactory.new(addressqprcGRn, addressCMalkvQ, uintpWkzL98, uintAneI3dC, {from: accounts[1]});
		const uintUTtUGsZ = BigInt("476")
		const uinttURujcS = BigInt("1594")
		const addresstBPvh4c = accounts[0]
		const uintr0s9Nz5 = BigInt("1199")
		const addressqfDEEDl = accounts[6]
		const uintTcZcVVW = BigInt("2018")
		const uint2566ErEhA = await NasiLiquidityPoolFactorywRMRON9.deposit.call(uinttURujcS, uintUTtUGsZ, {from: accounts[3]});
		const addressvQ6RSeQ = await NasiLiquidityPoolFactorywRMRON9.dev.call(addresstBPvh4c, {from: accounts[3]});
		const uint256QmmfpXH = await NasiLiquidityPoolFactorywRMRON9.getPriorVotes.call(addressqfDEEDl, uintr0s9Nz5, {from: accounts[5]});
		const uint256Xray6aG = await NasiLiquidityPoolFactorywRMRON9.updatePool.call(uintTcZcVVW, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressuR10YpN = accounts[5]
		const addresswSc22Z8 = accounts[3]
		const uintFeTtpMG = BigInt("1238")
		const uintThxq4bP = BigInt("1481")
		const NasiLiquidityPoolFactorywRMRON9 = await NasiLiquidityPoolFactory.new(addressuR10YpN, addresswSc22Z8, uintFeTtpMG, uintThxq4bP, {from: accounts[1]});
		const addressu987QX = accounts[1]
		const uintKpqcZx7 = BigInt("598")
		const addressNr5wvtK = accounts[1]
		const uintqL74DtH = BigInt("1199")
		const addressucolK74 = accounts[4]
		const uint256v8s2WMV = await NasiLiquidityPoolFactorywRMRON9.pendingNasi.call(uintKpqcZx7, addressu987QX, {from: accounts[1]});
		const addressvQ6RSeQ = await NasiLiquidityPoolFactorywRMRON9.dev.call(addressNr5wvtK, {from: accounts[3]});
		const uint256QmmfpXH = await NasiLiquidityPoolFactorywRMRON9.getPriorVotes.call(addressucolK74, uintqL74DtH, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const strings2WSzxl = "FGJ6vG40L68NRm16RvizAS"
		const stringvPThhNm = "hXfnzX9nYg36yx9o3WbpEQvGyinQ3vG"
		const uintV08dTkH = BigInt("26")
		const NasiLiquidityPoolFactoryi5bs3ZY = await NasiLiquidityPoolFactory.new(strings2WSzxl, stringvPThhNm, uintV08dTkH, {from: accounts[5]});
		const uintAyYoC8 = BigInt("130")
		const uintkdZ5O4h = BigInt("819")
		const uintQbvrp8t = BigInt("445")
		const uintuNM3GHH = BigInt("1239")
		const addressn4ioZbF = "0x0000000000000000000000000000000000000001"
		const uintn63ZkJf = BigInt("256")
		const uint256pTFVGbr = await NasiLiquidityPoolFactoryi5bs3ZY.withdraw.call(uintkdZ5O4h, uintAyYoC8, {from: accounts[3]});
		const uint256RuqatmH = await NasiLiquidityPoolFactoryi5bs3ZY.withdraw.call(uintuNM3GHH, uintQbvrp8t, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hcLrwd9 = await NasiLiquidityPoolFactoryi5bs3ZY.pendingNasi.call(uintn63ZkJf, addressn4ioZbF, {from: accounts[4]});
		const boolPDng891 = await NasiLiquidityPoolFactoryi5bs3ZY.paused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressp3I73gz = accounts[5]
		const addressE86SdPc = accounts[3]
		const uintMr9o9gu = BigInt("1238")
		const uintopImhxD = BigInt("1481")
		const NasiLiquidityPoolFactorywRMRON9 = await NasiLiquidityPoolFactory.new(addressp3I73gz, addressE86SdPc, uintMr9o9gu, uintopImhxD, {from: accounts[1]});
		const uint0bgiVn = BigInt("1635")
		const addressE9h8pgI = accounts[4]
		const uint256XV9EkO = await NasiLiquidityPoolFactorywRMRON9.emergencyWithdraw.call(uint0bgiVn, {from: accounts[1]});
		const uint256bgVHg6k = await NasiLiquidityPoolFactorywRMRON9.totalSupply.call({from: accounts[2]});
		const addressvQ6RSeQ = await NasiLiquidityPoolFactorywRMRON9.dev.call(addressE9h8pgI, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressuZARkk2 = accounts[4]
		const addressCJVMYi7 = accounts[1]
		const uintGegAZbq = BigInt("76")
		const uintrOz3PjD = BigInt("464")
		const NasiLiquidityPoolFactoryKXkcnTX = await NasiLiquidityPoolFactory.new(addressuZARkk2, addressCJVMYi7, uintGegAZbq, uintrOz3PjD, {from: "0x0000000000000000000000000000000000000001"});
		const addresseHfbwe5 = accounts[1]
		const addresseqsyDXe = accounts[2]
		const addressb6BpqzN = accounts[3]
		const uintZwmZLbz = BigInt("81")
		const addressWu6oXOc = accounts[4]
		const addressD3BjUwP = accounts[1]
		const addressSqKx8H8 = await NasiLiquidityPoolFactoryKXkcnTX.setMigrator.call(addresseHfbwe5, {from: accounts[1]});
		const boolZU1U4dG = await NasiLiquidityPoolFactoryKXkcnTX.isMinter.call(addresseqsyDXe, {from: accounts[5]});
		const addressaa8tY6v = await NasiLiquidityPoolFactoryKXkcnTX.setMigrator.call(addressb6BpqzN, {from: accounts[4]});
		const boolh5C445 = await NasiLiquidityPoolFactoryKXkcnTX.transfer.call(addressWu6oXOc, uintZwmZLbz, {from: accounts[5]});
		await NasiLiquidityPoolFactoryKXkcnTX.massUpdatePools.call({from: accounts[4]});
		const addressQBsNaJW = await NasiLiquidityPoolFactoryKXkcnTX.addPauser.call(addressD3BjUwP, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressIrF0iQ6 = "0x0000000000000000000000000000000000000001"
		const addressxHRVuae = accounts[1]
		const uintKHtp9Ix = BigInt("1490")
		const uintxNbBfB = BigInt("1276")
		const NasiLiquidityPoolFactoryBUA8uel = await NasiLiquidityPoolFactory.new(addressIrF0iQ6, addressxHRVuae, uintKHtp9Ix, uintxNbBfB, {from: accounts[4]});
		const addressaV8QGir = "0x0000000000000000000000000000000000000001"
		const uintPKJQMOh = BigInt("1988")
		const addressQtGwNzS = "0x0000000000000000000000000000000000000001"
		const addressABzqais = accounts[3]
		const booleu6d77u = await NasiLiquidityPoolFactoryBUA8uel.isOwner.call({from: accounts[0]});
		const addressWjSDl8Q = await NasiLiquidityPoolFactoryBUA8uel.addMinter.call(addressaV8QGir, {from: accounts[3]});
		const uint256a1hF1rW = await NasiLiquidityPoolFactoryBUA8uel.emergencyWithdraw.call(uintPKJQMOh, {from: accounts[1]});
		const addressCQ1jl4m = await NasiLiquidityPoolFactoryBUA8uel.delegates.call(addressQtGwNzS, {from: accounts[1]});
		const uint256hQ8d3xJ = await NasiLiquidityPoolFactoryBUA8uel.balanceOf.call(addressABzqais, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string2s0xeG = "EVmzkilOKUl9zCSyYi3YbI"
		const stringmqlERDf = "nQzAerHrszi4CJcQJXVnQXPxQPk7ynuaXskhNK4pCllphJHjxm5VTLgY44cfwO7NdsRpCuz9ktCI5fwvdr"
		const uintxOKQktK = BigInt("44")
		const NasiLiquidityPoolFactoryVzAfE1p = await NasiLiquidityPoolFactory.new(string2s0xeG, stringmqlERDf, uintxOKQktK, {from: accounts[4]});
		const uinttT1o5Ts = BigInt("1691")
		const addressD5QTIdF = accounts[1]
		const addressNlYwp5 = accounts[0]
		const uintJCv52s5 = BigInt("688")
		const addressDAJnSD = accounts[1]
		const boolu6UAMT1 = await NasiLiquidityPoolFactoryVzAfE1p.approve.call(addressD5QTIdF, uinttT1o5Ts, {from: accounts[2]});
		const booltaxdRRW = await NasiLiquidityPoolFactoryVzAfE1p.isPauser.call(addressNlYwp5, {from: accounts[2]});
		const uint256jSUxyNz = await NasiLiquidityPoolFactoryVzAfE1p.getPriorVotes.call(addressDAJnSD, uintJCv52s5, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressyCx17ig = accounts[5]
		const addresssKoyxNg = accounts[3]
		const uint1MfmH5 = BigInt("1238")
		const uintOYjCaHW = BigInt("1481")
		const NasiLiquidityPoolFactorywRMRON9 = await NasiLiquidityPoolFactory.new(addressyCx17ig, addresssKoyxNg, uint1MfmH5, uintOYjCaHW, {from: accounts[1]});
		const addresslFk2tMv = accounts[3]
		await NasiLiquidityPoolFactorywRMRON9.renounceOwnership.call({from: accounts[5]});
		const addressvQ6RSeQ = await NasiLiquidityPoolFactorywRMRON9.dev.call(addresslFk2tMv, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringVXzjNxA = "Q80FFmJNyRcsRdRybyGk1SfktIyPvbqg"
		const stringE2FaQLc = "lQJxQFrv4wwVCROWJtMYe4eDYfU8X3VActFpNjw9a875hMutrxR27NcelsOnasO"
		const uintgN7lz9 = BigInt("93")
		const NasiLiquidityPoolFactoryUCnwgRk = await NasiLiquidityPoolFactory.new(stringVXzjNxA, stringE2FaQLc, uintgN7lz9, {from: accounts[3]});
		const uintUFm3Mal = BigInt("820")
		const addressvptDscv = accounts[5]
		const uintJ9ftUUg = BigInt("31")
		const uintd0faRhm = BigInt("81")
		const addressa3PFOCX = "0x0000000000000000000000000000000000000001"
		const boolYB2sTPS = await NasiLiquidityPoolFactoryUCnwgRk.approve.call(addressvptDscv, uintUFm3Mal, {from: accounts[1]});
		const uint256GQJE3iL = await NasiLiquidityPoolFactoryUCnwgRk.leaveStaking.call(uintJ9ftUUg, {from: accounts[4]});
		await NasiLiquidityPoolFactoryUCnwgRk.onlyPauser.call({from: accounts[3]});
		const boolfJNZtPj = await NasiLiquidityPoolFactoryUCnwgRk.increaseAllowance.call(addressa3PFOCX, uintd0faRhm, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressGrcAYr = accounts[5]
		const addressw01BDg7 = accounts[3]
		const uints3LNAlI = BigInt("1238")
		const uintvmm75uL = BigInt("1481")
		const NasiLiquidityPoolFactorywRMRON9 = await NasiLiquidityPoolFactory.new(addressGrcAYr, addressw01BDg7, uints3LNAlI, uintvmm75uL, {from: accounts[1]});
		const uintIfhywWb = BigInt("1557")
		const addresswds92M6 = accounts[0]
		const addressyrSdeOj = accounts[6]
		const uint256MjO9UUH = await NasiLiquidityPoolFactorywRMRON9.migrate.call(uintIfhywWb, {from: accounts[5]});
		const addressTDJwqtE = await NasiLiquidityPoolFactorywRMRON9.addMinter.call(addresswds92M6, {from: accounts[3]});
		const addressvQ6RSeQ = await NasiLiquidityPoolFactorywRMRON9.dev.call(addressyrSdeOj, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvrel3h3 = "GBsr0qjuTPlkkKebmVqfGY"
		const stringYD8b8S6 = "rBA4aH5lVsC8MMXB4QI0CWiOOjHbIpEjAcW4kgreeurTU7fnLsoNyRkAOsJPRA5nDeWhvTLKrf2EdHESmqRTr6Lr"
		const uintprmUlPs = BigInt("155")
		const NasiLiquidityPoolFactoryz6i7iFW = await NasiLiquidityPoolFactory.new(stringvrel3h3, stringYD8b8S6, uintprmUlPs, {from: accounts[2]});
		const byteo1V7Gi4 = "0x2001101b1f060119131c19010b060504030508120d0b01061a070e0f0e140818"
		const bytelh5r02c = "0x1f031913070e0c1c070c171a191f1b04071e1a03041510081f11070412020108"
		const uintnILp0WE = BigInt("239")
		const uintUeGxjEx = BigInt("1440")
		const uintBVuBWCU = BigInt("497")
		const addressPrwEftb = accounts[2]
		const uinti9Sctep = BigInt("1876")
		const uintngKUkvM = BigInt("1405")
		const uintCRulmU = BigInt("251")
		const address335exK = accounts[2]
		const addressSb0DFtn = accounts[4]
		const uinte1pcYt = BigInt("278")
		const uintMSPG6SP = BigInt("153")
		const addressuxSp3Oe = accounts[1]
		const 
nfDEpNj = await NasiLiquidityPoolFactoryz6i7iFW.delegateBySig.call(addressPrwEftb, uintBVuBWCU, uintUeGxjEx, uintnILp0WE, bytelh5r02c, byteo1V7Gi4, {from: accounts[4]});
		const uint256ZfVyBbS = await NasiLiquidityPoolFactoryz6i7iFW.deposit.call(uintngKUkvM, uinti9Sctep, {from: accounts[4]});
		const stringLPff2aO = await NasiLiquidityPoolFactoryz6i7iFW.name.call({from: accounts[0]});
		const boolz3tS36R = await NasiLiquidityPoolFactoryz6i7iFW.transferFrom.call(addressSb0DFtn, address335exK, uintCRulmU, {from: accounts[0]});
		const uint256FNds4X = await NasiLiquidityPoolFactoryz6i7iFW.updatePool.call(uinte1pcYt, {from: accounts[1]});
		const boolyH2G5Jv = await NasiLiquidityPoolFactoryz6i7iFW.mint.call(addressuxSp3Oe, uintMSPG6SP, {from: accounts[2]});
	});
})
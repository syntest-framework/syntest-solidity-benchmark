const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringNZXYaGg = "8dRMjtC8QpedQjwFXA1OzDGhon579U8KfWBVcgBGMzmN8mL2RaKD1q8h6xhr"
		const stringvRkN8ZK = "j5pzRr2PTQSAw"
		const uintb8huXtl = BigInt("87")
		const NasiLiquidityPoolFactoryKe49kob = await NasiLiquidityPoolFactory.new(stringNZXYaGg, stringvRkN8ZK, uintb8huXtl, {from: accounts[3]});
		const uint7dMOAf = BigInt("910")
		const uintwyQO4oH = BigInt("2040")
		const addressr9wsIAd = accounts[3]
		const boolU7iiqZk = true
		const uintt902s0e = BigInt("1332")
		const uintiubscx7 = BigInt("179")
		const addressfN4yk9w = accounts[3]
		const addressQa93WxQ = accounts[1]
		const uint256Oo48bkD = await NasiLiquidityPoolFactoryKe49kob.enterStaking.call(uint7dMOAf, {from: "0x0000000000000000000000000000000000000001"});
		const boollAT4BYE = await NasiLiquidityPoolFactoryKe49kob.mint.call(addressr9wsIAd, uintwyQO4oH, {from: accounts[3]});
		const uint256Rb0rPnk = await NasiLiquidityPoolFactoryKe49kob.setAllocationPoint.call(uintiubscx7, uintt902s0e, boolU7iiqZk, {from: accounts[2]});
		const uint256Mt7N6NQ = await NasiLiquidityPoolFactoryKe49kob.balanceOf.call(addressfN4yk9w, {from: accounts[4]});
		const boolyWHIhJX = await NasiLiquidityPoolFactoryKe49kob.isPauser.call(addressQa93WxQ, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringQGIzJnt = "7OIDfpFniZKk82ATDuqY7xUTpP7V6bbPll"
		const stringjG5EkK0 = "m3NbTQxtOTXEUzEK44F9tUxqlgDqtUqQ6hMbOWxmzvFlBa8ghS1CR6oUafVKJ0bwFURPIybaOydBwvzGMw9RIkzi"
		const uintmz4TwBT = BigInt("201")
		const NasiLiquidityPoolFactoryLRFVAAC = await NasiLiquidityPoolFactory.new(stringQGIzJnt, stringjG5EkK0, uintmz4TwBT, {from: accounts[4]});
		const uintOz20g8m = BigInt("1079")
		const addressV47OAlo = accounts[3]
		const addressZP5OOZZ = accounts[4]
		const uint256XdFDWZC = await NasiLiquidityPoolFactoryLRFVAAC.updatePool.call(uintOz20g8m, {from: accounts[1]});
		const addresstbWhBzL = await NasiLiquidityPoolFactoryLRFVAAC.transferOwnership.call(addressV47OAlo, {from: accounts[4]});
		const addressty2KTXU = await NasiLiquidityPoolFactoryLRFVAAC.setMigrator.call(addressZP5OOZZ, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryLRFVAAC.unpause.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressnBmee5O = accounts[0]
		const addressxYJvkNT = "0x0000000000000000000000000000000000000001"
		const uintXKl6DHQ = BigInt("240")
		const uintT60LM2t = BigInt("1652")
		const NasiLiquidityPoolFactoryW1VRYw = await NasiLiquidityPoolFactory.new(addressnBmee5O, addressxYJvkNT, uintXKl6DHQ, uintT60LM2t, {from: accounts[4]});
		const uintskG5k8f = BigInt("631")
		const addressWv5xTIs = accounts[0]
		await NasiLiquidityPoolFactoryW1VRYw.whenNotPaused.call({from: accounts[0]});
		const boolIoIXItn = await NasiLiquidityPoolFactoryW1VRYw.decreaseAllowance.call(addressWv5xTIs, uintskG5k8f, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringiEKP3cz = "vF3xzQz029HYlYO4NJBdvIb4XPBdzJXtTnGf5"
		const stringBwGWkmr = "R0xefMjQfDfGCNUVYh1lqVUK1iMcRZ6IqOVCftkDNuCVt3IFFnCYEsn6zfPYCE5z350KM6pTKTYtgrtx1MFFD6jmR1Q66pk"
		const uintiiU1rdE = BigInt("91")
		const NasiLiquidityPoolFactoryXKFplgV = await NasiLiquidityPoolFactory.new(stringiEKP3cz, stringBwGWkmr, uintiiU1rdE, {from: accounts[0]});
		const uintXhgQlee = BigInt("554")
		const uint256detmUMT = await NasiLiquidityPoolFactoryXKFplgV.burn.call(uintXhgQlee, {from: accounts[1]});
		await NasiLiquidityPoolFactoryXKFplgV.onlyMinter.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringy0cjD0c = "L2zMCgyzUtJTBcoXKteRChtCv6m7KrN5cT5OPgMYzftseNa8KMPEWCqMtI6tPamdtnaptwGEhWdtbjPU8qaVnDk1xmH"
		const stringn6Zjj0o = "dH6xDDF73xAhoZQWPUbzJNTRTrltiVYSbtxMxBcEfqKtuEIwMBAi3H9GAh2"
		const uintkVpU8Ax = BigInt("166")
		const NasiLiquidityPoolFactorylidkFEF = await NasiLiquidityPoolFactory.new(stringy0cjD0c, stringn6Zjj0o, uintkVpU8Ax, {from: "0x0000000000000000000000000000000000000001"});
		const uintQ5lVFLL = BigInt("1673")
		const addressOywix8P = accounts[1]
		const addressAhiR50c = accounts[3]
		const uintzPdq711 = BigInt("70")
		const addressltAO98i = accounts[3]
		const boolp7mWcuL = await NasiLiquidityPoolFactorylidkFEF.transferFrom.call(addressAhiR50c, addressOywix8P, uintQ5lVFLL, {from: accounts[1]});
		await NasiLiquidityPoolFactorylidkFEF.onlyPauser.call({from: accounts[3]});
		await NasiLiquidityPoolFactorylidkFEF.renounceOwnership.call({from: accounts[4]});
		const boolJRnf0mo = await NasiLiquidityPoolFactorylidkFEF.transfer.call(addressltAO98i, uintzPdq711, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringT5IBu1 = "lClN7sEGnETCfyPHF3"
		const string6JUOhw = "c5G5QBU5jrx36inpb2DhcYF6cdZ"
		const uintIfHeQoe = BigInt("132")
		const NasiLiquidityPoolFactorySXPXvrw = await NasiLiquidityPoolFactory.new(stringT5IBu1, string6JUOhw, uintIfHeQoe, {from: accounts[1]});
		const uintPS1oSaa = BigInt("1140")
		const addresswt5eBLb = accounts[4]
		const uintXGvCZqO = BigInt("1699")
		const uintr64hrOc = BigInt("339")
		const boolkHigcRI = await NasiLiquidityPoolFactorySXPXvrw.decreaseAllowance.call(addresswt5eBLb, uintPS1oSaa, {from: accounts[3]});
		const uint256mmoQWP1 = await NasiLiquidityPoolFactorySXPXvrw.getBonusMultiplier.call(uintr64hrOc, uintXGvCZqO, {from: accounts[5]});
		await NasiLiquidityPoolFactorySXPXvrw.renounceMinter.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringXKwOlsT = "DqsuuJ9DwV3FMM7PO8eeDUmO9VxamYVkf4HS9sGI9GVVY8zRZJolaDQabz"
		const stringojvxQC = "KSbubMB1aKIHZHWvrkDRExrL1kmV"
		const uinta2qYnn2 = BigInt("234")
		const NasiLiquidityPoolFactoryPm8mVwg = await NasiLiquidityPoolFactory.new(stringXKwOlsT, stringojvxQC, uinta2qYnn2, {from: accounts[4]});
		const uinthpbGAiZ = BigInt("555")
		const addressYEiRMn5 = accounts[2]
		const uinttlZpodj = BigInt("1150")
		const boolCjUb9uQ = await NasiLiquidityPoolFactoryPm8mVwg.transfer.call(addressYEiRMn5, uinthpbGAiZ, {from: accounts[0]});
		const uint256SKiFKBk = await NasiLiquidityPoolFactoryPm8mVwg.burn.call(uinttlZpodj, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressSBk61OI = accounts[0]
		const addressdjLFeVs = "0x0000000000000000000000000000000000000001"
		const uintQLvdM5a = BigInt("240")
		const uintjYlVLPe = BigInt("1652")
		const NasiLiquidityPoolFactoryW1VRYw = await NasiLiquidityPoolFactory.new(addressSBk61OI, addressdjLFeVs, uintQLvdM5a, uintjYlVLPe, {from: accounts[4]});
		const uintIbStas3 = BigInt("739")
		const uintieqe2IS = BigInt("813")
		const uinteKAIQvN = BigInt("620")
		const addressMNmuK4t = accounts[0]
		const uint2560sfjYh = await NasiLiquidityPoolFactoryW1VRYw.leaveStaking.call(uintIbStas3, {from: accounts[3]});
		const uint256d6LabCM = await NasiLiquidityPoolFactoryW1VRYw.leaveStaking.call(uintieqe2IS, {from: accounts[4]});
		await NasiLiquidityPoolFactoryW1VRYw.whenNotPaused.call({from: accounts[0]});
		const boolIoIXItn = await NasiLiquidityPoolFactoryW1VRYw.decreaseAllowance.call(addressMNmuK4t, uinteKAIQvN, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressTbGdSUC = accounts[0]
		const addressqQyBA2q = "0x0000000000000000000000000000000000000001"
		const uintvkRN0E1 = BigInt("240")
		const uintUZHZBNm = BigInt("1652")
		const NasiLiquidityPoolFactoryW1VRYw = await NasiLiquidityPoolFactory.new(addressTbGdSUC, addressqQyBA2q, uintvkRN0E1, uintUZHZBNm, {from: accounts[4]});
		const uintD711rlu = BigInt("631")
		const addresslb1i9Je = accounts[1]
		const boolYn2ff29 = await NasiLiquidityPoolFactoryW1VRYw.isOwner.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryW1VRYw.whenNotPaused.call({from: accounts[0]});
		const boolIoIXItn = await NasiLiquidityPoolFactoryW1VRYw.decreaseAllowance.call(addresslb1i9Je, uintD711rlu, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresshNhVfoZ = accounts[4]
		const addressixL9E8w = accounts[0]
		const uintKIUXnVt = BigInt("123")
		const uintqkv3AA7 = BigInt("376")
		const NasiLiquidityPoolFactoryeDsgOX = await NasiLiquidityPoolFactory.new(addresshNhVfoZ, addressixL9E8w, uintKIUXnVt, uintqkv3AA7, {from: accounts[0]});
		const uintCyAYluw = BigInt("593")
		const uintAIbk4BS = BigInt("52")
		const addressZcZTDvI = accounts[5]
		const addressVcFxFVv = accounts[4]
		const uintOooGs8p = BigInt("110")
		const addressrexS7qa = accounts[5]
		const uintLj6Ovd4 = BigInt("1444")
		const uintDpuqum9 = BigInt("479")
		const uint256ex6vw7s = await NasiLiquidityPoolFactoryeDsgOX.deposit.call(uintAIbk4BS, uintCyAYluw, {from: accounts[3]});
		const addressP4poyH0 = await NasiLiquidityPoolFactoryeDsgOX.delegates.call(addressZcZTDvI, {from: accounts[0]});
		const addressoQcyxx1 = await NasiLiquidityPoolFactoryeDsgOX.transferOwnership.call(addressVcFxFVv, {from: accounts[3]});
		const boolNAbRip = await NasiLiquidityPoolFactoryeDsgOX.mint.call(addressrexS7qa, uintOooGs8p, {from: accounts[0]});
		const uint256bjWhuiO = await NasiLiquidityPoolFactoryeDsgOX.migrate.call(uintLj6Ovd4, {from: accounts[2]});
		const uint256xcTQYIh = await NasiLiquidityPoolFactoryeDsgOX.migrate.call(uintDpuqum9, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringCva1Ol = "TXlQPbllnnwXHF3r4uXNLqFEMP25KFclFZzsJIOEKa6"
		const stringrqdC9q4 = "N5xTTjeJyoz5xsijguNLj6JvahUX4TiBeuCxNkgwUzzOQiwhFlgAi94ROuzmA9l1y3VcSj029Y9GJhnVYi6W"
		const uintpiojZxt = BigInt("195")
		const NasiLiquidityPoolFactoryN4dofZb = await NasiLiquidityPoolFactory.new(stringCva1Ol, stringrqdC9q4, uintpiojZxt, {from: accounts[4]});
		const uintPlC0TTe = BigInt("1237")
		const uintSvfezMB = BigInt("959")
		const uintyw5HiMe = BigInt("1310")
		const addressRwGg2V6 = "0x0000000000000000000000000000000000000001"
		const uintfgys8GV = BigInt("1966")
		const addressza0hyh = accounts[2]
		const addressDZoyDUv = accounts[3]
		const uint256XiCTM3j = await NasiLiquidityPoolFactoryN4dofZb.deposit.call(uintSvfezMB, uintPlC0TTe, {from: accounts[2]});
		await NasiLiquidityPoolFactoryN4dofZb.renounceMinter.call({from: accounts[5]});
		const boolxTQlUBx = await NasiLiquidityPoolFactoryN4dofZb.approve.call(addressRwGg2V6, uintyw5HiMe, {from: accounts[1]});
		const booloFt0VI = await NasiLiquidityPoolFactoryN4dofZb.approve.call(addressza0hyh, uintfgys8GV, {from: "0x0000000000000000000000000000000000000001"});
		const addressRQS4p0g = await NasiLiquidityPoolFactoryN4dofZb.setMigrator.call(addressDZoyDUv, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressKEnGL1v = accounts[0]
		const addressU0ceftB = "0x0000000000000000000000000000000000000001"
		const uintmGvrKCZ = BigInt("240")
		const uintLPbD9or = BigInt("1652")
		const NasiLiquidityPoolFactoryW1VRYw = await NasiLiquidityPoolFactory.new(addressKEnGL1v, addressU0ceftB, uintmGvrKCZ, uintLPbD9or, {from: accounts[4]});
		const boolB2VKW5a = false
		const uintjvohK83 = BigInt("960")
		const uintgyEsuuK = BigInt("457")
		const uint256aOftKjf = await NasiLiquidityPoolFactoryW1VRYw.setAllocationPoint.call(uintgyEsuuK, uintjvohK83, boolB2VKW5a, {from: accounts[0]});
		const stringYaGIENa = await NasiLiquidityPoolFactoryW1VRYw.name.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryW1VRYw.whenNotPaused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressI5OAxO = accounts[3]
		const addressOzJ2l10 = accounts[2]
		const uintsEPLFaj = BigInt("875")
		const uintsMZCCJi = BigInt("1803")
		const NasiLiquidityPoolFactoryZxufleh = await NasiLiquidityPoolFactory.new(addressI5OAxO, addressOzJ2l10, uintsEPLFaj, uintsMZCCJi, {from: "0x0000000000000000000000000000000000000001"});
		const uintKITE3eM = BigInt("1263")
		const addressjW7Qg0p = accounts[1]
		const uint8A0RoZcU = await NasiLiquidityPoolFactoryZxufleh.decimals.call({from: accounts[0]});
		const boolSKPZPlK = await NasiLiquidityPoolFactoryZxufleh.decreaseAllowance.call(addressjW7Qg0p, uintKITE3eM, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressUoHbBuF = accounts[0]
		const addressMwczja = "0x0000000000000000000000000000000000000001"
		const uintcWcATA = BigInt("240")
		const uintAWNQABs = BigInt("1652")
		const NasiLiquidityPoolFactoryW1VRYw = await NasiLiquidityPoolFactory.new(addressUoHbBuF, addressMwczja, uintcWcATA, uintAWNQABs, {from: accounts[4]});
		const uintHC8ytE5 = BigInt("99")
		const uintoOHcoW = BigInt("937")
		const addressqrMC1JY = accounts[3]
		const uint256LZr0XID = await NasiLiquidityPoolFactoryW1VRYw.emergencyWithdraw.call(uintHC8ytE5, {from: accounts[0]});
		const boolWBimp6 = await NasiLiquidityPoolFactoryW1VRYw.mint.call(addressqrMC1JY, uintoOHcoW, {from: accounts[2]});
		await NasiLiquidityPoolFactoryW1VRYw.whenNotPaused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvPsVDAA = "seVQrr8qFFbSNw3"
		const stringc3e6Im = "Pq6BUwiKSb7nNNg"
		const uintcimVKBJ = BigInt("230")
		const NasiLiquidityPoolFactoryUJm515j = await NasiLiquidityPoolFactory.new(stringvPsVDAA, stringc3e6Im, uintcimVKBJ, {from: accounts[5]});
		const uintSy9vKdD = BigInt("1135")
		const uint256ght8FSf = await NasiLiquidityPoolFactoryUJm515j.migrate.call(uintSy9vKdD, {from: accounts[3]});
		await NasiLiquidityPoolFactoryUJm515j.renouncePauser.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressrY5yD2k = accounts[0]
		const addressavVqMO = "0x0000000000000000000000000000000000000001"
		const uintOv0hFmM = BigInt("240")
		const uintJwhpnkZ = BigInt("1652")
		const NasiLiquidityPoolFactoryW1VRYw = await NasiLiquidityPoolFactory.new(addressrY5yD2k, addressavVqMO, uintOv0hFmM, uintJwhpnkZ, {from: accounts[4]});
		const uintu84Z2jP = BigInt("779")
		const uint256B0LRQEh = await NasiLiquidityPoolFactoryW1VRYw.updatePool.call(uintu84Z2jP, {from: accounts[5]});
		await NasiLiquidityPoolFactoryW1VRYw.whenNotPaused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringZaGLYx = "UNSMAh77nHe15WyB1oy3fLGuYoufgr6QIoBSjmmMI2S13dFU"
		const stringOAOeb4T = "BoSVP1igjLmd390dq"
		const uintScqHe6 = BigInt("98")
		const NasiLiquidityPoolFactorymLycU0d = await NasiLiquidityPoolFactory.new(stringZaGLYx, stringOAOeb4T, uintScqHe6, {from: accounts[0]});
		const addressYNK66TC = accounts[2]
		const uint2562IHy15 = await NasiLiquidityPoolFactorymLycU0d.getCurrentVotes.call(addressYNK66TC, {from: accounts[4]});
		await NasiLiquidityPoolFactorymLycU0d.onlyMinter.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUKxkXal = "j0Y6k03E37nSCDJHURB"
		const stringWMD8PFx = "wEFVMkzxL4sv96HSnF1f6zopVtGsKmTwsLHKlJcaQXU5UuA6Lc7qachFd8drGmQef6lOdS0MkyhikQ6VWhnIfN9aj9kCn7BZk5"
		const uintIh5Rcf = BigInt("220")
		const NasiLiquidityPoolFactoryAFfsfd = await NasiLiquidityPoolFactory.new(stringUKxkXal, stringWMD8PFx, uintIh5Rcf, {from: accounts[4]});
		const uinteR61CM = BigInt("6")
		const addresscMYKehn = accounts[4]
		const uintY0Wxz31 = BigInt("1915")
		const uinthcE2iU = BigInt("1067")
		const uintNrWpUJx = BigInt("1932")
		const addresszka8USd = accounts[4]
		const addressfTlVo5q = accounts[4]
		const boolghB8NAB = true
		const addressdgDxcx5 = accounts[4]
		const uintni6IWqv = BigInt("1568")
		await NasiLiquidityPoolFactoryAFfsfd.whenNotPaused.call({from: accounts[2]});
		const boolb7gjOhJ = await NasiLiquidityPoolFactoryAFfsfd.approve.call(addresscMYKehn, uinteR61CM, {from: accounts[4]});
		const 
yLldJIi = await NasiLiquidityPoolFactoryAFfsfd._writeCheckpoint.call(addresszka8USd, uintNrWpUJx, uinthcE2iU, uintY0Wxz31, {from: accounts[5]});
		const boolYIgvwHX = await NasiLiquidityPoolFactoryAFfsfd.isPauser.call(addressfTlVo5q, {from: accounts[4]});
		const uint256RNKIbZN = await NasiLiquidityPoolFactoryAFfsfd.addLpToken.call(uintni6IWqv, addressdgDxcx5, boolghB8NAB, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringviI1aCO = "QL7lbWa5XHWQK"
		const string4pMwlX = "liWxNutkK7EWRbAAQb8pkugKFh8TTJMxpZ4jRSNyCpt"
		const uintgYtlAZB = BigInt("108")
		const NasiLiquidityPoolFactorycuerD3 = await NasiLiquidityPoolFactory.new(stringviI1aCO, string4pMwlX, uintgYtlAZB, {from: accounts[1]});
		const uinthpGZCQo = BigInt("747")
		const addressrfQz0k5 = accounts[0]
		const addressVK1wcv = accounts[0]
		const addresstoQyEd9 = accounts[2]
		const addressgxRStgn = accounts[2]
		const uintUdPKR61 = BigInt("211")
		const uintvyI7dyU = BigInt("323")
		const addressoQrYWS9 = accounts[3]
		const boolq9qVWZm = await NasiLiquidityPoolFactorycuerD3.transferFrom.call(addressVK1wcv, addressrfQz0k5, uinthpGZCQo, {from: accounts[1]});
		const uint256WAHmwZB = await NasiLiquidityPoolFactorycuerD3.balanceOf.call(addresstoQyEd9, {from: accounts[3]});
		const uint256cImb10W = await NasiLiquidityPoolFactorycuerD3.pendingNasi.call(uintUdPKR61, addressgxRStgn, {from: accounts[0]});
		await NasiLiquidityPoolFactorycuerD3.whenPaused.call({from: accounts[2]});
		const boolePvXffd = await NasiLiquidityPoolFactorycuerD3.approve.call(addressoQrYWS9, uintvyI7dyU, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressmSPpmcb = accounts[4]
		const addressn2lxBYO = accounts[3]
		const uintG3clTpO = BigInt("1771")
		const uintIEjQTR = BigInt("518")
		const NasiLiquidityPoolFactoryiVF0kQM = await NasiLiquidityPoolFactory.new(addressmSPpmcb, addressn2lxBYO, uintG3clTpO, uintIEjQTR, {from: accounts[3]});
		const addressiAYdNZd = accounts[1]
		const uint8zxQil = BigInt("1250")
		const uintoatcQVE = BigInt("1577")
		const addresss2Mfbh = accounts[3]
		const uintkGQhq1c = BigInt("110")
		const addressWCEK0ip = accounts[4]
		const addresswEfc4D = await NasiLiquidityPoolFactoryiVF0kQM.dev.call(addressiAYdNZd, {from: accounts[5]});
		const uint256YNqnQL = await NasiLiquidityPoolFactoryiVF0kQM.migrate.call(uint8zxQil, {from: accounts[4]});
		const boolSEhFnC1 = await NasiLiquidityPoolFactoryiVF0kQM.decreaseAllowance.call(addresss2Mfbh, uintoatcQVE, {from: accounts[0]});
		const boolVX0KJZx = await NasiLiquidityPoolFactoryiVF0kQM.transfer.call(addressWCEK0ip, uintkGQhq1c, {from: accounts[4]});
		await NasiLiquidityPoolFactoryiVF0kQM.onlyPauser.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringYSjZe0m = "xrSJJ0FEy4OhSzesPs6UMIpA2TqDqtsWqEvJCCxMNBPBbTsq"
		const stringwViTaSF = "vXVUpcSFnx4kFo7VsGFo06xxhRgJaburo5INELdqvKEcNHDE2cz29QCFqjgcMcQqeO30UbjJFORmS"
		const uintWrMwa4H = BigInt("165")
		const NasiLiquidityPoolFactoryv1EgH5M = await NasiLiquidityPoolFactory.new(stringYSjZe0m, stringwViTaSF, uintWrMwa4H, {from: accounts[0]});
		const uintcDtn7KH = BigInt("1433")
		const addressyFVsfK = accounts[5]
		const byteibHNJbj = "0x0e0213120912061e190412171115051b0f0e16141013111a0b100d120a0e0516"
		const byteGrgXIpQ = "0x0e130b0b180e14051d0c070214180c1215170c0102160d0d1b0b03040519140f"
		const uintW9UvtHe = BigInt("248")
		const uint579VXb = BigInt("1591")
		const uintmT7l9pQ = BigInt("1670")
		const addresslBbIfYD = "0x0000000000000000000000000000000000000001"
		await NasiLiquidityPoolFactoryv1EgH5M.onlyOwner.call({from: accounts[4]});
		const addressXZnbeR = await NasiLiquidityPoolFactoryv1EgH5M.burnFrom.call(addressyFVsfK, uintcDtn7KH, {from: accounts[4]});
		const 
Gr1hhWU = await NasiLiquidityPoolFactoryv1EgH5M.delegateBySig.call(addresslBbIfYD, uintmT7l9pQ, uint579VXb, uintW9UvtHe, byteGrgXIpQ, byteibHNJbj, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringajAWZUf = "UoAXj5ZXQGAKHOKegCMCQz"
		const stringI5v6ugK = "ReFOKptRzLhUSMNqKsdYbNxBCYlwGnGC4IltwS27jYo36GT9J6nBzvVQDTkXxrpXBMgydkGZSv0pseIDpjuP3T"
		const uint0iykU4 = BigInt("210")
		const NasiLiquidityPoolFactoryX9Yz72w = await NasiLiquidityPoolFactory.new(stringajAWZUf, stringI5v6ugK, uint0iykU4, {from: accounts[5]});
		const addressQLZA7Xa = accounts[1]
		const uintKjkYZJx = BigInt("550")
		const addressRpMCvy = accounts[5]
		const stringPoLzoCc = await NasiLiquidityPoolFactoryX9Yz72w.symbol.call({from: accounts[2]});
		const uint256Ivr8ccg = await NasiLiquidityPoolFactoryX9Yz72w.getCurrentVotes.call(addressQLZA7Xa, {from: accounts[4]});
		const boolpRbmBD0 = await NasiLiquidityPoolFactoryX9Yz72w.decreaseAllowance.call(addressRpMCvy, uintKjkYZJx, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressefvH6V = accounts[0]
		const addressZy0ZR6H = "0x0000000000000000000000000000000000000001"
		const uintEAhtSzS = BigInt("240")
		const uintVurhUYa = BigInt("1652")
		const NasiLiquidityPoolFactoryW1VRYw = await NasiLiquidityPoolFactory.new(addressefvH6V, addressZy0ZR6H, uintEAhtSzS, uintVurhUYa, {from: accounts[4]});
		const addressrQsyYCL = "0x0000000000000000000000000000000000000001"
		const addressVVr5TH = await NasiLiquidityPoolFactoryW1VRYw.setMigrator.call(addressrQsyYCL, {from: accounts[4]});
		await NasiLiquidityPoolFactoryW1VRYw.unpause.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryW1VRYw.whenNotPaused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressCCgfSpW = accounts[0]
		const addressl8jjOaR = "0x0000000000000000000000000000000000000001"
		const uintOKIp0SF = BigInt("240")
		const uintnmy5da4 = BigInt("1652")
		const NasiLiquidityPoolFactoryW1VRYw = await NasiLiquidityPoolFactory.new(addressCCgfSpW, addressl8jjOaR, uintOKIp0SF, uintnmy5da4, {from: accounts[4]});
		const uintyicCXnv = BigInt("1053")
		const uintP3iWmS = BigInt("1497")
		const uint256iVeWgoH = await NasiLiquidityPoolFactoryW1VRYw.withdraw.call(uintP3iWmS, uintyicCXnv, {from: accounts[1]});
		await NasiLiquidityPoolFactoryW1VRYw.whenNotPaused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringzH9btLu = "UGXVgvGF"
		const stringE2OuZr = "O57JLRbb7iMj7886j2XRs5itPDisvzeJstrYFUogIwzqfyaXt8MjRwAP37jXX0PfOXraFWiI2kMUIjTPG"
		const uinttZSN3N5 = BigInt("43")
		const NasiLiquidityPoolFactoryIPrXErz = await NasiLiquidityPoolFactory.new(stringzH9btLu, stringE2OuZr, uinttZSN3N5, {from: accounts[5]});
		const uintYIycqCN = BigInt("1349")
		const addresshnHn7pg = "0x0000000000000000000000000000000000000001"
		const boollUpFrpF = true
		const uintz111OzT = BigInt("961")
		const uintwwx5IPn = BigInt("739")
		const uintNhXNnc8 = BigInt("472")
		const uintD1y1Qi = BigInt("1325")
		const uintCMkuEqN = BigInt("494")
		const addresswGIg49i = accounts[2]
		const uint256sdq36y4 = await NasiLiquidityPoolFactoryIPrXErz.totalSupply.call({from: accounts[2]});
		const boolKgwEBKN = await NasiLiquidityPoolFactoryIPrXErz.mint.call(addresshnHn7pg, uintYIycqCN, {from: accounts[4]});
		const uint256XF47W7 = await NasiLiquidityPoolFactoryIPrXErz.setAllocationPoint.call(uintwwx5IPn, uintz111OzT, boollUpFrpF, {from: accounts[2]});
		await NasiLiquidityPoolFactoryIPrXErz.renouncePauser.call({from: accounts[1]});
		const 
WDPCus8 = await NasiLiquidityPoolFactoryIPrXErz._writeCheckpoint.call(addresswGIg49i, uintCMkuEqN, uintD1y1Qi, uintNhXNnc8, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressqoa0U9T = accounts[0]
		const addressWGNahd4 = "0x0000000000000000000000000000000000000001"
		const uintpteyaMv = BigInt("240")
		const uintlsJ5z86 = BigInt("1652")
		const NasiLiquidityPoolFactoryW1VRYw = await NasiLiquidityPoolFactory.new(addressqoa0U9T, addressWGNahd4, uintpteyaMv, uintlsJ5z86, {from: accounts[4]});
		const uintLPDbkZe = BigInt("1975")
		const uintURoKHgR = BigInt("584")
		const uint256R6QVE9k = await NasiLiquidityPoolFactoryW1VRYw.getBonusMultiplier.call(uintURoKHgR, uintLPDbkZe, {from: accounts[4]});
		await NasiLiquidityPoolFactoryW1VRYw.whenNotPaused.call({from: accounts[0]});
	});
})
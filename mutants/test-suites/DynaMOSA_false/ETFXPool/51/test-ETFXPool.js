const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringXPeaZ2 = "XtNweRrswid2oL6tspTmCVqWDFDv9p4PkMYT1Hik"
		const stringM9YH9FN = "LBz1MrdoL9TAFR21VFPvguUULn5A3f3WqkiEdh4L7879aDuQSBuLnRTibLOXeCYbNOrvMpehwIL9xHgqXWC"
		const uinthZt4DNt = BigInt("111")
		const ETFXPoolGDKYwFO = await ETFXPool.new(stringXPeaZ2, stringM9YH9FN, uinthZt4DNt, {from: accounts[5]});
		const uintprOUcqs = BigInt("718")
		const addressTVpix9c = accounts[1]
		const addressqXtpvNd = accounts[1]
		const uint256mi6v2DV = await ETFXPoolGDKYwFO.stake.call(uintprOUcqs, {from: accounts[2]});
		const uint256lczE9PY = await ETFXPoolGDKYwFO.balanceOf.call(addressTVpix9c, {from: accounts[2]});
		const uint256xd6JcEB = await ETFXPoolGDKYwFO.balanceOf.call(addressqXtpvNd, {from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvnfp40E = await ETFXPool.new({from: accounts[4]});
		const uintexItKj3 = BigInt("893")
		const addressshZFoHE = accounts[4]
		const addressYnohnVx = "0x0000000000000000000000000000000000000001"
		const uintddUkicG = BigInt("381")
		const addressHFhTY9P = accounts[1]
		const stringRHoARmX = await ETFXPoolvnfp40E.symbol.call({from: accounts[0]});
//		await ETFXPoolvnfp40E.nonReentrant.call({from: accounts[2]});
//		const uint256ZSUbwbD = await ETFXPoolvnfp40E.withdraw.call(uintexItKj3, {from: accounts[3]});
//		const uint256mJdEFUv = await ETFXPoolvnfp40E.allowance.call(addressYnohnVx, addressshZFoHE, {from: accounts[2]});
//		const boolC58RG0t = await ETFXPoolvnfp40E.transfer.call(addressHFhTY9P, uintddUkicG, {from: accounts[5]});

		assert.equal(stringRHoARmX, "FETFX")
		await expect(ETFXPoolvnfp40E.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolO1IXQgo = await ETFXPool.new({from: accounts[0]});
		const uintodlSd88 = BigInt("266")
		const addressLCJBjnX = accounts[3]
		const uintSdYMwHn = BigInt("708")
		const addressCps8mHR = accounts[0]
		const uint8Q7H7dl8 = await ETFXPoolO1IXQgo.decimals.call({from: accounts[2]});
//		const boolrKygYF = await ETFXPoolO1IXQgo.transfer.call(addressLCJBjnX, uintodlSd88, {from: accounts[2]});
//		const boolTTruL0 = await ETFXPoolO1IXQgo.transfer.call(addressCps8mHR, uintSdYMwHn, {from: accounts[4]});

		assert.equal(uint8Q7H7dl8, BigInt("8"))
		await expect(ETFXPoolO1IXQgo.transfer.call(addressLCJBjnX, uintodlSd88, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVzDQaXg = await ETFXPool.new({from: accounts[5]});
		const addressLAFrAD = accounts[2]
//		await ETFXPoolVzDQaXg.getReward.call({from: accounts[2]});
//		const addressjRA6P3L = await ETFXPoolVzDQaXg.transferOwnership.call(addressLAFrAD, {from: accounts[2]});
//		await ETFXPoolVzDQaXg.onlyOwner.call({from: accounts[1]});

		await expect(ETFXPoolVzDQaXg.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAf4Cso4 = await ETFXPool.new({from: accounts[2]});
		const uintpvoc56 = BigInt("1661")
		const addressgPyk3UA = "0x0000000000000000000000000000000000000001"
		const uintBaaajKz = BigInt("678")
		const uintjml1L1P = BigInt("28")
		const addressDcS4Q6G = accounts[0]
		const stringXkCM5M = await ETFXPoolAf4Cso4.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringvVy6zNp = await ETFXPoolAf4Cso4.name.call({from: accounts[0]});
//		const boolXv7yIkk = await ETFXPoolAf4Cso4.transfer.call(addressgPyk3UA, uintpvoc56, {from: accounts[4]});
//		const uint256QasQ88v = await ETFXPoolAf4Cso4.stake.call(uintBaaajKz, {from: accounts[1]});
//		const boole2OBohu = await ETFXPoolAf4Cso4.transfer.call(addressDcS4Q6G, uintjml1L1P, {from: accounts[4]});

		assert.equal(stringXkCM5M, "FETFX")
		assert.equal(stringvVy6zNp, "ETFX-FARM")
		await expect(ETFXPoolAf4Cso4.transfer.call(addressgPyk3UA, uintpvoc56, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolreV6xBb = await ETFXPool.new({from: accounts[2]});
		const addressAQHQ3H = accounts[2]
		const uintoscztc = BigInt("243")
		const uintix1SdnY = BigInt("888")
		const addresswukWNyo = accounts[3]
		const addressPdBOvsT = accounts[3]
		const uint256UF5t2fp = await ETFXPoolreV6xBb.balanceOf.call(addressAQHQ3H, {from: accounts[2]});
		const stringNTthUR = await ETFXPoolreV6xBb.symbol.call({from: accounts[4]});
//		const uint256hCPcStC = await ETFXPoolreV6xBb.stake.call(uintoscztc, {from: accounts[2]});
//		const boolDWNXgmM = await ETFXPoolreV6xBb.increaseAllowance.call(addresswukWNyo, uintix1SdnY, {from: accounts[0]});
//		const addressSJ4Wy9 = await ETFXPoolreV6xBb.transferOwnership.call(addressPdBOvsT, {from: accounts[5]});
//		await ETFXPoolreV6xBb.renounceOwnership.call({from: accounts[5]});

		assert.equal(stringNTthUR, "FETFX")
		assert.equal(uint256UF5t2fp, BigInt("0"))
		await expect(ETFXPoolreV6xBb.stake.call(uintoscztc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolK4ZLnSA = await ETFXPool.new({from: accounts[0]});
		const uintJGdZ3e5 = BigInt("1952")
		const addressssNQf17 = accounts[3]
		const addresseYfxnut = accounts[3]
		const uintNbXpKlg = BigInt("20")
		const addressRbT0Mrg = accounts[4]
		const uintO5xjgsu = BigInt("851")
		const addressBPMlHH = accounts[4]
		const uintF7BSv4o = BigInt("823")
//		const boolDMcfuXl = await ETFXPoolK4ZLnSA.transferFrom.call(addresseYfxnut, addressssNQf17, uintJGdZ3e5, {from: accounts[2]});
//		await ETFXPoolK4ZLnSA.nonReentrant.call({from: accounts[3]});
//		const uint256vepOBVh = await ETFXPoolK4ZLnSA.withdraw.call(uintNbXpKlg, {from: accounts[2]});
//		const uint256rhAgKD = await ETFXPoolK4ZLnSA.earned.call(addressRbT0Mrg, {from: accounts[3]});
//		const boolhQkS2S = await ETFXPoolK4ZLnSA.decreaseAllowance.call(addressBPMlHH, uintO5xjgsu, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HLBKTfO = await ETFXPoolK4ZLnSA.stake.call(uintF7BSv4o, {from: accounts[3]});

		await expect(ETFXPoolK4ZLnSA.transferFrom.call(addresseYfxnut, addressssNQf17, uintJGdZ3e5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPxuDKw = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNyDGQl = BigInt("111")
		const addresssF2aNBY = "0x0000000000000000000000000000000000000001"
		const uintw2gEOx1 = BigInt("1887")
		const addressIragCNC = accounts[2]
		const uintgdRY5X2 = BigInt("1465")
		const uinttJoD7pf = BigInt("427")
		const addressgDJOdsD = accounts[1]
		const boolChDJmjn = await ETFXPoolPxuDKw.transfer.call(addresssF2aNBY, uintNyDGQl, {from: accounts[3]});
		const booljx4MuSc = await ETFXPoolPxuDKw.approve.call(addressIragCNC, uintw2gEOx1, {from: accounts[3]});
		const uint256EuRQWGz = await ETFXPoolPxuDKw.stake.call(uintgdRY5X2, {from: accounts[0]});
		const uint256bU4pFp2 = await ETFXPoolPxuDKw.withdraw.call(uinttJoD7pf, {from: accounts[0]});
		const uint256pM3ogqY = await ETFXPoolPxuDKw.earned.call(addressgDJOdsD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTWAG4d = await ETFXPool.new({from: accounts[2]});
		const uintZUTViUM = BigInt("1366")
		const addressrbEsIja = accounts[3]
		const uintp9PAxiy = BigInt("795")
		const addressqCk6Zzb = accounts[1]
		const uintrPrtpXe = BigInt("120")
		const uint8aTEAPGJ = await ETFXPoolTWAG4d.decimals.call({from: accounts[0]});
		const boolbCsB0T5 = await ETFXPoolTWAG4d.approve.call(addressrbEsIja, uintZUTViUM, {from: accounts[1]});
//		const boolSAedZRg = await ETFXPoolTWAG4d.transfer.call(addressqCk6Zzb, uintp9PAxiy, {from: accounts[0]});
//		const uint256M4wS4Nz = await ETFXPoolTWAG4d.stake.call(uintrPrtpXe, {from: accounts[0]});
//		const stringhkApW6 = await ETFXPoolTWAG4d.name.call({from: accounts[2]});

		assert.equal(boolbCsB0T5, true)
		assert.equal(uint8aTEAPGJ, BigInt("8"))
		await expect(ETFXPoolTWAG4d.transfer.call(addressqCk6Zzb, uintp9PAxiy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTWAG4d = await ETFXPool.new({from: accounts[2]});
		const uintHMmCWT2 = BigInt("340")
		const uintc7FiTyn = BigInt("795")
		const addressz48EJY4 = accounts[1]
		const uintjRGIQ1 = BigInt("120")
		const uint8aTEAPGJ = await ETFXPoolTWAG4d.decimals.call({from: accounts[0]});
//		const uint256ExQ0thM = await ETFXPoolTWAG4d.withdraw.call(uintHMmCWT2, {from: accounts[1]});
//		const boolSAedZRg = await ETFXPoolTWAG4d.transfer.call(addressz48EJY4, uintc7FiTyn, {from: accounts[0]});
//		const uint256M4wS4Nz = await ETFXPoolTWAG4d.stake.call(uintjRGIQ1, {from: accounts[0]});
//		const stringhkApW6 = await ETFXPoolTWAG4d.name.call({from: accounts[2]});

		assert.equal(uint8aTEAPGJ, BigInt("8"))
		await expect(ETFXPoolTWAG4d.withdraw.call(uintHMmCWT2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVzDQaXg = await ETFXPool.new({from: accounts[5]});
		const addressLMGlj15 = accounts[2]
//		const addressjRA6P3L = await ETFXPoolVzDQaXg.transferOwnership.call(addressLMGlj15, {from: accounts[2]});
//		await ETFXPoolVzDQaXg.onlyOwner.call({from: accounts[1]});

		await expect(ETFXPoolVzDQaXg.transferOwnership.call(addressLMGlj15, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVzDQaXg = await ETFXPool.new({from: accounts[5]});
		const addressPTvtLHf = accounts[0]
		const addresshJxm9cK = accounts[0]
		const addressfQy5Otb = accounts[3]
		const uint256OBnkxqc = await ETFXPoolVzDQaXg.allowance.call(addresshJxm9cK, addressPTvtLHf, {from: accounts[1]});
//		const addressU9twWkP = await ETFXPoolVzDQaXg.transferOwnership.call(addressfQy5Otb, {from: accounts[2]});
//		await ETFXPoolVzDQaXg.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256OBnkxqc, BigInt("0"))
		await expect(ETFXPoolVzDQaXg.transferOwnership.call(addressfQy5Otb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVzDQaXg = await ETFXPool.new({from: accounts[5]});
		const uintLDIOLjg = BigInt("238")
		const addressFDUKfx4 = accounts[3]
		const addressEKDRBpC = "0x0000000000000000000000000000000000000001"
		const addressvGz9QdK = accounts[2]
		const addressOWpmA8g = accounts[0]
		const addresshijSrUm = accounts[3]
		const boolbxYtFh = await ETFXPoolVzDQaXg.increaseAllowance.call(addressFDUKfx4, uintLDIOLjg, {from: accounts[1]});
		const addressjgcIVW4 = await ETFXPoolVzDQaXg.owner.call({from: accounts[0]});
		const uint256P7Q3OQm = await ETFXPoolVzDQaXg.allowance.call(addressvGz9QdK, addressEKDRBpC, {from: accounts[3]});
		const uint256jjvdUGa = await ETFXPoolVzDQaXg.allowance.call(addresshijSrUm, addressOWpmA8g, {from: accounts[5]});
//		await ETFXPoolVzDQaXg.onlyOwner.call({from: accounts[1]});

		assert.equal(addressjgcIVW4, 0x89c8803108bd63C3Ddb5E4561521932aA5A18EaC)
		assert.equal(boolbxYtFh, true)
		assert.equal(uint256P7Q3OQm, BigInt("0"))
		assert.equal(uint256jjvdUGa, BigInt("0"))
		await expect(ETFXPoolVzDQaXg.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVzDQaXg = await ETFXPool.new({from: accounts[5]});
		const addressIhdFyGV = accounts[2]
//		await ETFXPoolVzDQaXg.exit.call({from: accounts[3]});
//		await ETFXPoolVzDQaXg.renounceOwnership.call({from: accounts[0]});
//		const addressjRA6P3L = await ETFXPoolVzDQaXg.transferOwnership.call(addressIhdFyGV, {from: accounts[2]});
//		await ETFXPoolVzDQaXg.onlyOwner.call({from: accounts[1]});

		await expect(ETFXPoolVzDQaXg.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVzDQaXg = await ETFXPool.new({from: accounts[5]});
		const uintqp2Rsd = BigInt("1416")
		const addressj7ejZJZ = accounts[3]
//		const boolWmQIi2k = await ETFXPoolVzDQaXg.decreaseAllowance.call(addressj7ejZJZ, uintqp2Rsd, {from: accounts[4]});
//		await ETFXPoolVzDQaXg.onlyOwner.call({from: accounts[2]});
//		await ETFXPoolVzDQaXg.getReward.call({from: accounts[2]});

		await expect(ETFXPoolVzDQaXg.decreaseAllowance.call(addressj7ejZJZ, uintqp2Rsd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolA68OvlE = await ETFXPool.new({from: accounts[0]});
		const addressTIcCF59 = accounts[3]
		const uintGvvDMeJ = BigInt("1332")
		const addressJ5tjQ6n = await ETFXPoolA68OvlE.transferOwnership.call(addressTIcCF59, {from: accounts[0]});
//		await ETFXPoolA68OvlE.onlyOwner.call({from: accounts[4]});
//		const uint256xJ2szsV = await ETFXPoolA68OvlE.withdraw.call(uintGvvDMeJ, {from: accounts[5]});
//		const addressMt99pZG = await ETFXPoolA68OvlE.owner.call({from: accounts[5]});

		await expect(ETFXPoolA68OvlE.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolEwX07AI = await ETFXPool.new({from: accounts[1]});
		const uint256UTEvwgG = await ETFXPoolEwX07AI.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8vfpxPxr = await ETFXPoolEwX07AI.decimals.call({from: accounts[4]});
//		await ETFXPoolEwX07AI.exit.call({from: accounts[0]});

		assert.equal(uint256UTEvwgG, BigInt("0"))
		assert.equal(uint8vfpxPxr, BigInt("8"))
		await expect(ETFXPoolEwX07AI.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolEwX07AI = await ETFXPool.new({from: accounts[1]});
		const addressrZpNNJH = accounts[4]
		const uint256UTEvwgG = await ETFXPoolEwX07AI.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolEwX07AI.renounceOwnership.call({from: accounts[1]});
//		await ETFXPoolEwX07AI.getReward.call({from: accounts[4]});
//		const uint256uSi0QER = await ETFXPoolEwX07AI.balanceOf.call(addressrZpNNJH, {from: accounts[4]});

		assert.equal(uint256UTEvwgG, BigInt("0"))
		await expect(ETFXPoolEwX07AI.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
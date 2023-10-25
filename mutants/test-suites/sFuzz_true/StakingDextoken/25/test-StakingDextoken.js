const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressOa6pgV3 = accounts[1]
		const addressIloMm5r = accounts[5]
		const StakingDextokenF5kgo44 = await StakingDextoken.new(addressOa6pgV3, addressIloMm5r, {from: accounts[3]});
		const addressS1SSIsh = accounts[4]
		const uintIGzSHOK = await StakingDextokenF5kgo44.remainingRewards.call({from: accounts[3]});
		const uinta8S0Ei4 = await StakingDextokenF5kgo44.rewardPerToken.call({from: accounts[0]});
//		const boolqzUBHOI = await StakingDextokenF5kgo44.unfreezeAccount.call(addressS1SSIsh, {from: accounts[1]});

		assert.equal(uintIGzSHOK, BigInt("0"))
		assert.equal(uinta8S0Ei4, BigInt("0"))
		await expect(StakingDextokenF5kgo44.unfreezeAccount.call(addressS1SSIsh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfSmRdf4 = accounts[3]
		const addressA9gsyuQ = accounts[4]
		const StakingDextokend9pgOtB = await StakingDextoken.new(addressfSmRdf4, addressA9gsyuQ, {from: accounts[3]});
		const addresszI7ar3 = accounts[0]
		const addressuhetqkL = accounts[1]
		const addressjJiIPJs = accounts[4]
		const addresse9qK7b3 = accounts[2]
		const boolnDHm6l = await StakingDextokend9pgOtB.freezeAccount.call(addresszI7ar3, {from: accounts[3]});
//		const addressSFub3aB = await StakingDextokend9pgOtB.notFrozen.call(addressuhetqkL, {from: accounts[3]});
//		const uintHp6Lu9A = await StakingDextokend9pgOtB.getClaimOf.call(addressjJiIPJs, {from: accounts[0]});
//		const uintUXd0QF4 = await StakingDextokend9pgOtB.getEndTimestamp.call({from: accounts[4]});
//		const boolDPYtnU7 = await StakingDextokend9pgOtB.freezeAccount.call(addresse9qK7b3, {from: accounts[1]});

		assert.equal(boolnDHm6l, true)
		await expect(StakingDextokend9pgOtB.notFrozen.call(addressuhetqkL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmCniqq0 = accounts[5]
		const addressio18ocG = accounts[4]
		const StakingDextokenB5jE8YF = await StakingDextoken.new(addressmCniqq0, addressio18ocG, {from: accounts[3]});
		const uintIEFiADD = BigInt("560")
		const uintp8VttYR = BigInt("1874")
		const uintBdaxjuD = BigInt("1740")
		const uintq9GAEKb = BigInt("139")
		const uintgAR4b2D = BigInt("283")
//		const uintELk8YK = await StakingDextokenB5jE8YF.withdraw.call(uintIEFiADD, {from: accounts[0]});
//		const uintHkPzPEQ = await StakingDextokenB5jE8YF.setRewardRound.call(uintgAR4b2D, uintq9GAEKb, uintBdaxjuD, uintp8VttYR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenB5jE8YF.withdraw.call(uintIEFiADD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslZ6Qdti = accounts[2]
		const addressdDpe4Le = accounts[5]
		const StakingDextokenOsLNI0e = await StakingDextoken.new(addresslZ6Qdti, addressdDpe4Le, {from: accounts[4]});
		const addressYumSW2d = accounts[1]
		const uintGthkLk2 = await StakingDextokenOsLNI0e.rewardOf.call(addressYumSW2d, {from: accounts[1]});
		const uinttUr4QY8 = await StakingDextokenOsLNI0e.getStartTimestamp.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintGthkLk2, BigInt("0"))
		assert.equal(uinttUr4QY8, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressMUvqZTh = "0x0000000000000000000000000000000000000001"
		const addresspdI8hSb = accounts[2]
		const StakingDextokenfukuF9Z = await StakingDextoken.new(addressMUvqZTh, addresspdI8hSb, {from: accounts[1]});
		const addressGDblmxj = accounts[1]
		const uintBvjyxjq = await StakingDextokenfukuF9Z.getEndTimestamp.call({from: accounts[0]});
//		const addressFaZXNQP = await StakingDextokenfukuF9Z.notFrozen.call(addressGDblmxj, {from: accounts[0]});

		assert.equal(uintBvjyxjq, BigInt("0"))
		await expect(StakingDextokenfukuF9Z.notFrozen.call(addressGDblmxj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressOxRjul = "0x0000000000000000000000000000000000000001"
		const addressSLHahZR = accounts[1]
		const StakingDextokenOXYkq5 = await StakingDextoken.new(addressOxRjul, addressSLHahZR, {from: accounts[0]});
		const addressW7QHze9 = accounts[3]
		const uintDaMlUwH = await StakingDextokenOXYkq5.remainingRewards.call({from: accounts[3]});
		const uintWXsgbQI = await StakingDextokenOXYkq5.remainingRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		await StakingDextokenOXYkq5.claim.call({from: accounts[0]});
//		const uintnRDTT40 = await StakingDextokenOXYkq5.earned.call(addressW7QHze9, {from: accounts[0]});

		assert.equal(uintDaMlUwH, BigInt("0"))
		assert.equal(uintWXsgbQI, BigInt("0"))
		await expect(StakingDextokenOXYkq5.claim.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressQnUvep4 = accounts[4]
		const addressVqCxrs = accounts[2]
		const StakingDextokenUUyjkI7 = await StakingDextoken.new(addressQnUvep4, addressVqCxrs, {from: "0x0000000000000000000000000000000000000001"});
		const uintchAgceO = BigInt("751")
		const addressn6UREgE = accounts[4]
		const addresstq2KK6t = await StakingDextokenUUyjkI7.capture.call(addressn6UREgE, uintchAgceO, {from: accounts[5]});
		await StakingDextokenUUyjkI7.notifyRewards.call({from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addressrH2OJNl = accounts[5]
		const addressr7I0u0 = accounts[4]
		const StakingDextokenB5jE8YF = await StakingDextoken.new(addressrH2OJNl, addressr7I0u0, {from: accounts[3]});
		const addresstkpZUuP = accounts[5]
		const uintx3IKXAu = BigInt("530")
		const addressl9N0U3q = accounts[4]
		const uintY0Y6Eo1 = await StakingDextokenB5jE8YF.stakeOf.call(addresstkpZUuP, {from: accounts[2]});
//		const uintELk8YK = await StakingDextokenB5jE8YF.withdraw.call(uintx3IKXAu, {from: accounts[0]});
//		const addresskWk1cTz = await StakingDextokenB5jE8YF.updateReward.call(addressl9N0U3q, {from: accounts[2]});

		assert.equal(uintY0Y6Eo1, BigInt("0"))
		await expect(StakingDextokenB5jE8YF.withdraw.call(uintx3IKXAu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshns3W0X = accounts[5]
		const addressmCkOBEE = accounts[4]
		const StakingDextokenB5jE8YF = await StakingDextoken.new(addresshns3W0X, addressmCkOBEE, {from: accounts[3]});
		const addressPEOe8oG = accounts[0]
		const uintHDMa6LE = BigInt("1768")
		const uintDGDMkI = await StakingDextokenB5jE8YF.getClaimOf.call(addressPEOe8oG, {from: accounts[5]});
//		const uintELk8YK = await StakingDextokenB5jE8YF.withdraw.call(uintHDMa6LE, {from: accounts[0]});

		assert.equal(uintDGDMkI, BigInt("0"))
		await expect(StakingDextokenB5jE8YF.withdraw.call(uintHDMa6LE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressElCUUjH = accounts[5]
		const addressqmkHEH = accounts[4]
		const StakingDextokenB5jE8YF = await StakingDextoken.new(addressElCUUjH, addressqmkHEH, {from: accounts[3]});
		const addressP5AjKFh = accounts[0]
		const uintcFIyWWv = BigInt("560")
		const uintfULcYUm = await StakingDextokenB5jE8YF.getWithdrawalOf.call(addressP5AjKFh, {from: "0x0000000000000000000000000000000000000001"});
//		const uintELk8YK = await StakingDextokenB5jE8YF.withdraw.call(uintcFIyWWv, {from: accounts[0]});

		assert.equal(uintfULcYUm, BigInt("0"))
		await expect(StakingDextokenB5jE8YF.withdraw.call(uintcFIyWWv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressuZeJeCn = accounts[1]
		const addressOhm5Cv7 = accounts[0]
		const StakingDextokenrEaWqDf = await StakingDextoken.new(addressuZeJeCn, addressOhm5Cv7, {from: accounts[3]});
		const addressLW3HuDg = accounts[2]
		const addresscmUCKsS = accounts[2]
		const addresso0jBa0k = accounts[4]
		const uintQrWA8Pr = await StakingDextokenrEaWqDf.getWithdrawalOf.call(addressLW3HuDg, {from: accounts[1]});
//		await StakingDextokenrEaWqDf.notifyRewards.call({from: accounts[3]});
//		const uintAjoe6m = await StakingDextokenrEaWqDf.getWithdrawalOf.call(addresscmUCKsS, {from: accounts[5]});
//		const uinth4JDEG = await StakingDextokenrEaWqDf.stakeOf.call(addresso0jBa0k, {from: accounts[3]});
//		const uintvnMHbLe = await StakingDextokenrEaWqDf.getStartTimestamp.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintQrWA8Pr, BigInt("0"))
		await expect(StakingDextokenrEaWqDf.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressOz5MZOi = accounts[5]
		const addressxFGz0dM = accounts[4]
		const StakingDextokenB5jE8YF = await StakingDextoken.new(addressOz5MZOi, addressxFGz0dM, {from: accounts[3]});
		const uintSogXjW = BigInt("444")
		const uintPqgd6LG = BigInt("1443")
//		const uintH7cQ8E0 = await StakingDextokenB5jE8YF.deposit.call(uintSogXjW, {from: accounts[2]});
//		const uintSLSC1mo = await StakingDextokenB5jE8YF.getTotalStakes.call({from: accounts[2]});
//		const uintzr8rJ9Q = await StakingDextokenB5jE8YF.withdraw.call(uintPqgd6LG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenB5jE8YF.deposit.call(uintSogXjW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresssnWAq1o = accounts[1]
		const addressZm52p8 = accounts[0]
		const StakingDextokenrEaWqDf = await StakingDextoken.new(addresssnWAq1o, addressZm52p8, {from: accounts[3]});
		const addressACPWRAY = accounts[3]
		const addressSgVDpIL = accounts[5]
		const addresszU52yqu = accounts[1]
//		await StakingDextokenrEaWqDf.notifyRewards.call({from: accounts[3]});
//		const uintAjoe6m = await StakingDextokenrEaWqDf.getWithdrawalOf.call(addressACPWRAY, {from: accounts[5]});
//		const uinth4JDEG = await StakingDextokenrEaWqDf.stakeOf.call(addressSgVDpIL, {from: accounts[3]});
//		const uinttRbY6Xk = await StakingDextokenrEaWqDf.earned.call(addresszU52yqu, {from: "0x0000000000000000000000000000000000000001"});
//		const uintwV0aoI5 = await StakingDextokenrEaWqDf.totalRewards.call({from: accounts[5]});

		await expect(StakingDextokenrEaWqDf.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressO2afxx = accounts[5]
		const addressidgeBd2 = accounts[4]
		const StakingDextokenB5jE8YF = await StakingDextoken.new(addressO2afxx, addressidgeBd2, {from: accounts[3]});
		const uintaKRnnkt = BigInt("1424")
		const addresskxKT2F = accounts[4]
		const uintyLgwS82 = BigInt("1003")
		const uintIwiTisr = BigInt("726")
		const uintluJCc5p = BigInt("1548")
		const uintVY6w5rv = BigInt("781")
		const uinthWj45kY = BigInt("546")
//		const addressdcx1Nu3 = await StakingDextokenB5jE8YF.capture.call(addresskxKT2F, uintaKRnnkt, {from: accounts[3]});
//		const uintZ7H7rhe = await StakingDextokenB5jE8YF.setRewardRound.call(uintVY6w5rv, uintluJCc5p, uintIwiTisr, uintyLgwS82, {from: accounts[2]});
//		const uintELk8YK = await StakingDextokenB5jE8YF.withdraw.call(uinthWj45kY, {from: accounts[0]});

		await expect(StakingDextokenB5jE8YF.capture.call(addresskxKT2F, uintaKRnnkt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressw3q3lyZ = accounts[1]
		const addressDrFpJWA = accounts[0]
		const StakingDextokenrEaWqDf = await StakingDextoken.new(addressw3q3lyZ, addressDrFpJWA, {from: accounts[3]});
		const addressT78gPG = accounts[3]
//		await StakingDextokenrEaWqDf.notifyRewards.call({from: accounts[3]});
//		const uintFDiHUxr = await StakingDextokenrEaWqDf.getEndTimestamp.call({from: accounts[0]});
//		const addressYS5zIXh = await StakingDextokenrEaWqDf.setBeneficial.call(addressT78gPG, {from: accounts[3]});

		await expect(StakingDextokenrEaWqDf.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressqEcOZ32 = accounts[5]
		const addressAZOhNM5 = accounts[4]
		const StakingDextokenB5jE8YF = await StakingDextoken.new(addressqEcOZ32, addressAZOhNM5, {from: accounts[3]});
		const addresshodtTP9 = accounts[1]
		const addressenMTZG = accounts[1]
		const uintqi6jur8 = await StakingDextokenB5jE8YF.earned.call(addresshodtTP9, {from: accounts[1]});
		const uintOEqweJG = await StakingDextokenB5jE8YF.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uintRi9FvHe = await StakingDextokenB5jE8YF.remainingRewards.call({from: accounts[4]});
//		const booleUTPwf9 = await StakingDextokenB5jE8YF.unfreezeAccount.call(addressenMTZG, {from: accounts[3]});

		assert.equal(uintOEqweJG, BigInt("0"))
		assert.equal(uintRi9FvHe, BigInt("0"))
		assert.equal(uintqi6jur8, BigInt("0"))
		await expect(StakingDextokenB5jE8YF.unfreezeAccount.call(addressenMTZG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressHhp6hy1 = accounts[5]
		const addresssbAFUjp = accounts[4]
		const StakingDextokenB5jE8YF = await StakingDextoken.new(addressHhp6hy1, addresssbAFUjp, {from: accounts[3]});
		const uintrWdvF0v = BigInt("1896")
		const addressWdc3GSX = accounts[0]
		const uintpxJjdrW = BigInt("1133")
//		const addressU7H3xhN = await StakingDextokenB5jE8YF.capture.call(addressWdc3GSX, uintrWdvF0v, {from: accounts[3]});
//		const uintxGeXoRq = await StakingDextokenB5jE8YF.rewardPerToken.call({from: accounts[5]});
//		const uintHKgaWhZ = await StakingDextokenB5jE8YF.getEndTimestamp.call({from: accounts[1]});
//		const uintzr8rJ9Q = await StakingDextokenB5jE8YF.withdraw.call(uintpxJjdrW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenB5jE8YF.capture.call(addressWdc3GSX, uintrWdvF0v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressXGoik6F = accounts[3]
		const addressATrYEot = accounts[0]
		const StakingDextokenQEqycCD = await StakingDextoken.new(addressXGoik6F, addressATrYEot, {from: accounts[2]});
		const uintTPpjgJe = BigInt("83")
		const uintjP2nvTE = BigInt("1187")
		const uintB9MMlJj = BigInt("1341")
		const uintepiC8L9 = BigInt("866")
		const uintHSU5nzh = BigInt("1931")
		const addressiR3q7RI = accounts[0]
//		const uintH4UKdGC = await StakingDextokenQEqycCD.setRewardRound.call(uintepiC8L9, uintB9MMlJj, uintjP2nvTE, uintTPpjgJe, {from: accounts[2]});
//		const addressk5YmdNJ = await StakingDextokenQEqycCD.capture.call(addressiR3q7RI, uintHSU5nzh, {from: accounts[1]});
//		await StakingDextokenQEqycCD.notifyRewards.call({from: accounts[5]});

		await expect(StakingDextokenQEqycCD.setRewardRound.call(uintepiC8L9, uintB9MMlJj, uintjP2nvTE, uintTPpjgJe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressSlWCtoq = accounts[4]
		const afiControllerlxsnqE6 = await afiController.new(addressSlWCtoq, {from: accounts[4]});
		const uintDynraKf = BigInt("640")
		const addressPjIA0Jk = accounts[3]
		const uintKSrLYhC = BigInt("536")
		const uintovSLqIP = BigInt("1361")
		const addressGxADa4x = accounts[3]
//		const addressJvF6hS = await afiControllerlxsnqE6.earn.call(addressPjIA0Jk, uintDynraKf, {from: accounts[0]});
//		const uintHad99xk = await afiControllerlxsnqE6.setSplit.call(uintKSrLYhC, {from: "0x0000000000000000000000000000000000000001"});
//		const addressCqwz7TE = await afiControllerlxsnqE6.earn.call(addressGxADa4x, uintovSLqIP, {from: accounts[3]});

		await expect(afiControllerlxsnqE6.earn.call(addressPjIA0Jk, uintDynraKf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGZrpiR = accounts[1]
		const afiControllerWBJMkX8 = await afiController.new(addressGZrpiR, {from: "0x0000000000000000000000000000000000000001"});
		const addresszETVHDV = accounts[0]
		const uintIR8UjE2 = BigInt("1704")
		const addressVFPLWWy = accounts[0]
		const addresslLt8pqn = accounts[1]
		const addressfHSDaoG = accounts[1]
		const addressNjhcgCe = accounts[0]
		const uintjKIKbZJ = BigInt("1036")
		const addressZAMScw = accounts[4]
		const uintlMXfut2 = BigInt("1540")
		const addressP8mNq4 = await afiControllerWBJMkX8.setOneSplit.call(addresszETVHDV, {from: accounts[0]});
		const addressqvHcoUR = await afiControllerWBJMkX8.yearn.call(addresslLt8pqn, addressVFPLWWy, uintIR8UjE2, {from: accounts[4]});
		const addressswkdxFi = await afiControllerWBJMkX8.inCaseStrategyTokenGetStuck.call(addressNjhcgCe, addressfHSDaoG, {from: accounts[1]});
		const addresso3RFBB7 = await afiControllerWBJMkX8.inCaseTokensGetStuck.call(addressZAMScw, uintjKIKbZJ, {from: accounts[2]});
		const uintKCrMv1v = await afiControllerWBJMkX8.setSplit.call(uintlMXfut2, {from: accounts[1]});
	});

	it('test for afiController', async () => {
		const addressMFk1aH = accounts[2]
		const afiControllerCqYGbup = await afiController.new(addressMFk1aH, {from: accounts[1]});
		const uintpg5BIVI = BigInt("330")
		const addressNUIJHTR = accounts[5]
		const addressmhhAL8B = accounts[3]
		const uintSFl5Hk0 = BigInt("1245")
		const uinthAgY3w = BigInt("1955")
		const addresssNMVhjH = accounts[0]
//		const addressxLuP4qy = await afiControllerCqYGbup.yearn.call(addressmhhAL8B, addressNUIJHTR, uintpg5BIVI, {from: accounts[2]});
//		const uintQ4TYG6t = await afiControllerCqYGbup.setSplit.call(uintSFl5Hk0, {from: accounts[2]});
//		const addressBd5uKHq = await afiControllerCqYGbup.withdraw.call(addresssNMVhjH, uinthAgY3w, {from: accounts[0]});

		await expect(afiControllerCqYGbup.yearn.call(addressmhhAL8B, addressNUIJHTR, uintpg5BIVI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDcBQY0z = accounts[2]
		const afiControllerKdHdPIy = await afiController.new(addressDcBQY0z, {from: accounts[0]});
		const addressy4wQa4a = accounts[3]
		const addresscjb3euQ = accounts[2]
		const addressvVyQ7K6 = "0x0000000000000000000000000000000000000001"
		const addressA9NAyke = accounts[5]
		const addressO1qdDdL = accounts[5]
//		const addressPqbGTsE = await afiControllerKdHdPIy.setVault.call(addresscjb3euQ, addressy4wQa4a, {from: accounts[1]});
//		const addressOmrVkf5 = await afiControllerKdHdPIy.inCaseStrategyTokenGetStuck.call(addressA9NAyke, addressvVyQ7K6, {from: accounts[1]});
//		const addresszX7Vsm = await afiControllerKdHdPIy.setRewards.call(addressO1qdDdL, {from: accounts[5]});

		await expect(afiControllerKdHdPIy.setVault.call(addresscjb3euQ, addressy4wQa4a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressd8brqGd = accounts[3]
		const afiControllerbBgOWAJ = await afiController.new(addressd8brqGd, {from: accounts[0]});
		const uintHHRw9ot = BigInt("1480")
		const addressvZfb50J = accounts[4]
		const addressdjapO72 = accounts[3]
//		const addressg3C0zuu = await afiControllerbBgOWAJ.inCaseTokensGetStuck.call(addressvZfb50J, uintHHRw9ot, {from: accounts[2]});
//		const addressoiCKNAO = await afiControllerbBgOWAJ.setStrategist.call(addressdjapO72, {from: accounts[2]});

		await expect(afiControllerbBgOWAJ.inCaseTokensGetStuck.call(addressvZfb50J, uintHHRw9ot, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNFCegS = "0x0000000000000000000000000000000000000001"
		const afiControllerFfGIZXY = await afiController.new(addressNFCegS, {from: accounts[4]});
		const addressUzydrbT = accounts[0]
		const addressCzdiDU = accounts[1]
		const address7mVndg = "0x0000000000000000000000000000000000000001"
		const addressWvsv9A = accounts[4]
		const addressloKO0m = accounts[1]
		const uintHHA8c6R = BigInt("1965")
		const addressNqx2uK1 = accounts[2]
//		const addressc4AEa9g = await afiControllerFfGIZXY.setGovernance.call(addressUzydrbT, {from: accounts[2]});
//		const addressBlE6nFu = await afiControllerFfGIZXY.inCaseStrategyTokenGetStuck.call(address7mVndg, addressCzdiDU, {from: accounts[5]});
//		const addressJ2SwTFr = await afiControllerFfGIZXY.revokeStrategy.call(addressloKO0m, addressWvsv9A, {from: accounts[3]});
//		const addressZjfs4sb = await afiControllerFfGIZXY.withdraw.call(addressNqx2uK1, uintHHA8c6R, {from: accounts[3]});

		await expect(afiControllerFfGIZXY.setGovernance.call(addressUzydrbT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjJ0X8vp = accounts[5]
		const afiControllerNZZfbb = await afiController.new(addressjJ0X8vp, {from: accounts[5]});
		const addresspSoUi8 = "0x0000000000000000000000000000000000000001"
		const addressyxLF1zV = accounts[1]
		const addressndwJfhx = accounts[1]
		const addressMUQLp9V = accounts[2]
		const addressPxN4n6 = accounts[4]
		const addressvK8YyNk = accounts[3]
		const addressyxQPnmp = accounts[3]
//		const addressbmNp3OJ = await afiControllerNZZfbb.approveStrategy.call(addressyxLF1zV, addresspSoUi8, {from: accounts[1]});
//		const addresslzEHg1 = await afiControllerNZZfbb.withdrawAll.call(addressndwJfhx, {from: accounts[4]});
//		const addresszau5QYy = await afiControllerNZZfbb.setVault.call(addressPxN4n6, addressMUQLp9V, {from: accounts[0]});
//		const uintDu1Pe9f = await afiControllerNZZfbb.balanceOf.call(addressvK8YyNk, {from: accounts[3]});
//		const addresswCOIdy = await afiControllerNZZfbb.setGovernance.call(addressyxQPnmp, {from: accounts[0]});

		await expect(afiControllerNZZfbb.approveStrategy.call(addressyxLF1zV, addresspSoUi8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressczarwH6 = accounts[1]
		const afiControllerFJUOGB = await afiController.new(addressczarwH6, {from: accounts[0]});
		const addressOTSEsP = accounts[4]
		const addressSe6vQqJ = accounts[5]
		const addressm1eqkas = accounts[4]
		const addresszXKweu = accounts[3]
		const addressZ0KXclv = accounts[4]
		const addressi7mMy6a = accounts[1]
		const addressXRLtNF = accounts[2]
		const addressX06M6Qx = accounts[0]
		const addressLajX0m1 = accounts[3]
//		const uintFeCEKZp = await afiControllerFJUOGB.balanceOf.call(addressOTSEsP, {from: accounts[4]});
//		const addressO55ZPcQ = await afiControllerFJUOGB.setConverter.call(addresszXKweu, addressm1eqkas, addressSe6vQqJ, {from: accounts[2]});
//		const uintAe82LKg = await afiControllerFJUOGB.balanceOf.call(addressZ0KXclv, {from: accounts[1]});
//		const addressZnPmV8o = await afiControllerFJUOGB.withdrawAll.call(addressi7mMy6a, {from: accounts[1]});
//		const addressjVBeYtz = await afiControllerFJUOGB.approveStrategy.call(addressX06M6Qx, addressXRLtNF, {from: accounts[3]});
//		const addressiEvSzs5 = await afiControllerFJUOGB.withdrawAll.call(addressLajX0m1, {from: accounts[2]});

		await expect(afiControllerFJUOGB.balanceOf.call(addressOTSEsP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJWTTjzJ = accounts[5]
		const afiControllergt2QTwL = await afiController.new(addressJWTTjzJ, {from: accounts[4]});
		const addresss0qoc3S = accounts[0]
		const addressYERef8d = accounts[2]
		const addressNWnaVxL = accounts[0]
		const uintLRANlYx = BigInt("1340")
		const addressr4yrI42 = accounts[3]
//		const addressG4n3xUh = await afiControllergt2QTwL.setConverter.call(addressNWnaVxL, addressYERef8d, addresss0qoc3S, {from: accounts[3]});
//		const addressi67O8w8 = await afiControllergt2QTwL.earn.call(addressr4yrI42, uintLRANlYx, {from: accounts[3]});

		await expect(afiControllergt2QTwL.setConverter.call(addressNWnaVxL, addressYERef8d, addresss0qoc3S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOWhYB15 = accounts[3]
		const afiControllerbBgOWAJ = await afiController.new(addressOWhYB15, {from: accounts[0]});
		const addressUQPTR6H = accounts[5]
		const addresss8kBIpT = "0x0000000000000000000000000000000000000001"
		const addressOIQMncY = accounts[1]
		const uintHwoSkFE = BigInt("1480")
		const addressbmfn9Qv = accounts[4]
		const addressHtwAI65 = accounts[4]
//		const addressFFjo7Q0 = await afiControllerbBgOWAJ.withdrawAll.call(addressUQPTR6H, {from: accounts[3]});
//		const addressEcdcvR = await afiControllerbBgOWAJ.setVault.call(addressOIQMncY, addresss8kBIpT, {from: accounts[0]});
//		const addressg3C0zuu = await afiControllerbBgOWAJ.inCaseTokensGetStuck.call(addressbmfn9Qv, uintHwoSkFE, {from: accounts[2]});
//		const addressoiCKNAO = await afiControllerbBgOWAJ.setStrategist.call(addressHtwAI65, {from: accounts[2]});

		await expect(afiControllerbBgOWAJ.withdrawAll.call(addressUQPTR6H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIdrhvVk = accounts[3]
		const afiControllerbBgOWAJ = await afiController.new(addressIdrhvVk, {from: accounts[0]});
		const addressUsxawGV = accounts[3]
//		const addressoiCKNAO = await afiControllerbBgOWAJ.setStrategist.call(addressUsxawGV, {from: accounts[2]});

		await expect(afiControllerbBgOWAJ.setStrategist.call(addressUsxawGV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBUDswz1 = accounts[3]
		const afiControllerbBgOWAJ = await afiController.new(addressBUDswz1, {from: accounts[0]});
		const uinttmXNPE4 = BigInt("2022")
		const addresscLCTQNq = accounts[4]
		const addressbIZ3rn = accounts[3]
//		const addressUIDya7 = await afiControllerbBgOWAJ.withdraw.call(addresscLCTQNq, uinttmXNPE4, {from: accounts[2]});
//		const addressoiCKNAO = await afiControllerbBgOWAJ.setStrategist.call(addressbIZ3rn, {from: accounts[2]});

		await expect(afiControllerbBgOWAJ.withdraw.call(addresscLCTQNq, uinttmXNPE4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKJLe9Yk = accounts[3]
		const afiControllerbBgOWAJ = await afiController.new(addressKJLe9Yk, {from: accounts[0]});
		const addressOZ2aAm1 = "0x0000000000000000000000000000000000000001"
		const addressLH6OG9 = accounts[3]
		const addressVzPHzpk = "0x0000000000000000000000000000000000000001"
		const addressnoVDrtn = accounts[1]
		const addressBlTvr6E = await afiControllerbBgOWAJ.setOneSplit.call(addressOZ2aAm1, {from: accounts[0]});
//		const addressoiCKNAO = await afiControllerbBgOWAJ.setStrategist.call(addressLH6OG9, {from: accounts[2]});
//		const addressMohW8hu = await afiControllerbBgOWAJ.setVault.call(addressnoVDrtn, addressVzPHzpk, {from: accounts[0]});

		await expect(afiControllerbBgOWAJ.setStrategist.call(addressLH6OG9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvUg4vdJ = accounts[3]
		const afiControllerbBgOWAJ = await afiController.new(addressvUg4vdJ, {from: accounts[0]});
		const addressje38269 = accounts[2]
		const addressHBcWR5N = accounts[1]
		const addressHazYsRp = accounts[4]
		const uintIH8LVuP = BigInt("1131")
		const addressjYhaNr1 = "0x0000000000000000000000000000000000000001"
		const addressr6uavT1 = accounts[1]
		const addressjDYSMPx = "0x0000000000000000000000000000000000000001"
//		const addresscjQB5jt = await afiControllerbBgOWAJ.inCaseStrategyTokenGetStuck.call(addressHBcWR5N, addressje38269, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoiCKNAO = await afiControllerbBgOWAJ.setStrategist.call(addressHazYsRp, {from: accounts[2]});
//		const addressUUdQDab = await afiControllerbBgOWAJ.inCaseTokensGetStuck.call(addressjYhaNr1, uintIH8LVuP, {from: accounts[4]});
//		const addressTYDUYZp = await afiControllerbBgOWAJ.revokeStrategy.call(addressjDYSMPx, addressr6uavT1, {from: accounts[2]});

		await expect(afiControllerbBgOWAJ.inCaseStrategyTokenGetStuck.call(addressHBcWR5N, addressje38269, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvfxoFdr = "0x0000000000000000000000000000000000000001"
		const afiControllerh5yVFd = await afiController.new(addressvfxoFdr, {from: accounts[3]});
		const addressRRrsJF4 = accounts[5]
		const addressSmJYDV6 = accounts[4]
		const addressRyfvSqo = "0x0000000000000000000000000000000000000001"
		const addressQfI4cW9 = accounts[2]
		const addresstpwoTMI = accounts[4]
		const uintBeQI0Ue = BigInt("929")
		const addressjawdWsx = accounts[1]
		const addressZxtHNAY = accounts[2]
		const addressUS2Wywe = accounts[1]
//		const addressM3fLQ9j = await afiControllerh5yVFd.setStrategy.call(addressSmJYDV6, addressRRrsJF4, {from: accounts[2]});
//		const addressYkc1Mr7 = await afiControllerh5yVFd.setGovernance.call(addressRyfvSqo, {from: accounts[0]});
//		const addressupkbml = await afiControllerh5yVFd.setRewards.call(addressQfI4cW9, {from: accounts[1]});
//		const addressf2Fmmax = await afiControllerh5yVFd.setStrategist.call(addresstpwoTMI, {from: accounts[1]});
//		const addressFgtRWRd = await afiControllerh5yVFd.yearn.call(addressZxtHNAY, addressjawdWsx, uintBeQI0Ue, {from: accounts[0]});
//		const addressbPOufuT = await afiControllerh5yVFd.withdrawAll.call(addressUS2Wywe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerh5yVFd.setStrategy.call(addressSmJYDV6, addressRRrsJF4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqPYWGhf = accounts[3]
		const afiControllerbBgOWAJ = await afiController.new(addressqPYWGhf, {from: accounts[0]});
		const addresse2fMoj = accounts[2]
		const addressyihBn3U = accounts[3]
		const addressDodAu1i = accounts[4]
		const addressivhf1Wb = accounts[0]
		const addressOdgct9f = accounts[4]
//		const addresspP0RcWt = await afiControllerbBgOWAJ.revokeStrategy.call(addressyihBn3U, addresse2fMoj, {from: accounts[1]});
//		const addresstd33YP4 = await afiControllerbBgOWAJ.setStrategy.call(addressivhf1Wb, addressDodAu1i, {from: accounts[0]});
//		const addressoiCKNAO = await afiControllerbBgOWAJ.setStrategist.call(addressOdgct9f, {from: accounts[2]});

		await expect(afiControllerbBgOWAJ.revokeStrategy.call(addressyihBn3U, addresse2fMoj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressR43Y0iX = accounts[2]
		const afiControllerBkttpqu = await afiController.new(addressR43Y0iX, {from: accounts[3]});
		const uintSGMriP8 = BigInt("1338")
		const addresszByoDI2 = accounts[2]
		const addressPiDvneH = accounts[3]
		const uintlmX1Z4I = BigInt("933")
		const addressxRVZvbx = "0x0000000000000000000000000000000000000001"
		const addressxYaFIHu = accounts[3]
		const addressWgrMGjo = accounts[0]
		const addresstOW8lcO = accounts[5]
		const addressL7BEv1Z = "0x0000000000000000000000000000000000000001"
//		const uintTiZNV9H = await afiControllerBkttpqu.setSplit.call(uintSGMriP8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressQ3M6G5I = await afiControllerBkttpqu.setStrategy.call(addressPiDvneH, addresszByoDI2, {from: accounts[2]});
//		const uintVB9jT5i = await afiControllerBkttpqu.getExpectedReturn.call(addressxYaFIHu, addressxRVZvbx, uintlmX1Z4I, {from: accounts[0]});
//		const addressfeD5ON3 = await afiControllerBkttpqu.setRewards.call(addressWgrMGjo, {from: accounts[3]});
//		const addressbXZdWAE = await afiControllerBkttpqu.setStrategy.call(addressL7BEv1Z, addresstOW8lcO, {from: accounts[4]});

		await expect(afiControllerBkttpqu.setSplit.call(uintSGMriP8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXyeA0Iz = accounts[0]
		const afiControllersnRgaFo = await afiController.new(addressXyeA0Iz, {from: accounts[4]});
		const addressfp3tqv = accounts[2]
		const addresskwFNUFr = accounts[3]
		const addressrRHwids = "0x0000000000000000000000000000000000000001"
//		const addressCi1OuVy = await afiControllersnRgaFo.setRewards.call(addressfp3tqv, {from: accounts[0]});
//		const addressgoSqugV = await afiControllersnRgaFo.approveStrategy.call(addressrRHwids, addresskwFNUFr, {from: accounts[4]});

		await expect(afiControllersnRgaFo.setRewards.call(addressfp3tqv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressR1w2XAy = accounts[3]
		const afiControllerbBgOWAJ = await afiController.new(addressR1w2XAy, {from: accounts[0]});
		const uintCRvJTpe = BigInt("409")
		const addressUlDMUcy = accounts[4]
		const addresscuQrYwK = accounts[1]
		const addressngFDoNk = accounts[3]
//		const uintjaGMxW5 = await afiControllerbBgOWAJ.getExpectedReturn.call(addresscuQrYwK, addressUlDMUcy, uintCRvJTpe, {from: accounts[1]});
//		const addressoiCKNAO = await afiControllerbBgOWAJ.setStrategist.call(addressngFDoNk, {from: accounts[2]});

		await expect(afiControllerbBgOWAJ.getExpectedReturn.call(addresscuQrYwK, addressUlDMUcy, uintCRvJTpe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressG3zftBb = accounts[3]
		const afiControllerbBgOWAJ = await afiController.new(addressG3zftBb, {from: accounts[0]});
		const addressMgCIexg = accounts[0]
		const addressy78lh0 = accounts[5]
		const uintoPdGG59 = BigInt("1407")
		const addressBqpVbp = accounts[4]
		const addressxgzQlLR = accounts[0]
		const addressB4FHwOH = accounts[3]
//		const addressyAKMlSt = await afiControllerbBgOWAJ.setStrategy.call(addressy78lh0, addressMgCIexg, {from: accounts[0]});
//		const addressEMaejo = await afiControllerbBgOWAJ.yearn.call(addressxgzQlLR, addressBqpVbp, uintoPdGG59, {from: accounts[3]});
//		const addressoiCKNAO = await afiControllerbBgOWAJ.setStrategist.call(addressB4FHwOH, {from: accounts[2]});

		await expect(afiControllerbBgOWAJ.setStrategy.call(addressy78lh0, addressMgCIexg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskPKPKT9 = "0x0000000000000000000000000000000000000001"
		const afiControllerYzOmRuc = await afiController.new(addresskPKPKT9, {from: accounts[3]});
		const uintlkbzcAj = BigInt("623")
		const addressxoFMe3 = accounts[0]
		const addresstO0QTTP = accounts[0]
		const addressu9WKouR = "0x0000000000000000000000000000000000000001"
		const addressRTFlelR = accounts[0]
		const addressLNZkYj = accounts[0]
		const addressBdJYtu = accounts[3]
		const addressMwk1CK = accounts[3]
		const addressYHfpB2m = accounts[3]
		const addresszCMpLVL = accounts[2]
//		const addressIUd5qBs = await afiControllerYzOmRuc.inCaseTokensGetStuck.call(addressxoFMe3, uintlkbzcAj, {from: accounts[3]});
//		const addressTjun9zl = await afiControllerYzOmRuc.setStrategy.call(addressu9WKouR, addresstO0QTTP, {from: accounts[0]});
//		const addressAakmbWj = await afiControllerYzOmRuc.setConverter.call(addressBdJYtu, addressLNZkYj, addressRTFlelR, {from: accounts[2]});
//		const addressOQEQIM = await afiControllerYzOmRuc.setRewards.call(addressMwk1CK, {from: accounts[4]});
//		const addressIO0ku0G = await afiControllerYzOmRuc.inCaseStrategyTokenGetStuck.call(addresszCMpLVL, addressYHfpB2m, {from: accounts[4]});

		await expect(afiControllerYzOmRuc.inCaseTokensGetStuck.call(addressxoFMe3, uintlkbzcAj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
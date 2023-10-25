const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressaFAz2c4 = accounts[1]
		const afiControllerqp2Uv7w = await afiController.new(addressaFAz2c4, {from: accounts[4]});
		const addressmkQzVk = accounts[4]
		const addressIRvtCRv = accounts[4]
		const addressFOCHRJ5 = accounts[4]
		const addressV1mPL6 = accounts[3]
		const address8d1BEs = accounts[3]
		const addressLZr7Fz = accounts[0]
		const addressFeUPIxo = "0x0000000000000000000000000000000000000001"
		const addressRjIKljR = accounts[2]
		const addressohJzS38 = "0x0000000000000000000000000000000000000001"
		const addressuymTYwa = await afiControllerqp2Uv7w.withdrawAll.call(addressmkQzVk, {from: accounts[2]});
		const addressam3TIhl = await afiControllerqp2Uv7w.setConverter.call(addressV1mPL6, addressFOCHRJ5, addressIRvtCRv, {from: accounts[4]});
		const uintYjtjPoL = await afiControllerqp2Uv7w.balanceOf.call(address8d1BEs, {from: accounts[2]});
		const addressEKTzkhX = await afiControllerqp2Uv7w.inCaseStrategyTokenGetStuck.call(addressFeUPIxo, addressLZr7Fz, {from: accounts[4]});
		const addressrp1wPA = await afiControllerqp2Uv7w.setVault.call(addressohJzS38, addressRjIKljR, {from: accounts[4]});

		await expect(afiControllerqp2Uv7w.withdrawAll.call(addressmkQzVk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZZXcuLQ = accounts[2]
		const afiControllerZZlo55Z = await afiController.new(addressZZXcuLQ, {from: accounts[1]});
		const uintVuFDhqa = BigInt("1386")
		const addressLDEUfnM = accounts[3]
		const addressMVCURWd = accounts[0]
		const uintacHc3p0 = BigInt("71")
		const addressNiN8ipQ = accounts[0]
		const addressVKxI8Pw = accounts[3]
		const addressNvYL8UX = accounts[4]
		const addressxSBEtg3 = await afiControllerZZlo55Z.inCaseTokensGetStuck.call(addressLDEUfnM, uintVuFDhqa, {from: accounts[5]});
		const uintmVOzAER = await afiControllerZZlo55Z.balanceOf.call(addressMVCURWd, {from: accounts[5]});
		const addressRtQprWA = await afiControllerZZlo55Z.earn.call(addressNiN8ipQ, uintacHc3p0, {from: accounts[2]});
		const addressQSYMJIl = await afiControllerZZlo55Z.approveStrategy.call(addressNvYL8UX, addressVKxI8Pw, {from: accounts[4]});

		await expect(afiControllerZZlo55Z.inCaseTokensGetStuck.call(addressLDEUfnM, uintVuFDhqa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOBEdzg7 = accounts[1]
		const afiControllerZcfD4Dk = await afiController.new(addressOBEdzg7, {from: accounts[0]});
		const addressmBUwvyS = accounts[0]
		const addressHg3bzw9 = accounts[0]
		const addressFjG9912 = accounts[3]
		const uintqqhuwDa = BigInt("780")
		const addressQMWNAoy = accounts[2]
		const uint7k1aR1 = await afiControllerZcfD4Dk.balanceOf.call(addressmBUwvyS, {from: accounts[1]});
		const addressNRih44a = await afiControllerZcfD4Dk.approveStrategy.call(addressFjG9912, addressHg3bzw9, {from: accounts[3]});
		const addresstPfbSKk = await afiControllerZcfD4Dk.earn.call(addressQMWNAoy, uintqqhuwDa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerZcfD4Dk.balanceOf.call(addressmBUwvyS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressC0lviHl = accounts[3]
		const afiControllerENqBBtP = await afiController.new(addressC0lviHl, {from: "0x0000000000000000000000000000000000000001"});
		const addressBI7aPkC = accounts[1]
		const uintzfFsTlC = BigInt("1932")
		const addressQw6A4To = accounts[0]
		const addressR6ub0Kt = accounts[1]
		const uintCoOXvQp = await afiControllerENqBBtP.balanceOf.call(addressBI7aPkC, {from: accounts[4]});
		const addressXV6vR5R = await afiControllerENqBBtP.earn.call(addressQw6A4To, uintzfFsTlC, {from: accounts[0]});
		const addresscjFr15 = await afiControllerENqBBtP.setRewards.call(addressR6ub0Kt, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addressMJKDevz = accounts[5]
		const afiControllerJBd80H = await afiController.new(addressMJKDevz, {from: accounts[2]});
		const addressSWB03N4 = accounts[3]
		const uintE30NeeX = BigInt("683")
		const addressWFFMCJr = accounts[0]
		const addressUO0uj2f = accounts[3]
		const addressiMiowFQ = accounts[3]
		const uintQ0qhRtu = BigInt("551")
		const addressj1ygfqm = accounts[3]
		const addressYnLkhF = accounts[5]
		const addressBnAhgbf = await afiControllerJBd80H.setRewards.call(addressSWB03N4, {from: accounts[1]});
		const uintvNcQBND = await afiControllerJBd80H.getExpectedReturn.call(addressUO0uj2f, addressWFFMCJr, uintE30NeeX, {from: accounts[2]});
		const addressaw1qj67 = await afiControllerJBd80H.setStrategist.call(addressiMiowFQ, {from: accounts[2]});
		const addresswywbxSs = await afiControllerJBd80H.earn.call(addressj1ygfqm, uintQ0qhRtu, {from: accounts[5]});
		const addressta4OZOS = await afiControllerJBd80H.withdrawAll.call(addressYnLkhF, {from: accounts[5]});

		await expect(afiControllerJBd80H.setRewards.call(addressSWB03N4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaDUhon = "0x0000000000000000000000000000000000000001"
		const afiControllerFGex7Hi = await afiController.new(addressaDUhon, {from: accounts[1]});
		const addressSXxpFiK = accounts[3]
		const addressBMvhvKj = accounts[3]
		const addressO3FTOVd = accounts[3]
		const addressCE1spYN = accounts[1]
		const addressCP3xrqR = accounts[2]
		const addressaTCnbjL = "0x0000000000000000000000000000000000000001"
		const addressLGLg9mL = "0x0000000000000000000000000000000000000001"
		const addressVRaFRnI = await afiControllerFGex7Hi.setGovernance.call(addressSXxpFiK, {from: accounts[0]});
		const addresskiZauwi = await afiControllerFGex7Hi.setStrategist.call(addressBMvhvKj, {from: accounts[2]});
		const addressigqgAhN = await afiControllerFGex7Hi.setVault.call(addressCE1spYN, addressO3FTOVd, {from: accounts[2]});
		const addressKWRDCSG = await afiControllerFGex7Hi.revokeStrategy.call(addressaTCnbjL, addressCP3xrqR, {from: accounts[5]});
		const address3kCwmJ = await afiControllerFGex7Hi.setOneSplit.call(addressLGLg9mL, {from: accounts[2]});

		await expect(afiControllerFGex7Hi.setGovernance.call(addressSXxpFiK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQdy4OCC = accounts[0]
		const afiControllerSgFAgu = await afiController.new(addressQdy4OCC, {from: accounts[4]});
		const addressApxYZHL = accounts[3]
		const addressPsyFFzu = accounts[2]
		const addressx5qycAC = accounts[3]
		const addresscXNfaUf = accounts[2]
		const addressaUibuT = accounts[0]
		const addressN5yt0Ik = accounts[5]
		const uintS425ii = BigInt("1883")
		const addressoTSvod9 = accounts[4]
		const addressOVqkoWA = accounts[1]
		const addressJGeT5xA = await afiControllerSgFAgu.setConverter.call(addressx5qycAC, addressPsyFFzu, addressApxYZHL, {from: accounts[4]});
		const addressEq7HExE = await afiControllerSgFAgu.setStrategy.call(addressaUibuT, addresscXNfaUf, {from: accounts[1]});
		const address56nNB3 = await afiControllerSgFAgu.withdrawAll.call(addressN5yt0Ik, {from: accounts[2]});
		const uintS6Xw085 = await afiControllerSgFAgu.getExpectedReturn.call(addressOVqkoWA, addressoTSvod9, uintS425ii, {from: accounts[4]});

		await expect(afiControllerSgFAgu.setStrategy.call(addressaUibuT, addresscXNfaUf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressq1PXGj = accounts[0]
		const afiControllerf9TawoG = await afiController.new(addressq1PXGj, {from: accounts[4]});
		const addressPrw5jLw = accounts[4]
		const addressS8D07oR = accounts[3]
		const uintC9aMFdM = BigInt("1351")
		const addressZAcDmIu = accounts[4]
		const addressvZKsg1s = accounts[4]
		const addressfT52Rdm = await afiControllerf9TawoG.inCaseStrategyTokenGetStuck.call(addressS8D07oR, addressPrw5jLw, {from: accounts[5]});
		const uinttjRgx0 = await afiControllerf9TawoG.setSplit.call(uintC9aMFdM, {from: accounts[2]});
		const addressCM1T3W = await afiControllerf9TawoG.approveStrategy.call(addressvZKsg1s, addressZAcDmIu, {from: accounts[4]});

		await expect(afiControllerf9TawoG.inCaseStrategyTokenGetStuck.call(addressS8D07oR, addressPrw5jLw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUM98ZGs = accounts[0]
		const afiControllerSgFAgu = await afiController.new(addressUM98ZGs, {from: accounts[4]});
		const addressbxpFGQa = accounts[3]
		const addressvc6wObE = accounts[2]
		const addressKG2DtSi = accounts[3]
		const addressuWj3ZY7 = accounts[4]
		const addressvCyI6V9 = accounts[2]
		const addresssG9s2aK = accounts[0]
		const addresshS3lZns = accounts[5]
		const uintwUqXtDX = BigInt("1883")
		const addressB3nBUB7 = accounts[4]
		const addressa7ErL3N = accounts[1]
		const addressJGeT5xA = await afiControllerSgFAgu.setConverter.call(addressKG2DtSi, addressvc6wObE, addressbxpFGQa, {from: accounts[4]});
		const addressTJu511n = await afiControllerSgFAgu.setOneSplit.call(addressuWj3ZY7, {from: accounts[2]});
		const addressEq7HExE = await afiControllerSgFAgu.setStrategy.call(addresssG9s2aK, addressvCyI6V9, {from: accounts[1]});
		const address56nNB3 = await afiControllerSgFAgu.withdrawAll.call(addresshS3lZns, {from: accounts[2]});
		const uintS6Xw085 = await afiControllerSgFAgu.getExpectedReturn.call(addressa7ErL3N, addressB3nBUB7, uintwUqXtDX, {from: accounts[4]});

		await expect(afiControllerSgFAgu.setOneSplit.call(addressuWj3ZY7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslU9mWJa = accounts[3]
		const afiControllerVPaWNDS = await afiController.new(addresslU9mWJa, {from: accounts[3]});
		const uintcG0KnNk = BigInt("242")
		const addressC8tMbju = accounts[3]
		const uintcqMJPx0 = BigInt("10")
		const addressSF207t2 = accounts[0]
		const addressUzustYB = accounts[2]
		const addresssjktLWg = accounts[4]
		const addressgSqXYL6 = accounts[1]
		const addressEisqTOJ = accounts[3]
		const addressalRzE4b = accounts[1]
		const addressG04DR3V = accounts[3]
		const addressuXiI6Nt = accounts[5]
		const addressI1WNBJc = accounts[1]
		const addresststIF6 = await afiControllerVPaWNDS.withdraw.call(addressC8tMbju, uintcG0KnNk, {from: accounts[2]});
		const uintC853bhC = await afiControllerVPaWNDS.getExpectedReturn.call(addressUzustYB, addressSF207t2, uintcqMJPx0, {from: accounts[3]});
		const addressjC59Uha = await afiControllerVPaWNDS.setConverter.call(addressEisqTOJ, addressgSqXYL6, addresssjktLWg, {from: accounts[4]});
		const addressCrv9E7k = await afiControllerVPaWNDS.setGovernance.call(addressalRzE4b, {from: accounts[0]});
		const addressfqQkQbP = await afiControllerVPaWNDS.setGovernance.call(addressG04DR3V, {from: "0x0000000000000000000000000000000000000001"});
		const addressD7eFDx5 = await afiControllerVPaWNDS.revokeStrategy.call(addressI1WNBJc, addressuXiI6Nt, {from: accounts[0]});

		await expect(afiControllerVPaWNDS.withdraw.call(addressC8tMbju, uintcG0KnNk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskrJs2i6 = accounts[3]
		const afiControllern4vY95N = await afiController.new(addresskrJs2i6, {from: accounts[2]});
		const addressLbuOaqU = accounts[3]
		const addressuuTmneY = accounts[3]
		const addressMWvr0FB = accounts[0]
		const addressy5lZB1x = accounts[2]
		const uintuLIZ8nE = BigInt("1862")
		const addressq5dHM0l = accounts[2]
		const addressQayFtTf = accounts[5]
		const addressrOrjn6u = accounts[3]
		const addressa21hBK7 = await afiControllern4vY95N.approveStrategy.call(addressuuTmneY, addressLbuOaqU, {from: accounts[3]});
		const addressKup5Nn = await afiControllern4vY95N.inCaseStrategyTokenGetStuck.call(addressy5lZB1x, addressMWvr0FB, {from: accounts[5]});
		const addressyCd1m95 = await afiControllern4vY95N.inCaseTokensGetStuck.call(addressq5dHM0l, uintuLIZ8nE, {from: accounts[1]});
		const addressYoUpYJ = await afiControllern4vY95N.setGovernance.call(addressQayFtTf, {from: accounts[2]});
		const addressBAjnHbZ = await afiControllern4vY95N.setOneSplit.call(addressrOrjn6u, {from: accounts[0]});

		await expect(afiControllern4vY95N.approveStrategy.call(addressuuTmneY, addressLbuOaqU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressEgXcAeD = accounts[2]
		const afiControllerZZlo55Z = await afiController.new(addressEgXcAeD, {from: accounts[1]});
		const uintsDRxeTc = BigInt("1462")
		const addressnQ40mxw = accounts[0]
		const addresslNBpJEu = accounts[1]
		const uintDQSXEIv = BigInt("1386")
		const addressxBMjHMr = accounts[3]
		const addressG3jor42 = accounts[0]
		const uintlUfglTf = BigInt("71")
		const addressCzuQbTO = accounts[0]
		const uintBUdv8i6 = BigInt("1037")
		const addressmNTvmir = accounts[3]
		const addressvXxVCuo = accounts[3]
		const uintdyp9Mzb = await afiControllerZZlo55Z.getExpectedReturn.call(addresslNBpJEu, addressnQ40mxw, uintsDRxeTc, {from: accounts[2]});
		const addressxSBEtg3 = await afiControllerZZlo55Z.inCaseTokensGetStuck.call(addressxBMjHMr, uintDQSXEIv, {from: accounts[5]});
		const uintmVOzAER = await afiControllerZZlo55Z.balanceOf.call(addressG3jor42, {from: accounts[5]});
		const addressRtQprWA = await afiControllerZZlo55Z.earn.call(addressCzuQbTO, uintlUfglTf, {from: accounts[2]});
		const uinthDhIHjq = await afiControllerZZlo55Z.setSplit.call(uintBUdv8i6, {from: accounts[4]});
		const addressQSYMJIl = await afiControllerZZlo55Z.approveStrategy.call(addressvXxVCuo, addressmNTvmir, {from: accounts[4]});

		await expect(afiControllerZZlo55Z.getExpectedReturn.call(addresslNBpJEu, addressnQ40mxw, uintsDRxeTc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslYXv8M9 = accounts[2]
		const afiControllerifg8XI4 = await afiController.new(addresslYXv8M9, {from: accounts[4]});
		const addressA9LcCY5 = accounts[3]
		const addressxL3li8f = accounts[3]
		const addressJonwlLz = "0x0000000000000000000000000000000000000001"
		const addressnHB5UJj = accounts[0]
		const uintTbiMHy4 = BigInt("2034")
		const addressuoKo30j = "0x0000000000000000000000000000000000000001"
		const addressT0NrnCf = accounts[2]
		const addressnZJzIy = await afiControllerifg8XI4.revokeStrategy.call(addressxL3li8f, addressA9LcCY5, {from: accounts[4]});
		const addressuZl018o = await afiControllerifg8XI4.approveStrategy.call(addressnHB5UJj, addressJonwlLz, {from: accounts[5]});
		const uintSaygGaQ = await afiControllerifg8XI4.setSplit.call(uintTbiMHy4, {from: accounts[5]});
		const addresssRCAQle = await afiControllerifg8XI4.approveStrategy.call(addressT0NrnCf, addressuoKo30j, {from: accounts[5]});

		await expect(afiControllerifg8XI4.approveStrategy.call(addressnHB5UJj, addressJonwlLz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSDjcINq = "0x0000000000000000000000000000000000000001"
		const afiControllerFGex7Hi = await afiController.new(addressSDjcINq, {from: accounts[1]});
		const addressZUD1clu = accounts[3]
		const addressBPOsB5e = accounts[3]
		const addressuuOyL8i = accounts[1]
		const addresscVagvoj = accounts[2]
		const addressa63Vg4 = "0x0000000000000000000000000000000000000001"
		const addressVEFMzZo = "0x0000000000000000000000000000000000000001"
		const addresskiZauwi = await afiControllerFGex7Hi.setStrategist.call(addressZUD1clu, {from: accounts[2]});
		const addressigqgAhN = await afiControllerFGex7Hi.setVault.call(addressuuOyL8i, addressBPOsB5e, {from: accounts[2]});
		const addressKWRDCSG = await afiControllerFGex7Hi.revokeStrategy.call(addressa63Vg4, addresscVagvoj, {from: accounts[5]});
		const address3kCwmJ = await afiControllerFGex7Hi.setOneSplit.call(addressVEFMzZo, {from: accounts[2]});

		await expect(afiControllerFGex7Hi.setStrategist.call(addressZUD1clu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslamEx9R = accounts[2]
		const afiControllerBEHmWZO = await afiController.new(addresslamEx9R, {from: accounts[2]});
		const addressmbUS5NG = "0x0000000000000000000000000000000000000001"
		const addressGEQx54m = accounts[4]
		const addressIq9nyFl = accounts[0]
		const uintZIkWVc = BigInt("699")
		const addressyW5Ci1t = accounts[3]
		const address52ceiT = accounts[4]
		const uintDuQsL5 = BigInt("366")
		const addressd9lkaO = await afiControllerBEHmWZO.setVault.call(addressGEQx54m, addressmbUS5NG, {from: accounts[4]});
		const addressuqwDjoe = await afiControllerBEHmWZO.setGovernance.call(addressIq9nyFl, {from: accounts[5]});
		const addressVfDG0sK = await afiControllerBEHmWZO.earn.call(addressyW5Ci1t, uintZIkWVc, {from: accounts[2]});
		const uintndzqfvs = await afiControllerBEHmWZO.balanceOf.call(address52ceiT, {from: accounts[5]});
		const uintkRS2SjS = await afiControllerBEHmWZO.setSplit.call(uintDuQsL5, {from: accounts[4]});

		await expect(afiControllerBEHmWZO.setVault.call(addressGEQx54m, addressmbUS5NG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQnWsipf = accounts[1]
		const afiControllerZmyJEjR = await afiController.new(addressQnWsipf, {from: accounts[1]});
		const uintJKh0Hef = BigInt("593")
		const addresspKkCSyc = accounts[2]
		const uintPgsDUeT = await afiControllerZmyJEjR.setSplit.call(uintJKh0Hef, {from: accounts[2]});
		const addressnwyLovg = await afiControllerZmyJEjR.withdrawAll.call(addresspKkCSyc, {from: accounts[4]});

		await expect(afiControllerZmyJEjR.setSplit.call(uintJKh0Hef, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDJHjJN9 = accounts[0]
		const afiControllerkPf0mDA = await afiController.new(addressDJHjJN9, {from: accounts[4]});
		const uintimiIlgY = BigInt("1804")
		const addressZ4vW6Ct = accounts[3]
		const addressc8JeYSd = accounts[2]
		const addressF4Vyxo6 = accounts[4]
		const addressVdRa1CQ = accounts[4]
		const addresssNAm6gb = accounts[0]
		const addressIyIRCTL = accounts[4]
		const addresssAUlS5o = accounts[3]
		const addresszV7PwrX = accounts[1]
		const addresssOn0TPW = await afiControllerkPf0mDA.earn.call(addressZ4vW6Ct, uintimiIlgY, {from: accounts[1]});
		const addressBd6Pae9 = await afiControllerkPf0mDA.setOneSplit.call(addressc8JeYSd, {from: accounts[2]});
		const addressTfvRqgG = await afiControllerkPf0mDA.approveStrategy.call(addressVdRa1CQ, addressF4Vyxo6, {from: accounts[2]});
		const addressCNL7WA3 = await afiControllerkPf0mDA.setConverter.call(addresssAUlS5o, addressIyIRCTL, addresssNAm6gb, {from: accounts[3]});
		const addressJKHiKwl = await afiControllerkPf0mDA.withdrawAll.call(addresszV7PwrX, {from: accounts[3]});

		await expect(afiControllerkPf0mDA.earn.call(addressZ4vW6Ct, uintimiIlgY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCapNaI3 = accounts[0]
		const afiControllergadRD70 = await afiController.new(addressCapNaI3, {from: accounts[2]});
		const uintJvDzMlb = BigInt("1615")
		const addressrVmYvq = accounts[0]
		const addressbakRWV = accounts[0]
		const uintz2BrAJT = BigInt("194")
		const addressnxoxqlt = accounts[5]
		const addressvz7iaAB = accounts[1]
		const addressHCrnjkO = accounts[3]
		const addressZeljom = accounts[1]
		const addresswGATrHv = accounts[2]
		const addresss5MB6TJ = accounts[4]
		const addressksyX9fz = accounts[2]
		const addressZEnOuN6 = await afiControllergadRD70.yearn.call(addressbakRWV, addressrVmYvq, uintJvDzMlb, {from: accounts[1]});
		const uintuYJKneV = await afiControllergadRD70.getExpectedReturn.call(addressvz7iaAB, addressnxoxqlt, uintz2BrAJT, {from: accounts[2]});
		const addressIfGuFfw = await afiControllergadRD70.revokeStrategy.call(addressZeljom, addressHCrnjkO, {from: accounts[4]});
		const addressvKeOoxT = await afiControllergadRD70.setVault.call(addresss5MB6TJ, addresswGATrHv, {from: accounts[3]});
		const address8Mk7zU = await afiControllergadRD70.setGovernance.call(addressksyX9fz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllergadRD70.yearn.call(addressbakRWV, addressrVmYvq, uintJvDzMlb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrpURmFS = accounts[0]
		const afiControllerkPf0mDA = await afiController.new(addressrpURmFS, {from: accounts[4]});
		const uintqFPdmWN = BigInt("626")
		const addressBxKwV3d = accounts[1]
		const uintaxKJVrX = BigInt("1804")
		const addresswwTAjMX = accounts[3]
		const addressypVUuxu = accounts[3]
		const addressbLq1VKO = accounts[0]
		const addressYqUX0lZ = accounts[0]
		const addressf1d07B = await afiControllerkPf0mDA.inCaseTokensGetStuck.call(addressBxKwV3d, uintqFPdmWN, {from: accounts[4]});
		const addresssOn0TPW = await afiControllerkPf0mDA.earn.call(addresswwTAjMX, uintaxKJVrX, {from: accounts[1]});
		const addressBd6Pae9 = await afiControllerkPf0mDA.setOneSplit.call(addressypVUuxu, {from: accounts[2]});
		const addressdWIG4OT = await afiControllerkPf0mDA.withdrawAll.call(addressbLq1VKO, {from: accounts[2]});
		const addressJKHiKwl = await afiControllerkPf0mDA.withdrawAll.call(addressYqUX0lZ, {from: accounts[3]});

		await expect(afiControllerkPf0mDA.inCaseTokensGetStuck.call(addressBxKwV3d, uintqFPdmWN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaa9xlO5 = accounts[0]
		const afiControllerkPf0mDA = await afiController.new(addressaa9xlO5, {from: accounts[4]});
		const addressrCwvsmy = accounts[3]
		const addresseFp1cFt = accounts[0]
		const uintHjsD2jD = BigInt("1804")
		const addressFMvbXb3 = accounts[4]
		const uintHFY3Lmo = BigInt("1258")
		const addresslUzYkHB = accounts[1]
		const addressfypKS19 = accounts[0]
		const addressGYIkv23 = accounts[3]
		const addressMX81x52 = accounts[2]
		const addresszyrUV6R = accounts[3]
		const addressq40tS4 = await afiControllerkPf0mDA.setStrategy.call(addresseFp1cFt, addressrCwvsmy, {from: accounts[4]});
		const addresssOn0TPW = await afiControllerkPf0mDA.earn.call(addressFMvbXb3, uintHjsD2jD, {from: accounts[1]});
		const addressom8sXp = await afiControllerkPf0mDA.earn.call(addresslUzYkHB, uintHFY3Lmo, {from: accounts[2]});
		const addressF3AFRVG = await afiControllerkPf0mDA.inCaseStrategyTokenGetStuck.call(addressGYIkv23, addressfypKS19, {from: accounts[2]});
		const addresswEIIuC = await afiControllerkPf0mDA.inCaseStrategyTokenGetStuck.call(addresszyrUV6R, addressMX81x52, {from: accounts[5]});

		await expect(afiControllerkPf0mDA.setStrategy.call(addresseFp1cFt, addressrCwvsmy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
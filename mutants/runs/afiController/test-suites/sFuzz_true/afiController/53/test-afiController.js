const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressr0MPJC0 = accounts[3]
		const afiControllerOKMLUiF = await afiController.new(addressr0MPJC0, {from: accounts[1]});
		const uintS2wJJNq = BigInt("639")
		const addressl9EAPkQ = accounts[5]
		const addressJkjKbMA = accounts[5]
		const addressA3mEODD = accounts[0]
		const addressUmfXbsO = accounts[0]
		const addressNVtTah = await afiControllerOKMLUiF.inCaseTokensGetStuck.call(addressl9EAPkQ, uintS2wJJNq, {from: "0x0000000000000000000000000000000000000001"});
		const addressvIqAenq = await afiControllerOKMLUiF.revokeStrategy.call(addressA3mEODD, addressJkjKbMA, {from: accounts[3]});
		const uintEwAitDv = await afiControllerOKMLUiF.balanceOf.call(addressUmfXbsO, {from: accounts[5]});

		await expect(afiControllerOKMLUiF.inCaseTokensGetStuck.call(addressl9EAPkQ, uintS2wJJNq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmDikV9W = "0x0000000000000000000000000000000000000001"
		const afiControllerOHywJvp = await afiController.new(addressmDikV9W, {from: accounts[3]});
		const addresso8w2rAu = accounts[2]
		const addressGvCyI6l = "0x0000000000000000000000000000000000000001"
		const uintpUE2bW = BigInt("614")
		const addresslJMvdDf = "0x0000000000000000000000000000000000000001"
		const addresstnzV6oJ = accounts[3]
		const addressFRM9CZl = accounts[5]
		const addressKmxFjyG = await afiControllerOHywJvp.approveStrategy.call(addressGvCyI6l, addresso8w2rAu, {from: accounts[2]});
		const addressuKinKJp = await afiControllerOHywJvp.yearn.call(addresstnzV6oJ, addresslJMvdDf, uintpUE2bW, {from: accounts[0]});
		const addresslPPjP3e = await afiControllerOHywJvp.setGovernance.call(addressFRM9CZl, {from: accounts[3]});

		await expect(afiControllerOHywJvp.approveStrategy.call(addressGvCyI6l, addresso8w2rAu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscWJSBq1 = accounts[2]
		const afiControllerg19ata = await afiController.new(addresscWJSBq1, {from: accounts[2]});
		const addressZrftYcT = accounts[3]
		const addresst3Cpjbp = accounts[4]
		const addressV2cyYoj = "0x0000000000000000000000000000000000000001"
		const addressuuGwNLO = accounts[5]
		const addressNgYUuMA = accounts[3]
		const addressD2qEo18 = await afiControllerg19ata.setVault.call(addresst3Cpjbp, addressZrftYcT, {from: accounts[2]});
		const addressAskEdtB = await afiControllerg19ata.setRewards.call(addressV2cyYoj, {from: accounts[4]});
		const addressR1piLOd = await afiControllerg19ata.revokeStrategy.call(addressNgYUuMA, addressuuGwNLO, {from: accounts[0]});

		await expect(afiControllerg19ata.setRewards.call(addressV2cyYoj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address2HwHmO = accounts[4]
		const afiControllerqWviBOM = await afiController.new(address2HwHmO, {from: accounts[2]});
		const uintW6puvsH = BigInt("931")
		const addressOU407eo = accounts[2]
		const addressIdsXud = accounts[4]
		const addresssvJEw2A = accounts[2]
		const addressEfY2Zu = accounts[2]
		const uintHpXq7UE = BigInt("687")
		const uintshL0gMT = BigInt("1415")
		const addressbQERQ74 = await afiControllerqWviBOM.earn.call(addressOU407eo, uintW6puvsH, {from: accounts[4]});
		const addressXhgmegT = await afiControllerqWviBOM.setVault.call(addresssvJEw2A, addressIdsXud, {from: "0x0000000000000000000000000000000000000001"});
		const addressPye2RcQ = await afiControllerqWviBOM.setGovernance.call(addressEfY2Zu, {from: accounts[4]});
		const uintOmi7ef9 = await afiControllerqWviBOM.setSplit.call(uintHpXq7UE, {from: accounts[4]});
		const uintZYz2Cnf = await afiControllerqWviBOM.setSplit.call(uintshL0gMT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerqWviBOM.earn.call(addressOU407eo, uintW6puvsH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJjqacis = accounts[2]
		const afiControllerpcZRFm = await afiController.new(addressJjqacis, {from: accounts[3]});
		const address9OMT6D = accounts[4]
		const uintsaBCA7o = BigInt("1222")
		const addressf4wg4WZ = accounts[1]
		const addressIF5tO07 = accounts[5]
		const addressqzjyBNT = accounts[2]
		const addressZXRqXYs = accounts[4]
		const addressPJEULee = accounts[4]
		const addressumTxWuw = await afiControllerpcZRFm.setGovernance.call(address9OMT6D, {from: accounts[3]});
		const addressD5ZT4eU = await afiControllerpcZRFm.earn.call(addressf4wg4WZ, uintsaBCA7o, {from: accounts[4]});
		const addressdZaVfw7 = await afiControllerpcZRFm.inCaseStrategyTokenGetStuck.call(addressqzjyBNT, addressIF5tO07, {from: accounts[4]});
		const addressP77U1gQ = await afiControllerpcZRFm.setVault.call(addressPJEULee, addressZXRqXYs, {from: accounts[2]});

		await expect(afiControllerpcZRFm.earn.call(addressf4wg4WZ, uintsaBCA7o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressHJmVM9W = accounts[0]
		const afiControllerhRpYqw2 = await afiController.new(addressHJmVM9W, {from: accounts[2]});
		const addressl9A0ImV = accounts[1]
		const addresstRoEg9l = accounts[0]
		const address6F2gG6 = accounts[5]
		const address6QSU3k = accounts[3]
		const uinthfb5Wwa = await afiControllerhRpYqw2.balanceOf.call(addressl9A0ImV, {from: "0x0000000000000000000000000000000000000001"});
		const addressGkt6NpS = await afiControllerhRpYqw2.approveStrategy.call(address6F2gG6, addresstRoEg9l, {from: accounts[2]});
		const addressS4FBIqx = await afiControllerhRpYqw2.withdrawAll.call(address6QSU3k, {from: accounts[5]});

		await expect(afiControllerhRpYqw2.balanceOf.call(addressl9A0ImV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressHWkdNS = accounts[4]
		const afiControllerEdt311p = await afiController.new(addressHWkdNS, {from: accounts[1]});
		const addressWNGb29N = accounts[2]
		const uintCdr6El0 = BigInt("419")
		const addressjVxsNj2 = accounts[0]
		const addressJ5Qzsm6 = accounts[3]
		const address4gnWfh = accounts[1]
		const addressGFz7obZ = await afiControllerEdt311p.setStrategist.call(addressWNGb29N, {from: accounts[3]});
		const address7nMM9d = await afiControllerEdt311p.yearn.call(addressJ5Qzsm6, addressjVxsNj2, uintCdr6El0, {from: accounts[3]});
		const addressKL703B = await afiControllerEdt311p.setGovernance.call(address4gnWfh, {from: accounts[2]});

		await expect(afiControllerEdt311p.setStrategist.call(addressWNGb29N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshPdsu8n = accounts[3]
		const afiControllerajTQA1 = await afiController.new(addresshPdsu8n, {from: accounts[1]});
		const addressha6Avf7 = accounts[4]
		const addressTpzD3U = accounts[2]
		const addressv9K5OKN = accounts[5]
		const uintkRb8IDb = BigInt("571")
		const addressf8Q00h3 = accounts[3]
		const addressMyMcZea = accounts[2]
		const addressaOPrKW = accounts[4]
		const addressCYpXP4A = await afiControllerajTQA1.setConverter.call(addressv9K5OKN, addressTpzD3U, addressha6Avf7, {from: accounts[1]});
		const addressv7i54Kt = await afiControllerajTQA1.earn.call(addressf8Q00h3, uintkRb8IDb, {from: accounts[1]});
		const addressapTXTxW = await afiControllerajTQA1.setStrategist.call(addressMyMcZea, {from: accounts[1]});
		const addressesmBaNY = await afiControllerajTQA1.setStrategist.call(addressaOPrKW, {from: accounts[4]});

		await expect(afiControllerajTQA1.earn.call(addressf8Q00h3, uintkRb8IDb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdcFYjQ0 = accounts[1]
		const afiControllerhv0oA2T = await afiController.new(addressdcFYjQ0, {from: accounts[1]});
		const uintLHajcY3 = BigInt("1938")
		const addressQSyXSVD = accounts[1]
		const addressDok2U4 = accounts[2]
		const addresssPXFObw = accounts[4]
		const addressIJ6Cnth = accounts[2]
		const addressPFJ6Quv = accounts[5]
		const addressuEaJfSH = accounts[0]
		const uintH6YlmV7 = BigInt("16")
		const addressvdY0Rz = accounts[3]
		const addressGc81gpK = accounts[3]
		const uintOxtEVqC = await afiControllerhv0oA2T.getExpectedReturn.call(addressDok2U4, addressQSyXSVD, uintLHajcY3, {from: accounts[2]});
		const addressetIOFP = await afiControllerhv0oA2T.revokeStrategy.call(addressIJ6Cnth, addresssPXFObw, {from: accounts[3]});
		const addressgQrhRdm = await afiControllerhv0oA2T.setStrategy.call(addressuEaJfSH, addressPFJ6Quv, {from: "0x0000000000000000000000000000000000000001"});
		const uintszZ3YVz = await afiControllerhv0oA2T.getExpectedReturn.call(addressGc81gpK, addressvdY0Rz, uintH6YlmV7, {from: accounts[3]});

		await expect(afiControllerhv0oA2T.getExpectedReturn.call(addressDok2U4, addressQSyXSVD, uintLHajcY3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSy49mJt = accounts[2]
		const afiControllercA0r8qG = await afiController.new(addressSy49mJt, {from: accounts[0]});
		const uinteUnyFVo = BigInt("517")
		const addresssjbNYSn = accounts[2]
		const addressaf1omcx = accounts[1]
		const addressIjavi3P = accounts[2]
		const addressbeqkYn0 = accounts[1]
		const uintx1BR4ow = BigInt("945")
		const addressODU9rmF = "0x0000000000000000000000000000000000000001"
		const addressuUCIgQC = accounts[2]
		const uintvv9RPiH = BigInt("310")
		const addresskj16DoC = accounts[5]
		const addresswhZBuj = await afiControllercA0r8qG.yearn.call(addressaf1omcx, addresssjbNYSn, uinteUnyFVo, {from: accounts[4]});
		const addressdN2FLFW = await afiControllercA0r8qG.setVault.call(addressbeqkYn0, addressIjavi3P, {from: accounts[0]});
		const addresstJsIU61 = await afiControllercA0r8qG.yearn.call(addressuUCIgQC, addressODU9rmF, uintx1BR4ow, {from: accounts[4]});
		const addresszfuseJv = await afiControllercA0r8qG.inCaseTokensGetStuck.call(addresskj16DoC, uintvv9RPiH, {from: accounts[4]});

		await expect(afiControllercA0r8qG.yearn.call(addressaf1omcx, addresssjbNYSn, uinteUnyFVo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXIYjJ26 = accounts[2]
		const afiControllerg19ata = await afiController.new(addressXIYjJ26, {from: accounts[2]});
		const addressEy9E2iS = accounts[3]
		const addressUz3g6WN = accounts[4]
		const addressn6TNUyr = accounts[3]
		const addressIS1Crhv = "0x0000000000000000000000000000000000000001"
		const addressabyZQPK = accounts[4]
		const addressPRoBfsh = "0x0000000000000000000000000000000000000001"
		const addresszJhg2Vo = accounts[5]
		const addressXoWQEai = accounts[4]
		const addressD2qEo18 = await afiControllerg19ata.setVault.call(addressUz3g6WN, addressEy9E2iS, {from: accounts[2]});
		const addressLqZ1VMQ = await afiControllerg19ata.setOneSplit.call(addressn6TNUyr, {from: accounts[3]});
		const addressjC4uz8S = await afiControllerg19ata.setVault.call(addressabyZQPK, addressIS1Crhv, {from: accounts[0]});
		const addressAskEdtB = await afiControllerg19ata.setRewards.call(addressPRoBfsh, {from: accounts[4]});
		const addressR1piLOd = await afiControllerg19ata.revokeStrategy.call(addressXoWQEai, addresszJhg2Vo, {from: accounts[0]});

		await expect(afiControllerg19ata.setOneSplit.call(addressn6TNUyr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstZVVCXt = accounts[0]
		const afiControllerhRpYqw2 = await afiController.new(addresstZVVCXt, {from: accounts[2]});
		const uintYp7Xatf = BigInt("1253")
		const addresslRZroB7 = accounts[4]
		const uintU9u8MqM = BigInt("151")
		const addressiDa9ftt = accounts[1]
		const uintoBeHUwt = BigInt("458")
		const addressWMS0a2c = accounts[4]
		const addressGZxZ8tR = accounts[1]
		const addressO2ZkSQE = accounts[0]
		const addresszuWJSwy = accounts[5]
		const addressyfWKRmC = accounts[3]
		const addressOqRXeD0 = await afiControllerhRpYqw2.withdraw.call(addresslRZroB7, uintYp7Xatf, {from: accounts[4]});
		const addressIwvwUbm = await afiControllerhRpYqw2.inCaseTokensGetStuck.call(addressiDa9ftt, uintU9u8MqM, {from: accounts[4]});
		const addresscxPlUw = await afiControllerhRpYqw2.earn.call(addressWMS0a2c, uintoBeHUwt, {from: accounts[5]});
		const uinthfb5Wwa = await afiControllerhRpYqw2.balanceOf.call(addressGZxZ8tR, {from: "0x0000000000000000000000000000000000000001"});
		const addressGkt6NpS = await afiControllerhRpYqw2.approveStrategy.call(addresszuWJSwy, addressO2ZkSQE, {from: accounts[2]});
		const addressS4FBIqx = await afiControllerhRpYqw2.withdrawAll.call(addressyfWKRmC, {from: accounts[5]});

		await expect(afiControllerhRpYqw2.withdraw.call(addresslRZroB7, uintYp7Xatf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjvqI9fB = accounts[2]
		const afiControllerg19ata = await afiController.new(addressjvqI9fB, {from: accounts[2]});
		const addresszCvtEXC = accounts[5]
		const addressXPPvqF5 = accounts[1]
		const address8G9vop = accounts[2]
		const addressgD6XMVF = accounts[3]
		const addressOhusbVp = accounts[4]
		const addressC43BvaV = "0x0000000000000000000000000000000000000001"
		const addressIWV2j6b = await afiControllerg19ata.setVault.call(addressXPPvqF5, addresszCvtEXC, {from: accounts[4]});
		const addressg6knfqC = await afiControllerg19ata.setGovernance.call(address8G9vop, {from: accounts[3]});
		const addressD2qEo18 = await afiControllerg19ata.setVault.call(addressOhusbVp, addressgD6XMVF, {from: accounts[2]});
		const addressAskEdtB = await afiControllerg19ata.setRewards.call(addressC43BvaV, {from: accounts[4]});

		await expect(afiControllerg19ata.setVault.call(addressXPPvqF5, addresszCvtEXC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqi43su5 = accounts[1]
		const afiControllerWnrbJAz = await afiController.new(addressqi43su5, {from: accounts[1]});
		const addresslHA1bBv = accounts[2]
		const addressusJh3qq = accounts[2]
		const uintSOcIy9 = BigInt("91")
		const addresshKDl4sE = accounts[3]
		const addressnEB5l74 = accounts[4]
		const addresswY3lu0r = accounts[4]
		const uintG0Ald3E = BigInt("370")
		const addressxFfNQoq = accounts[0]
		const addressiI6V5Mn = accounts[2]
		const addressIWLLaJ2 = await afiControllerWnrbJAz.revokeStrategy.call(addressusJh3qq, addresslHA1bBv, {from: accounts[2]});
		const addressfCYVK9C = await afiControllerWnrbJAz.inCaseTokensGetStuck.call(addresshKDl4sE, uintSOcIy9, {from: "0x0000000000000000000000000000000000000001"});
		const addressXaOWHr = await afiControllerWnrbJAz.approveStrategy.call(addresswY3lu0r, addressnEB5l74, {from: accounts[0]});
		const uintYKcWWra = await afiControllerWnrbJAz.getExpectedReturn.call(addressiI6V5Mn, addressxFfNQoq, uintG0Ald3E, {from: accounts[4]});

		await expect(afiControllerWnrbJAz.revokeStrategy.call(addressusJh3qq, addresslHA1bBv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressEfrRmZW = accounts[4]
		const afiControllerEdt311p = await afiController.new(addressEfrRmZW, {from: accounts[1]});
		const uintHEeegpo = BigInt("623")
		const addressb9wVuc2 = accounts[3]
		const addressdZWqFLn = accounts[2]
		const addressoqybrIb = accounts[5]
		const uintqEFPp9j = BigInt("419")
		const addressEc0OwVq = accounts[2]
		const addresstBNX6SY = accounts[3]
		const uintA4E7aV = await afiControllerEdt311p.setSplit.call(uintHEeegpo, {from: accounts[1]});
		const addressGFz7obZ = await afiControllerEdt311p.setStrategist.call(addressb9wVuc2, {from: accounts[3]});
		const addressVGA8Q3 = await afiControllerEdt311p.approveStrategy.call(addressoqybrIb, addressdZWqFLn, {from: accounts[5]});
		const address7nMM9d = await afiControllerEdt311p.yearn.call(addresstBNX6SY, addressEc0OwVq, uintqEFPp9j, {from: accounts[3]});

		await expect(afiControllerEdt311p.setStrategist.call(addressb9wVuc2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGCuko8P = accounts[4]
		const afiControllerEdt311p = await afiController.new(addressGCuko8P, {from: accounts[1]});
		const addressC9Hd1RH = "0x0000000000000000000000000000000000000001"
		const addressVpoUJHN = accounts[3]
		const addressDeI2uZz = accounts[2]
		const addresswgjshpS = accounts[1]
		const uintM0z8FG = BigInt("419")
		const addressFSi1ScM = accounts[2]
		const addressAz0Yq7 = accounts[2]
		const addressrcBeUIQ = await afiControllerEdt311p.inCaseStrategyTokenGetStuck.call(addressVpoUJHN, addressC9Hd1RH, {from: accounts[3]});
		const addressGFz7obZ = await afiControllerEdt311p.setStrategist.call(addressDeI2uZz, {from: accounts[3]});
		const addressnhYwWmI = await afiControllerEdt311p.withdrawAll.call(addresswgjshpS, {from: accounts[1]});
		const address7nMM9d = await afiControllerEdt311p.yearn.call(addressAz0Yq7, addressFSi1ScM, uintM0z8FG, {from: accounts[3]});

		await expect(afiControllerEdt311p.inCaseStrategyTokenGetStuck.call(addressVpoUJHN, addressC9Hd1RH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresso6QGIOl = accounts[4]
		const afiControllerEdt311p = await afiController.new(addresso6QGIOl, {from: accounts[1]});
		const addresspD1UrW7 = accounts[1]
		const addressN5Q4pzr = accounts[3]
		const addresswUH6ggO = accounts[2]
		const uintS2evoYJ = BigInt("419")
		const addresschHmbyh = accounts[2]
		const addressDJx3O0b = accounts[3]
		const addresstgezKrE = await afiControllerEdt311p.setStrategy.call(addressN5Q4pzr, addresspD1UrW7, {from: accounts[5]});
		const addressGFz7obZ = await afiControllerEdt311p.setStrategist.call(addresswUH6ggO, {from: accounts[3]});
		const address7nMM9d = await afiControllerEdt311p.yearn.call(addressDJx3O0b, addresschHmbyh, uintS2evoYJ, {from: accounts[3]});

		await expect(afiControllerEdt311p.setStrategy.call(addressN5Q4pzr, addresspD1UrW7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaCE4C7s = accounts[2]
		const afiControllerg19ata = await afiController.new(addressaCE4C7s, {from: accounts[2]});
		const addresshlQ5iIV = accounts[2]
		const addressTOBNKOr = accounts[3]
		const addressVbCvWwe = accounts[4]
		const addressncWUbJ = accounts[1]
		const addressDaTDsv = accounts[0]
		const addressMmRmZdj = accounts[3]
		const addressu8tmEsx = "0x0000000000000000000000000000000000000003"
		const addressMkBGHWs = accounts[5]
		const addressxxTJdHa = accounts[4]
		const addresshmEcepA = await afiControllerg19ata.withdrawAll.call(addresshlQ5iIV, {from: "0x0000000000000000000000000000000000000001"});
		const addressD2qEo18 = await afiControllerg19ata.setVault.call(addressVbCvWwe, addressTOBNKOr, {from: accounts[2]});
		const addressG0zgG62 = await afiControllerg19ata.revokeStrategy.call(addressDaTDsv, addressncWUbJ, {from: accounts[2]});
		const addressLqZ1VMQ = await afiControllerg19ata.setOneSplit.call(addressMmRmZdj, {from: accounts[3]});
		const addressAskEdtB = await afiControllerg19ata.setRewards.call(addressu8tmEsx, {from: accounts[4]});
		const addressR1piLOd = await afiControllerg19ata.revokeStrategy.call(addressxxTJdHa, addressMkBGHWs, {from: accounts[0]});

		await expect(afiControllerg19ata.withdrawAll.call(addresshlQ5iIV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmoH07R9 = accounts[3]
		const afiControllerwy6Z71g = await afiController.new(addressmoH07R9, {from: "0x0000000000000000000000000000000000000001"});
		const addressxZ8ArIL = accounts[1]
		const addressDjL68Rq = accounts[5]
		const addressj2KTNKM = accounts[0]
		const addressgojpOcN = accounts[2]
		const addressKX1LqJo = accounts[0]
		const addressXg2FEja = await afiControllerwy6Z71g.inCaseStrategyTokenGetStuck.call(addressDjL68Rq, addressxZ8ArIL, {from: accounts[0]});
		const addresslJ1SGp8 = await afiControllerwy6Z71g.setGovernance.call(addressj2KTNKM, {from: accounts[1]});
		const addresslGWnpqV = await afiControllerwy6Z71g.setVault.call(addressKX1LqJo, addressgojpOcN, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addressHCiszRX = accounts[4]
		const afiControllerEdt311p = await afiController.new(addressHCiszRX, {from: accounts[1]});
		const addressw2bpiE2 = accounts[0]
		const addresskYzdioF = accounts[0]
		const addressEsCQJSQ = accounts[2]
		const uintUZ7OUr = BigInt("419")
		const addressUg2AgNx = accounts[2]
		const address3HSJ66 = accounts[1]
		const addressWC50BGs = await afiControllerEdt311p.setStrategist.call(addressw2bpiE2, {from: accounts[1]});
		const address3LF0ur = await afiControllerEdt311p.setGovernance.call(addresskYzdioF, {from: accounts[5]});
		const addressGFz7obZ = await afiControllerEdt311p.setStrategist.call(addressEsCQJSQ, {from: accounts[3]});
		const address7nMM9d = await afiControllerEdt311p.yearn.call(address3HSJ66, addressUg2AgNx, uintUZ7OUr, {from: accounts[3]});

		await expect(afiControllerEdt311p.setGovernance.call(addresskYzdioF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressufPmUW = "0x0000000000000000000000000000000000000001"
		const afiControllerOHywJvp = await afiController.new(addressufPmUW, {from: accounts[3]});
		const addressnOWNu0v = "0x00000000000000000000000000000000000000-1"
		const addressaaCOfzS = "0x0000000000000000000000000000000000000001"
		const addressBbU8V8 = accounts[0]
		const addressKmxFjyG = await afiControllerOHywJvp.approveStrategy.call(addressaaCOfzS, addressnOWNu0v, {from: accounts[2]});
		const addressVnSvHwH = await afiControllerOHywJvp.setGovernance.call(addressBbU8V8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerOHywJvp.approveStrategy.call(addressaaCOfzS, addressnOWNu0v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address4nIQ8t = accounts[2]
		const afiControllerg19ata = await afiController.new(address4nIQ8t, {from: accounts[2]});
		const addressN7nQV9j = accounts[1]
		const uintdcWKywM = BigInt("188")
		const addressPcBBsBU = accounts[3]
		const addressQpopEyH = accounts[3]
		const addressMBggGPm = await afiControllerg19ata.setStrategist.call(addressN7nQV9j, {from: accounts[2]});
		const addressZ1zoL2B = await afiControllerg19ata.inCaseTokensGetStuck.call(addressPcBBsBU, uintdcWKywM, {from: accounts[2]});
		const addressAskEdtB = await afiControllerg19ata.setRewards.call(addressQpopEyH, {from: accounts[4]});

		await expect(afiControllerg19ata.inCaseTokensGetStuck.call(addressPcBBsBU, uintdcWKywM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKN6DsHg = accounts[2]
		const afiControllerg19ata = await afiController.new(addressKN6DsHg, {from: accounts[2]});
		const addressviW5Cb5 = accounts[4]
		const addressYyb6Jqq = accounts[0]
		const addressFzBAe8u = accounts[4]
		const addressrIYn7Ik = accounts[2]
		const addressA0k1exr = await afiControllerg19ata.revokeStrategy.call(addressYyb6Jqq, addressviW5Cb5, {from: accounts[2]});
		const addressYtaG44G = await afiControllerg19ata.setStrategist.call(addressFzBAe8u, {from: accounts[3]});
		const addressAskEdtB = await afiControllerg19ata.setRewards.call(addressrIYn7Ik, {from: accounts[4]});

		await expect(afiControllerg19ata.setStrategist.call(addressFzBAe8u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAIQQB8N = "0x0000000000000000000000000000000000000001"
		const afiControllerOHywJvp = await afiController.new(addressAIQQB8N, {from: accounts[3]});
		const addressZTK0iuj = accounts[2]
		const addresslvNJznQ = "0x0000000000000000000000000000000000000001"
		const addresslwPEmz = accounts[3]
		const addressNEbyCPS = accounts[2]
		const addressCBYXVLr = await afiControllerOHywJvp.approveStrategy.call(addresslvNJznQ, addressZTK0iuj, {from: accounts[3]});
		const addressKmxFjyG = await afiControllerOHywJvp.approveStrategy.call(addressNEbyCPS, addresslwPEmz, {from: accounts[2]});

		await expect(afiControllerOHywJvp.approveStrategy.call(addressNEbyCPS, addresslwPEmz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresspNUwthq = accounts[0]
		const afiControllerdrqULNh = await afiController.new(addresspNUwthq, {from: accounts[3]});
		const addressTSIVVbS = accounts[1]
		const addresscKqmL6T = accounts[0]
		const addressOw3VxfU = accounts[1]
		const addressZrhWeKQ = accounts[0]
		const addressrKfzXEh = accounts[2]
		const addresslyIMP0N = accounts[3]
		const addressK5Gug2X = accounts[4]
		const addresspoKkuc = await afiControllerdrqULNh.inCaseStrategyTokenGetStuck.call(addresscKqmL6T, addressTSIVVbS, {from: accounts[3]});
		const addressbGYE4VX = await afiControllerdrqULNh.revokeStrategy.call(addressZrhWeKQ, addressOw3VxfU, {from: accounts[4]});
		const addressJNH40Zz = await afiControllerdrqULNh.approveStrategy.call(addresslyIMP0N, addressrKfzXEh, {from: accounts[0]});
		const addressR7CoYMO = await afiControllerdrqULNh.setStrategist.call(addressK5Gug2X, {from: accounts[2]});

		await expect(afiControllerdrqULNh.inCaseStrategyTokenGetStuck.call(addresscKqmL6T, addressTSIVVbS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUAPCCso = accounts[2]
		const afiControllerg19ata = await afiController.new(addressUAPCCso, {from: accounts[2]});
		const addressh0LiEKi = accounts[3]
		const uintC8iVbj = BigInt("1364")
		const addressfojKfk4 = accounts[2]
		const addressXMafEcp = accounts[5]
		const addresswNXarh = await afiControllerg19ata.withdrawAll.call(addressh0LiEKi, {from: accounts[2]});
		const addressFYO2zy0 = await afiControllerg19ata.earn.call(addressfojKfk4, uintC8iVbj, {from: accounts[0]});
		const addressLqZ1VMQ = await afiControllerg19ata.setOneSplit.call(addressXMafEcp, {from: accounts[3]});

		await expect(afiControllerg19ata.withdrawAll.call(addressh0LiEKi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZo3liw5 = "0x0000000000000000000000000000000000000001"
		const afiControllerOHywJvp = await afiController.new(addressZo3liw5, {from: accounts[3]});
		const addressAjWxhfT = accounts[0]
		const addressLSJNugg = accounts[4]
		const addressLiWpw8r = "0x0000000000000000000000000000000000000001"
		const addressVmRXq7O = await afiControllerOHywJvp.setOneSplit.call(addressAjWxhfT, {from: accounts[3]});
		const addressKmxFjyG = await afiControllerOHywJvp.approveStrategy.call(addressLiWpw8r, addressLSJNugg, {from: accounts[2]});

		await expect(afiControllerOHywJvp.approveStrategy.call(addressLiWpw8r, addressLSJNugg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaK6Ikmi = accounts[2]
		const afiControllerg19ata = await afiController.new(addressaK6Ikmi, {from: accounts[2]});
		const addressMJiaOgG = accounts[4]
		const addressdcLZFoV = accounts[0]
		const addressII53Akd = accounts[2]
		const addressrLFpsZB = await afiControllerg19ata.setStrategy.call(addressdcLZFoV, addressMJiaOgG, {from: accounts[2]});
		const addressAskEdtB = await afiControllerg19ata.setRewards.call(addressII53Akd, {from: accounts[4]});

		await expect(afiControllerg19ata.setStrategy.call(addressdcLZFoV, addressMJiaOgG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressisGIhGh = accounts[2]
		const afiControllerg19ata = await afiController.new(addressisGIhGh, {from: accounts[2]});
		const uintrFQ0bc4 = BigInt("888")
		const addressji6mTFl = accounts[1]
		const addressnd03SJ = accounts[2]
		const uintY6zZQBO = BigInt("1487")
		const addressufPIOje = accounts[0]
		const addressR4r8USW = accounts[4]
		const addressfXj45f9 = accounts[3]
		const addressdBlhzZV = await afiControllerg19ata.yearn.call(addressnd03SJ, addressji6mTFl, uintrFQ0bc4, {from: accounts[2]});
		const addressOiipSw = await afiControllerg19ata.yearn.call(addressR4r8USW, addressufPIOje, uintY6zZQBO, {from: accounts[2]});
		const addressAskEdtB = await afiControllerg19ata.setRewards.call(addressfXj45f9, {from: accounts[4]});

		await expect(afiControllerg19ata.yearn.call(addressnd03SJ, addressji6mTFl, uintrFQ0bc4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})
const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenGQpa06 = await POWToken.new({from: accounts[1]});
		const uintcXS81n9 = BigInt("1507")
		const address0gISeX = accounts[2]
		const uintnGHM71y = BigInt("696")
		const address0tanpy = accounts[3]
//		const uint256ilb0lXz = await POWTokenGQpa06.setWorkingHashRate.call(uintcXS81n9, {from: accounts[3]});
//		const addressxiFvOQh = await POWTokenGQpa06.setParamSetter.call(address0gISeX, {from: accounts[3]});
//		const booliNaaqGp = await POWTokenGQpa06.transfer.call(address0tanpy, uintnGHM71y, {from: accounts[0]});

		await expect(POWTokenGQpa06.setWorkingHashRate.call(uintcXS81n9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQRMTkAp = await POWToken.new({from: accounts[2]});
		const uintz6FiMVu = BigInt("421")
		const addressDB0D1ep = accounts[1]
		const byte63Gpo3 = "0x00180004080801031a080e0f030a060d12190b040513200c141c1a090b14161f"
		const byteyxyp2JG = "0x10040004160a08080d1f0d1e18160c160f0e0616130b0319090f160a09080517"
		const uintMzqIfR7 = BigInt("72")
		const uintG3ZxxMn = BigInt("1668")
		const uintqcHt9Mf = BigInt("1829")
		const addressqLDvuUU = accounts[3]
		const addresswAdQoxf = accounts[2]
//		const addressnJLaon = await POWTokenQRMTkAp.inCaseTokensGetStuck.call(addressDB0D1ep, uintz6FiMVu, {from: accounts[5]});
//		const uint256fZ6fDwc = await POWTokenQRMTkAp.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
//		const uint256lvh5JeY = await POWTokenQRMTkAp.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
//		const addressP0uCARd = await POWTokenQRMTkAp.permit.call(addresswAdQoxf, addressqLDvuUU, uintqcHt9Mf, uintG3ZxxMn, uintMzqIfR7, byteyxyp2JG, byte63Gpo3, {from: accounts[4]});

		await expect(POWTokenQRMTkAp.inCaseTokensGetStuck.call(addressDB0D1ep, uintz6FiMVu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenWeIZ5R = await POWToken.new({from: accounts[4]});
		const uintZvY799m = BigInt("1689")
		const addresshqkKQ6d = accounts[4]
		const addressm5Mhuy8 = accounts[1]
		const uintx6HoEBv = BigInt("1846")
		const addressw2OgzWP = accounts[1]
//		const boolttwkU5b = await POWTokenWeIZ5R.transferFrom.call(addressm5Mhuy8, addresshqkKQ6d, uintZvY799m, {from: accounts[4]});
//		const boolCJ2UPM5 = await POWTokenWeIZ5R.transfer.call(addressw2OgzWP, uintx6HoEBv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenWeIZ5R.transferFrom.call(addressm5Mhuy8, addresshqkKQ6d, uintZvY799m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSEpmq7a = await POWToken.new({from: accounts[3]});
		const byteIs6Xtk7 = "0x1b010c02180a2014150101121509071518010f1b1911001e1b1a0a080d19051f"
		const byteVthBQJS = "0x160d151602000100120417151703081408091414120813040f1706080f201611"
		const uintJvGm2zH = BigInt("177")
		const uintFbEyERd = BigInt("1275")
		const uintTNtBAJ = BigInt("316")
		const addresswxy2KGr = accounts[1]
		const addresszmn0unY = accounts[0]
//		const addresst5JRsxB = await POWTokenSEpmq7a.permit.call(addresszmn0unY, addresswxy2KGr, uintTNtBAJ, uintFbEyERd, uintJvGm2zH, byteVthBQJS, byteIs6Xtk7, {from: accounts[4]});
//		const uint256WgulosR = await POWTokenSEpmq7a.stakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenSEpmq7a.permit.call(addresszmn0unY, addresswxy2KGr, uintTNtBAJ, uintFbEyERd, uintJvGm2zH, byteVthBQJS, byteIs6Xtk7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenumgWJr = await POWToken.new({from: accounts[0]});
		const uintJvppbCg = BigInt("1296")
		const addressBOZpkHm = accounts[4]
		const addressZnhMHyA = accounts[3]
		const uintKcXtNl = BigInt("686")
		const addressCqY1OnI = accounts[1]
		const addressEkSXYK3 = accounts[5]
		const uintVl9dm8Y = BigInt("572")
		const addressnlrsslC = accounts[4]
//		const addressWtRPua9 = await POWTokenumgWJr.claimIncome.call(addressBOZpkHm, uintJvppbCg, {from: accounts[1]});
//		const addressiQC9xPT = await POWTokenumgWJr.setParamSetter.call(addressZnhMHyA, {from: accounts[1]});
//		const addressHUgmUoA = await POWTokenumgWJr.mint.call(addressCqY1OnI, uintKcXtNl, {from: accounts[3]});
//		const addressvDyxhlZ = await POWTokenumgWJr.transferOwnership.call(addressEkSXYK3, {from: accounts[0]});
//		const addressGl3pW8 = await POWTokenumgWJr.claimReward.call(addressnlrsslC, uintVl9dm8Y, {from: accounts[4]});

		await expect(POWTokenumgWJr.claimIncome.call(addressBOZpkHm, uintJvppbCg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenzd0d5o = await POWToken.new({from: accounts[3]});
		const uintCJ8AQA8 = BigInt("1386")
		const addressLgCwFb = "0x0000000000000000000000000000000000000001"
		const uintxdNTQj = BigInt("827")
		const uintM3olgfZ = BigInt("52")
		const uintNNOsVvG = BigInt("1552")
//		const addressxnGrsc9 = await POWTokenzd0d5o.claimReward.call(addressLgCwFb, uintCJ8AQA8, {from: accounts[0]});
//		const uint256CTobfGS = await POWTokenzd0d5o.setStartMiningTime.call(uintxdNTQj, {from: accounts[0]});
//		const uint256PVWfJzB = await POWTokenzd0d5o.setStakingRewardRatio.call(uintM3olgfZ, {from: accounts[4]});
//		const uint256M3ibBYc = await POWTokenzd0d5o.setWorkingHashRate.call(uintNNOsVvG, {from: accounts[3]});

		await expect(POWTokenzd0d5o.claimReward.call(addressLgCwFb, uintCJ8AQA8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSEpmq7a = await POWToken.new({from: accounts[3]});
		const uint256WgulosR = await POWTokenSEpmq7a.stakingRewardRate.call({from: accounts[2]});

		assert.equal(uint256WgulosR, BigInt("0"))
	});

	it('test for POWToken', async () => {
		const POWTokenzd0d5o = await POWToken.new({from: accounts[3]});
		const uintr3Zxkpe = BigInt("1386")
		const addressPG2UIIa = "0x0000000000000000000000000000000000000001"
		const uintr1wUEUk = BigInt("827")
		const uintEsXEIRl = BigInt("52")
		const uintNOJ9jJ2 = BigInt("1552")
//		const uint256YnxfGde = await POWTokenzd0d5o.getHistoryWorkingRate.call({from: accounts[3]});
//		const addressxnGrsc9 = await POWTokenzd0d5o.claimReward.call(addressPG2UIIa, uintr3Zxkpe, {from: accounts[0]});
//		const uint256CTobfGS = await POWTokenzd0d5o.setStartMiningTime.call(uintr1wUEUk, {from: accounts[0]});
//		const uint256PVWfJzB = await POWTokenzd0d5o.setStakingRewardRatio.call(uintEsXEIRl, {from: accounts[4]});
//		await POWTokenzd0d5o.whenNotPaused.call({from: accounts[2]});
//		const uint256M3ibBYc = await POWTokenzd0d5o.setWorkingHashRate.call(uintNOJ9jJ2, {from: accounts[3]});

		await expect(POWTokenzd0d5o.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqhjgK6x = await POWToken.new({from: accounts[4]});
		const uintYsXrjtL = BigInt("1991")
		const addressAd4X8KR = accounts[0]
		const uintZdajrYV = BigInt("516")
//		const addressKPfrzFN = await POWTokenqhjgK6x.mint.call(addressAd4X8KR, uintYsXrjtL, {from: accounts[1]});
//		const uint256tvhkmPo = await POWTokenqhjgK6x.addHashRate.call(uintZdajrYV, {from: accounts[0]});

		await expect(POWTokenqhjgK6x.mint.call(addressAd4X8KR, uintYsXrjtL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSHZOmPz = await POWToken.new({from: accounts[4]});
		const uintpi6FZBh = BigInt("1668")
		const addressUOiyciP = accounts[1]
		const uintTpMiAAn = BigInt("938")
		const uintOUeoNtV = BigInt("877")
//		await POWTokenSHZOmPz.onlyOwner.call({from: accounts[2]});
//		const addressIgxaRlM = await POWTokenSHZOmPz.inCaseTokensGetStuck.call(addressUOiyciP, uintpi6FZBh, {from: accounts[3]});
//		const uint256DLfExl = await POWTokenSHZOmPz.stakingRewardRate.call({from: accounts[4]});
//		const uint256MilGbPh = await POWTokenSHZOmPz.setWorkingHashRate.call(uintTpMiAAn, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256cWUarhh = await POWTokenSHZOmPz.setStakingRewardRatio.call(uintOUeoNtV, {from: accounts[0]});

		await expect(POWTokenSHZOmPz.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqhjgK6x = await POWToken.new({from: accounts[4]});
		const uintnfOzMaR = BigInt("1415")
		const addressDeN6yiy = accounts[5]
		const addressbThMiE2 = accounts[3]
		const uintJdvVKRO = BigInt("1986")
		const addressJvqQwvT = accounts[0]
		const uintnt2hW0E = BigInt("516")
		const boolegkaZS9 = await POWTokenqhjgK6x.paused.call({from: accounts[4]});
//		const boolMDPLDsH = await POWTokenqhjgK6x.transferFrom.call(addressbThMiE2, addressDeN6yiy, uintnfOzMaR, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKPfrzFN = await POWTokenqhjgK6x.mint.call(addressJvqQwvT, uintJdvVKRO, {from: accounts[1]});
//		const uint256tvhkmPo = await POWTokenqhjgK6x.addHashRate.call(uintnt2hW0E, {from: accounts[0]});

		assert.equal(boolegkaZS9, false)
		await expect(POWTokenqhjgK6x.transferFrom.call(addressbThMiE2, addressDeN6yiy, uintnfOzMaR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXueJgBj = await POWToken.new({from: accounts[1]});
		const uintx2Cp5QU = BigInt("1335")
		const addresspPJM1fB = accounts[5]
//		const uint256l6umGBW = await POWTokenXueJgBj.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
//		const uint256EvKGUXx = await POWTokenXueJgBj.getCurWorkingRate.call({from: accounts[1]});
//		const addressCETlCY = await POWTokenXueJgBj.mint.call(addresspPJM1fB, uintx2Cp5QU, {from: accounts[0]});

		await expect(POWTokenXueJgBj.getIncomeBTCInWeiPerSec.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSEpmq7a = await POWToken.new({from: accounts[3]});
		const byteyHc6rem = "0x1b010c02180a2014150101121509071518010f1b1911001e1b1a0a080d19051f"
		const byteYknnCke = "0x160d151602000100120417151703081408091414120813040f1706080f201611"
		const uintnaLiINk = BigInt("177")
		const uinthaA7KZG = BigInt("1275")
		const uint1cJAEN = BigInt("316")
		const addresspuVm2Y = accounts[1]
		const addressHh98RoU = accounts[0]
		const uint256VxFoYwY = await POWTokenSEpmq7a.remainingAmount.call({from: accounts[1]});
//		const addresst5JRsxB = await POWTokenSEpmq7a.permit.call(addressHh98RoU, addresspuVm2Y, uint1cJAEN, uinthaA7KZG, uintnaLiINk, byteYknnCke, byteyHc6rem, {from: accounts[4]});
//		const uint256WgulosR = await POWTokenSEpmq7a.stakingRewardRate.call({from: accounts[2]});

		assert.equal(uint256VxFoYwY, BigInt("0"))
		await expect(POWTokenSEpmq7a.permit.call(addressHh98RoU, addresspuVm2Y, uint1cJAEN, uinthaA7KZG, uintnaLiINk, byteYknnCke, byteyHc6rem, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSEpmq7a = await POWToken.new({from: accounts[3]});
		const byteh8PLqj1 = "0x1b010c02180a2014150101121509071518010f1b1911001e1b1a0a080d19051f"
		const bytesFOu0PV = "0x160d1516020001ffffffff120417151703081408091414120813040f1706080f201611"
		const uintLbopuOP = BigInt("177")
		const uintUpBd4yd = BigInt("1275")
		const uintlhzKjBW = BigInt("316")
		const addressW15gaVD = accounts[1]
		const addressdd6oJ5R = accounts[0]
		const uintRyCQjF8 = BigInt("1241")
//		const addresst5JRsxB = await POWTokenSEpmq7a.permit.call(addressdd6oJ5R, addressW15gaVD, uintlhzKjBW, uintUpBd4yd, uintLbopuOP, bytesFOu0PV, byteh8PLqj1, {from: accounts[4]});
//		const uint256rLWrcvM = await POWTokenSEpmq7a.notifyRewardAmount.call(uintRyCQjF8, {from: accounts[5]});
//		const uint256WgulosR = await POWTokenSEpmq7a.stakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenSEpmq7a.permit.call(addressdd6oJ5R, addressW15gaVD, uintlhzKjBW, uintUpBd4yd, uintLbopuOP, bytesFOu0PV, byteh8PLqj1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSEpmq7a = await POWToken.new({from: accounts[3]});
		const byteHf5169T = "0x1b010c02180a2014150101121509071518010f1b1911001e1b1a0a080d19051f"
		const byteBRjUCD4 = "0x160d151602000100120417151703081408091414120813040f1706080f201611"
		const uinthFlAmg7 = BigInt("177")
		const uintMrISEWJ = BigInt("1275")
		const uintBbRUsVB = BigInt("316")
		const addressnEmiKNM = accounts[1]
		const addresso1GRi5L = accounts[0]
//		await POWTokenSEpmq7a.updateIncomeRate.call({from: accounts[3]});
//		const addresst5JRsxB = await POWTokenSEpmq7a.permit.call(addresso1GRi5L, addressnEmiKNM, uintBbRUsVB, uintMrISEWJ, uinthFlAmg7, byteBRjUCD4, byteHf5169T, {from: accounts[4]});
//		const uint256MJ6nQl = await POWTokenSEpmq7a.getHistoryWorkingRate.call({from: accounts[3]});
//		const uint256jPsGyJg = await POWTokenSEpmq7a.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
//		const uint256WgulosR = await POWTokenSEpmq7a.stakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenSEpmq7a.updateIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEkz6fi8 = await POWToken.new({from: accounts[0]});
		const uintHpZMJnJ = BigInt("759")
		const addressCbiULwd = accounts[3]
		const addressdb54ST6 = accounts[1]
		const uintnQCFK6N = BigInt("1123")
		const addressPVUQpp3 = accounts[1]
		const uint256oeORkM8 = await POWTokenEkz6fi8.stakingRewardRate.call({from: accounts[1]});
		const boolk8LJSlD = await POWTokenEkz6fi8.approve.call(addressCbiULwd, uintHpZMJnJ, {from: accounts[0]});
//		const addressMIGZE8 = await POWTokenEkz6fi8.transferOwnership.call(addressdb54ST6, {from: accounts[1]});
//		const boolzUvz7rm = await POWTokenEkz6fi8.transfer.call(addressPVUQpp3, uintnQCFK6N, {from: accounts[4]});
//		const boolpsnupyJ = await POWTokenEkz6fi8.paused.call({from: accounts[1]});

		assert.equal(boolk8LJSlD, true)
		assert.equal(uint256oeORkM8, BigInt("0"))
		await expect(POWTokenEkz6fi8.transferOwnership.call(addressdb54ST6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennWZeErx = await POWToken.new({from: accounts[0]});
		const uintN4Ww8Eg = BigInt("738")
		const uintaISING = BigInt("1051")
		const uintDy2MwYL = BigInt("607")
		const uintOenyJsl = BigInt("1688")
		const uintJtNeRZf = BigInt("1444")
		const addressdTM9GsA = accounts[1]
		const addressVgcbDL = accounts[1]
		const addressexWP3In = accounts[2]
		const addressFq7pLry = accounts[3]
		const addressNuHbFmT = accounts[3]
		const addressObLPqYA = accounts[1]
		const addressZG9siJZ = accounts[2]
		const addresszKGAVxK = accounts[2]
		const stringAqIASbV = "I5bocDr9BX9XyUPqNLBJcg4gyeIoOE"
		const stringszrk1SD = "9FPH"
		const uintsMJt9cH = BigInt("604")
		const addressAhYGrgF = accounts[6]
//		const stringK4QRuK2 = await POWTokennWZeErx.initialize.call(stringszrk1SD, stringAqIASbV, addresszKGAVxK, addressZG9siJZ, addressObLPqYA, addressNuHbFmT, addressFq7pLry, addressexWP3In, addressVgcbDL, addressdTM9GsA, uintJtNeRZf, uintOenyJsl, uintDy2MwYL, uintaISING, uintN4Ww8Eg, {from: accounts[3]});
//		const addressmtyrL6 = await POWTokennWZeErx.claimReward.call(addressAhYGrgF, uintsMJt9cH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokennWZeErx.initialize.call(stringszrk1SD, stringAqIASbV, addresszKGAVxK, addressZG9siJZ, addressObLPqYA, addressNuHbFmT, addressFq7pLry, addressexWP3In, addressVgcbDL, addressdTM9GsA, uintJtNeRZf, uintOenyJsl, uintDy2MwYL, uintaISING, uintN4Ww8Eg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSEpmq7a = await POWToken.new({from: accounts[3]});
		const byteM4ddFMz = "0x1b010c02180a2014150101121509071518010f1b1911001e1b1a0a080d19051f"
		const byteKkgBzKG = "0x160d151602000100120417151703081408091414120813040f1706080f201611"
		const uintS4NSvJt = BigInt("14")
		const uinttGImIBA = BigInt("1275")
		const uints3jMqmR = BigInt("316")
		const addresstDlFr7Q = accounts[1]
		const addressX4tcE2P = accounts[0]
		const uint256xd7bzO = await POWTokenSEpmq7a.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresst5JRsxB = await POWTokenSEpmq7a.permit.call(addressX4tcE2P, addresstDlFr7Q, uints3jMqmR, uinttGImIBA, uintS4NSvJt, byteKkgBzKG, byteM4ddFMz, {from: accounts[4]});
//		const uint256fx0cVcH = await POWTokenSEpmq7a.lpStakingRewardRate.call({from: accounts[3]});
//		const uint256WgulosR = await POWTokenSEpmq7a.stakingRewardRate.call({from: accounts[2]});

		assert.equal(uint256xd7bzO, BigInt("0"))
		await expect(POWTokenSEpmq7a.permit.call(addressX4tcE2P, addresstDlFr7Q, uints3jMqmR, uinttGImIBA, uintS4NSvJt, byteKkgBzKG, byteM4ddFMz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenG5TgDzC = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintT7PDyoJ = BigInt("165")
		const byteaIHp9P = "0x0e17091013020b121316181f1511080e010b0d15020c091b12031f011a030814"
		const byteTqXl1lv = "0x19130002021503050d0a0b1316110320041912130f091b171e090d041c010b1d"
		const uintCc5r1cw = BigInt("52")
		const uintJtsX3pF = BigInt("693")
		const uintQ0vYGtI = BigInt("1010")
		const addressKB7lNct = accounts[4]
		const addressa8y7PZE = accounts[3]
		const uintNICvGg1 = BigInt("1227")
		const boolLd8p6uG = await POWTokenG5TgDzC.paused.call({from: accounts[4]});
		await POWTokenG5TgDzC.whenNotPaused.call({from: accounts[2]});
		const uint256xOPH0ie = await POWTokenG5TgDzC.setDepreciationNumerator.call(uintT7PDyoJ, {from: accounts[0]});
		const addressbk0I5WB = await POWTokenG5TgDzC.permit.call(addressa8y7PZE, addressKB7lNct, uintQ0vYGtI, uintJtsX3pF, uintCc5r1cw, byteTqXl1lv, byteaIHp9P, {from: accounts[1]});
		const uint256jGVOBC = await POWTokenG5TgDzC.setStartMiningTime.call(uintNICvGg1, {from: accounts[2]});
	});

	it('test for POWToken', async () => {
		const POWTokenG2vDjWE = await POWToken.new({from: accounts[1]});
		const uintSPcDYAP = BigInt("1972")
		const addressLd4nfyT = accounts[4]
		const uintXXCPieU = BigInt("1764")
		const addressOTLvyWi = accounts[3]
		const uintdaxX4xr = BigInt("528")
//		const boolvKutOxf = await POWTokenG2vDjWE.transfer.call(addressLd4nfyT, uintSPcDYAP, {from: accounts[4]});
//		const addressHdqtMGw = await POWTokenG2vDjWE.claimReward.call(addressOTLvyWi, uintXXCPieU, {from: accounts[3]});
//		const uint256exkgYBm = await POWTokenG2vDjWE.setMinerPoolFeeNumerator.call(uintdaxX4xr, {from: accounts[1]});

		await expect(POWTokenG2vDjWE.transfer.call(addressLd4nfyT, uintSPcDYAP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
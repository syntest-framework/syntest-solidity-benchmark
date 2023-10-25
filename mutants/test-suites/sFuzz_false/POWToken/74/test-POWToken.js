const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenzXOGNpm = await POWToken.new({from: accounts[2]});
		const uintTvktRe1 = BigInt("1854")
		const addressHpkq0Nd = accounts[2]
		const uint256LJgYSq9 = await POWTokenzXOGNpm.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenzXOGNpm.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressMOCBErT = await POWTokenzXOGNpm.claimReward.call(addressHpkq0Nd, uintTvktRe1, {from: accounts[5]});
//		await POWTokenzXOGNpm.unpause.call({from: accounts[1]});

		assert.equal(uint256LJgYSq9, BigInt("0"))
		await expect(POWTokenzXOGNpm.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpaF6lkx = await POWToken.new({from: accounts[3]});
		const uintwiajvSw = BigInt("1681")
		const uintG4dPOpr = BigInt("38")
		const uintLlAuVn9 = BigInt("312")
		const uintQ3PXjC5 = BigInt("1553")
		const uintNp7L4Lm = BigInt("1207")
		const uintQIo1cbc = BigInt("985")
		const addressxgzRMrI = accounts[1]
		const addressBS99dCN = accounts[1]
		const addressnafFrGt = accounts[2]
		const addressjTGyf7h = "0x0000000000000000000000000000000000000001"
		const addresszIdiWpE = accounts[0]
		const addresskrWzfkx = accounts[4]
		const addressZB3ILMr = accounts[0]
		const addressrx1PTQW = accounts[1]
		const stringexx8A8K = "ymXW1"
		const stringQdK9KMi = "lcRLoW7vzvF9bmiYtN768ULJCbwCDhTJHIwb29cDi72Q1Rrd6mW2yIFMnin"
		const uintjCkAhIl = BigInt("1567")
//		const uint256NckdL6E = await POWTokenpaF6lkx.notifyRewardAmount.call(uintwiajvSw, {from: accounts[1]});
//		const stringHiQAE1b = await POWTokenpaF6lkx.initialize.call(stringQdK9KMi, stringexx8A8K, addressrx1PTQW, addressZB3ILMr, addresskrWzfkx, addresszIdiWpE, addressjTGyf7h, addressnafFrGt, addressBS99dCN, addressxgzRMrI, uintQIo1cbc, uintNp7L4Lm, uintQ3PXjC5, uintLlAuVn9, uintG4dPOpr, {from: accounts[2]});
//		const uint256IKAoaQs = await POWTokenpaF6lkx.setWorkingHashRate.call(uintjCkAhIl, {from: accounts[5]});
//		const uint256W7doUeu = await POWTokenpaF6lkx.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});

		await expect(POWTokenpaF6lkx.notifyRewardAmount.call(uintwiajvSw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOaOHCt2 = await POWToken.new({from: accounts[5]});
		const uintuu2x8Lq = BigInt("1844")
		const uintQlpnbmO = BigInt("679")
//		const uint256an9ysSZ = await POWTokenOaOHCt2.setDepreciationNumerator.call(uintuu2x8Lq, {from: accounts[2]});
//		const uint256O9Olk1t = await POWTokenOaOHCt2.setStakingRewardRatio.call(uintQlpnbmO, {from: accounts[5]});

		await expect(POWTokenOaOHCt2.setDepreciationNumerator.call(uintuu2x8Lq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenI3SoD8d = await POWToken.new({from: accounts[1]});
		const uintWsAaiTk = BigInt("1749")
		const addresstwwue2v = accounts[4]
		const uintYBcKcTA = BigInt("1204")
		const addressPlLtlF1 = accounts[0]
		const addressrgtmR5W = accounts[0]
//		const addressFltwFuY = await POWTokenI3SoD8d.claimReward.call(addresstwwue2v, uintWsAaiTk, {from: accounts[4]});
//		const uint256gOxZxQW = await POWTokenI3SoD8d.remainingAmount.call({from: accounts[0]});
//		const boolPhTmivT = await POWTokenI3SoD8d.transferFrom.call(addressrgtmR5W, addressPlLtlF1, uintYBcKcTA, {from: accounts[0]});

		await expect(POWTokenI3SoD8d.claimReward.call(addresstwwue2v, uintWsAaiTk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvrXX2dT = await POWToken.new({from: accounts[2]});
		const uintwmDW35Y = BigInt("141")
		const uintBTFKn6M = BigInt("644")
		const addressYBvbxi = "0x0000000000000000000000000000000000000001"
//		const uint256iqxHTId = await POWTokenvrXX2dT.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
//		const uint256vSDjbHT = await POWTokenvrXX2dT.setMinerPoolFeeNumerator.call(uintwmDW35Y, {from: accounts[2]});
//		const addressBjr14GJ = await POWTokenvrXX2dT.claimIncome.call(addressYBvbxi, uintBTFKn6M, {from: accounts[4]});
//		await POWTokenvrXX2dT.updateIncomeRate.call({from: accounts[0]});

		await expect(POWTokenvrXX2dT.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenPwgJ8Qz = await POWToken.new({from: accounts[3]});
//		const uint256kZvdtwQ = await POWTokenPwgJ8Qz.getCurWorkingRate.call({from: accounts[0]});
//		const uint256WiVg0mI = await POWTokenPwgJ8Qz.getHistoryWorkingRate.call({from: accounts[4]});
//		const uint256PKBQbzT = await POWTokenPwgJ8Qz.remainingAmount.call({from: accounts[4]});

		await expect(POWTokenPwgJ8Qz.getCurWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencXVGj7 = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrMPHR8U = BigInt("687")
		const addressX5lO9vp = accounts[2]
		const uint256hWzJCv = await POWTokencXVGj7.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
		await POWTokencXVGj7.onlyOwner.call({from: accounts[3]});
		const addressSBaQXUh = await POWTokencXVGj7.inCaseTokensGetStuck.call(addressX5lO9vp, uintrMPHR8U, {from: accounts[1]});
	});

	it('test for POWToken', async () => {
		const POWTokenzXOGNpm = await POWToken.new({from: accounts[2]});
		const uintVRwuZQU = BigInt("510")
		const address9aUK6x = accounts[2]
		const uintlGUcfBg = BigInt("1854")
		const addressqsd7zbe = accounts[2]
		const uint256LJgYSq9 = await POWTokenzXOGNpm.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolfsCnRQ9 = await POWTokenzXOGNpm.transfer.call(address9aUK6x, uintVRwuZQU, {from: accounts[5]});
//		await POWTokenzXOGNpm.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenzXOGNpm.updateIncomeRate.call({from: accounts[1]});
//		const addressMOCBErT = await POWTokenzXOGNpm.claimReward.call(addressqsd7zbe, uintlGUcfBg, {from: accounts[5]});
//		await POWTokenzXOGNpm.unpause.call({from: accounts[1]});

		assert.equal(uint256LJgYSq9, BigInt("0"))
		await expect(POWTokenzXOGNpm.transfer.call(address9aUK6x, uintVRwuZQU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenv21IhT3 = await POWToken.new({from: accounts[3]});
		const uintNdN8qtK = BigInt("1400")
		const uintk3dICkm = BigInt("1679")
		const uintlSiSTRV = BigInt("1064")
		const uintrR3JuU3 = BigInt("1188")
		const uintY7JwxjD = BigInt("663")
		const addressfKZd1m3 = accounts[4]
		const address9Z6GyT = accounts[3]
		const addressRsmudza = accounts[5]
		const addressLS0I8KD = accounts[4]
		const addresscjY4ygT = "0x0000000000000000000000000000000000000001"
		const addresscxU0q9 = accounts[5]
		const addressbSUnF3N = accounts[0]
		const addressE4Ea5wu = accounts[4]
		const stringYQfnqDz = "AO8ynRk2PSiFWeug33mVs909Oksi4cy5T9igxNzrptNWPI2g9DjnNI6R2Vy5d"
		const stringBAuf7Sp = "8gmh7euGu1pNE3zXwTUTdaTHx4mHwrTVOHzy1eW4o7mUcjvMphYtSblWyYSNF9Q8Ft8Hd6eDrQauAoNkAEQd9Pjy"
		const uintbIae8KI = BigInt("593")
		const addressRuux3BJ = accounts[4]
//		const stringWy0TzTl = await POWTokenv21IhT3.initialize.call(stringBAuf7Sp, stringYQfnqDz, addressE4Ea5wu, addressbSUnF3N, addresscxU0q9, addresscjY4ygT, addressLS0I8KD, addressRsmudza, address9Z6GyT, addressfKZd1m3, uintY7JwxjD, uintrR3JuU3, uintlSiSTRV, uintk3dICkm, uintNdN8qtK, {from: accounts[1]});
//		const uint256SmFpnBC = await POWTokenv21IhT3.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[5]});
//		const boolZXs0yLQ = await POWTokenv21IhT3.approve.call(addressRuux3BJ, uintbIae8KI, {from: accounts[3]});

		await expect(POWTokenv21IhT3.initialize.call(stringBAuf7Sp, stringYQfnqDz, addressE4Ea5wu, addressbSUnF3N, addresscxU0q9, addresscjY4ygT, addressLS0I8KD, addressRsmudza, address9Z6GyT, addressfKZd1m3, uintY7JwxjD, uintrR3JuU3, uintlSiSTRV, uintk3dICkm, uintNdN8qtK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenzXOGNpm = await POWToken.new({from: accounts[2]});
		const uinttta574A = BigInt("208")
		const addressNbe6FyK = accounts[0]
		const uintdo9pPDF = BigInt("1856")
		const addressuALu499 = accounts[2]
		const uintAxcZjxq = BigInt("513")
		const addressFM2lMC = accounts[2]
		const addressqxoXJE3 = accounts[4]
		const boolcnhRVZ = await POWTokenzXOGNpm.approve.call(addressNbe6FyK, uinttta574A, {from: accounts[2]});
		const uint256LJgYSq9 = await POWTokenzXOGNpm.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenzXOGNpm.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressMOCBErT = await POWTokenzXOGNpm.claimReward.call(addressuALu499, uintdo9pPDF, {from: accounts[5]});
//		await POWTokenzXOGNpm.unpause.call({from: accounts[1]});
//		const boolFiUic0S = await POWTokenzXOGNpm.transferFrom.call(addressqxoXJE3, addressFM2lMC, uintAxcZjxq, {from: accounts[4]});

		assert.equal(boolcnhRVZ, true)
		assert.equal(uint256LJgYSq9, BigInt("0"))
		await expect(POWTokenzXOGNpm.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenWiiYYwI = await POWToken.new({from: accounts[4]});
		const uintJx1f50Y = BigInt("1347")
		const addressjg4dNY = accounts[4]
		const uintJ1ptTBI = BigInt("1752")
//		const addressbCV4SI2 = await POWTokenWiiYYwI.claimIncome.call(addressjg4dNY, uintJx1f50Y, {from: accounts[3]});
//		await POWTokenWiiYYwI.whenNotPaused.call({from: accounts[4]});
//		const uint256SwCRLMs = await POWTokenWiiYYwI.setStakingRewardRatio.call(uintJ1ptTBI, {from: accounts[0]});

		await expect(POWTokenWiiYYwI.claimIncome.call(addressjg4dNY, uintJx1f50Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEot43Ch = await POWToken.new({from: accounts[0]});
		const uintKUDyre = BigInt("1359")
		const boolnQAUqIF = await POWTokenEot43Ch.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256oayGs0l = await POWTokenEot43Ch.remainingAmount.call({from: accounts[2]});
//		const uint256WcqvIAa = await POWTokenEot43Ch.setStartMiningTime.call(uintKUDyre, {from: accounts[1]});

		assert.equal(boolnQAUqIF, false)
		assert.equal(uint256oayGs0l, BigInt("0"))
		await expect(POWTokenEot43Ch.setStartMiningTime.call(uintKUDyre, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEot43Ch = await POWToken.new({from: accounts[0]});
		const bytexKvV3Hg = "0x171a0b20180b10010d181e19000605170f15201c1d050b1c1b0403101b141417"
		const byteuoK1Qon = "0x0b0a1f140419191c150d1e031b1f0a1a0a1414140a12101d17041e1e0318080f"
		const uinthYMtlU = BigInt("22")
		const uintIkHk3i = BigInt("870")
		const uintk781STw = BigInt("533")
		const addressbeWBgev = accounts[4]
		const addressxL7i69x = accounts[4]
		const uintOvyskXZ = BigInt("530")
		const addressd3JmiXF = accounts[3]
		const uint256oayGs0l = await POWTokenEot43Ch.remainingAmount.call({from: accounts[2]});
//		const addressmn9hHAA = await POWTokenEot43Ch.permit.call(addressxL7i69x, addressbeWBgev, uintk781STw, uintIkHk3i, uinthYMtlU, byteuoK1Qon, bytexKvV3Hg, {from: accounts[0]});
//		const addressWdvXJUP = await POWTokenEot43Ch.mint.call(addressd3JmiXF, uintOvyskXZ, {from: accounts[4]});

		assert.equal(uint256oayGs0l, BigInt("0"))
		await expect(POWTokenEot43Ch.permit.call(addressxL7i69x, addressbeWBgev, uintk781STw, uintIkHk3i, uinthYMtlU, byteuoK1Qon, bytexKvV3Hg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEot43Ch = await POWToken.new({from: accounts[0]});
		const uintedphlrL = BigInt("23")
		const address6or5kI = accounts[4]
		const uint256oayGs0l = await POWTokenEot43Ch.remainingAmount.call({from: accounts[2]});
//		const addressH2kVtcC = await POWTokenEot43Ch.mint.call(address6or5kI, uintedphlrL, {from: accounts[3]});

		assert.equal(uint256oayGs0l, BigInt("0"))
		await expect(POWTokenEot43Ch.mint.call(address6or5kI, uintedphlrL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenWiiYYwI = await POWToken.new({from: accounts[4]});
		const uintIKGi9xR = BigInt("1133")
		const uint256GYh6BqB = await POWTokenWiiYYwI.remainingAmount.call({from: accounts[2]});
		const uint256c2VAN1C = await POWTokenWiiYYwI.lpStakingRewardRate.call({from: accounts[1]});
//		const uint256SwCRLMs = await POWTokenWiiYYwI.setStakingRewardRatio.call(uintIKGi9xR, {from: accounts[0]});
//		const uint256o0dfrY = await POWTokenWiiYYwI.getHistoryWorkingRate.call({from: accounts[4]});

		assert.equal(uint256GYh6BqB, BigInt("0"))
		assert.equal(uint256c2VAN1C, BigInt("0"))
		await expect(POWTokenWiiYYwI.setStakingRewardRatio.call(uintIKGi9xR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEot43Ch = await POWToken.new({from: accounts[0]});
		const uint256oayGs0l = await POWTokenEot43Ch.remainingAmount.call({from: accounts[2]});
//		const uint256OvVh8Xa = await POWTokenEot43Ch.getIncomeBTCInWeiPerSec.call({from: accounts[3]});

		assert.equal(uint256oayGs0l, BigInt("0"))
		await expect(POWTokenEot43Ch.getIncomeBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenWiiYYwI = await POWToken.new({from: accounts[4]});
		const uintfFkOK4L = BigInt("1888")
//		const uint256hdIAUMg = await POWTokenWiiYYwI.getHistoryWorkingRate.call({from: accounts[0]});
//		const uint256SwCRLMs = await POWTokenWiiYYwI.setStakingRewardRatio.call(uintfFkOK4L, {from: accounts[0]});

		await expect(POWTokenWiiYYwI.getHistoryWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEot43Ch = await POWToken.new({from: accounts[0]});
		const uintzbQs3kJ = BigInt("71")
		const addressUIjenbX = accounts[1]
		const addressEzPgUSE = accounts[0]
//		const boolqU6zNyd = await POWTokenEot43Ch.transferFrom.call(addressEzPgUSE, addressUIjenbX, uintzbQs3kJ, {from: accounts[0]});
//		const uint256oayGs0l = await POWTokenEot43Ch.remainingAmount.call({from: accounts[2]});

		await expect(POWTokenEot43Ch.transferFrom.call(addressEzPgUSE, addressUIjenbX, uintzbQs3kJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEot43Ch = await POWToken.new({from: accounts[0]});
		const uint5EDDEV = BigInt("57")
//		await POWTokenEot43Ch.updateIncomeRate.call({from: accounts[4]});
//		const uint256JdVRzi = await POWTokenEot43Ch.addHashRate.call(uint5EDDEV, {from: accounts[4]});
//		const uint256oayGs0l = await POWTokenEot43Ch.remainingAmount.call({from: accounts[2]});

		await expect(POWTokenEot43Ch.updateIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
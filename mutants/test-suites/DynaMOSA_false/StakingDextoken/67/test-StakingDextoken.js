const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressNxMKXVG = accounts[1]
		const addressZqHblIb = accounts[3]
		const StakingDextokenQ9gpKKf = await StakingDextoken.new(addressNxMKXVG, addressZqHblIb, {from: accounts[2]});
		const addressgOgT8AO = accounts[2]
		const uintpZzoOb7 = await StakingDextokenQ9gpKKf.stakeOf.call(addressgOgT8AO, {from: "0x0000000000000000000000000000000000000001"});
		const uintj11E1Gk = await StakingDextokenQ9gpKKf.totalRewards.call({from: accounts[4]});

		assert.equal(uintj11E1Gk, BigInt("0"))
		assert.equal(uintpZzoOb7, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressuksa4w4 = accounts[3]
		const addressNuRqLow = "0x0000000000000000000000000000000000000001"
		const StakingDextokenQA9rkLS = await StakingDextoken.new(addressuksa4w4, addressNuRqLow, {from: accounts[2]});
		const uintbDsalx = BigInt("1150")
		const addressl4zoZis = accounts[2]
		const addressQ7GQmdg = accounts[0]
//		const uintUmHUQbb = await StakingDextokenQA9rkLS.withdraw.call(uintbDsalx, {from: accounts[1]});
//		const uintJxyorzH = await StakingDextokenQA9rkLS.stakeOf.call(addressl4zoZis, {from: accounts[1]});
//		const uintY6bcYP = await StakingDextokenQA9rkLS.earned.call(addressQ7GQmdg, {from: accounts[2]});

		await expect(StakingDextokenQA9rkLS.withdraw.call(uintbDsalx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressNIgVQ2r = accounts[2]
		const addressn95Lnea = accounts[1]
		const StakingDextokenD88kUgU = await StakingDextoken.new(addressNIgVQ2r, addressn95Lnea, {from: accounts[1]});
		const addressELkODpI = accounts[4]
		const addresseatvBPx = accounts[0]
		const addressTMhbmmH = accounts[1]
//		const addressAH68Ma = await StakingDextokenD88kUgU.notFrozen.call(addressELkODpI, {from: accounts[0]});
//		const uintMs6St7D = await StakingDextokenD88kUgU.rewardOf.call(addresseatvBPx, {from: accounts[5]});
//		const boolYmmYtaz = await StakingDextokenD88kUgU.freezeAccount.call(addressTMhbmmH, {from: accounts[2]});

		await expect(StakingDextokenD88kUgU.notFrozen.call(addressELkODpI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressaLMkxYw = accounts[1]
		const addressJJaSpSC = accounts[5]
		const StakingDextokenZbiEuq = await StakingDextoken.new(addressaLMkxYw, addressJJaSpSC, {from: "0x0000000000000000000000000000000000000001"});
		const addressW59c08H = accounts[3]
		const addressv2WOdFd = accounts[4]
		const addressdLoO6Sc = accounts[1]
		const uintYo4EY7c = await StakingDextokenZbiEuq.getStartTimestamp.call({from: accounts[4]});
		const uintUIYRAxd = await StakingDextokenZbiEuq.stakeOf.call(addressW59c08H, {from: "0x0000000000000000000000000000000000000001"});
		const uintdcZ4STL = await StakingDextokenZbiEuq.rewardOf.call(addressv2WOdFd, {from: accounts[0]});
		const addressGkECMVq = await StakingDextokenZbiEuq.setBeneficial.call(addressdLoO6Sc, {from: accounts[0]});
	});

	it('test for StakingDextoken', async () => {
		const addressH1M3wiD = accounts[2]
		const addressuHWGfm3 = accounts[1]
		const StakingDextokenD88kUgU = await StakingDextoken.new(addressH1M3wiD, addressuHWGfm3, {from: accounts[1]});
		const addressY6NUBW2 = accounts[0]
		const addressWMYbFDl = accounts[1]
		const uintkjStXvv = BigInt("381")
		const addressNWC4njg = accounts[2]
		const uintMs6St7D = await StakingDextokenD88kUgU.rewardOf.call(addressY6NUBW2, {from: accounts[5]});
//		const boolYmmYtaz = await StakingDextokenD88kUgU.freezeAccount.call(addressWMYbFDl, {from: accounts[2]});
//		const addressiwrEJx = await StakingDextokenD88kUgU.capture.call(addressNWC4njg, uintkjStXvv, {from: accounts[3]});

		assert.equal(uintMs6St7D, BigInt("0"))
		await expect(StakingDextokenD88kUgU.freezeAccount.call(addressWMYbFDl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCFdzQRA = accounts[4]
		const addressOKfRH5K = accounts[2]
		const StakingDextokenQYfTCiT = await StakingDextoken.new(addressCFdzQRA, addressOKfRH5K, {from: accounts[4]});
		const addressNonBy6f = accounts[1]
		const addressczC8S3 = accounts[2]
		const addresszOYeuUb = accounts[4]
		const addresskBVkj87 = accounts[1]
		const uintevpWulY = await StakingDextokenQYfTCiT.balanceOf.call(addressNonBy6f, {from: accounts[2]});
		const uintTg8HKR = await StakingDextokenQYfTCiT.getTotalStakes.call({from: "0x0000000000000000000000000000000000000001"});
		const uintIFK5YUu = await StakingDextokenQYfTCiT.stakeOf.call(addressczC8S3, {from: accounts[1]});
		const uintwANlaD = await StakingDextokenQYfTCiT.getEndTimestamp.call({from: accounts[5]});
		const uintA2iJ007 = await StakingDextokenQYfTCiT.stakeOf.call(addresszOYeuUb, {from: accounts[0]});
//		const addressHe6CqNf = await StakingDextokenQYfTCiT.updateReward.call(addresskBVkj87, {from: accounts[1]});

		assert.equal(uintA2iJ007, BigInt("0"))
		assert.equal(uintIFK5YUu, BigInt("0"))
		assert.equal(uintTg8HKR, BigInt("0"))
		assert.equal(uintevpWulY, BigInt("0"))
		assert.equal(uintwANlaD, BigInt("0"))
		await expect(StakingDextokenQYfTCiT.updateReward.call(addresskBVkj87, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbxVqWT = accounts[5]
		const addresswu7uPo8 = accounts[0]
		const StakingDextokenpYcLhit = await StakingDextoken.new(addressbxVqWT, addresswu7uPo8, {from: accounts[0]});
		const addressrEchUr = accounts[2]
		const uintc9D0zHb = BigInt("1770")
		const uintIkUm21O = await StakingDextokenpYcLhit.earned.call(addressrEchUr, {from: accounts[3]});
//		const uintCdps7Ai = await StakingDextokenpYcLhit.deposit.call(uintc9D0zHb, {from: accounts[3]});

		assert.equal(uintIkUm21O, BigInt("0"))
		await expect(StakingDextokenpYcLhit.deposit.call(uintc9D0zHb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxzMIsm5 = accounts[1]
		const addressP4ty1kY = accounts[3]
		const StakingDextokenQ9gpKKf = await StakingDextoken.new(addressxzMIsm5, addressP4ty1kY, {from: accounts[2]});
		const uintj11E1Gk = await StakingDextokenQ9gpKKf.totalRewards.call({from: accounts[4]});
		const uintOCvUtG4 = await StakingDextokenQ9gpKKf.getStartTimestamp.call({from: accounts[5]});
		const uintN8SVf5t = await StakingDextokenQ9gpKKf.rewardPerToken.call({from: accounts[3]});

		assert.equal(uintN8SVf5t, BigInt("0"))
		assert.equal(uintOCvUtG4, BigInt("0"))
		assert.equal(uintj11E1Gk, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressTWMV9q = accounts[1]
		const addressQXNrgx = accounts[0]
		const StakingDextokenMq3swpx = await StakingDextoken.new(addressTWMV9q, addressQXNrgx, {from: accounts[0]});
		const uintSA8tvtq = BigInt("1142")
		const uinttOz5Ptq = BigInt("1912")
		const uintrAlvRp = BigInt("1410")
		const uintKsg4aDr = BigInt("787")
		const addressCR3JB6d = accounts[0]
		const addressyoMpSoo = accounts[0]
//		await StakingDextokenMq3swpx.claim.call({from: accounts[0]});
//		const uintjYtcLzh = await StakingDextokenMq3swpx.setRewardRound.call(uintKsg4aDr, uintrAlvRp, uinttOz5Ptq, uintSA8tvtq, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoeqYtK = await StakingDextokenMq3swpx.setBeneficial.call(addressCR3JB6d, {from: accounts[4]});
//		const addressxwLOGay = await StakingDextokenMq3swpx.notFrozen.call(addressyoMpSoo, {from: accounts[0]});

		await expect(StakingDextokenMq3swpx.claim.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWP4f2Hd = accounts[4]
		const addressyq2VnmO = accounts[5]
		const StakingDextokentJJUPnn = await StakingDextoken.new(addressWP4f2Hd, addressyq2VnmO, {from: accounts[4]});
		const addressihGzXy6 = accounts[5]
		const addressdTokW5 = accounts[2]
		const uintGEoDwZ = BigInt("1081")
		const addressKL4VT1h = accounts[0]
		const addressiUVl9hq = accounts[1]
		const boolocjrGsE = await StakingDextokentJJUPnn.freezeAccount.call(addressihGzXy6, {from: accounts[4]});
		const uintIdRGib = await StakingDextokentJJUPnn.getClaimOf.call(addressdTokW5, {from: accounts[5]});
//		const uintObTFSpY = await StakingDextokentJJUPnn.deposit.call(uintGEoDwZ, {from: accounts[4]});
//		const uintoOZVFj0 = await StakingDextokentJJUPnn.getWithdrawalOf.call(addressKL4VT1h, {from: accounts[0]});
//		const uintaOgZW6t = await StakingDextokentJJUPnn.getWithdrawalOf.call(addressiUVl9hq, {from: accounts[2]});

		assert.equal(boolocjrGsE, true)
		assert.equal(uintIdRGib, BigInt("0"))
		await expect(StakingDextokentJJUPnn.deposit.call(uintGEoDwZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressuaZu6QF = accounts[5]
		const addresssAfOyep = accounts[0]
		const StakingDextokenpYcLhit = await StakingDextoken.new(addressuaZu6QF, addresssAfOyep, {from: accounts[0]});
		const uintf1jbLkq = BigInt("1913")
		const addresstNAD1ot = accounts[2]
		const uintwOiygop = BigInt("1047")
		const uintPgMUGpC = BigInt("1312")
		const uinttzfJQ0u = BigInt("1219")
		const uintwII9Qm = BigInt("1364")
		const uintyszgcKi = BigInt("1811")
//		const addressYXtEnnv = await StakingDextokenpYcLhit.capture.call(addresstNAD1ot, uintf1jbLkq, {from: accounts[0]});
//		const uintYlXC4Ve = await StakingDextokenpYcLhit.getEndTimestamp.call({from: accounts[4]});
//		const uintKSdLeA = await StakingDextokenpYcLhit.setRewardRound.call(uintwII9Qm, uinttzfJQ0u, uintPgMUGpC, uintwOiygop, {from: accounts[0]});
//		const uintCdps7Ai = await StakingDextokenpYcLhit.deposit.call(uintyszgcKi, {from: accounts[3]});

		await expect(StakingDextokenpYcLhit.capture.call(addresstNAD1ot, uintf1jbLkq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressKKodd0l = accounts[1]
		const addressuE5MEyw = accounts[3]
		const StakingDextoken5NgnQt = await StakingDextoken.new(addressKKodd0l, addressuE5MEyw, {from: accounts[4]});
		const addresswIem75g = accounts[1]
		const uintabMna0M = BigInt("910")
		const addressqshGnKm = accounts[3]
		const uintWSrg8Yh = await StakingDextoken5NgnQt.stakeOf.call(addresswIem75g, {from: accounts[4]});
		const uintI9yh3t = await StakingDextoken5NgnQt.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addressgqQmhXh = await StakingDextoken5NgnQt.capture.call(addressqshGnKm, uintabMna0M, {from: accounts[4]});

		assert.equal(uintI9yh3t, BigInt("0"))
		assert.equal(uintWSrg8Yh, BigInt("0"))
		await expect(StakingDextoken5NgnQt.capture.call(addressqshGnKm, uintabMna0M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address9S33mO = accounts[3]
		const addressSslvP2Q = accounts[4]
		const StakingDextokenBZpnEPx = await StakingDextoken.new(address9S33mO, addressSslvP2Q, {from: accounts[2]});
		const addressLJRuRvq = accounts[5]
		const uintvtRqJlx = await StakingDextokenBZpnEPx.getStartTimestamp.call({from: accounts[1]});
		const uintlZEdOQG = await StakingDextokenBZpnEPx.remainingRewards.call({from: accounts[1]});
//		const boolmLbSRD5 = await StakingDextokenBZpnEPx.freezeAccount.call(addressLJRuRvq, {from: accounts[3]});

		assert.equal(uintlZEdOQG, BigInt("0"))
		assert.equal(uintvtRqJlx, BigInt("0"))
		await expect(StakingDextokenBZpnEPx.freezeAccount.call(addressLJRuRvq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGkYXqKS = accounts[1]
		const addresszOYGb2L = accounts[3]
		const StakingDextokenk2CKNur = await StakingDextoken.new(addressGkYXqKS, addresszOYGb2L, {from: accounts[0]});
		const addressNoQRAnl = accounts[3]
		const uintnlIkZ4O = BigInt("900")
		const uintvo8QSB = await StakingDextokenk2CKNur.getWithdrawalOf.call(addressNoQRAnl, {from: accounts[0]});
		const uintTq7eh4O = await StakingDextokenk2CKNur.getTotalStakes.call({from: accounts[5]});
//		await StakingDextokenk2CKNur.notifyRewards.call({from: accounts[2]});
//		const uintaGfvanD = await StakingDextokenk2CKNur.withdraw.call(uintnlIkZ4O, {from: accounts[4]});

		assert.equal(uintTq7eh4O, BigInt("0"))
		assert.equal(uintvo8QSB, BigInt("0"))
		await expect(StakingDextokenk2CKNur.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressHaKHVS2 = accounts[1]
		const addressMzNmMu = accounts[5]
		const StakingDextokenBo143ut = await StakingDextoken.new(addressHaKHVS2, addressMzNmMu, {from: accounts[1]});
		const addresspCtpqN3 = accounts[2]
		const uintZrlH8RS = BigInt("640")
		const addressWHe8BE = accounts[3]
		const uintmLSNk6 = BigInt("572")
		const addressbLKiknC = accounts[3]
		const addresslQ4aryU = accounts[0]
//		const boolwr4YjT0 = await StakingDextokenBo143ut.unfreezeAccount.call(addresspCtpqN3, {from: accounts[1]});
//		const addresss9R74tx = await StakingDextokenBo143ut.capture.call(addressWHe8BE, uintZrlH8RS, {from: accounts[4]});
//		const addresst1haXrJ = await StakingDextokenBo143ut.capture.call(addressbLKiknC, uintmLSNk6, {from: accounts[0]});
//		const uintNR6dCnm = await StakingDextokenBo143ut.earned.call(addresslQ4aryU, {from: accounts[3]});

		await expect(StakingDextokenBo143ut.unfreezeAccount.call(addresspCtpqN3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressrprDixv = accounts[5]
		const addressg8HCaOj = accounts[0]
		const StakingDextokenpYcLhit = await StakingDextoken.new(addressrprDixv, addressg8HCaOj, {from: accounts[0]});
		const uintK3UJiX6 = BigInt("224")
		const uintaorGyiJ = BigInt("1031")
		const uintzSPRu6k = BigInt("1920")
		const uintykCB5kK = BigInt("898")
		const uintqObMJP = BigInt("255")
		const uintm7aMYm = await StakingDextokenpYcLhit.totalRewards.call({from: accounts[4]});
		const uintU2yu7jL = await StakingDextokenpYcLhit.rewardPerToken.call({from: accounts[2]});
//		const uintcRSotz2 = await StakingDextokenpYcLhit.setRewardRound.call(uintykCB5kK, uintzSPRu6k, uintaorGyiJ, uintK3UJiX6, {from: accounts[0]});
//		const uintZOcqKIE = await StakingDextokenpYcLhit.withdraw.call(uintqObMJP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintU2yu7jL, BigInt("0"))
		assert.equal(uintm7aMYm, BigInt("0"))
		await expect(StakingDextokenpYcLhit.setRewardRound.call(uintykCB5kK, uintzSPRu6k, uintaorGyiJ, uintK3UJiX6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressRbT274 = accounts[5]
		const addressH5hEsH = accounts[0]
		const StakingDextokenpYcLhit = await StakingDextoken.new(addressRbT274, addressH5hEsH, {from: accounts[0]});
		const addressAA1nQxO = accounts[3]
		const uintQzVG3d = BigInt("266")
//		await StakingDextokenpYcLhit.notifyRewards.call({from: accounts[0]});
//		const uintYVm644P = await StakingDextokenpYcLhit.rewardOf.call(addressAA1nQxO, {from: accounts[4]});
//		const uintZOcqKIE = await StakingDextokenpYcLhit.withdraw.call(uintQzVG3d, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenpYcLhit.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAqllNG = accounts[4]
		const addressYLUUpKZ = accounts[3]
		const StakingDextokenJ1L3kis = await StakingDextoken.new(addressAqllNG, addressYLUUpKZ, {from: accounts[3]});
		const address6L2Si9 = accounts[4]
		const addressEsj8ac = await StakingDextokenJ1L3kis.setBeneficial.call(address6L2Si9, {from: accounts[3]});
		const uintZ9zbITe = await StakingDextokenJ1L3kis.rewardPerToken.call({from: accounts[0]});
		const uintP6o6ZSP = await StakingDextokenJ1L3kis.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uintP6o6ZSP, BigInt("0"))
		assert.equal(uintZ9zbITe, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressz9yoml1 = accounts[3]
		const addressTqtVYx5 = accounts[1]
		const StakingDextokenHmqgoS7 = await StakingDextoken.new(addressz9yoml1, addressTqtVYx5, {from: accounts[1]});
		const uinttvxHBm = BigInt("1622")
		const addressa1ZXEbY = accounts[3]
		const addresssv4wXcv = accounts[5]
//		const addressYcFZ1LZ = await StakingDextokenHmqgoS7.capture.call(addressa1ZXEbY, uinttvxHBm, {from: accounts[1]});
//		const uintgEdeHLd = await StakingDextokenHmqgoS7.stakeOf.call(addresssv4wXcv, {from: accounts[5]});
//		const uintrkdsns6 = await StakingDextokenHmqgoS7.remainingRewards.call({from: accounts[0]});
//		await StakingDextokenHmqgoS7.notifyRewards.call({from: accounts[2]});

		await expect(StakingDextokenHmqgoS7.capture.call(addressa1ZXEbY, uinttvxHBm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
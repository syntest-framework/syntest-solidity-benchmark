const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressGHHiHnX = accounts[3]
		const addressOCWaOB1 = accounts[0]
		const StakingDextokenVBn6TX = await StakingDextoken.new(addressGHHiHnX, addressOCWaOB1, {from: accounts[2]});
		const addresse33TQLr = accounts[2]
		const uintJ2AWUeN = await StakingDextokenVBn6TX.balanceOf.call(addresse33TQLr, {from: accounts[4]});
		const uintNYFHnh7 = await StakingDextokenVBn6TX.getEndTimestamp.call({from: accounts[2]});
		const uintQ9s7oAJ = await StakingDextokenVBn6TX.remainingRewards.call({from: accounts[3]});
		const uintvKoPy7x = await StakingDextokenVBn6TX.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uintJ2AWUeN, BigInt("0"))
		assert.equal(uintNYFHnh7, BigInt("0"))
		assert.equal(uintQ9s7oAJ, BigInt("0"))
		assert.equal(uintvKoPy7x, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const address6Awarw = accounts[1]
		const addressIkjafQ = accounts[0]
		const StakingDextokenHVRz3Mt = await StakingDextoken.new(address6Awarw, addressIkjafQ, {from: accounts[3]});
		const addressP8cQceS = accounts[1]
		const uintmsu2Lwd = BigInt("770")
//		const addressl94f330 = await StakingDextokenHVRz3Mt.updateReward.call(addressP8cQceS, {from: accounts[0]});
//		const uintF2Q305g = await StakingDextokenHVRz3Mt.deposit.call(uintmsu2Lwd, {from: accounts[1]});
//		const uintMVRevQI = await StakingDextokenHVRz3Mt.getEndTimestamp.call({from: accounts[4]});

		await expect(StakingDextokenHVRz3Mt.updateReward.call(addressP8cQceS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPEvV1CW = accounts[0]
		const addressepg8vLL = accounts[2]
		const StakingDextokenrVmm2Ot = await StakingDextoken.new(addressPEvV1CW, addressepg8vLL, {from: accounts[1]});
		const addressjKB624o = "0x0000000000000000000000000000000000000001"
//		await StakingDextokenrVmm2Ot.notifyRewards.call({from: accounts[3]});
//		const uintNoKfDcW = await StakingDextokenrVmm2Ot.getClaimOf.call(addressjKB624o, {from: accounts[4]});
//		const uintz3TUmd2 = await StakingDextokenrVmm2Ot.getEndTimestamp.call({from: accounts[4]});

		await expect(StakingDextokenrVmm2Ot.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressFrMsAnG = accounts[0]
		const addressKSs6MI6 = accounts[4]
		const StakingDextokengNfsGvK = await StakingDextoken.new(addressFrMsAnG, addressKSs6MI6, {from: accounts[2]});
		const addressgnLK7T1 = accounts[4]
		const addressBCPcV9X = accounts[4]
		const addressqGNiB69 = accounts[1]
		const addressZDghRW = await StakingDextokengNfsGvK.setBeneficial.call(addressgnLK7T1, {from: accounts[2]});
//		const boolJdWlpsq = await StakingDextokengNfsGvK.unfreezeAccount.call(addressBCPcV9X, {from: "0x0000000000000000000000000000000000000001"});
//		const uinttdA7nvy = await StakingDextokengNfsGvK.getClaimOf.call(addressqGNiB69, {from: accounts[3]});

		await expect(StakingDextokengNfsGvK.unfreezeAccount.call(addressBCPcV9X, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIbaPUWA = accounts[5]
		const addressjtxMxuy = accounts[0]
		const StakingDextokenBmaaNKe = await StakingDextoken.new(addressIbaPUWA, addressjtxMxuy, {from: accounts[0]});
		const addressArSBdBI = accounts[3]
		const addresspswzaR = "0x0000000000000000000000000000000000000001"
		const uintj6UUUeb = await StakingDextokenBmaaNKe.totalRewards.call({from: accounts[2]});
		const uintPyFqZcG = await StakingDextokenBmaaNKe.stakeOf.call(addressArSBdBI, {from: accounts[3]});
//		const boolf0XqjtB = await StakingDextokenBmaaNKe.freezeAccount.call(addresspswzaR, {from: accounts[3]});
//		const uintjK4OGL5 = await StakingDextokenBmaaNKe.totalRewards.call({from: accounts[5]});
//		const uintWbIok0R = await StakingDextokenBmaaNKe.getStartTimestamp.call({from: accounts[1]});

		assert.equal(uintPyFqZcG, BigInt("0"))
		assert.equal(uintj6UUUeb, BigInt("0"))
		await expect(StakingDextokenBmaaNKe.freezeAccount.call(addresspswzaR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressSdvGozA = accounts[0]
		const addresst3mH13L = accounts[2]
		const StakingDextokenvWXRe9 = await StakingDextoken.new(addressSdvGozA, addresst3mH13L, {from: "0x0000000000000000000000000000000000000001"});
		const addressK5LMHAN = accounts[0]
		const addressdyj3wZV = accounts[0]
		const addresssH1Zbty = accounts[5]
		const uintmIOw6k2 = await StakingDextokenvWXRe9.getWithdrawalOf.call(addressK5LMHAN, {from: accounts[3]});
		await StakingDextokenvWXRe9.claim.call({from: accounts[3]});
		const uintBvQZh0M = await StakingDextokenvWXRe9.getWithdrawalOf.call(addressdyj3wZV, {from: accounts[2]});
		await StakingDextokenvWXRe9.notifyRewards.call({from: accounts[0]});
		const uintc9D5aB = await StakingDextokenvWXRe9.getWithdrawalOf.call(addresssH1Zbty, {from: accounts[3]});
	});

	it('test for StakingDextoken', async () => {
		const addressCMmbGBG = accounts[0]
		const addresse8S6wqy = accounts[2]
		const StakingDextokenrVmm2Ot = await StakingDextoken.new(addressCMmbGBG, addresse8S6wqy, {from: accounts[1]});
		const addressttpXhtn = "0x0000000000000000000000000000000000000000"
		const uinttxOcX8F = BigInt("1115")
		const uintwktTxkW = BigInt("535")
		const uintEXatv7r = BigInt("1435")
		const uintcdMSp00 = BigInt("1078")
		const uintNoKfDcW = await StakingDextokenrVmm2Ot.getClaimOf.call(addressttpXhtn, {from: accounts[4]});
//		await StakingDextokenrVmm2Ot.claim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintEQbZ0CZ = await StakingDextokenrVmm2Ot.setRewardRound.call(uintcdMSp00, uintEXatv7r, uintwktTxkW, uinttxOcX8F, {from: accounts[1]});
//		const uintz3TUmd2 = await StakingDextokenrVmm2Ot.getEndTimestamp.call({from: accounts[4]});

		assert.equal(uintNoKfDcW, BigInt("0"))
		await expect(StakingDextokenrVmm2Ot.claim.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvLKV6pD = accounts[0]
		const addressXFMN1CD = accounts[4]
		const StakingDextokengNfsGvK = await StakingDextoken.new(addressvLKV6pD, addressXFMN1CD, {from: accounts[2]});
		const addresse9x0daH = accounts[4]
		const uintoroueIo = BigInt("576")
		const addressFaZDSs = accounts[1]
		const addressZDghRW = await StakingDextokengNfsGvK.setBeneficial.call(addresse9x0daH, {from: accounts[2]});
//		const uintleg7TKb = await StakingDextokengNfsGvK.withdraw.call(uintoroueIo, {from: accounts[0]});
//		await StakingDextokengNfsGvK.claim.call({from: accounts[1]});
//		const uinttdA7nvy = await StakingDextokengNfsGvK.getClaimOf.call(addressFaZDSs, {from: accounts[3]});

		await expect(StakingDextokengNfsGvK.withdraw.call(uintoroueIo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressP0ehdAQ = accounts[5]
		const addresspD5vVX4 = accounts[0]
		const StakingDextokenBmaaNKe = await StakingDextoken.new(addressP0ehdAQ, addresspD5vVX4, {from: accounts[0]});
		const addressF83qA33 = accounts[4]
		const uintj6UUUeb = await StakingDextokenBmaaNKe.totalRewards.call({from: accounts[2]});
		const uintPyFqZcG = await StakingDextokenBmaaNKe.stakeOf.call(addressF83qA33, {from: accounts[3]});
		const uintjK4OGL5 = await StakingDextokenBmaaNKe.totalRewards.call({from: accounts[5]});
		const uintWbIok0R = await StakingDextokenBmaaNKe.getStartTimestamp.call({from: accounts[1]});

		assert.equal(uintPyFqZcG, BigInt("0"))
		assert.equal(uintWbIok0R, BigInt("0"))
		assert.equal(uintj6UUUeb, BigInt("0"))
		assert.equal(uintjK4OGL5, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresst33ZenU = accounts[5]
		const addressd5rHEJb = accounts[0]
		const StakingDextokenBmaaNKe = await StakingDextoken.new(addresst33ZenU, addressd5rHEJb, {from: accounts[0]});
		const addressGg8wJI0 = accounts[4]
		const addressvMwe823 = accounts[5]
		const addressS9VpwaN = accounts[3]
		const uintj6UUUeb = await StakingDextokenBmaaNKe.totalRewards.call({from: accounts[2]});
		const uintPyFqZcG = await StakingDextokenBmaaNKe.stakeOf.call(addressGg8wJI0, {from: accounts[3]});
		const uintTXlVZJ7 = await StakingDextokenBmaaNKe.rewardOf.call(addressvMwe823, {from: accounts[0]});
//		const boolf0XqjtB = await StakingDextokenBmaaNKe.freezeAccount.call(addressS9VpwaN, {from: accounts[3]});
//		const uintjK4OGL5 = await StakingDextokenBmaaNKe.totalRewards.call({from: accounts[5]});
//		const uintWbIok0R = await StakingDextokenBmaaNKe.getStartTimestamp.call({from: accounts[1]});

		assert.equal(uintPyFqZcG, BigInt("0"))
		assert.equal(uintTXlVZJ7, BigInt("0"))
		assert.equal(uintj6UUUeb, BigInt("0"))
		await expect(StakingDextokenBmaaNKe.freezeAccount.call(addressS9VpwaN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTvPDFI = accounts[1]
		const addressdgsJ5A = accounts[1]
		const StakingDextokenziucvko = await StakingDextoken.new(addressTvPDFI, addressdgsJ5A, {from: accounts[3]});
		const uintuk3yOe8 = BigInt("690")
		const addressWznETd = accounts[2]
		const addressAGDyz3v = accounts[0]
//		const uintAMcK08O = await StakingDextokenziucvko.deposit.call(uintuk3yOe8, {from: accounts[3]});
//		const addressH0Q2Zs8 = await StakingDextokenziucvko.setBeneficial.call(addressWznETd, {from: accounts[3]});
//		const boolRzlC2Yi = await StakingDextokenziucvko.freezeAccount.call(addressAGDyz3v, {from: accounts[2]});

		await expect(StakingDextokenziucvko.deposit.call(uintuk3yOe8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressF4a1XWM = accounts[0]
		const addressmZzAM0M = accounts[4]
		const StakingDextokengNfsGvK = await StakingDextoken.new(addressF4a1XWM, addressmZzAM0M, {from: accounts[2]});
		const addressB652pr = accounts[1]
		const addressI9O9EeM = accounts[3]
		const addressCnoLZo8 = accounts[4]
		const uintX9vZ2bO = BigInt("576")
		const addressbqSfdSB = accounts[1]
		const uintuhLmgRp = await StakingDextokengNfsGvK.getWithdrawalOf.call(addressB652pr, {from: "0x0000000000000000000000000000000000000001"});
		const uintZuMUr5 = await StakingDextokengNfsGvK.stakeOf.call(addressI9O9EeM, {from: accounts[4]});
		const addressZDghRW = await StakingDextokengNfsGvK.setBeneficial.call(addressCnoLZo8, {from: accounts[2]});
//		const uintleg7TKb = await StakingDextokengNfsGvK.withdraw.call(uintX9vZ2bO, {from: accounts[0]});
//		await StakingDextokengNfsGvK.claim.call({from: accounts[1]});
//		const uinttdA7nvy = await StakingDextokengNfsGvK.getClaimOf.call(addressbqSfdSB, {from: accounts[3]});

		assert.equal(uintZuMUr5, BigInt("0"))
		assert.equal(uintuhLmgRp, BigInt("0"))
		await expect(StakingDextokengNfsGvK.withdraw.call(uintX9vZ2bO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressp66vFJT = accounts[0]
		const addressl2mjciz = accounts[4]
		const StakingDextokengNfsGvK = await StakingDextoken.new(addressp66vFJT, addressl2mjciz, {from: accounts[2]});
		const addressR8EMtui = accounts[4]
		const uintvCUJjqE = BigInt("1382")
		const uintEgWVnti = BigInt("654")
		const uintUwOG6yv = BigInt("1868")
		const uintDSaEabL = BigInt("902")
		const addressTgeHOnp = accounts[2]
		const uintw0OO0Ty = BigInt("576")
		const addresstq4DLC = accounts[2]
		const addressZDghRW = await StakingDextokengNfsGvK.setBeneficial.call(addressR8EMtui, {from: accounts[2]});
		const uintMY1qoNp = await StakingDextokengNfsGvK.setRewardRound.call(uintDSaEabL, uintUwOG6yv, uintEgWVnti, uintvCUJjqE, {from: accounts[2]});
//		const addresshdugpd4 = await StakingDextokengNfsGvK.updateReward.call(addressTgeHOnp, {from: accounts[3]});
//		const uintTuAJyJP = await StakingDextokengNfsGvK.getTotalStakes.call({from: accounts[0]});
//		const uintleg7TKb = await StakingDextokengNfsGvK.withdraw.call(uintw0OO0Ty, {from: accounts[0]});
//		const uinttdA7nvy = await StakingDextokengNfsGvK.getClaimOf.call(addresstq4DLC, {from: accounts[3]});

		await expect(StakingDextokengNfsGvK.updateReward.call(addressTgeHOnp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYA0tau8 = accounts[1]
		const addressWYxky7C = accounts[0]
		const StakingDextokenvC9hMGG = await StakingDextoken.new(addressYA0tau8, addressWYxky7C, {from: accounts[5]});
		const uinttmXU6j = await StakingDextokenvC9hMGG.totalRewards.call({from: accounts[4]});
//		await StakingDextokenvC9hMGG.notifyRewards.call({from: accounts[5]});

		assert.equal(uinttmXU6j, BigInt("0"))
		await expect(StakingDextokenvC9hMGG.notifyRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressijWLta = accounts[4]
		const addressT2JzbR = accounts[5]
		const StakingDextokenJYbbFvg = await StakingDextoken.new(addressijWLta, addressT2JzbR, {from: accounts[5]});
		const addressCzRWE7m = accounts[1]
		const uintb5Ys7m = BigInt("1150")
		const addresseWGkeS1 = accounts[2]
		const addressv8l81s0 = accounts[0]
		const uintxMAlbcS = BigInt("394")
		const uinthzo8xRx = await StakingDextokenJYbbFvg.stakeOf.call(addressCzRWE7m, {from: accounts[2]});
//		const addressorz1UGx = await StakingDextokenJYbbFvg.capture.call(addresseWGkeS1, uintb5Ys7m, {from: accounts[5]});
//		const uintapdoQbY = await StakingDextokenJYbbFvg.getClaimOf.call(addressv8l81s0, {from: "0x0000000000000000000000000000000000000001"});
//		const uintbGfIl92 = await StakingDextokenJYbbFvg.deposit.call(uintxMAlbcS, {from: accounts[4]});

		assert.equal(uinthzo8xRx, BigInt("0"))
		await expect(StakingDextokenJYbbFvg.capture.call(addresseWGkeS1, uintb5Ys7m, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressyUhfKt = accounts[3]
		const addressWYFtfxo = accounts[2]
		const StakingDextokenilLnFO8 = await StakingDextoken.new(addressyUhfKt, addressWYFtfxo, {from: accounts[3]});
		const addressP39dioL = accounts[1]
		const uintg0FXbwl = BigInt("540")
		const uintctJe7gR = BigInt("1620")
		const addresszMffEDi = accounts[4]
		const addressmerdjpp = accounts[1]
		const addressTDGZzMX = accounts[1]
		const addressk3j7Bxy = accounts[2]
		const uintJX4w4VJ = BigInt("305")
		const boolLHd7SnN = await StakingDextokenilLnFO8.freezeAccount.call(addressP39dioL, {from: accounts[3]});
//		await StakingDextokenilLnFO8.notifyRewards.call({from: accounts[3]});
//		const uintc7d13zC = await StakingDextokenilLnFO8.withdraw.call(uintg0FXbwl, {from: accounts[0]});
//		const uintDyB8iEb = await StakingDextokenilLnFO8.getTotalStakes.call({from: accounts[3]});
//		const addressruJ0sTf = await StakingDextokenilLnFO8.capture.call(addresszMffEDi, uintctJe7gR, {from: accounts[2]});
//		const uintem8nGLJ = await StakingDextokenilLnFO8.earned.call(addressmerdjpp, {from: accounts[4]});
//		const boolcFoIfOP = await StakingDextokenilLnFO8.freezeAccount.call(addressTDGZzMX, {from: accounts[5]});
//		const addressLOn9ZDd = await StakingDextokenilLnFO8.updateReward.call(addressk3j7Bxy, {from: accounts[4]});
//		const uintwC2qBzq = await StakingDextokenilLnFO8.withdraw.call(uintJX4w4VJ, {from: accounts[2]});

		assert.equal(boolLHd7SnN, true)
		await expect(StakingDextokenilLnFO8.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address7QVOLT = accounts[1]
		const addressQr0Ytgl = accounts[0]
		const StakingDextokenkyD9v6u = await StakingDextoken.new(address7QVOLT, addressQr0Ytgl, {from: accounts[3]});
		const addressqhWwnAG = accounts[3]
		const addressxI7S0VA = accounts[3]
		const addressy8V5eHb = accounts[1]
		const uintM1XRL6f = BigInt("153")
		const addressbAqWboy = accounts[4]
//		const boolEpp7Ep2 = await StakingDextokenkyD9v6u.unfreezeAccount.call(addressqhWwnAG, {from: accounts[3]});
//		const uintPf3ZWX6 = await StakingDextokenkyD9v6u.rewardOf.call(addressxI7S0VA, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYQg4Xpm = await StakingDextokenkyD9v6u.setBeneficial.call(addressy8V5eHb, {from: accounts[0]});
//		const uintVngvcd2 = await StakingDextokenkyD9v6u.deposit.call(uintM1XRL6f, {from: accounts[0]});
//		const uintgyu74z4 = await StakingDextokenkyD9v6u.stakeOf.call(addressbAqWboy, {from: accounts[3]});

		await expect(StakingDextokenkyD9v6u.unfreezeAccount.call(addressqhWwnAG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGq1Jwck = accounts[0]
		const addressA6dCeRy = accounts[4]
		const StakingDextokenQKlEOQm = await StakingDextoken.new(addressGq1Jwck, addressA6dCeRy, {from: accounts[0]});
		const uintJRZ2S46 = BigInt("80")
		const uintELjY6Z5 = BigInt("236")
		const uintPBz7AKK = BigInt("1799")
		const uintstJGOi = BigInt("230")
		const addressdxL9Aoj = accounts[3]
		const addressipdeLDX = accounts[0]
//		const uintmpc5MCt = await StakingDextokenQKlEOQm.setRewardRound.call(uintstJGOi, uintPBz7AKK, uintELjY6Z5, uintJRZ2S46, {from: accounts[0]});
//		const addressewTi3md = await StakingDextokenQKlEOQm.setBeneficial.call(addressdxL9Aoj, {from: accounts[3]});
//		const boolEgsqbi = await StakingDextokenQKlEOQm.unfreezeAccount.call(addressipdeLDX, {from: accounts[0]});

		await expect(StakingDextokenQKlEOQm.setRewardRound.call(uintstJGOi, uintPBz7AKK, uintELjY6Z5, uintJRZ2S46, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
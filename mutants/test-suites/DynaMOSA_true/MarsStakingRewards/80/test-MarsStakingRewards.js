const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressvB1zcjr = accounts[5]
		const addressTQGFjfP = accounts[4]
		const addressQdqIIKS = accounts[5]
		const MarsStakingRewardsvMKccVQ = await MarsStakingRewards.new(addressvB1zcjr, addressTQGFjfP, addressQdqIIKS, {from: accounts[4]});
		const byteBMyZ5E = "0x101b1205000303071c09180d0b1a1b080208151d0406131f08121e1f17171a19"
		const bytel50iKj = "0x1e04050507031e10121e170b170f1e0b1d1012040f051f0e0e141e20110a2003"
		const uintYt3tFj = BigInt("18")
		const uintFQLsdUp = BigInt("290")
		const uinthSc87r = BigInt("432")
		const uint256cctN7EJ = await MarsStakingRewardsvMKccVQ.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256qy7FlRo = await MarsStakingRewardsvMKccVQ.lastTimeRewardApplicable.call({from: accounts[3]});
//		await MarsStakingRewardsvMKccVQ.onlyOwner.call({from: accounts[0]});
//		const uint256fuYhVVG = await MarsStakingRewardsvMKccVQ.stakeWithPermit.call(uinthSc87r, uintFQLsdUp, uintYt3tFj, bytel50iKj, byteBMyZ5E, {from: accounts[2]});
//		const addressRBF0GnX = await MarsStakingRewardsvMKccVQ.owner.call({from: accounts[0]});
//		const uint256b4sA0Iz = await MarsStakingRewardsvMKccVQ.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256cctN7EJ, BigInt("0"))
		assert.equal(uint256qy7FlRo, BigInt("0"))
		await expect(MarsStakingRewardsvMKccVQ.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresshxFJIQh = accounts[1]
		const addressEm8oIvZ = accounts[2]
		const addressm4Bampg = accounts[1]
		const MarsStakingRewardsQWR5jaZ = await MarsStakingRewards.new(addresshxFJIQh, addressEm8oIvZ, addressm4Bampg, {from: "0x0000000000000000000000000000000000000001"});
		const addressqSQiVQ5 = accounts[3]
		const addressh8LcyBt = accounts[1]
		const addressAaVbZ1 = accounts[1]
		const uint256uA5yVHh = await MarsStakingRewardsQWR5jaZ.balanceOf.call(addressqSQiVQ5, {from: accounts[5]});
		await MarsStakingRewardsQWR5jaZ.onlyRewardsDistribution.call({from: accounts[3]});
		const boolzBwIg19 = await MarsStakingRewardsQWR5jaZ.isOwner.call({from: accounts[1]});
		const addressYyWabOO = await MarsStakingRewardsQWR5jaZ.updateReward.call(addressh8LcyBt, {from: accounts[0]});
		const addressc59byY = await MarsStakingRewardsQWR5jaZ.transferOwnership.call(addressAaVbZ1, {from: accounts[1]});
	});

	it('test for MarsStakingRewards', async () => {
		const addresst6WVRzb = "0x0000000000000000000000000000000000000001"
		const addressOGV3k20 = accounts[5]
		const addressAWaVsk5 = accounts[0]
		const MarsStakingRewardsR6BbYW8 = await MarsStakingRewards.new(addresst6WVRzb, addressOGV3k20, addressAWaVsk5, {from: accounts[5]});
		const uintKtm0eFx = BigInt("1027")
		const addressM76IRUk = "0x0000000000000000000000000000000000000001"
		const bytesfDrzAj = "0x06030413111309111f0d0110151c1903100b1b001d1e100a0b1e1812101b1305"
		const bytecGdFIFM = "0x0b190101201f14041d17021015130814161b1a0d010b030c0e09081607150307"
		const uintDB37srl = BigInt("247")
		const uinthv0DQk5 = BigInt("307")
		const uintgIjcm6x = BigInt("596")
		const uintQl2wv8e = BigInt("1418")
		const uintzbIBRcO = BigInt("1030")
//		const addressjJujZCX = await MarsStakingRewardsR6BbYW8.inCaseTokensGetStuck.call(addressM76IRUk, uintKtm0eFx, {from: accounts[2]});
//		const uint256fwIZbaT = await MarsStakingRewardsR6BbYW8.stakeWithPermit.call(uintgIjcm6x, uinthv0DQk5, uintDB37srl, bytecGdFIFM, bytesfDrzAj, {from: accounts[4]});
//		const uint256UxgVzkx = await MarsStakingRewardsR6BbYW8.notifyRewardAmount.call(uintzbIBRcO, uintQl2wv8e, {from: accounts[0]});

		await expect(MarsStakingRewardsR6BbYW8.inCaseTokensGetStuck.call(addressM76IRUk, uintKtm0eFx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgixV6iN = accounts[4]
		const addressHsimkqB = accounts[3]
		const addressqAydAD = accounts[4]
		const MarsStakingRewardsw7MJ3w7 = await MarsStakingRewards.new(addressgixV6iN, addressHsimkqB, addressqAydAD, {from: accounts[0]});
		const uintQIbnGrs = BigInt("82")
		const uintr7CcmLn = BigInt("1694")
		const uintRXqRSW4 = BigInt("1836")
		const uintiT2N3Yd = BigInt("1148")
		const uintBXvoXN3 = BigInt("1771")
		const addressTdnKAGZ = accounts[0]
//		const uint256LtavdTV = await MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintr7CcmLn, uintQIbnGrs, {from: accounts[4]});
//		await MarsStakingRewardsw7MJ3w7.onlyRewardsDistribution.call({from: accounts[3]});
//		const uint256URX5xTH = await MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintiT2N3Yd, uintRXqRSW4, {from: accounts[2]});
//		const addressBGomm0 = await MarsStakingRewardsw7MJ3w7.inCaseTokensGetStuck.call(addressTdnKAGZ, uintBXvoXN3, {from: accounts[0]});
//		const uint256uKgoo4F = await MarsStakingRewardsw7MJ3w7.getRewardForDuration.call({from: accounts[4]});
//		await MarsStakingRewardsw7MJ3w7.getReward.call({from: accounts[2]});

		await expect(MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintr7CcmLn, uintQIbnGrs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressl3cZvXi = accounts[1]
		const addressxKpYgB8 = accounts[4]
		const addressY5VR59i = accounts[2]
		const MarsStakingRewardsZQJzelH = await MarsStakingRewards.new(addressl3cZvXi, addressxKpYgB8, addressY5VR59i, {from: accounts[1]});
		const uintthWRYiv = BigInt("1866")
		const uintejqsEA = BigInt("909")
		const boolPv0qpkm = await MarsStakingRewardsZQJzelH.isOwner.call({from: accounts[2]});
		const uint256LOKP178 = await MarsStakingRewardsZQJzelH.totalSupply.call({from: accounts[5]});
//		const uint256AdAqP3C = await MarsStakingRewardsZQJzelH.notifyRewardAmount.call(uintejqsEA, uintthWRYiv, {from: accounts[4]});

		assert.equal(boolPv0qpkm, false)
		assert.equal(uint256LOKP178, BigInt("0"))
		await expect(MarsStakingRewardsZQJzelH.notifyRewardAmount.call(uintejqsEA, uintthWRYiv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskMyihh = accounts[4]
		const addressai7iq2Y = accounts[5]
		const addressgZ90ktY = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardszugAink = await MarsStakingRewards.new(addresskMyihh, addressai7iq2Y, addressgZ90ktY, {from: accounts[0]});
		const uinta6X9I0 = BigInt("1246")
		const uint256nBqRGrv = await MarsStakingRewardszugAink.getRewardForDuration.call({from: accounts[3]});
//		const uint256UDhnAup = await MarsStakingRewardszugAink.stake.call(uinta6X9I0, {from: accounts[1]});
//		await MarsStakingRewardszugAink.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256nBqRGrv, BigInt("0"))
		await expect(MarsStakingRewardszugAink.stake.call(uinta6X9I0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressMfDbhR4 = accounts[2]
		const addressdUDlVt7 = accounts[3]
		const addressNtNqekb = accounts[3]
		const MarsStakingRewardsn32jRR = await MarsStakingRewards.new(addressMfDbhR4, addressdUDlVt7, addressNtNqekb, {from: accounts[0]});
		const addressYHtaj1B = accounts[4]
		const uintxUZN8oU = BigInt("1168")
		const uint256VrLjF8 = await MarsStakingRewardsn32jRR.balanceOf.call(addressYHtaj1B, {from: accounts[5]});
//		await MarsStakingRewardsn32jRR.nonReentrant.call({from: accounts[2]});
//		const uint256GlIhe6l = await MarsStakingRewardsn32jRR.withdraw.call(uintxUZN8oU, {from: accounts[5]});
//		await MarsStakingRewardsn32jRR.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256VrLjF8, BigInt("0"))
		await expect(MarsStakingRewardsn32jRR.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address3yr8bg = accounts[2]
		const addressyOIlGvX = "0x0000000000000000000000000000000000000001"
		const addressbI3Vwmv = accounts[3]
		const MarsStakingRewardsn6quebx = await MarsStakingRewards.new(address3yr8bg, addressyOIlGvX, addressbI3Vwmv, {from: accounts[4]});
		const addressVg2qnTA = accounts[1]
		const addressyP5HO6 = accounts[4]
		const addressBmRm7jd = accounts[5]
		const uintZldtiR = BigInt("1431")
		const addressiJKiRcI = accounts[2]
		const addressBBAOvbi = accounts[2]
		const uint2562SQCAw = await MarsStakingRewardsn6quebx.earned.call(addressVg2qnTA, {from: accounts[0]});
		const uint256aqR77zj = await MarsStakingRewardsn6quebx.getRewardForDuration.call({from: accounts[4]});
//		await MarsStakingRewardsn6quebx.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressp269qIc = await MarsStakingRewardsn6quebx.setRewardsDistribution.call(addressyP5HO6, {from: accounts[1]});
//		const addressK5oRfwP = await MarsStakingRewardsn6quebx.updateReward.call(addressBmRm7jd, {from: accounts[2]});
//		const addresshT7cg9w = await MarsStakingRewardsn6quebx.inCaseTokensGetStuck.call(addressiJKiRcI, uintZldtiR, {from: accounts[1]});
//		const uint256VnpskFi = await MarsStakingRewardsn6quebx.earned.call(addressBBAOvbi, {from: accounts[4]});
//		await MarsStakingRewardsn6quebx.nonReentrant.call({from: accounts[1]});

		assert.equal(uint2562SQCAw, BigInt("0"))
		assert.equal(uint256aqR77zj, BigInt("0"))
		await expect(MarsStakingRewardsn6quebx.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressbypd1J7 = accounts[1]
		const addressq0p9e4t = accounts[2]
		const addresso7OzfGt = accounts[3]
		const MarsStakingRewardskG2i8oU = await MarsStakingRewards.new(addressbypd1J7, addressq0p9e4t, addresso7OzfGt, {from: accounts[4]});
		const addressi9r3yMh = accounts[1]
		const uint256Z0psnnB = await MarsStakingRewardskG2i8oU.balanceOf.call(addressi9r3yMh, {from: accounts[4]});
//		await MarsStakingRewardskG2i8oU.exit.call({from: accounts[0]});
//		const uint256TdIelJz = await MarsStakingRewardskG2i8oU.getRewardForDuration.call({from: accounts[1]});

		assert.equal(uint256Z0psnnB, BigInt("0"))
		await expect(MarsStakingRewardskG2i8oU.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressoQCIBIW = accounts[1]
		const addressXubN4Zt = accounts[2]
		const addressheGSYEO = accounts[2]
		const MarsStakingRewardsRYr8WGj = await MarsStakingRewards.new(addressoQCIBIW, addressXubN4Zt, addressheGSYEO, {from: accounts[5]});
		const uintm0SY1pR = BigInt("343")
		const uintMBQjw0L = BigInt("1765")
		const addresseaBuX0u = accounts[3]
		const addressaPaDH8g = await MarsStakingRewardsRYr8WGj.owner.call({from: accounts[4]});
//		await MarsStakingRewardsRYr8WGj.nonReentrant.call({from: accounts[2]});
//		await MarsStakingRewardsRYr8WGj.getReward.call({from: accounts[2]});
//		const uint256ZPD247t = await MarsStakingRewardsRYr8WGj.withdraw.call(uintm0SY1pR, {from: accounts[0]});
//		const uint256v2FOP1w = await MarsStakingRewardsRYr8WGj.totalSupply.call({from: accounts[2]});
//		const addressvNpPDX = await MarsStakingRewardsRYr8WGj.inCaseTokensGetStuck.call(addresseaBuX0u, uintMBQjw0L, {from: accounts[5]});

		assert.equal(addressaPaDH8g, 0x8993f1b693d71342327f828354ea4d8e880cdf86)
		await expect(MarsStakingRewardsRYr8WGj.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressXWOPfQQ = accounts[1]
		const addressGIkngMq = accounts[3]
		const addressM4lSs5p = accounts[2]
		const MarsStakingRewardssJeAiCV = await MarsStakingRewards.new(addressXWOPfQQ, addressGIkngMq, addressM4lSs5p, {from: accounts[0]});
		const addressCQXwZ1L = accounts[4]
		const addressAYCfaQn = accounts[1]
		const uintZZAxA6y = BigInt("887")
		const addressdoHsdNw = accounts[1]
		const uintZFIOqvP = BigInt("1687")
		const uint256lVZRPSG = await MarsStakingRewardssJeAiCV.balanceOf.call(addressCQXwZ1L, {from: accounts[3]});
		const addressK7Xqx3y = await MarsStakingRewardssJeAiCV.transferOwnership.call(addressAYCfaQn, {from: accounts[0]});
//		const uint256BuT8wml = await MarsStakingRewardssJeAiCV.stake.call(uintZZAxA6y, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Or1HQ7Q = await MarsStakingRewardssJeAiCV.balanceOf.call(addressdoHsdNw, {from: accounts[0]});
//		await MarsStakingRewardssJeAiCV.nonReentrant.call({from: accounts[4]});
//		const uint256FhDH5fl = await MarsStakingRewardssJeAiCV.stake.call(uintZFIOqvP, {from: accounts[4]});

		assert.equal(uint256lVZRPSG, BigInt("0"))
		await expect(MarsStakingRewardssJeAiCV.stake.call(uintZZAxA6y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressSaun8c1 = accounts[4]
		const addressPZlKWk = accounts[3]
		const addressaPiWAdS = accounts[4]
		const MarsStakingRewardsw7MJ3w7 = await MarsStakingRewards.new(addressSaun8c1, addressPZlKWk, addressaPiWAdS, {from: accounts[0]});
		const addressW6mrJl = accounts[2]
		const addressHDYqF0T = accounts[5]
		const uintDSiP0KC = BigInt("71")
		const uintot7DM3V = BigInt("1694")
		const uintlhZoCaC = BigInt("584")
		const uinttqGvHm = BigInt("1863")
		const addresssdkOp5I = await MarsStakingRewardsw7MJ3w7.setRewardsDistribution.call(addressW6mrJl, {from: accounts[0]});
		const uint256lAaYfO = await MarsStakingRewardsw7MJ3w7.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kplSfja = await MarsStakingRewardsw7MJ3w7.earned.call(addressHDYqF0T, {from: accounts[0]});
//		const uint256LtavdTV = await MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintot7DM3V, uintDSiP0KC, {from: accounts[4]});
//		const uint256uKgoo4F = await MarsStakingRewardsw7MJ3w7.getRewardForDuration.call({from: accounts[4]});
//		const uint256AiSKz9f = await MarsStakingRewardsw7MJ3w7.rewardPerToken.call({from: accounts[0]});
//		await MarsStakingRewardsw7MJ3w7.getReward.call({from: accounts[2]});
//		const uint256dTUHcJ = await MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uinttqGvHm, uintlhZoCaC, {from: accounts[0]});

		assert.equal(uint256kplSfja, BigInt("0"))
		assert.equal(uint256lAaYfO, BigInt("0"))
		await expect(MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintot7DM3V, uintDSiP0KC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressCy9R7hh = accounts[4]
		const addressrSvkUMj = accounts[3]
		const addressxFveov = accounts[4]
		const MarsStakingRewardsw7MJ3w7 = await MarsStakingRewards.new(addressCy9R7hh, addressrSvkUMj, addressxFveov, {from: accounts[0]});
		const addressHKwTOIB = accounts[3]
		const uintHDqBto = BigInt("82")
		const uintrLGX8jk = BigInt("1694")
		const uintThoUUN2 = BigInt("584")
		const uintQsTDPm = BigInt("1863")
//		await MarsStakingRewardsw7MJ3w7.renounceOwnership.call({from: accounts[0]});
//		await MarsStakingRewardsw7MJ3w7.onlyOwner.call({from: accounts[4]});
//		const uint256lAaYfO = await MarsStakingRewardsw7MJ3w7.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256kplSfja = await MarsStakingRewardsw7MJ3w7.earned.call(addressHKwTOIB, {from: accounts[0]});
//		const uint256LtavdTV = await MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintrLGX8jk, uintHDqBto, {from: accounts[4]});
//		await MarsStakingRewardsw7MJ3w7.getReward.call({from: accounts[2]});
//		const uint256dTUHcJ = await MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintQsTDPm, uintThoUUN2, {from: accounts[0]});

		await expect(MarsStakingRewardsw7MJ3w7.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})
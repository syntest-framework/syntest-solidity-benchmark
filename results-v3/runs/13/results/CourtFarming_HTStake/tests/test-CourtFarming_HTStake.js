const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVTK4Q1 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressG8qZxwp = accounts[2]
		const uint256y8V7T4W = await CourtFarming_HTStakeVTK4Q1.getCurrentTime.call({from: accounts[3]});
		const uint256FqBgGRm = await CourtFarming_HTStakeVTK4Q1.balanceOf.call(addressG8qZxwp, {from: accounts[2]});

		assert.equal(uint256FqBgGRm, BigInt("0"))
		assert.equal(uint256y8V7T4W, BigInt("1630199747"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake1JuGUn = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintN2AdQaz = BigInt("435")
		const booldtvosq4 = true
		const uintGeMEmz8 = BigInt("823")
		const boolrGzz3dv = true
		const uintPlZuARc = BigInt("2044")
		const uint256gTsSoVW = await CourtFarming_HTStake1JuGUn.incvRewardInfo.call({from: accounts[2]});
		const uint256VYkt7BW = await CourtFarming_HTStake1JuGUn.expectedRewardsToday.call(uintN2AdQaz, {from: accounts[0]});
		const uint256MMXLxT6 = await CourtFarming_HTStake1JuGUn.unstake.call(uintGeMEmz8, booldtvosq4, {from: accounts[2]});
		const uint256vKJNFI = await CourtFarming_HTStake1JuGUn.unstake.call(uintPlZuARc, boolrGzz3dv, {from: accounts[1]});

		await expect(CourtFarming_HTStake1JuGUn.unstake.call(uintGeMEmz8, booldtvosq4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXRtFzHQ = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressOMPM6hZ = accounts[1]
		const uintAcnKZO6 = BigInt("29")
		const uintApqHxzn = BigInt("312")
		const uint256WtAMOnE = await CourtFarming_HTStakeXRtFzHQ.incvRewardClaim.call({from: accounts[2]});
		const uint256HMhxSr4 = await CourtFarming_HTStakeXRtFzHQ.balanceOf.call(addressOMPM6hZ, {from: accounts[5]});
		const uint256mMCNqg1 = await CourtFarming_HTStakeXRtFzHQ.blockNumber.call({from: accounts[4]});
		const uint256gYCoxb4 = await CourtFarming_HTStakeXRtFzHQ.expectedRewardsToday.call(uintAcnKZO6, {from: accounts[0]});
		const boolO1IZk9G = await CourtFarming_HTStakeXRtFzHQ.stakeIncvRewards.call(uintApqHxzn, {from: accounts[2]});
		const uint256kj6jEbc = await CourtFarming_HTStakeXRtFzHQ.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolO1IZk9G, false)
		assert.equal(uint256HMhxSr4, BigInt("0"))
		assert.equal(uint256WtAMOnE, BigInt("0"))
		assert.equal(uint256kj6jEbc, BigInt("0"))
		assert.equal(uint256mMCNqg1, BigInt("1193"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeb0KsN59 = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdvrpGrh = BigInt("270")
		const uintoyg7aXf = BigInt("299")
		const uint256CzLNRYe = await CourtFarming_HTStakeb0KsN59.expectedRewardsToday.call(uintdvrpGrh, {from: accounts[0]});
		const boollLPCWJE = await CourtFarming_HTStakeb0KsN59.stakeIncvRewards.call(uintoyg7aXf, {from: accounts[0]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefk9hjq = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintbRSfe1r = BigInt("1986")
		const uintD2vZoej = BigInt("160")
		const uintk4W7Tqg = BigInt("745")
		const addressqzLBZXK = accounts[3]
		const uintnthBjft = BigInt("1765")
		const boolUSF7RP = false
		const uint8JE3Qh = BigInt("773")
		const uint256pslnEpn = await CourtFarming_HTStakefk9hjq.getCurrentTime.call({from: accounts[2]});
		const uint256N6wVQJc = await CourtFarming_HTStakefk9hjq.totalStaked.call({from: accounts[0]});
		await CourtFarming_HTStakefk9hjq.changeStakeParameters.call(uintk4W7Tqg, uintD2vZoej, uintbRSfe1r, {from: accounts[0]});
		const uint256ci60Y8Q = await CourtFarming_HTStakefk9hjq.balanceOf.call(addressqzLBZXK, {from: accounts[3]});
		const uint256IRcawuO = await CourtFarming_HTStakefk9hjq.stake.call(uintnthBjft, {from: accounts[0]});
		const uint256p1ldsCO = await CourtFarming_HTStakefk9hjq.unstake.call(uint8JE3Qh, boolUSF7RP, {from: accounts[1]});

		assert.equal(uint256N6wVQJc, BigInt("0"))
		assert.equal(uint256pslnEpn, BigInt("1630199742"))
		await expect(CourtFarming_HTStakefk9hjq.changeStakeParameters.call(uintk4W7Tqg, uintD2vZoej, uintbRSfe1r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeEcFJ9dI = await CourtFarming_HTStake.new({from: accounts[4]});
		const uinteSfk0N = BigInt("720")
		const uintFtBbqQ = BigInt("1856")
		const uintpjCnRlP = BigInt("185")
		const uintuWw8tFB = BigInt("1189")
		const uintuJdNDur = BigInt("1457")
		const uintYGOJFOV = BigInt("1650")
		const uint256UPCdDTq = await CourtFarming_HTStakeEcFJ9dI._stakeParametrsCalculation.call(uintpjCnRlP, uintFtBbqQ, uinteSfk0N, {from: accounts[0]});
		const uint256YHqBnql = await CourtFarming_HTStakeEcFJ9dI._stakeParametrsCalculation.call(uintYGOJFOV, uintuJdNDur, uintuWw8tFB, {from: accounts[3]});
		const uint256IIjITL = await CourtFarming_HTStakeEcFJ9dI.incvRewardClaim.call({from: accounts[4]});

		await expect(CourtFarming_HTStakeEcFJ9dI._stakeParametrsCalculation.call(uintpjCnRlP, uintFtBbqQ, uinteSfk0N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaken7eNOsj = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintOvvAld8 = BigInt("525")
		const addressAYyV1TQ = accounts[0]
		const addressLRfnaDe = accounts[4]
		const uint256H6ae9kx = await CourtFarming_HTStaken7eNOsj.stake.call(uintOvvAld8, {from: accounts[2]});
		const uint256gLyUan5 = await CourtFarming_HTStaken7eNOsj.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KUUW4ep = await CourtFarming_HTStaken7eNOsj.balanceOf.call(addressAYyV1TQ, {from: accounts[1]});
		const uint256Qb1ztBY = await CourtFarming_HTStaken7eNOsj.rewards.call(addressLRfnaDe, {from: accounts[3]});

		await expect(CourtFarming_HTStaken7eNOsj.stake.call(uintOvvAld8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeYeZvrxo = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressFqG23o = "0x0000000000000000000000000000000000000001"
		const addressLIJvWuN = await CourtFarming_HTStakeYeZvrxo.setCourtStake.call(addressFqG23o, {from: accounts[2]});
		const uint256u4sw2zL = await CourtFarming_HTStakeYeZvrxo.incvRewardClaim.call({from: accounts[1]});
		const uint256GadRPmQ = await CourtFarming_HTStakeYeZvrxo.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256g5pPWGI = await CourtFarming_HTStakeYeZvrxo.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeYeZvrxo.setCourtStake.call(addressFqG23o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake1JuGUn = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintvai3uz5 = BigInt("435")
		const addressqrbX6sQ = accounts[3]
		const booldtvosq4 = true
		const uinttJipIJ = BigInt("835")
		const uintUwXdXSh = BigInt("180")
		const boolrGzz3dv = true
		const uintMFk1ql7 = BigInt("2044")
		const uint256gTsSoVW = await CourtFarming_HTStake1JuGUn.incvRewardInfo.call({from: accounts[2]});
		const uint256VYkt7BW = await CourtFarming_HTStake1JuGUn.expectedRewardsToday.call(uintvai3uz5, {from: accounts[0]});
		const addressebakR2C = await CourtFarming_HTStake1JuGUn.setCourtStake.call(addressqrbX6sQ, {from: accounts[1]});
		const uint256MMXLxT6 = await CourtFarming_HTStake1JuGUn.unstake.call(uinttJipIJ, booldtvosq4, {from: accounts[2]});
		const boolu5doa43 = await CourtFarming_HTStake1JuGUn.stakeIncvRewards.call(uintUwXdXSh, {from: accounts[4]});
		const uint256vKJNFI = await CourtFarming_HTStake1JuGUn.unstake.call(uintMFk1ql7, boolrGzz3dv, {from: accounts[1]});

		await expect(CourtFarming_HTStake1JuGUn.setCourtStake.call(addressqrbX6sQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedbwmYkq = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintQ4I6Ubx = BigInt("1579")
		const addresseMWVjNG = "0x0000000000000000000000000000000000000001"
		const uintqlgjC7u = BigInt("1823")
		const uint256U0FGhPH = await CourtFarming_HTStakedbwmYkq.expectedRewardsToday.call(uintQ4I6Ubx, {from: accounts[4]});
		const uint256xV5nCF = await CourtFarming_HTStakedbwmYkq.balanceOf.call(addresseMWVjNG, {from: accounts[2]});
		const booltoCJXJG = await CourtFarming_HTStakedbwmYkq.stakeIncvRewards.call(uintqlgjC7u, {from: accounts[5]});
		const uint256w2grDr9 = await CourtFarming_HTStakedbwmYkq.lastUpdateBlock.call({from: accounts[0]});

		assert.equal(booltoCJXJG, false)
		assert.equal(uint256w2grDr9, BigInt("1193"))
		assert.equal(uint256xV5nCF, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXRtFzHQ = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintYvLk8Mo = BigInt("1476")
		const uintlRrXXg1 = BigInt("39")
		const uintOiLdcAu = BigInt("773")
		const addressboIwCSi = accounts[1]
		const uintHThwpoH = BigInt("29")
		await CourtFarming_HTStakeXRtFzHQ.changeStakeParameters.call(uintOiLdcAu, uintlRrXXg1, uintYvLk8Mo, {from: accounts[0]});
		const uint256WtAMOnE = await CourtFarming_HTStakeXRtFzHQ.incvRewardClaim.call({from: accounts[2]});
		const uint256HMhxSr4 = await CourtFarming_HTStakeXRtFzHQ.balanceOf.call(addressboIwCSi, {from: accounts[5]});
		const uint256mMCNqg1 = await CourtFarming_HTStakeXRtFzHQ.blockNumber.call({from: accounts[4]});
		const uint256gYCoxb4 = await CourtFarming_HTStakeXRtFzHQ.expectedRewardsToday.call(uintHThwpoH, {from: accounts[0]});
		const uint256kj6jEbc = await CourtFarming_HTStakeXRtFzHQ.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeXRtFzHQ.changeStakeParameters.call(uintOiLdcAu, uintlRrXXg1, uintYvLk8Mo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedbwmYkq = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintV8HpIra = BigInt("1577")
		const uintCqTfRDf = BigInt("1889")
		const addressrAJHKh6 = accounts[3]
		const uintl6Hvi42 = BigInt("1506")
		const uint256U0FGhPH = await CourtFarming_HTStakedbwmYkq.expectedRewardsToday.call(uintV8HpIra, {from: accounts[4]});
		const boolUvDCJRr = await CourtFarming_HTStakedbwmYkq.stakeIncvRewards.call(uintCqTfRDf, {from: accounts[4]});
		const uint256xTRusii = await CourtFarming_HTStakedbwmYkq.rewards.call(addressrAJHKh6, {from: accounts[0]});
		const boolIkGGpsK = await CourtFarming_HTStakedbwmYkq.stakeIncvRewards.call(uintl6Hvi42, {from: accounts[0]});

		assert.equal(boolIkGGpsK, false)
		assert.equal(boolUvDCJRr, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqPLr6t = await CourtFarming_HTStake.new({from: accounts[2]});
		const addresstkTVZA3 = accounts[2]
		const addressuxDRrpJ = await CourtFarming_HTStakeqPLr6t.getBeneficiaryInfo.call(addresstkTVZA3, {from: accounts[1]});
		const uint256CikYQUF = await CourtFarming_HTStakeqPLr6t.incvRewardInfo.call({from: accounts[0]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqPLr6t = await CourtFarming_HTStake.new({from: accounts[2]});
		const uint61fj4K = BigInt("0")
		const uintvNrQfc6 = BigInt("248")
		const uintM7W7Sxx = BigInt("16")
		const uint256F4iJ9eu = await CourtFarming_HTStakeqPLr6t.expectedRewardsToday.call(uint61fj4K, {from: accounts[3]});
		const uint256g6AfIpB = await CourtFarming_HTStakeqPLr6t.expectedRewardsToday.call(uintvNrQfc6, {from: accounts[0]});
		const uint256qQOAtQK = await CourtFarming_HTStakeqPLr6t.stake.call(uintM7W7Sxx, {from: accounts[4]});

		await expect(CourtFarming_HTStakeqPLr6t.expectedRewardsToday.call(uint61fj4K, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqPLr6t = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintm8JulXm = BigInt("0")
		const uint256qQOAtQK = await CourtFarming_HTStakeqPLr6t.stake.call(uintm8JulXm, {from: accounts[4]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMg69hXA = await CourtFarming_HTStake.new({from: accounts[0]});
		const boolQFOf469 = true
		const uintfBDasz = BigInt("0")
		const uintxb2WwIh = BigInt("1144")
		const boolscxSPf7 = true
		const uintbDs44zk = BigInt("496")
		const uint256mVyqZJv = await CourtFarming_HTStakeMg69hXA.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iFw4A9 = await CourtFarming_HTStakeMg69hXA.unstake.call(uintfBDasz, boolQFOf469, {from: accounts[2]});
		const boolwO4LuYB = await CourtFarming_HTStakeMg69hXA.stakeIncvRewards.call(uintxb2WwIh, {from: accounts[3]});
		const uint2567754Wp = await CourtFarming_HTStakeMg69hXA.unstake.call(uintbDs44zk, boolscxSPf7, {from: accounts[0]});

		assert.equal(boolwO4LuYB, false)
		assert.equal(uint256mVyqZJv, BigInt("0"))
		await expect(CourtFarming_HTStakeMg69hXA.unstake.call(uintbDs44zk, boolscxSPf7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMg69hXA = await CourtFarming_HTStake.new({from: accounts[0]});
		const uinta9Phdj9 = BigInt("708")
		const uintY9uMuSb = BigInt("0")
		const uint256ziz9h0 = await CourtFarming_HTStakeMg69hXA.totalStaked.call({from: accounts[4]});
		const boolZW0mNDC = await CourtFarming_HTStakeMg69hXA.stakeIncvRewards.call(uinta9Phdj9, {from: accounts[5]});
		const boologNk3Om = await CourtFarming_HTStakeMg69hXA.stakeIncvRewards.call(uintY9uMuSb, {from: accounts[2]});

		assert.equal(boolZW0mNDC, false)
		assert.equal(boologNk3Om, false)
		assert.equal(uint256ziz9h0, BigInt("0"))
	});
})
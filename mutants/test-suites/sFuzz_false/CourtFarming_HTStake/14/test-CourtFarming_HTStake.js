const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecSmOIH5 = await CourtFarming_HTStake.new({from: accounts[1]});
		const uinttxuMFaj = BigInt("1921")
		const uintAPF1zTC = BigInt("1599")
		const uintbnKvJ6o = BigInt("1853")
		const boolxG1tyRZ = await CourtFarming_HTStakecSmOIH5.stakeIncvRewards.call(uinttxuMFaj, {from: accounts[0]});
		const boolKp2bb1j = await CourtFarming_HTStakecSmOIH5.stakeIncvRewards.call(uintAPF1zTC, {from: accounts[1]});
		const uint256iGvtnMj = await CourtFarming_HTStakecSmOIH5.expectedRewardsToday.call(uintbnKvJ6o, {from: accounts[3]});

		assert.equal(boolKp2bb1j, false)
		assert.equal(boolxG1tyRZ, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexHp96yo = await CourtFarming_HTStake.new({from: accounts[2]});
		const addresslLKVAlV = accounts[3]
		const bools2Ttwl9 = false
		const uintupFqvjy = BigInt("11")
		const addressHpDLvlR = accounts[1]
		const uint256qvk3mFB = await CourtFarming_HTStakexHp96yo.rewards.call(addresslLKVAlV, {from: accounts[5]});
//		const uint256oI5Kkb0 = await CourtFarming_HTStakexHp96yo.unstake.call(uintupFqvjy, bools2Ttwl9, {from: accounts[3]});
//		const addressgG6BqDa = await CourtFarming_HTStakexHp96yo.setCourtStake.call(addressHpDLvlR, {from: accounts[2]});
//		const uint256ye1YXrO = await CourtFarming_HTStakexHp96yo.blockNumber.call({from: accounts[5]});

		await expect(CourtFarming_HTStakexHp96yo.unstake.call(uintupFqvjy, bools2Ttwl9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake05IdtJ = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressTWTNSd = accounts[4]
		const addressYJ30baX = accounts[0]
		const addresstjO7J5 = accounts[0]
		const uintT6VcAkB = BigInt("119")
		const address6zgAhY = await CourtFarming_HTStake05IdtJ.updateReward.call(addressTWTNSd, {from: accounts[2]});
		const uint256wanpvAL = await CourtFarming_HTStake05IdtJ.incvRewardClaim.call({from: accounts[2]});
//		const addressDim4hC9 = await CourtFarming_HTStake05IdtJ.setCourtStake.call(addressYJ30baX, {from: accounts[0]});
//		const addressalD2isc = await CourtFarming_HTStake05IdtJ.getBeneficiaryInfo.call(addresstjO7J5, {from: accounts[0]});
//		const uint256RxOaVJl = await CourtFarming_HTStake05IdtJ.expectedRewardsToday.call(uintT6VcAkB, {from: accounts[4]});

		assert.equal(uint256wanpvAL, BigInt("0"))
		await expect(CourtFarming_HTStake05IdtJ.setCourtStake.call(addressYJ30baX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakesNv5M6m = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressrH3FPJe = accounts[3]
		const addressqdA4mG = accounts[0]
		const uintxMSUsEc = BigInt("1246")
		const addressfFHq6UM = accounts[0]
		const uintSnYykEs = BigInt("293")
		const uintSqTeDMY = BigInt("1891")
		const uintjp8dciq = BigInt("547")
		const uint256Rfhib3U = await CourtFarming_HTStakesNv5M6m.balanceOf.call(addressrH3FPJe, {from: accounts[5]});
		const uint256zOwU2K = await CourtFarming_HTStakesNv5M6m.rewards.call(addressqdA4mG, {from: accounts[2]});
//		const uint256sFVc5kp = await CourtFarming_HTStakesNv5M6m.stake.call(uintxMSUsEc, {from: accounts[3]});
//		const addressMDzegGf = await CourtFarming_HTStakesNv5M6m.updateReward.call(addressfFHq6UM, {from: accounts[2]});
//		const uint256XMHhYAV = await CourtFarming_HTStakesNv5M6m._stakeParametrsCalculation.call(uintjp8dciq, uintSqTeDMY, uintSnYykEs, {from: accounts[2]});

		assert.equal(uint256Rfhib3U, BigInt("0"))
		await expect(CourtFarming_HTStakesNv5M6m.stake.call(uintxMSUsEc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeoHau0Ge = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnCotdG = accounts[2]
		const uint256gNdvAdt = await CourtFarming_HTStakeoHau0Ge.blockNumber.call({from: accounts[1]});
		const uint256FCayWzs = await CourtFarming_HTStakeoHau0Ge.balanceOf.call(addressnCotdG, {from: accounts[1]});
		const uint256byKnSZX = await CourtFarming_HTStakeoHau0Ge.incvRewardInfo.call({from: accounts[0]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexYTPeAB = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressqYJxasA = accounts[4]
		const addresstXodJPR = accounts[2]
		const uintgOfEGZI = BigInt("1657")
		const uinthGVIpBK = BigInt("95")
		const uintrrxyBt = BigInt("1903")
		const uint256ejx20PY = await CourtFarming_HTStakexYTPeAB.incvRewardInfo.call({from: accounts[5]});
//		const addressZEN7OFJ = await CourtFarming_HTStakexYTPeAB.setCourtStake.call(addressqYJxasA, {from: accounts[0]});
//		const uint256cUhPjdV = await CourtFarming_HTStakexYTPeAB.rewards.call(addresstXodJPR, {from: accounts[3]});
//		await CourtFarming_HTStakexYTPeAB.changeStakeParameters.call(uintrrxyBt, uinthGVIpBK, uintgOfEGZI, {from: accounts[3]});
//		const uint256b5aY9Pd = await CourtFarming_HTStakexYTPeAB.blockNumber.call({from: accounts[0]});

		await expect(CourtFarming_HTStakexYTPeAB.setCourtStake.call(addressqYJxasA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTWqDf3F = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintqRTjjK = BigInt("1145")
		const uint256diFP2Zu = await CourtFarming_HTStakeTWqDf3F.totalStaked.call({from: accounts[2]});
//		const uint256JjzalZ = await CourtFarming_HTStakeTWqDf3F.stake.call(uintqRTjjK, {from: accounts[4]});

		assert.equal(uint256diFP2Zu, BigInt("0"))
		await expect(CourtFarming_HTStakeTWqDf3F.stake.call(uintqRTjjK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezRoF57s = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintiAkHmJA = BigInt("552")
		const uintY6zdMSv = BigInt("1913")
		const uintEHUgdMj = BigInt("2006")
		const addresssYVjR1M = accounts[4]
		const uintZvqjyUY = BigInt("1967")
		const uintoPGcOd = BigInt("916")
		const uintrIPxyE = BigInt("1543")
		const boolcUrfJ8Z = true
		const uintwjuth5b = BigInt("649")
//		const uint256EbwsoKz = await CourtFarming_HTStakezRoF57s._stakeParametrsCalculation.call(uintEHUgdMj, uintY6zdMSv, uintiAkHmJA, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256QaLobuF = await CourtFarming_HTStakezRoF57s.balanceOf.call(addresssYVjR1M, {from: accounts[5]});
//		const uint256KQBrx4j = await CourtFarming_HTStakezRoF57s.totalStaked.call({from: accounts[2]});
//		await CourtFarming_HTStakezRoF57s.changeStakeParameters.call(uintrIPxyE, uintoPGcOd, uintZvqjyUY, {from: accounts[3]});
//		const uint256dn8bWj8 = await CourtFarming_HTStakezRoF57s.unstake.call(uintwjuth5b, boolcUrfJ8Z, {from: accounts[4]});

		await expect(CourtFarming_HTStakezRoF57s._stakeParametrsCalculation.call(uintEHUgdMj, uintY6zdMSv, uintiAkHmJA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexHp96yo = await CourtFarming_HTStake.new({from: accounts[2]});
		const addresspzAPner = accounts[3]
		const addressIUI0VbJ = accounts[1]
		const uint256qvk3mFB = await CourtFarming_HTStakexHp96yo.rewards.call(addresspzAPner, {from: accounts[5]});
//		const addressgG6BqDa = await CourtFarming_HTStakexHp96yo.setCourtStake.call(addressIUI0VbJ, {from: accounts[2]});
//		const uint256ye1YXrO = await CourtFarming_HTStakexHp96yo.blockNumber.call({from: accounts[5]});

		await expect(CourtFarming_HTStakexHp96yo.setCourtStake.call(addressIUI0VbJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakePHWhZRc = await CourtFarming_HTStake.new({from: accounts[0]});
		const uint4SSV7L = BigInt("1133")
		const uintrJqr3ov = BigInt("1646")
		const uintVWpQsik = BigInt("192")
		const uintESiq2Kp = BigInt("851")
		const uintItzvuPR = BigInt("1734")
		const uint256IYLQoPJ = await CourtFarming_HTStakePHWhZRc.incvRewardInfo.call({from: accounts[3]});
		const uint256mLcm1Yg = await CourtFarming_HTStakePHWhZRc.blockNumber.call({from: accounts[3]});
//		await CourtFarming_HTStakePHWhZRc.changeStakeParameters.call(uintVWpQsik, uintrJqr3ov, uint4SSV7L, {from: accounts[2]});
//		const uint256SCziekE = await CourtFarming_HTStakePHWhZRc.expectedRewardsToday.call(uintESiq2Kp, {from: accounts[3]});
//		const uint256adJ4iZ7 = await CourtFarming_HTStakePHWhZRc.expectedRewardsToday.call(uintItzvuPR, {from: accounts[5]});
//		const uint256oU5Jx9 = await CourtFarming_HTStakePHWhZRc.lastUpdateBlock.call({from: accounts[0]});

		assert.equal(uint256mLcm1Yg, BigInt("1776"))
		await expect(CourtFarming_HTStakePHWhZRc.changeStakeParameters.call(uintVWpQsik, uintrJqr3ov, uint4SSV7L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeONQBsgo = await CourtFarming_HTStake.new({from: accounts[1]});
		const uint6i1eBQ = BigInt("210")
		const boolG3Bn6LJ = await CourtFarming_HTStakeONQBsgo.stakeIncvRewards.call(uint6i1eBQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint2562bEXqe = await CourtFarming_HTStakeONQBsgo.lastUpdateBlock.call({from: accounts[4]});
		const uint256kB0P1Kk = await CourtFarming_HTStakeONQBsgo.incvRewardClaim.call({from: accounts[1]});
		const uint256UQIMXZR = await CourtFarming_HTStakeONQBsgo.blockNumber.call({from: accounts[3]});
		const uint256hKAFaJx = await CourtFarming_HTStakeONQBsgo.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolG3Bn6LJ, false)
		assert.equal(uint2562bEXqe, BigInt("1776"))
		assert.equal(uint256UQIMXZR, BigInt("1776"))
		assert.equal(uint256kB0P1Kk, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake05IdtJ = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressFG2fPaQ = accounts[4]
		const addressryz21u6 = accounts[0]
		const uintOTsPOGQ = BigInt("119")
		const address6zgAhY = await CourtFarming_HTStake05IdtJ.updateReward.call(addressFG2fPaQ, {from: accounts[2]});
		const uint256wanpvAL = await CourtFarming_HTStake05IdtJ.incvRewardClaim.call({from: accounts[2]});
		const addressalD2isc = await CourtFarming_HTStake05IdtJ.getBeneficiaryInfo.call(addressryz21u6, {from: accounts[0]});
		const uint256RxOaVJl = await CourtFarming_HTStake05IdtJ.expectedRewardsToday.call(uintOTsPOGQ, {from: accounts[4]});

		assert.equal(uint256wanpvAL, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexHp96yo = await CourtFarming_HTStake.new({from: accounts[2]});
		const bools2Ttwl9 = true
		const uintR3GtZ5J = BigInt("0")
		const uint256oI5Kkb0 = await CourtFarming_HTStakexHp96yo.unstake.call(uintR3GtZ5J, bools2Ttwl9, {from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTWqDf3F = await CourtFarming_HTStake.new({from: accounts[0]});
		const uinthjmFrn = BigInt("0")
		const uintr8s6ao0 = BigInt("263")
		const uint256Y6z02jN = await CourtFarming_HTStakeTWqDf3F.stake.call(uinthjmFrn, {from: accounts[2]});
//		const uint256pD5SMwF = await CourtFarming_HTStakeTWqDf3F.stake.call(uintr8s6ao0, {from: accounts[4]});

		await expect(CourtFarming_HTStakeTWqDf3F.stake.call(uintr8s6ao0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexHp96yo = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintB5606j7 = BigInt("0")
		const uintm61oFYE = BigInt("1548")
		const boolD5R2a4 = await CourtFarming_HTStakexHp96yo.stakeIncvRewards.call(uintB5606j7, {from: accounts[3]});
		const boolq19vZ63 = await CourtFarming_HTStakexHp96yo.stakeIncvRewards.call(uintm61oFYE, {from: accounts[2]});
		const uint256YUGZqgV = await CourtFarming_HTStakexHp96yo.totalStaked.call({from: accounts[1]});

		assert.equal(boolD5R2a4, false)
		assert.equal(boolq19vZ63, false)
		assert.equal(uint256YUGZqgV, BigInt("0"))
	});
})
const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeIa1P4aa = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintpGlglBW = BigInt("1292")
		const uintz9M5aUg = BigInt("609")
		const uintaN46Kpn = BigInt("231")
		const uint9RhHy3 = BigInt("1547")
		const uintowu0zV4 = BigInt("449")
		const uintHpGVJ1d = BigInt("380")
		const addressFZEiCOI = accounts[0]
		const addressIpM1zM4 = accounts[0]
//		const uint256RT0muvJ = await CourtFarming_HTStakeIa1P4aa._stakeParametrsCalculation.call(uintaN46Kpn, uintz9M5aUg, uintpGlglBW, {from: accounts[0]});
//		await CourtFarming_HTStakeIa1P4aa.changeStakeParameters.call(uintHpGVJ1d, uintowu0zV4, uint9RhHy3, {from: accounts[2]});
//		const uint256eft9NwQ = await CourtFarming_HTStakeIa1P4aa.getCurrentTime.call({from: accounts[4]});
//		const addressRefDzXo = await CourtFarming_HTStakeIa1P4aa.updateReward.call(addressFZEiCOI, {from: accounts[5]});
//		const uint256b37KkjQ = await CourtFarming_HTStakeIa1P4aa.lastUpdateBlock.call({from: accounts[1]});
//		const uint256CrIWOO4 = await CourtFarming_HTStakeIa1P4aa.rewards.call(addressIpM1zM4, {from: accounts[4]});

		await expect(CourtFarming_HTStakeIa1P4aa._stakeParametrsCalculation.call(uintaN46Kpn, uintz9M5aUg, uintpGlglBW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewrTRWDC = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintRUD11EO = BigInt("901")
		const addressoXHxac1 = "0x0000000000000000000000000000000000000001"
		const uint256BqEPFJ = await CourtFarming_HTStakewrTRWDC.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wrlwbEP = await CourtFarming_HTStakewrTRWDC.incvRewardClaim.call({from: accounts[0]});
		const boolHvaLVZ = await CourtFarming_HTStakewrTRWDC.stakeIncvRewards.call(uintRUD11EO, {from: accounts[5]});
		const uint256xfppNCt = await CourtFarming_HTStakewrTRWDC.rewards.call(addressoXHxac1, {from: accounts[1]});

		assert.equal(boolHvaLVZ, false)
		assert.equal(uint256BqEPFJ, BigInt("0"))
		assert.equal(uint256wrlwbEP, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMNp33GF = await CourtFarming_HTStake.new({from: accounts[3]});
		const addresssxNEd94 = accounts[3]
		const uint256FP2i7u = await CourtFarming_HTStakeMNp33GF.balanceOf.call(addresssxNEd94, {from: accounts[3]});
		const uint2568J5Zo1 = await CourtFarming_HTStakeMNp33GF.incvRewardClaim.call({from: accounts[0]});
		const uint256eKxm46Y = await CourtFarming_HTStakeMNp33GF.lastUpdateBlock.call({from: accounts[4]});

		assert.equal(uint2568J5Zo1, BigInt("0"))
		assert.equal(uint256FP2i7u, BigInt("0"))
		assert.equal(uint256eKxm46Y, BigInt("1783"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegEhDnBJ = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintVaunRMn = BigInt("42")
		const uintO7yQl3E = BigInt("1951")
		const uint256PiMCaxE = await CourtFarming_HTStakegEhDnBJ.totalStaked.call({from: accounts[1]});
//		const uint256nJ69VNj = await CourtFarming_HTStakegEhDnBJ.stake.call(uintVaunRMn, {from: accounts[2]});
//		const boolcl9Lvi = await CourtFarming_HTStakegEhDnBJ.stakeIncvRewards.call(uintO7yQl3E, {from: accounts[1]});
//		const uint256gsk7z7W = await CourtFarming_HTStakegEhDnBJ.blockNumber.call({from: accounts[0]});

		assert.equal(uint256PiMCaxE, BigInt("0"))
		await expect(CourtFarming_HTStakegEhDnBJ.stake.call(uintVaunRMn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakednpYTj2 = await CourtFarming_HTStake.new({from: accounts[2]});
		const address829Zfl = accounts[0]
		const uintVQnfwUZ = BigInt("1342")
		const uintrnrjJ0 = BigInt("399")
		const uintGhcFbG = BigInt("724")
		const addresswhcMA85 = accounts[4]
		const addressgxdFD7L = accounts[2]
		const uint256vQLVRCK = await CourtFarming_HTStakednpYTj2.rewards.call(address829Zfl, {from: accounts[3]});
//		await CourtFarming_HTStakednpYTj2.changeStakeParameters.call(uintGhcFbG, uintrnrjJ0, uintVQnfwUZ, {from: accounts[2]});
//		const addressMuKU1mS = await CourtFarming_HTStakednpYTj2.getBeneficiaryInfo.call(addresswhcMA85, {from: accounts[4]});
//		const uint256gNjS5Kj = await CourtFarming_HTStakednpYTj2.balanceOf.call(addressgxdFD7L, {from: accounts[4]});

		await expect(CourtFarming_HTStakednpYTj2.changeStakeParameters.call(uintGhcFbG, uintrnrjJ0, uintVQnfwUZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakez2xgzaY = await CourtFarming_HTStake.new({from: accounts[3]});
		const uint256D6LQyA8 = await CourtFarming_HTStakez2xgzaY.incvRewardInfo.call({from: accounts[2]});
		const uint256mzE84JA = await CourtFarming_HTStakez2xgzaY.getCurrentTime.call({from: accounts[5]});
		const uint256oPC0U9d = await CourtFarming_HTStakez2xgzaY.incvRewardInfo.call({from: accounts[4]});

		assert.equal(uint256mzE84JA, BigInt("1630201577"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakerQImpBk = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintsxFWzUD = BigInt("1535")
		const uint7Sp6a9 = BigInt("923")
		const uintGD6tD1I = BigInt("414")
		const boolIqLLq1w = true
		const uintlv62CFK = BigInt("1562")
		const uintAYcTDKZ = BigInt("176")
		const uintGcgoiNt = BigInt("947")
		const uintH7lFyWU = BigInt("75")
		const boolilu3KzN = false
		const uintUtIMSNL = BigInt("1570")
//		await CourtFarming_HTStakerQImpBk.changeStakeParameters.call(uintGD6tD1I, uint7Sp6a9, uintsxFWzUD, {from: accounts[1]});
//		const uint256gtoza30 = await CourtFarming_HTStakerQImpBk.incvRewardInfo.call({from: accounts[3]});
//		const uint256wRwxMtX = await CourtFarming_HTStakerQImpBk.unstake.call(uintlv62CFK, boolIqLLq1w, {from: accounts[5]});
//		await CourtFarming_HTStakerQImpBk.changeStakeParameters.call(uintH7lFyWU, uintGcgoiNt, uintAYcTDKZ, {from: accounts[4]});
//		const uint256klaJWVO = await CourtFarming_HTStakerQImpBk.unstake.call(uintUtIMSNL, boolilu3KzN, {from: accounts[5]});
//		const uint256btLVw2x = await CourtFarming_HTStakerQImpBk.blockNumber.call({from: accounts[2]});

		await expect(CourtFarming_HTStakerQImpBk.changeStakeParameters.call(uintGD6tD1I, uint7Sp6a9, uintsxFWzUD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeuyKUhj3 = await CourtFarming_HTStake.new({from: accounts[4]});
		const boolxBBX4Lk = true
		const uintSlDfdhK = BigInt("713")
		const uintHzJOY3H = BigInt("1846")
		const uintlMJ16Ya = BigInt("936")
		const uintOnLhbWt = BigInt("962")
		const uinty0FCsbf = BigInt("187")
		const addressPzNZaX8 = accounts[0]
//		const uint256xNI0izl = await CourtFarming_HTStakeuyKUhj3.unstake.call(uintSlDfdhK, boolxBBX4Lk, {from: accounts[0]});
//		const uint256uj6Q4vn = await CourtFarming_HTStakeuyKUhj3.expectedRewardsToday.call(uintHzJOY3H, {from: accounts[5]});
//		const uint256xQQ2vfl = await CourtFarming_HTStakeuyKUhj3.incvRewardClaim.call({from: accounts[0]});
//		const uint256b2qzA95 = await CourtFarming_HTStakeuyKUhj3.blockNumber.call({from: accounts[0]});
//		await CourtFarming_HTStakeuyKUhj3.changeStakeParameters.call(uinty0FCsbf, uintOnLhbWt, uintlMJ16Ya, {from: accounts[3]});
//		const uint256WIyke6 = await CourtFarming_HTStakeuyKUhj3.balanceOf.call(addressPzNZaX8, {from: accounts[2]});

		await expect(CourtFarming_HTStakeuyKUhj3.unstake.call(uintSlDfdhK, boolxBBX4Lk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXPaLLlT = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresso3Q4Nks = accounts[3]
		const addresscODxqKO = accounts[3]
//		const addressdm91tCg = await CourtFarming_HTStakeXPaLLlT.setCourtStake.call(addresso3Q4Nks, {from: accounts[3]});
//		const uint256OZn1rL0 = await CourtFarming_HTStakeXPaLLlT.getCurrentTime.call({from: accounts[3]});
//		const uint256x61YSyZ = await CourtFarming_HTStakeXPaLLlT.rewards.call(addresscODxqKO, {from: accounts[0]});
//		const uint256ayaUygv = await CourtFarming_HTStakeXPaLLlT.lastUpdateBlock.call({from: accounts[5]});

		await expect(CourtFarming_HTStakeXPaLLlT.setCourtStake.call(addresso3Q4Nks, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeuyKUhj3 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintcDN3V3 = BigInt("1846")
		const uintC3917Es = BigInt("936")
		const uintwA909HA = BigInt("962")
		const uintD9hrp0K = BigInt("187")
		const addressaDCmObV = accounts[0]
		const uint256uj6Q4vn = await CourtFarming_HTStakeuyKUhj3.expectedRewardsToday.call(uintcDN3V3, {from: accounts[5]});
		const uint256xQQ2vfl = await CourtFarming_HTStakeuyKUhj3.incvRewardClaim.call({from: accounts[0]});
		const uint256b2qzA95 = await CourtFarming_HTStakeuyKUhj3.blockNumber.call({from: accounts[0]});
//		await CourtFarming_HTStakeuyKUhj3.changeStakeParameters.call(uintD9hrp0K, uintwA909HA, uintC3917Es, {from: accounts[3]});
//		const uint256WIyke6 = await CourtFarming_HTStakeuyKUhj3.balanceOf.call(addressaDCmObV, {from: accounts[2]});

		assert.equal(uint256b2qzA95, BigInt("1783"))
		assert.equal(uint256xQQ2vfl, BigInt("0"))
		await expect(CourtFarming_HTStakeuyKUhj3.changeStakeParameters.call(uintD9hrp0K, uintwA909HA, uintC3917Es, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakez2xgzaY = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolM7SZnTU = true
		const uintsFDKi1p = BigInt("0")
		const uint2566YkeMT = await CourtFarming_HTStakez2xgzaY.unstake.call(uintsFDKi1p, boolM7SZnTU, {from: accounts[4]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeYQHQFCo = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjqgxz5n = BigInt("402")
		const uintBwCTFdm = BigInt("1933")
		const uintCAqELKs = BigInt("2032")
		const uintX4dpoSV = BigInt("887")
		const uintFsctD00 = BigInt("1202")
		const uintTrAVIwj = BigInt("252")
		const uint256TGPLUZE = await CourtFarming_HTStakeYQHQFCo.lastUpdateBlock.call({from: accounts[1]});
		await CourtFarming_HTStakeYQHQFCo.changeStakeParameters.call(uintCAqELKs, uintBwCTFdm, uintjqgxz5n, {from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_HTStakeYQHQFCo.changeStakeParameters.call(uintTrAVIwj, uintFsctD00, uintX4dpoSV, {from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakez2xgzaY = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintwA0OJ20 = BigInt("59")
		const addressP8dTn6 = accounts[4]
		const uint256oPC0U9d = await CourtFarming_HTStakez2xgzaY.incvRewardInfo.call({from: accounts[4]});
		const boold2OxaB5 = await CourtFarming_HTStakez2xgzaY.stakeIncvRewards.call(uintwA0OJ20, {from: accounts[1]});
//		const addresspcnjX98 = await CourtFarming_HTStakez2xgzaY.setCourtStake.call(addressP8dTn6, {from: accounts[3]});

		assert.equal(boold2OxaB5, false)
		await expect(CourtFarming_HTStakez2xgzaY.setCourtStake.call(addressP8dTn6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegEhDnBJ = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressICc23DI = accounts[1]
		const uintsqv6rt2 = BigInt("0")
		const addressCapRCIC = "0x0000000000000000000000000000000000000001"
		const addresssX9kTy = await CourtFarming_HTStakegEhDnBJ.getBeneficiaryInfo.call(addressICc23DI, {from: accounts[3]});
		const uint256nJ69VNj = await CourtFarming_HTStakegEhDnBJ.stake.call(uintsqv6rt2, {from: accounts[2]});
		const addressrGxOmcG = await CourtFarming_HTStakegEhDnBJ.getBeneficiaryInfo.call(addressCapRCIC, {from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakez2xgzaY = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintezi6Z7X = BigInt("1332")
		const uintpojkBB9 = BigInt("978")
		const uintGnwaumL = BigInt("1295")
		const uintjt2TCen = BigInt("54")
		const uint0vS9f4 = BigInt("0")
//		await CourtFarming_HTStakez2xgzaY.changeStakeParameters.call(uintGnwaumL, uintpojkBB9, uintezi6Z7X, {from: accounts[3]});
//		const uint256DntcjDQ = await CourtFarming_HTStakez2xgzaY.blockNumber.call({from: accounts[2]});
//		const boolueXidng = await CourtFarming_HTStakez2xgzaY.stakeIncvRewards.call(uintjt2TCen, {from: accounts[0]});
//		const boold2OxaB5 = await CourtFarming_HTStakez2xgzaY.stakeIncvRewards.call(uint0vS9f4, {from: accounts[1]});

		await expect(CourtFarming_HTStakez2xgzaY.changeStakeParameters.call(uintGnwaumL, uintpojkBB9, uintezi6Z7X, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
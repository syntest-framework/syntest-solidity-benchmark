const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsBkQ62ep = await DMONDETHRewards.new({from: accounts[0]});
		const uintNPIjXhq = BigInt("1728")
		const uintGqtRlUm = BigInt("268")
		const addressTBilIr = accounts[0]
		await DMONDETHRewardsBkQ62ep.renounceOwnership.call({from: accounts[4]});
		const uint256pVJPFWf = await DMONDETHRewardsBkQ62ep.stake.call(uintNPIjXhq, {from: accounts[2]});
		const uint256cg57i0Z = await DMONDETHRewardsBkQ62ep.stake.call(uintGqtRlUm, {from: accounts[4]});
		const uint256NRkcuef = await DMONDETHRewardsBkQ62ep.earned.call(addressTBilIr, {from: accounts[4]});

		await expect(DMONDETHRewardsBkQ62ep.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsLkZ1IE = await DMONDETHRewards.new({from: accounts[4]});
		const addressbi7woZa = accounts[1]
		const addressUxIJ60P = accounts[3]
		const uint256LRje05 = await DMONDETHRewardsLkZ1IE.earned.call(addressbi7woZa, {from: accounts[2]});
		await DMONDETHRewardsLkZ1IE.renounceOwnership.call({from: accounts[3]});
		const uint256nxn24Y3 = await DMONDETHRewardsLkZ1IE.balanceOf.call(addressUxIJ60P, {from: accounts[2]});
		await DMONDETHRewardsLkZ1IE.onlyRewardDistribution.call({from: accounts[2]});
		const uint256q0gMWSc = await DMONDETHRewardsLkZ1IE.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256LRje05, BigInt("0"))
		await expect(DMONDETHRewardsLkZ1IE.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardszLO0sR = await DMONDETHRewards.new({from: accounts[4]});
		const uintQmg8fYA = BigInt("703")
		const uinttJuVuyY = BigInt("448")
		const addressQd8r2DU = accounts[3]
		const uintQEwiTVc = BigInt("82")
		const addresseI78kSP = accounts[5]
		const uint256xEE0bkj = await DMONDETHRewardszLO0sR.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint2566QxmNS = await DMONDETHRewardszLO0sR.notifyRewardAmount.call(uintQmg8fYA, {from: accounts[3]});
		const uint256A4pkuw = await DMONDETHRewardszLO0sR.notifyRewardAmount.call(uinttJuVuyY, {from: accounts[1]});
		const uint256HSpMx2h = await DMONDETHRewardszLO0sR.earned.call(addressQd8r2DU, {from: accounts[1]});
		const uint256PoLAEb = await DMONDETHRewardszLO0sR.stake.call(uintQEwiTVc, {from: accounts[5]});
		const addressfc14u7k = await DMONDETHRewardszLO0sR.setRewardDistribution.call(addresseI78kSP, {from: accounts[1]});

		assert.equal(uint256xEE0bkj, BigInt("0"))
		await expect(DMONDETHRewardszLO0sR.notifyRewardAmount.call(uintQmg8fYA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsouZWt15 = await DMONDETHRewards.new({from: accounts[1]});
		const uintPFuGcSW = BigInt("1167")
		const uintcH6nQ7f = BigInt("571")
		const uint256rA0hiQK = await DMONDETHRewardsouZWt15.lastTimeRewardApplicable.call({from: accounts[4]});
		await DMONDETHRewardsouZWt15.onlyRewardDistribution.call({from: accounts[5]});
		const addressno8fo7X = await DMONDETHRewardsouZWt15.owner.call({from: accounts[3]});
		const uint256vnVZ6Zt = await DMONDETHRewardsouZWt15.withdraw.call(uintPFuGcSW, {from: accounts[4]});
		const uint256LdmXx4z = await DMONDETHRewardsouZWt15.setStartTime.call(uintcH6nQ7f, {from: accounts[0]});

		assert.equal(uint256rA0hiQK, BigInt("0"))
		await expect(DMONDETHRewardsouZWt15.onlyRewardDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsz9hLtmZ = await DMONDETHRewards.new({from: accounts[1]});
		const uintnlv6dg6 = BigInt("1088")
		const addressTwMllWJ = accounts[2]
		const addressBl15NJ6 = accounts[2]
		const uint256rTGnPHx = await DMONDETHRewardsz9hLtmZ.stake.call(uintnlv6dg6, {from: accounts[2]});
		const addresspyoZ0VI = await DMONDETHRewardsz9hLtmZ.setRewardDistribution.call(addressTwMllWJ, {from: accounts[5]});
		const uint256s7O7Hfu = await DMONDETHRewardsz9hLtmZ.balanceOf.call(addressBl15NJ6, {from: accounts[1]});

		await expect(DMONDETHRewardsz9hLtmZ.stake.call(uintnlv6dg6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewards4Cu0Gz = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addresslm1YTy8 = accounts[3]
		const uintpqAYTLu = BigInt("1842")
		const bool1Ax9VL = await DMONDETHRewards4Cu0Gz.isOwner.call({from: accounts[4]});
		const addressfFCdmAq = await DMONDETHRewards4Cu0Gz.setStakeAddress.call(addresslm1YTy8, {from: accounts[5]});
		const uint256Sai1awp = await DMONDETHRewards4Cu0Gz.notifyRewardAmount.call(uintpqAYTLu, {from: accounts[4]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsDjtABIJ = await DMONDETHRewards.new({from: accounts[0]});
		const addressCvSduz = await DMONDETHRewardsDjtABIJ.owner.call({from: accounts[4]});
		await DMONDETHRewardsDjtABIJ.onlyRewardDistribution.call({from: accounts[1]});
		await DMONDETHRewardsDjtABIJ.getReward.call({from: accounts[5]});

		assert.equal(addressCvSduz, 0x7a685868da2F46de681a7D65150333C34BeB3627)
		await expect(DMONDETHRewardsDjtABIJ.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmlteLt2 = await DMONDETHRewards.new({from: accounts[4]});
		const uintD3hh5lg = BigInt("1450")
		const addressUovXzW9 = accounts[1]
		const uintfaCzZE6 = BigInt("169")
		const uint256zB5YKri = await DMONDETHRewardsmlteLt2.notifyRewardAmount.call(uintD3hh5lg, {from: accounts[4]});
		const uint256Gj1C60i = await DMONDETHRewardsmlteLt2.balanceOf.call(addressUovXzW9, {from: accounts[4]});
		const uint256f2gASqM = await DMONDETHRewardsmlteLt2.rewardPerToken.call({from: accounts[5]});
		const uint256ETppRRI = await DMONDETHRewardsmlteLt2.notifyRewardAmount.call(uintfaCzZE6, {from: accounts[0]});

		assert.equal(uint256Gj1C60i, BigInt("0"))
		assert.equal(uint256f2gASqM, BigInt("0"))
		await expect(DMONDETHRewardsmlteLt2.notifyRewardAmount.call(uintfaCzZE6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmlteLt2 = await DMONDETHRewards.new({from: accounts[4]});
		const uintwJ4vRzZ = BigInt("1089")
		const addresscVWIwJo = accounts[1]
		const uintLMXkTdc = BigInt("155")
		const uint256NqRqF2N = await DMONDETHRewardsmlteLt2.withdraw.call(uintwJ4vRzZ, {from: accounts[2]});
		await DMONDETHRewardsmlteLt2.onlyRewardDistribution.call({from: accounts[1]});
		const uint256Gj1C60i = await DMONDETHRewardsmlteLt2.balanceOf.call(addresscVWIwJo, {from: accounts[4]});
		const uint256VDkyTTp = await DMONDETHRewardsmlteLt2.withdraw.call(uintLMXkTdc, {from: accounts[3]});

		await expect(DMONDETHRewardsmlteLt2.withdraw.call(uintwJ4vRzZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsZMRskGn = await DMONDETHRewards.new({from: accounts[3]});
		const uintVjgtSKL = BigInt("1793")
		const addressFfsaUv7 = await DMONDETHRewardsZMRskGn.owner.call({from: accounts[0]});
		const uint256JlV9xd4 = await DMONDETHRewardsZMRskGn.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsZMRskGn.getReward.call({from: accounts[2]});
		const uint256izbD1XI = await DMONDETHRewardsZMRskGn.notifyRewardAmount.call(uintVjgtSKL, {from: accounts[2]});

		assert.equal(addressFfsaUv7, 0x0BEc4904167473BAFcC7D410Dfff650640d6FC03)
		assert.equal(uint256JlV9xd4, BigInt("0"))
		await expect(DMONDETHRewardsZMRskGn.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmlteLt2 = await DMONDETHRewards.new({from: accounts[4]});
		const uint2wQoT9 = BigInt("1450")
		const addressFHCU3d8 = accounts[1]
		const uint256zB5YKri = await DMONDETHRewardsmlteLt2.notifyRewardAmount.call(uint2wQoT9, {from: accounts[4]});
		await DMONDETHRewardsmlteLt2.exit.call({from: accounts[4]});
		const uint256Gj1C60i = await DMONDETHRewardsmlteLt2.balanceOf.call(addressFHCU3d8, {from: accounts[4]});
		const uint256f2gASqM = await DMONDETHRewardsmlteLt2.rewardPerToken.call({from: accounts[5]});

		await expect(DMONDETHRewardsmlteLt2.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmlteLt2 = await DMONDETHRewards.new({from: accounts[4]});
		const addressvvhx6tE = accounts[4]
		const addressRcN2v6i = accounts[1]
		const addressjUZzgzf = await DMONDETHRewardsmlteLt2.transferOwnership.call(addressvvhx6tE, {from: accounts[4]});
		const uint256Gj1C60i = await DMONDETHRewardsmlteLt2.balanceOf.call(addressRcN2v6i, {from: accounts[4]});

		assert.equal(uint256Gj1C60i, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardssQQB38j = await DMONDETHRewards.new({from: accounts[1]});
		const addressbkcSF6H = accounts[5]
		const uintYuwig1B = BigInt("1902")
		const addressp6NQ9g = "0x0000000000000000000000000000000000000001"
		const addressL80mSpf = accounts[0]
		const addresssv4T1mr = await DMONDETHRewardssQQB38j.setStakeAddress.call(addressbkcSF6H, {from: accounts[1]});
		const uint256mMZjOQ0 = await DMONDETHRewardssQQB38j.stake.call(uintYuwig1B, {from: accounts[3]});
		const addresskNjyiE2 = await DMONDETHRewardssQQB38j.setStakeAddress.call(addressp6NQ9g, {from: accounts[0]});
		const uint256ieBr2WZ = await DMONDETHRewardssQQB38j.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressQ2OBZy4 = await DMONDETHRewardssQQB38j.updateReward.call(addressL80mSpf, {from: accounts[0]});

		await expect(DMONDETHRewardssQQB38j.stake.call(uintYuwig1B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsz9hLtmZ = await DMONDETHRewards.new({from: accounts[1]});
		const addressoLZUV3L = accounts[0]
		const addressNPnahdg = "0x0000000000000000000000000000000000000001"
		const uintc6cZSiZ = BigInt("1548")
		const addressUbFvsQo = await DMONDETHRewardsz9hLtmZ.setRewardDistribution.call(addressoLZUV3L, {from: accounts[1]});
		const addressgaG2xGI = await DMONDETHRewardsz9hLtmZ.updateReward.call(addressNPnahdg, {from: accounts[4]});
		const uint256rTGnPHx = await DMONDETHRewardsz9hLtmZ.stake.call(uintc6cZSiZ, {from: accounts[2]});

		await expect(DMONDETHRewardsz9hLtmZ.updateReward.call(addressNPnahdg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmlteLt2 = await DMONDETHRewards.new({from: accounts[4]});
		const addressl4I3Lda = accounts[2]
		const uint256Gj1C60i = await DMONDETHRewardsmlteLt2.balanceOf.call(addressl4I3Lda, {from: accounts[4]});
		const uint256QStrexx = await DMONDETHRewardsmlteLt2.remainingReward.call({from: accounts[3]});

		assert.equal(uint256Gj1C60i, BigInt("0"))
		await expect(DMONDETHRewardsmlteLt2.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsz9hLtmZ = await DMONDETHRewards.new({from: accounts[1]});
		const uintuEajxn = BigInt("176")
		const uintwKPNgzq = BigInt("1529")
		const uint256T1Kz4Kp = await DMONDETHRewardsz9hLtmZ.setStartTime.call(uintuEajxn, {from: accounts[1]});
		await DMONDETHRewardsz9hLtmZ.checkStart.call({from: accounts[0]});
		const uint256rTGnPHx = await DMONDETHRewardsz9hLtmZ.stake.call(uintwKPNgzq, {from: accounts[2]});

		await expect(DMONDETHRewardsz9hLtmZ.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsz9hLtmZ = await DMONDETHRewards.new({from: accounts[1]});
		await DMONDETHRewardsz9hLtmZ.getReward.call({from: accounts[1]});
		await DMONDETHRewardsz9hLtmZ.renounceOwnership.call({from: accounts[1]});
		const uint256FZaK86 = await DMONDETHRewardsz9hLtmZ.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(DMONDETHRewardsz9hLtmZ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})
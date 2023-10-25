const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsBkqDiK5 = await DMONDETHRewards.new({from: accounts[2]});
		const uintLgWvzUP = BigInt("284")
		const addressItmJkt8 = accounts[0]
//		await DMONDETHRewardsBkqDiK5.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256GKS5X1O = await DMONDETHRewardsBkqDiK5.withdraw.call(uintLgWvzUP, {from: accounts[0]});
//		const uint256ISf5Z4O = await DMONDETHRewardsBkqDiK5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256EM3Oaxw = await DMONDETHRewardsBkqDiK5.earned.call(addressItmJkt8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsBkqDiK5.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmFQyTjl = await DMONDETHRewards.new({from: accounts[0]});
		const uintYgT0vRz = BigInt("1709")
		const addressHyalZKM = accounts[0]
//		const uint256tPvg7t = await DMONDETHRewardsmFQyTjl.withdraw.call(uintYgT0vRz, {from: accounts[1]});
//		const uint256RZ5UwLh = await DMONDETHRewardsmFQyTjl.earned.call(addressHyalZKM, {from: accounts[0]});

		await expect(DMONDETHRewardsmFQyTjl.withdraw.call(uintYgT0vRz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsloV9Sk = await DMONDETHRewards.new({from: accounts[0]});
		const address9CrSx6 = await DMONDETHRewardsloV9Sk.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256xudrnvl = await DMONDETHRewardsloV9Sk.totalSupply.call({from: accounts[1]});
//		await DMONDETHRewardsloV9Sk.getReward.call({from: accounts[4]});

		assert.equal(address9CrSx6, 0xb26D5e1e40B6792591A4E7f204775448A660b041)
		assert.equal(uint256xudrnvl, BigInt("0"))
		await expect(DMONDETHRewardsloV9Sk.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfYZZstq = await DMONDETHRewards.new({from: accounts[2]});
		const addresshrcm6M = accounts[5]
		const uint256jNwBU2N = await DMONDETHRewardsfYZZstq.totalSupply.call({from: accounts[0]});
//		const addressymHEhlK = await DMONDETHRewardsfYZZstq.setStakeAddress.call(addresshrcm6M, {from: accounts[0]});
//		await DMONDETHRewardsfYZZstq.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256jNwBU2N, BigInt("0"))
		await expect(DMONDETHRewardsfYZZstq.setStakeAddress.call(addresshrcm6M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsyROJ2F = await DMONDETHRewards.new({from: accounts[3]});
		const addressKqwpet4 = accounts[1]
		const uint256ixaK96z = await DMONDETHRewardsyROJ2F.earned.call(addressKqwpet4, {from: accounts[2]});
//		const uint256rkhMPf = await DMONDETHRewardsyROJ2F.remainingReward.call({from: accounts[1]});
//		await DMONDETHRewardsyROJ2F.onlyRewardDistribution.call({from: accounts[1]});
//		await DMONDETHRewardsyROJ2F.exit.call({from: accounts[0]});
//		await DMONDETHRewardsyROJ2F.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256ixaK96z, BigInt("0"))
		await expect(DMONDETHRewardsyROJ2F.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsuVRGdmw = await DMONDETHRewards.new({from: accounts[0]});
		const uintZUWJulT = BigInt("192")
//		await DMONDETHRewardsuVRGdmw.renounceOwnership.call({from: accounts[0]});
//		const uint256FdvLX46 = await DMONDETHRewardsuVRGdmw.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256jdviH3Q = await DMONDETHRewardsuVRGdmw.rewardPerToken.call({from: accounts[1]});
//		const uint256i08aUya = await DMONDETHRewardsuVRGdmw.notifyRewardAmount.call(uintZUWJulT, {from: accounts[1]});

		await expect(DMONDETHRewardsuVRGdmw.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsuVRGdmw = await DMONDETHRewards.new({from: accounts[0]});
		const uintbwfxTR = BigInt("2024")
		const addressLMrtAJ6 = accounts[3]
		const uintKKtN277 = BigInt("190")
//		const uint256pTs4u9F = await DMONDETHRewardsuVRGdmw.stake.call(uintbwfxTR, {from: accounts[4]});
//		const addressYj7NtLm = await DMONDETHRewardsuVRGdmw.updateReward.call(addressLMrtAJ6, {from: accounts[2]});
//		const uint256FdvLX46 = await DMONDETHRewardsuVRGdmw.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256jdviH3Q = await DMONDETHRewardsuVRGdmw.rewardPerToken.call({from: accounts[1]});
//		const uint256i08aUya = await DMONDETHRewardsuVRGdmw.notifyRewardAmount.call(uintKKtN277, {from: accounts[1]});

		await expect(DMONDETHRewardsuVRGdmw.stake.call(uintbwfxTR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsqXE5IMn = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgpdpeMz = BigInt("353")
		const addresstPBa7te = accounts[3]
		await DMONDETHRewardsqXE5IMn.exit.call({from: accounts[1]});
		const uint256PiYXZTy = await DMONDETHRewardsqXE5IMn.stake.call(uintgpdpeMz, {from: accounts[1]});
		await DMONDETHRewardsqXE5IMn.exit.call({from: accounts[3]});
		const uint256t3hyMuc = await DMONDETHRewardsqXE5IMn.balanceOf.call(addresstPBa7te, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsloV9Sk = await DMONDETHRewards.new({from: accounts[0]});
		const addressdzlbF6C = accounts[0]
		const addressYE070Gq = "0x0000000000000000000000000000000000000000"
		const addressiFIB5n = accounts[2]
		const uintRRupaRr = BigInt("234")
		const addresslhes2v5 = accounts[4]
		const uint256Vv4rl8l = await DMONDETHRewardsloV9Sk.totalSupply.call({from: accounts[4]});
//		await DMONDETHRewardsloV9Sk.exit.call({from: accounts[2]});
//		const addressQ3j4it0 = await DMONDETHRewardsloV9Sk.updateReward.call(addressdzlbF6C, {from: accounts[1]});
//		const uint256zMpQ4S = await DMONDETHRewardsloV9Sk.earned.call(addressYE070Gq, {from: accounts[5]});
//		const address9CrSx6 = await DMONDETHRewardsloV9Sk.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256gFpFsWR = await DMONDETHRewardsloV9Sk.balanceOf.call(addressiFIB5n, {from: accounts[5]});
//		const uint256xudrnvl = await DMONDETHRewardsloV9Sk.totalSupply.call({from: accounts[1]});
//		const uint256xS9h5F = await DMONDETHRewardsloV9Sk.stake.call(uintRRupaRr, {from: accounts[4]});
//		const addresstu0FBTw = await DMONDETHRewardsloV9Sk.setStakeAddress.call(addresslhes2v5, {from: accounts[4]});
//		await DMONDETHRewardsloV9Sk.getReward.call({from: accounts[4]});

		assert.equal(uint256Vv4rl8l, BigInt("0"))
		await expect(DMONDETHRewardsloV9Sk.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsr8EY8ea = await DMONDETHRewards.new({from: accounts[0]});
		const addressw2cdeIv = accounts[3]
		const addressQnPD6gW = await DMONDETHRewardsr8EY8ea.setRewardDistribution.call(addressw2cdeIv, {from: accounts[0]});
//		await DMONDETHRewardsr8EY8ea.renounceOwnership.call({from: accounts[1]});

		await expect(DMONDETHRewardsr8EY8ea.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsloV9Sk = await DMONDETHRewards.new({from: accounts[0]});
		const addresstl9wT0 = accounts[3]
		const uintvpS7Cyp = BigInt("731")
//		await DMONDETHRewardsloV9Sk.getReward.call({from: accounts[4]});
//		const uint256YcMgzS = await DMONDETHRewardsloV9Sk.balanceOf.call(addresstl9wT0, {from: accounts[5]});
//		const uint256h1iY2l = await DMONDETHRewardsloV9Sk.notifyRewardAmount.call(uintvpS7Cyp, {from: accounts[0]});

		await expect(DMONDETHRewardsloV9Sk.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsloV9Sk = await DMONDETHRewards.new({from: accounts[0]});
		const addressplxOhhq = accounts[3]
		const uintfXPcKOc = BigInt("686")
		const uintlIBSvEl = BigInt("1157")
		const uintMEi9mPn = BigInt("666")
//		await DMONDETHRewardsloV9Sk.getReward.call({from: accounts[4]});
//		const uint256YcMgzS = await DMONDETHRewardsloV9Sk.balanceOf.call(addressplxOhhq, {from: accounts[5]});
//		const uint256rbecSh3 = await DMONDETHRewardsloV9Sk.setStartTime.call(uintfXPcKOc, {from: accounts[0]});
//		const uint256gcVrVF = await DMONDETHRewardsloV9Sk.totalSupply.call({from: accounts[1]});
//		const uint256lVygSGR = await DMONDETHRewardsloV9Sk.stake.call(uintlIBSvEl, {from: accounts[0]});
//		const uint256GN3gcjl = await DMONDETHRewardsloV9Sk.stake.call(uintMEi9mPn, {from: accounts[3]});

		await expect(DMONDETHRewardsloV9Sk.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsloV9Sk = await DMONDETHRewards.new({from: accounts[0]});
		const addressVSbdzY7 = accounts[1]
//		await DMONDETHRewardsloV9Sk.getReward.call({from: accounts[4]});
//		const addressHPoTA3M = await DMONDETHRewardsloV9Sk.transferOwnership.call(addressVSbdzY7, {from: accounts[0]});

		await expect(DMONDETHRewardsloV9Sk.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsloV9Sk = await DMONDETHRewards.new({from: accounts[0]});
		const addressIUZBLrW = accounts[0]
		const uintmnZT2N4 = BigInt("733")
		const addressdlWH4I5 = await DMONDETHRewardsloV9Sk.setStakeAddress.call(addressIUZBLrW, {from: accounts[0]});
		const uint256h1iY2l = await DMONDETHRewardsloV9Sk.notifyRewardAmount.call(uintmnZT2N4, {from: accounts[0]});
	});
})
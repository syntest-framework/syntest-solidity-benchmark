const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardstdxHgl5 = await DMONDETHRewards.new({from: accounts[3]});
		const uintsEl8rxY = BigInt("91")
		const boolKhHvoUS = await DMONDETHRewardstdxHgl5.isOwner.call({from: accounts[1]});
//		await DMONDETHRewardstdxHgl5.renounceOwnership.call({from: accounts[3]});
//		await DMONDETHRewardstdxHgl5.exit.call({from: accounts[1]});
//		await DMONDETHRewardstdxHgl5.exit.call({from: accounts[2]});
//		const uint256wKDimUK = await DMONDETHRewardstdxHgl5.withdraw.call(uintsEl8rxY, {from: accounts[5]});

		assert.equal(boolKhHvoUS, false)
		await expect(DMONDETHRewardstdxHgl5.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTbn8DMv = await DMONDETHRewards.new({from: accounts[3]});
		const uintnakWn4G = BigInt("1582")
		const addressVmKCLUF = accounts[3]
		const addressuriQdfa = accounts[3]
		const uinteP9uUk6 = BigInt("1765")
		const uint0ZeUVY = BigInt("1124")
		const uintr0Ix0mK = BigInt("1872")
//		const uint256f10sb2U = await DMONDETHRewardsTbn8DMv.setStartTime.call(uintnakWn4G, {from: accounts[0]});
//		const uint256ubbxsLT = await DMONDETHRewardsTbn8DMv.balanceOf.call(addressVmKCLUF, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FtkfJy3 = await DMONDETHRewardsTbn8DMv.earned.call(addressuriQdfa, {from: accounts[3]});
//		const uint256bTHZp7 = await DMONDETHRewardsTbn8DMv.notifyRewardAmount.call(uinteP9uUk6, {from: accounts[0]});
//		const uint256cE74l1 = await DMONDETHRewardsTbn8DMv.withdraw.call(uint0ZeUVY, {from: accounts[1]});
//		const uint256HK7yL1o = await DMONDETHRewardsTbn8DMv.withdraw.call(uintr0Ix0mK, {from: accounts[2]});

		await expect(DMONDETHRewardsTbn8DMv.setStartTime.call(uintnakWn4G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsVdlgKp = await DMONDETHRewards.new({from: accounts[2]});
		const uintIYISYZh = BigInt("692")
		const addressVhqkhja = accounts[0]
//		const uint25603kFOl = await DMONDETHRewardsVdlgKp.notifyRewardAmount.call(uintIYISYZh, {from: accounts[3]});
//		const addresswMmyz5k = await DMONDETHRewardsVdlgKp.setRewardDistribution.call(addressVhqkhja, {from: accounts[3]});

		await expect(DMONDETHRewardsVdlgKp.notifyRewardAmount.call(uintIYISYZh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsuSjsmqm = await DMONDETHRewards.new({from: accounts[0]});
		const addressnb0ogK = accounts[0]
		const uintqrzsltm = BigInt("2008")
		const addressFis9xJ5 = accounts[0]
//		await DMONDETHRewardsuSjsmqm.checkStart.call({from: accounts[3]});
//		const addressPlwMhzQ = await DMONDETHRewardsuSjsmqm.setRewardDistribution.call(addressnb0ogK, {from: accounts[1]});
//		await DMONDETHRewardsuSjsmqm.onlyOwner.call({from: accounts[3]});
//		const uint256Dh88f2a = await DMONDETHRewardsuSjsmqm.stake.call(uintqrzsltm, {from: accounts[4]});
//		const uint256pU0bUK = await DMONDETHRewardsuSjsmqm.remainingReward.call({from: accounts[1]});
//		const address4VoQxF = await DMONDETHRewardsuSjsmqm.setRewardDistribution.call(addressFis9xJ5, {from: accounts[2]});

		await expect(DMONDETHRewardsuSjsmqm.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardssG9rO80 = await DMONDETHRewards.new({from: accounts[4]});
		const uintIeC0as6 = BigInt("1206")
		const addressdwU4OPG = accounts[3]
//		const uint256es6cqv = await DMONDETHRewardssG9rO80.withdraw.call(uintIeC0as6, {from: accounts[5]});
//		await DMONDETHRewardssG9rO80.checkStart.call({from: accounts[3]});
//		const uint256KlhCLLO = await DMONDETHRewardssG9rO80.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256hWJknK5 = await DMONDETHRewardssG9rO80.lastTimeRewardApplicable.call({from: accounts[3]});
//		const addresspdoxW9a = await DMONDETHRewardssG9rO80.transferOwnership.call(addressdwU4OPG, {from: accounts[2]});

		await expect(DMONDETHRewardssG9rO80.withdraw.call(uintIeC0as6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsDeAJaCR = await DMONDETHRewards.new({from: accounts[1]});
		const addressipShqzq = accounts[1]
//		await DMONDETHRewardsDeAJaCR.getReward.call({from: accounts[3]});
//		const addressuDiX1I5 = await DMONDETHRewardsDeAJaCR.updateReward.call(addressipShqzq, {from: accounts[3]});

		await expect(DMONDETHRewardsDeAJaCR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsztmNgAS = await DMONDETHRewards.new({from: accounts[2]});
		const uintkDQAdXR = BigInt("1732")
		const uintb63G2Nt = BigInt("1663")
		const boolXSWYYCq = await DMONDETHRewardsztmNgAS.isOwner.call({from: accounts[3]});
//		const uint256AQgwh9n = await DMONDETHRewardsztmNgAS.stake.call(uintkDQAdXR, {from: accounts[2]});
//		const uint256tNMBlcb = await DMONDETHRewardsztmNgAS.stake.call(uintb63G2Nt, {from: accounts[5]});

		assert.equal(boolXSWYYCq, false)
		await expect(DMONDETHRewardsztmNgAS.stake.call(uintkDQAdXR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardstdxHgl5 = await DMONDETHRewards.new({from: accounts[3]});
		const uintaJdLCkx = BigInt("91")
		const boolKhHvoUS = await DMONDETHRewardstdxHgl5.isOwner.call({from: accounts[1]});
//		const uint256Q9rp5Le = await DMONDETHRewardstdxHgl5.remainingReward.call({from: accounts[3]});
//		await DMONDETHRewardstdxHgl5.renounceOwnership.call({from: accounts[3]});
//		await DMONDETHRewardstdxHgl5.exit.call({from: accounts[1]});
//		await DMONDETHRewardstdxHgl5.exit.call({from: accounts[2]});
//		const uint256wKDimUK = await DMONDETHRewardstdxHgl5.withdraw.call(uintaJdLCkx, {from: accounts[5]});

		assert.equal(boolKhHvoUS, false)
		await expect(DMONDETHRewardstdxHgl5.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsDeAJaCR = await DMONDETHRewards.new({from: accounts[1]});
		const uintGlhAknq = BigInt("695")
		const addressgVmv5V5 = accounts[1]
//		await DMONDETHRewardsDeAJaCR.getReward.call({from: accounts[3]});
//		const addressjtDmNXY = await DMONDETHRewardsDeAJaCR.owner.call({from: accounts[5]});
//		const uint256Msa5Qa5 = await DMONDETHRewardsDeAJaCR.remainingReward.call({from: accounts[0]});
//		const uint25694kZp0 = await DMONDETHRewardsDeAJaCR.withdraw.call(uintGlhAknq, {from: accounts[5]});
//		const addressnMh2Y6f = await DMONDETHRewardsDeAJaCR.setRewardDistribution.call(addressgVmv5V5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsDeAJaCR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsA02bYUx = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGb0k2fA = BigInt("27")
		const uint256BAQ0ilK = await DMONDETHRewardsA02bYUx.remainingReward.call({from: accounts[1]});
		const uint256iSc6T3i = await DMONDETHRewardsA02bYUx.notifyRewardAmount.call(uintGb0k2fA, {from: accounts[2]});
		await DMONDETHRewardsA02bYUx.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsA02bYUx.checkStart.call({from: accounts[1]});
		await DMONDETHRewardsA02bYUx.onlyOwner.call({from: accounts[1]});
		const uint256xScg9aj = await DMONDETHRewardsA02bYUx.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPGkujne = await DMONDETHRewards.new({from: accounts[4]});
		const addressZgu8wy = accounts[0]
		const addressDg3xdwm = await DMONDETHRewardsPGkujne.owner.call({from: accounts[3]});
//		await DMONDETHRewardsPGkujne.renounceOwnership.call({from: accounts[4]});
//		const addressONZN0Dv = await DMONDETHRewardsPGkujne.setStakeAddress.call(addressZgu8wy, {from: accounts[4]});
//		const boolpxJVfed = await DMONDETHRewardsPGkujne.isOwner.call({from: accounts[4]});
//		const uint256rKZqBk3 = await DMONDETHRewardsPGkujne.rewardPerToken.call({from: accounts[5]});

		assert.equal(addressDg3xdwm, 0x002a47d2Ac47bE1693A40C4E044061c9fFfa98cC)
		await expect(DMONDETHRewardsPGkujne.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsztmNgAS = await DMONDETHRewards.new({from: accounts[2]});
		const uintWI5OEAk = BigInt("848")
		const uintmYUaEN5 = BigInt("1732")
		const uint256mHpqiyd = await DMONDETHRewardsztmNgAS.setStartTime.call(uintWI5OEAk, {from: accounts[2]});
//		const uint256AQgwh9n = await DMONDETHRewardsztmNgAS.stake.call(uintmYUaEN5, {from: accounts[2]});

		await expect(DMONDETHRewardsztmNgAS.stake.call(uintmYUaEN5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsztmNgAS = await DMONDETHRewards.new({from: accounts[2]});
		const uinta3zWP4v = BigInt("1363")
		const addresssejKbqA = accounts[3]
		const uinthqJ3wSp = BigInt("1780")
		const addressLp6n6ps = accounts[0]
		const uintpAjecXd = BigInt("1672")
		const boolXSWYYCq = await DMONDETHRewardsztmNgAS.isOwner.call({from: accounts[3]});
		const uint256cXTQTNV = await DMONDETHRewardsztmNgAS.notifyRewardAmount.call(uinta3zWP4v, {from: accounts[2]});
		const uint256UAPhKbb = await DMONDETHRewardsztmNgAS.earned.call(addresssejKbqA, {from: accounts[5]});
//		await DMONDETHRewardsztmNgAS.getReward.call({from: accounts[2]});
//		const uint256AQgwh9n = await DMONDETHRewardsztmNgAS.stake.call(uinthqJ3wSp, {from: accounts[2]});
//		const addressHTNeJAY = await DMONDETHRewardsztmNgAS.transferOwnership.call(addressLp6n6ps, {from: accounts[4]});
//		const addressrKj7yCS = await DMONDETHRewardsztmNgAS.owner.call({from: accounts[2]});
//		const uint256tNMBlcb = await DMONDETHRewardsztmNgAS.stake.call(uintpAjecXd, {from: accounts[5]});

		assert.equal(boolXSWYYCq, false)
		assert.equal(uint256UAPhKbb, BigInt("0"))
		await expect(DMONDETHRewardsztmNgAS.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsztmNgAS = await DMONDETHRewards.new({from: accounts[2]});
		const addressl2JzRbw = accounts[1]
		const addressBlA7gVT = accounts[1]
		const uintLYZGAiH = BigInt("1380")
		const addressUyVhxpB = accounts[3]
		const addressnWmFGL = accounts[3]
		const uintW0wgq6Z = BigInt("1780")
		const addresshxc5Pmf = accounts[0]
		const uintqKfYhw6 = BigInt("1672")
		const addressNW77wRD = await DMONDETHRewardsztmNgAS.transferOwnership.call(addressl2JzRbw, {from: accounts[2]});
		const uint256MNuxnod = await DMONDETHRewardsztmNgAS.balanceOf.call(addressBlA7gVT, {from: accounts[0]});
		const uint256cXTQTNV = await DMONDETHRewardsztmNgAS.notifyRewardAmount.call(uintLYZGAiH, {from: accounts[2]});
		const uint256UAPhKbb = await DMONDETHRewardsztmNgAS.earned.call(addressUyVhxpB, {from: accounts[5]});
		const uint256v1BlCY = await DMONDETHRewardsztmNgAS.balanceOf.call(addressnWmFGL, {from: accounts[4]});
//		await DMONDETHRewardsztmNgAS.getReward.call({from: accounts[2]});
//		const uint256AQgwh9n = await DMONDETHRewardsztmNgAS.stake.call(uintW0wgq6Z, {from: accounts[2]});
//		const addressHTNeJAY = await DMONDETHRewardsztmNgAS.transferOwnership.call(addresshxc5Pmf, {from: accounts[4]});
//		const addressrKj7yCS = await DMONDETHRewardsztmNgAS.owner.call({from: accounts[2]});
//		const uint256t3VEdzH = await DMONDETHRewardsztmNgAS.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256tNMBlcb = await DMONDETHRewardsztmNgAS.stake.call(uintqKfYhw6, {from: accounts[5]});

		assert.equal(uint256MNuxnod, BigInt("0"))
		assert.equal(uint256UAPhKbb, BigInt("0"))
		assert.equal(uint256v1BlCY, BigInt("0"))
		await expect(DMONDETHRewardsztmNgAS.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsDeAJaCR = await DMONDETHRewards.new({from: accounts[1]});
		const addressQ0X3ai = accounts[0]
//		await DMONDETHRewardsDeAJaCR.getReward.call({from: accounts[3]});
//		const uint256Xpnfvjn = await DMONDETHRewardsDeAJaCR.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addressxXeJCZw = await DMONDETHRewardsDeAJaCR.setRewardDistribution.call(addressQ0X3ai, {from: accounts[1]});
//		await DMONDETHRewardsDeAJaCR.onlyRewardDistribution.call({from: accounts[4]});

		await expect(DMONDETHRewardsDeAJaCR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
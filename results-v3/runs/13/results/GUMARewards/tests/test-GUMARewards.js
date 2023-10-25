const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsFociPC2 = await GUMARewards.new({from: accounts[3]});
		const addressaktGphU = accounts[0]
		const addressirHxWBH = "0x0000000000000000000000000000000000000001"
		const address4lxOBt = accounts[3]
		const uint256AInkM9E = await GUMARewardsFociPC2.earned.call(addressaktGphU, {from: accounts[3]});
		const addressDQDEfwh = await GUMARewardsFociPC2.transferOwnership.call(addressirHxWBH, {from: accounts[3]});
		const addressQWFLraD = await GUMARewardsFociPC2.updateReward.call(address4lxOBt, {from: accounts[2]});

		assert.equal(uint256AInkM9E, BigInt("0"))
		await expect(GUMARewardsFociPC2.updateReward.call(address4lxOBt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsd0Qg3Fd = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuPGP8nY = BigInt("516")
		const uint256se9L6TA = await GUMARewardsd0Qg3Fd.totalSupply.call({from: accounts[2]});
		const uint256bL0xxs = await GUMARewardsd0Qg3Fd.totalSupply.call({from: accounts[3]});
		const uint256hnisN7 = await GUMARewardsd0Qg3Fd.stake.call(uintuPGP8nY, {from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsd0Qg3Fd.onlyRewardDistribution.call({from: accounts[3]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsQG6vD7r = await GUMARewards.new({from: accounts[3]});
		const uintQrhpOtT = BigInt("1044")
		const uintaxTzaJy = BigInt("1010")
		const uint256HHETxdG = await GUMARewardsQG6vD7r.stake.call(uintQrhpOtT, {from: accounts[4]});
		const uint256blNTym2 = await GUMARewardsQG6vD7r.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YYgs6n = await GUMARewardsQG6vD7r.stake.call(uintaxTzaJy, {from: accounts[0]});
		const uint256CRov4Mp = await GUMARewardsQG6vD7r.totalSupply.call({from: accounts[3]});

		await expect(GUMARewardsQG6vD7r.stake.call(uintQrhpOtT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsCQpHTVy = await GUMARewards.new({from: accounts[1]});
		const uintH2tJxu = BigInt("811")
		const uintdbqKy3H = BigInt("735")
		const booll21tD3p = await GUMARewardsCQpHTVy.isOwner.call({from: accounts[3]});
		const uint256t0VTZuc = await GUMARewardsCQpHTVy.lastTimeRewardApplicable.call({from: accounts[1]});
		await GUMARewardsCQpHTVy.getReward.call({from: accounts[4]});
		const uint256yizh0tU = await GUMARewardsCQpHTVy.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256MR9Fu39 = await GUMARewardsCQpHTVy.stake.call(uintH2tJxu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256giWGm2 = await GUMARewardsCQpHTVy.notifyRewardAmount.call(uintdbqKy3H, {from: accounts[5]});

		assert.equal(booll21tD3p, false)
		assert.equal(uint256t0VTZuc, BigInt("0"))
		await expect(GUMARewardsCQpHTVy.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsb7SuCW6 = await GUMARewards.new({from: accounts[4]});
		const address62jplm = accounts[1]
		const addressFLa3SBV = accounts[0]
		const uintgaHskFJ = BigInt("182")
		const addresstkB7RYR = await GUMARewardsb7SuCW6.setGUMA.call(addressFLa3SBV, address62jplm, {from: accounts[3]});
		const uint256rED5PwT = await GUMARewardsb7SuCW6.stake.call(uintgaHskFJ, {from: accounts[4]});
		const boolDpTM2IY = await GUMARewardsb7SuCW6.isOwner.call({from: accounts[5]});
		await GUMARewardsb7SuCW6.renounceOwnership.call({from: accounts[0]});

		await expect(GUMARewardsb7SuCW6.setGUMA.call(addressFLa3SBV, address62jplm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsFociPC2 = await GUMARewards.new({from: accounts[3]});
		const addressEBxyrIg = accounts[1]
		const addressSlzFkc0 = "0x0000000000000000000000000000000000000001"
		const addressfbiXIXO = accounts[3]
		const addressgQ6RNDg = accounts[3]
		const addressmHCDtwu = await GUMARewardsFociPC2.owner.call({from: accounts[1]});
		const uint256AInkM9E = await GUMARewardsFociPC2.earned.call(addressEBxyrIg, {from: accounts[3]});
		const addressDQDEfwh = await GUMARewardsFociPC2.transferOwnership.call(addressSlzFkc0, {from: accounts[3]});
		const uint256skSTaEo = await GUMARewardsFociPC2.balanceOf.call(addressfbiXIXO, {from: accounts[1]});
		const addressQWFLraD = await GUMARewardsFociPC2.updateReward.call(addressgQ6RNDg, {from: accounts[2]});

		assert.equal(addressmHCDtwu, 0x129C9c8D95a367c64afe2c57CA6926E6BF616eB3)
		assert.equal(uint256AInkM9E, BigInt("0"))
		assert.equal(uint256skSTaEo, BigInt("0"))
		await expect(GUMARewardsFociPC2.updateReward.call(addressgQ6RNDg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsFociPC2 = await GUMARewards.new({from: accounts[3]});
		const addressgQCr9MK = accounts[0]
		const uint256AInkM9E = await GUMARewardsFociPC2.earned.call(addressgQCr9MK, {from: accounts[3]});
		await GUMARewardsFociPC2.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256AInkM9E, BigInt("0"))
		await expect(GUMARewardsFociPC2.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsFociPC2 = await GUMARewards.new({from: accounts[3]});
		const address3uQqqg = "0x0000000000000000000000000000000000000001"
		const addressKG3LuGB = await GUMARewardsFociPC2.setRewardDistribution.call(address3uQqqg, {from: accounts[3]});
		await GUMARewardsFociPC2.getReward.call({from: accounts[0]});

		await expect(GUMARewardsFociPC2.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsFociPC2 = await GUMARewards.new({from: accounts[3]});
		const addressein07JV = accounts[1]
		await GUMARewardsFociPC2.renounceOwnership.call({from: accounts[3]});
		const uint256GHIYyph = await GUMARewardsFociPC2.totalSupply.call({from: accounts[0]});
		const uint256AInkM9E = await GUMARewardsFociPC2.earned.call(addressein07JV, {from: accounts[3]});
		const uint256yYLgZjG = await GUMARewardsFociPC2.totalSupply.call({from: accounts[5]});

		await expect(GUMARewardsFociPC2.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})
const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKrWjoN8e = await RainbowRAK.new({from: accounts[4]});
		const uintSOverdb = BigInt("484")
		const addresspL0J4U9 = accounts[2]
//		await RainbowRAKrWjoN8e.claimRewards.call({from: accounts[0]});
//		const uint256zIV69c3 = await RainbowRAKrWjoN8e.unstake.call(uintSOverdb, {from: accounts[2]});
//		const addressbtFtDG = await RainbowRAKrWjoN8e.updateReward.call(addresspL0J4U9, {from: accounts[2]});
//		await RainbowRAKrWjoN8e.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKrWjoN8e.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKS2ORyL4 = await RainbowRAK.new({from: accounts[1]});
		const uintEFXeWX8 = BigInt("1338")
//		await RainbowRAKS2ORyL4.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKS2ORyL4.renounceOwnership.call({from: accounts[3]});
//		const uint256Rj27KoV = await RainbowRAKS2ORyL4.stake.call(uintEFXeWX8, {from: accounts[0]});
//		await RainbowRAKS2ORyL4.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKS2ORyL4.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKcGogRnT = await RainbowRAK.new({from: accounts[3]});
		const uintcpack41 = BigInt("521")
		const addressWSK6iuu = accounts[4]
//		await RainbowRAKcGogRnT.exit.call({from: accounts[5]});
//		const uint256mLzAoQz = await RainbowRAKcGogRnT.getCurrentRewardReserve.call({from: accounts[4]});
//		const uint256wmmwA82 = await RainbowRAKcGogRnT.unstake.call(uintcpack41, {from: accounts[4]});
//		const addressEnZ3U1b = await RainbowRAKcGogRnT.updateReward.call(addressWSK6iuu, {from: accounts[1]});

		await expect(RainbowRAKcGogRnT.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKnWS6qb3 = await RainbowRAK.new({from: accounts[3]});
		const uintfFBieIn = BigInt("431")
		const addressarrayzAsxtv = await RainbowRAKnWS6qb3.getCommunity.call({from: accounts[3]});
//		await RainbowRAKnWS6qb3.claimRewards.call({from: accounts[4]});
//		const boolPuq1AMK = await RainbowRAKnWS6qb3.isOwner.call({from: accounts[0]});
//		const uint256ctnNGR = await RainbowRAKnWS6qb3.notifyRewardAmount.call(uintfFBieIn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayzAsxtv, )
		await expect(RainbowRAKnWS6qb3.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKcA7rkkc = await RainbowRAK.new({from: accounts[2]});
		const uint256QPhWYDS = await RainbowRAKcA7rkkc.lastTimeRewardApplicable.call({from: accounts[0]});
//		await RainbowRAKcA7rkkc.onlyOwner.call({from: accounts[4]});
//		await RainbowRAKcA7rkkc.renounceOwnership.call({from: accounts[3]});
//		const addressNLO6g2Y = await RainbowRAKcA7rkkc.owner.call({from: accounts[0]});
//		const boolncO9UK = await RainbowRAKcA7rkkc.isOwner.call({from: accounts[4]});

		assert.equal(uint256QPhWYDS, BigInt("0"))
		await expect(RainbowRAKcA7rkkc.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxEPUQF4 = await RainbowRAK.new({from: accounts[3]});
		const uintrE6FExZ = BigInt("1394")
		const addressuKSsXyM = accounts[5]
		const uinteCAYNx = BigInt("306")
//		const uint256S2I13Qz = await RainbowRAKxEPUQF4.unstake.call(uintrE6FExZ, {from: accounts[1]});
//		const addressrgjLqoy = await RainbowRAKxEPUQF4.transferOwnership.call(addressuKSsXyM, {from: accounts[0]});
//		await RainbowRAKxEPUQF4.renounceOwnership.call({from: accounts[0]});
//		const uint256RH3apY2 = await RainbowRAKxEPUQF4.notifyRewardAmount.call(uinteCAYNx, {from: accounts[3]});

		await expect(RainbowRAKxEPUQF4.unstake.call(uintrE6FExZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKobZLeKu = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspa7U1Du = "0x0000000000000000000000000000000000000001"
		const addressarray1g9IMZ = await RainbowRAKobZLeKu.getCommunity.call({from: accounts[3]});
		await RainbowRAKobZLeKu.renounceOwnership.call({from: accounts[1]});
		const addressIiaHefv = await RainbowRAKobZLeKu.updateReward.call(addresspa7U1Du, {from: accounts[4]});
		const addressarrayyWBzeJH = await RainbowRAKobZLeKu.getCommunity.call({from: accounts[5]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKMjn3sGH = await RainbowRAK.new({from: accounts[1]});
		const uint256Jw8bHbV = await RainbowRAKMjn3sGH.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKMjn3sGH.renounceOwnership.call({from: accounts[1]});
//		const uint256oRpmKsp = await RainbowRAKMjn3sGH.lastTimeRewardApplicable.call({from: accounts[1]});
//		const boolgZc21I = await RainbowRAKMjn3sGH.isOwner.call({from: accounts[2]});

		assert.equal(uint256Jw8bHbV, BigInt("0"))
		await expect(RainbowRAKMjn3sGH.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKLQgkJp4 = await RainbowRAK.new({from: accounts[3]});
		const addressVkrfIhk = accounts[4]
		const uint256aaUCDr = await RainbowRAKLQgkJp4.earned.call(addressVkrfIhk, {from: accounts[2]});
		const boolusVSBdy = await RainbowRAKLQgkJp4.isOwner.call({from: accounts[0]});
		const addressqaq46U = await RainbowRAKLQgkJp4.owner.call({from: accounts[1]});
		const addressarrayvnR4Y0o = await RainbowRAKLQgkJp4.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayhUPICty = await RainbowRAKLQgkJp4.getCommunity.call({from: accounts[0]});

		assert.equal(addressarrayhUPICty, )
		assert.equal(addressarrayvnR4Y0o, )
		assert.equal(addressqaq46U, 0xcED18613713F42E1ad742fAF3BC59AFE32f2c2EA)
		assert.equal(boolusVSBdy, false)
		assert.equal(uint256aaUCDr, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKrWjoN8e = await RainbowRAK.new({from: accounts[4]});
		const uintL2YKqK9 = BigInt("65")
		const addresscnQnrH = "0x0000000000000000000000000000000000000001"
		const uintHuYIQYO = BigInt("433")
		const addressXZpGQu9 = accounts[2]
		const uint256uZUpmER = await RainbowRAKrWjoN8e.rewardPerToken.call({from: accounts[0]});
//		const uint256LMHY9w6 = await RainbowRAKrWjoN8e.stake.call(uintL2YKqK9, {from: accounts[0]});
//		await RainbowRAKrWjoN8e.exit.call({from: accounts[0]});
//		const uint256tj4WwHi = await RainbowRAKrWjoN8e.earned.call(addresscnQnrH, {from: accounts[1]});
//		const uint256zIV69c3 = await RainbowRAKrWjoN8e.unstake.call(uintHuYIQYO, {from: accounts[2]});
//		const addresscSWuOW1 = await RainbowRAKrWjoN8e.transferOwnership.call(addressXZpGQu9, {from: accounts[5]});
//		await RainbowRAKrWjoN8e.claimRewards.call({from: accounts[2]});
//		const uint256PLprsv = await RainbowRAKrWjoN8e.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uint256uZUpmER, BigInt("0"))
		await expect(RainbowRAKrWjoN8e.stake.call(uintL2YKqK9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOtQndLm = await RainbowRAK.new({from: accounts[3]});
		const addressyV7BFvd = accounts[2]
		const addressXhGL47L = await RainbowRAKOtQndLm.transferOwnership.call(addressyV7BFvd, {from: accounts[3]});
//		await RainbowRAKOtQndLm.claimRewards.call({from: accounts[4]});
//		const addressLqRyLUC = await RainbowRAKOtQndLm.owner.call({from: accounts[3]});

		await expect(RainbowRAKOtQndLm.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKrWjoN8e = await RainbowRAK.new({from: accounts[4]});
		const addressP1fFsHu = "0x0000000000000000000000000000000000000001"
		const uintef0uriq = BigInt("1625")
		const uintFgjGxvU = BigInt("17")
		const addressK6sxyc3 = accounts[1]
		const addressXuQgJdY = accounts[2]
		const uint256tj4WwHi = await RainbowRAKrWjoN8e.earned.call(addressP1fFsHu, {from: accounts[1]});
//		const uint256YS7XFFB = await RainbowRAKrWjoN8e.notifyRewardAmount.call(uintef0uriq, {from: accounts[4]});
//		const uint256zIV69c3 = await RainbowRAKrWjoN8e.unstake.call(uintFgjGxvU, {from: accounts[2]});
//		const addresscSWuOW1 = await RainbowRAKrWjoN8e.transferOwnership.call(addressK6sxyc3, {from: accounts[5]});
//		await RainbowRAKrWjoN8e.onlyOwner.call({from: accounts[2]});
//		await RainbowRAKrWjoN8e.exit.call({from: accounts[1]});
//		const addressGKWXb5c = await RainbowRAKrWjoN8e.transferOwnership.call(addressXuQgJdY, {from: accounts[3]});
//		await RainbowRAKrWjoN8e.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256tj4WwHi, BigInt("0"))
		await expect(RainbowRAKrWjoN8e.notifyRewardAmount.call(uintef0uriq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})
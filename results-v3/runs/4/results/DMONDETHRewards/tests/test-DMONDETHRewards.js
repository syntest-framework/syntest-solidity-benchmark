const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardstYaixzP = await DMONDETHRewards.new({from: accounts[2]});
		const addresskDWIgh = accounts[2]
		const uint2569otjHE = await DMONDETHRewardstYaixzP.lastTimeRewardApplicable.call({from: accounts[1]});
		await DMONDETHRewardstYaixzP.checkStart.call({from: accounts[2]});
		const uint256ICc2qT2 = await DMONDETHRewardstYaixzP.balanceOf.call(addresskDWIgh, {from: accounts[1]});
		const uint256CVoEVzf = await DMONDETHRewardstYaixzP.totalSupply.call({from: accounts[3]});

		assert.equal(uint2569otjHE, BigInt("0"))
		await expect(DMONDETHRewardstYaixzP.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsI8kFLcP = await DMONDETHRewards.new({from: accounts[5]});
		const addressoSwELk = accounts[3]
		await DMONDETHRewardsI8kFLcP.getReward.call({from: accounts[3]});
		const uint256n9qZQAq = await DMONDETHRewardsI8kFLcP.balanceOf.call(addressoSwELk, {from: accounts[4]});

		await expect(DMONDETHRewardsI8kFLcP.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsYd27usM = await DMONDETHRewards.new({from: accounts[5]});
		const addressEse0bDw = accounts[2]
		const addresssOC3V3G = accounts[1]
		const addressm0HAirB = await DMONDETHRewardsYd27usM.setRewardDistribution.call(addressEse0bDw, {from: accounts[3]});
		await DMONDETHRewardsYd27usM.exit.call({from: accounts[3]});
		await DMONDETHRewardsYd27usM.renounceOwnership.call({from: accounts[4]});
		const addressQ1q3eiP = await DMONDETHRewardsYd27usM.transferOwnership.call(addresssOC3V3G, {from: accounts[3]});

		await expect(DMONDETHRewardsYd27usM.setRewardDistribution.call(addressEse0bDw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardss85I5ZI = await DMONDETHRewards.new({from: accounts[3]});
		const addressekjSya0 = accounts[5]
		const uintTEmin7m = BigInt("1660")
		const uintvj4vA2G = BigInt("1464")
		const uintdwruA9E = BigInt("554")
		const uint256h07EfNW = await DMONDETHRewardss85I5ZI.remainingReward.call({from: accounts[3]});
		const addressHKiQZOH = await DMONDETHRewardss85I5ZI.updateReward.call(addressekjSya0, {from: accounts[4]});
		const uint256LtvaAbs = await DMONDETHRewardss85I5ZI.notifyRewardAmount.call(uintTEmin7m, {from: accounts[1]});
		const uint256oRUU7P = await DMONDETHRewardss85I5ZI.withdraw.call(uintvj4vA2G, {from: accounts[0]});
		const uint256KYnHF8 = await DMONDETHRewardss85I5ZI.stake.call(uintdwruA9E, {from: accounts[5]});
		const addressSnFau65 = await DMONDETHRewardss85I5ZI.owner.call({from: accounts[1]});

		await expect(DMONDETHRewardss85I5ZI.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslAc9x6k = await DMONDETHRewards.new({from: accounts[4]});
		const uinthV2Ubd = BigInt("1133")
		const addressLbMSLSH = accounts[3]
		const addressO49dM9a = accounts[3]
		const addressG3NIGlZ = accounts[3]
		const uint256DeSbwyB = await DMONDETHRewardslAc9x6k.stake.call(uinthV2Ubd, {from: "0x0000000000000000000000000000000000000001"});
		const addressbNhIHF7 = await DMONDETHRewardslAc9x6k.transferOwnership.call(addressLbMSLSH, {from: accounts[4]});
		const uint256yAL5seB = await DMONDETHRewardslAc9x6k.earned.call(addressO49dM9a, {from: accounts[2]});
		const address6tL3kg = await DMONDETHRewardslAc9x6k.transferOwnership.call(addressG3NIGlZ, {from: accounts[0]});

		await expect(DMONDETHRewardslAc9x6k.stake.call(uinthV2Ubd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardszsGvm45 = await DMONDETHRewards.new({from: accounts[5]});
		const uintSmFMxHp = BigInt("1")
		const addressDVeP2UY = accounts[3]
		const uint256xwufRco = await DMONDETHRewardszsGvm45.notifyRewardAmount.call(uintSmFMxHp, {from: accounts[4]});
		const addressqhzxjZ1 = await DMONDETHRewardszsGvm45.updateReward.call(addressDVeP2UY, {from: accounts[2]});
		const uint256GL8IaAL = await DMONDETHRewardszsGvm45.totalSupply.call({from: accounts[4]});
		const uint256TXxXx0l = await DMONDETHRewardszsGvm45.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardszsGvm45.notifyRewardAmount.call(uintSmFMxHp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsYe4JiZ5 = await DMONDETHRewards.new({from: accounts[2]});
		const addressVZdZOqH = accounts[2]
		const uintCCMvpCh = BigInt("1370")
		await DMONDETHRewardsYe4JiZ5.renounceOwnership.call({from: accounts[2]});
		const uint256Lnv2krR = await DMONDETHRewardsYe4JiZ5.rewardPerToken.call({from: accounts[5]});
		const addressf9Ud8pZ = await DMONDETHRewardsYe4JiZ5.setRewardDistribution.call(addressVZdZOqH, {from: accounts[3]});
		const uint256Q3HRfby = await DMONDETHRewardsYe4JiZ5.withdraw.call(uintCCMvpCh, {from: accounts[1]});

		await expect(DMONDETHRewardsYe4JiZ5.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsuBGhXuf = await DMONDETHRewards.new({from: accounts[2]});
		const uintirbmcnz = BigInt("93")
		const addressmT6KntE = accounts[6]
		const uint256VtEpQ25 = await DMONDETHRewardsuBGhXuf.withdraw.call(uintirbmcnz, {from: accounts[4]});
		await DMONDETHRewardsuBGhXuf.onlyRewardDistribution.call({from: accounts[1]});
		const addressjyVYIBk = await DMONDETHRewardsuBGhXuf.transferOwnership.call(addressmT6KntE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsuBGhXuf.withdraw.call(uintirbmcnz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslAc9x6k = await DMONDETHRewards.new({from: accounts[4]});
		const uintN2YOKl = BigInt("1134")
		const addressZn3mWfp = accounts[3]
		const addressNUzPArr = accounts[3]
		const addressVktkjUN = accounts[3]
		await DMONDETHRewardslAc9x6k.getReward.call({from: accounts[4]});
		await DMONDETHRewardslAc9x6k.exit.call({from: accounts[3]});
		const uint256DeSbwyB = await DMONDETHRewardslAc9x6k.stake.call(uintN2YOKl, {from: "0x0000000000000000000000000000000000000001"});
		const addressbNhIHF7 = await DMONDETHRewardslAc9x6k.transferOwnership.call(addressZn3mWfp, {from: accounts[4]});
		const uint256yAL5seB = await DMONDETHRewardslAc9x6k.earned.call(addressNUzPArr, {from: accounts[2]});
		const address6tL3kg = await DMONDETHRewardslAc9x6k.transferOwnership.call(addressVktkjUN, {from: accounts[0]});

		await expect(DMONDETHRewardslAc9x6k.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsNwu5MEz = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsNwu5MEz.onlyOwner.call({from: accounts[1]});
		const bool1PXWIj = await DMONDETHRewardsNwu5MEz.isOwner.call({from: accounts[0]});
		await DMONDETHRewardsNwu5MEz.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const bool7VHZdQ = await DMONDETHRewardsNwu5MEz.isOwner.call({from: accounts[0]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshHOLaQ = await DMONDETHRewards.new({from: accounts[1]});
		const uintShMrCL7 = BigInt("661")
		const address51zqgX = await DMONDETHRewardshHOLaQ.owner.call({from: accounts[2]});
		const uint256Yq5hfXa = await DMONDETHRewardshHOLaQ.withdraw.call(uintShMrCL7, {from: accounts[5]});

		assert.equal(address51zqgX, 0x21651f2F951cf4Aa80a1FcF50A90Def308ea61b6)
		await expect(DMONDETHRewardshHOLaQ.withdraw.call(uintShMrCL7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshHOLaQ = await DMONDETHRewards.new({from: accounts[1]});
		const addressbbMmsc = accounts[4]
		const uinto3Ib7GV = BigInt("1448")
		const uintfqs9OQK = BigInt("471")
		await DMONDETHRewardshHOLaQ.getReward.call({from: accounts[2]});
		const addressj5HUf1G = await DMONDETHRewardshHOLaQ.setRewardDistribution.call(addressbbMmsc, {from: accounts[1]});
		const uint256dlWN5WI = await DMONDETHRewardshHOLaQ.stake.call(uinto3Ib7GV, {from: accounts[2]});
		const uint256x7KGWYc = await DMONDETHRewardshHOLaQ.totalSupply.call({from: accounts[4]});
		const uint256jw1LOWj = await DMONDETHRewardshHOLaQ.rewardPerToken.call({from: accounts[3]});
		await DMONDETHRewardshHOLaQ.onlyOwner.call({from: accounts[3]});
		const uint256Yq5hfXa = await DMONDETHRewardshHOLaQ.withdraw.call(uintfqs9OQK, {from: accounts[5]});

		await expect(DMONDETHRewardshHOLaQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslAc9x6k = await DMONDETHRewards.new({from: accounts[4]});
		const addressfcHvRu = accounts[4]
		const addressQDTPNyL = accounts[2]
		const addressI3tjAJV = accounts[3]
		const addressLnyBLUQ = accounts[3]
		await DMONDETHRewardslAc9x6k.getReward.call({from: accounts[4]});
		const addressbNhIHF7 = await DMONDETHRewardslAc9x6k.transferOwnership.call(addressfcHvRu, {from: accounts[4]});
		const addressPMrAmDc = await DMONDETHRewardslAc9x6k.transferOwnership.call(addressQDTPNyL, {from: accounts[2]});
		const uint256yAL5seB = await DMONDETHRewardslAc9x6k.earned.call(addressI3tjAJV, {from: accounts[2]});
		const address6tL3kg = await DMONDETHRewardslAc9x6k.transferOwnership.call(addressLnyBLUQ, {from: accounts[0]});

		await expect(DMONDETHRewardslAc9x6k.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsBu0Huze = await DMONDETHRewards.new({from: accounts[3]});
		const uintujOugWp = BigInt("424")
		const uint256ZfNlxY = await DMONDETHRewardsBu0Huze.notifyRewardAmount.call(uintujOugWp, {from: accounts[3]});
		await DMONDETHRewardsBu0Huze.onlyRewardDistribution.call({from: accounts[2]});

		await expect(DMONDETHRewardsBu0Huze.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsBu0Huze = await DMONDETHRewards.new({from: accounts[3]});
		const uintVXrHj56 = BigInt("424")
		const uintZsvB6xv = BigInt("1024")
		const uintR7Jjjq1 = BigInt("855")
		const uint256ZfNlxY = await DMONDETHRewardsBu0Huze.notifyRewardAmount.call(uintVXrHj56, {from: accounts[3]});
		await DMONDETHRewardsBu0Huze.getReward.call({from: accounts[1]});
		const uint256xtPzvHz = await DMONDETHRewardsBu0Huze.setStartTime.call(uintZsvB6xv, {from: accounts[3]});
		const uint256I8yxEx2 = await DMONDETHRewardsBu0Huze.stake.call(uintR7Jjjq1, {from: accounts[3]});
		await DMONDETHRewardsBu0Huze.onlyRewardDistribution.call({from: accounts[2]});
		await DMONDETHRewardsBu0Huze.onlyOwner.call({from: accounts[1]});

		await expect(DMONDETHRewardsBu0Huze.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})